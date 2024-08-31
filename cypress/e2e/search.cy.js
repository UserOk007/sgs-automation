import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";
import { resources } from "../fixtures/blockAPI";


describe('validate Search is working', () => {

    beforeEach('Open home page', () => {
        cy.blockNonUsedAPIs(resources.search);
        cy.visit(urls.uat);
        cy.wait(5000);
        //   cy.get(selectors.cookiesPopUp.acceptButton).should('be.visible').click();
        cy.wait(3000);
        cy.get(selectors.search.searchButton).click();
        cy.get(selectors.search.searchPageTag).should('have.class', selectors.search.searchBoxOverlay);
        cy.get(selectors.search.searchField).first().type(testData.searchComponent.searchValidValue);
        cy.get(selectors.search.magnifierGlass).first().click();

    });

    it(`enter a search word, verify there are 10 results at the page`,
        () => {
            //  cy.get(selectors.search.searchFieldSuggestedList).should('be.visible');
            cy.get(selectors.search.searchResultContainer).should('be.visible')
                .and('have.length', 10);

            // verify results text is equal to entered input value and responds to the quantity of results at the page
            cy.get(selectors.search.resultText).should('contain', testData.searchComponent.searchValidValue)
                .and('contain', testData.searchComponent.expectedQuantityOfElements);

            //Default sorting is determined
            cy.get(selectors.search.sortingElement).should('be.visible');
            cy.get(selectors.search.defaultSortingValue).should('contain', testData.searchComponent.defaultSortingValue);

            //pagination is represented at the page
            cy.get(selectors.general.padinationArea).should('have.attr', selectors.general.attrHidden, 'false');
        })

    it(`verify there are no results shown at the page`,
        () => {
            //verify there are no results shown at the page 
            cy.get(selectors.search.searchField).type(testData.searchComponent.searchNotValidValue);
            cy.get(selectors.search.magnifierGlass).last().click();
            cy.get(selectors.search.noResultsText).contains(testData.searchComponent.noResults);
        })

    it(`Check whether searching works for filter "Type", "Topic", value is selected and breadcrumb value is correct`,
        () => {

            //select "Video" option in Type filter, verify breadcrumbs and Type at the result element, unclick Type option

            cy.selectFilterVerifyFilterBreadcrumbs({
                filterField: selectors.search.filterTypeSearchField,
                searchValue: testData.searchComponent.typeSearchFieldValid,
                dropDown: selectors.search.typeSerchDropDown,
                validOption: selectors.search.typeSearchDropDownValidOption
            });

            cy.clearFilter(selectors.search.clearType);

            //select "Health Science" option in Topic filter, verify breadcrumbs and Topic at the result element, unclick Topic option, check no 

            cy.selectFilterVerifyFilterBreadcrumbs({
                filterField: selectors.search.filterTopicSearchField,
                searchValue: testData.searchComponent.topicSearchFieldValid,
                dropDown: selectors.search.topicSerchDropDown,
                validOption: selectors.search.topicSearchDropDownValidOption
            });

            cy.clearFilterAndVerifyBreadCrumbRemoval(selectors.search.breadCrumbCloseButton);

        })
    it(`select 2 filter options and clear all filters`,
        () => {

            cy.get(selectors.search.documentOption).should('be.visible').click();
            cy.get(selectors.search.breadCrumbItem).should('have.length', 1);

            cy.get(selectors.search.connectivityTopicOption).should('be.visible').click();
            cy.get(selectors.search.breadCrumbIsEmpty).should('exist');

            cy.get(selectors.search.breadCrumbItem).should('have.length', 2);

            cy.clearFilterAndVerifyBreadCrumbRemoval(selectors.search.clearAllFiltersButton);

        })
})
