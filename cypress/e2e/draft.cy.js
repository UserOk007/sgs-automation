import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";


describe('draft validateSearch', () => {

    beforeEach('Open home page', () => {

        cy.visit(urls.uat);
        cy.wait(5000);
        cy.get(selectors.cookiesPopUp.acceptButton).should('be.visible').click();
        cy.wait(3000);
        cy.get(selectors.search.searchButton).click();
        cy.get(selectors.search.searchPageTag).should('have.class', selectors.search.searchBoxOverlay);
        cy.get(selectors.search.searchField).first().type(testData.searchComponent.searchValidValue);
        cy.get(selectors.search.magnifierGlass).first().click();

    });

    it.skip(`enter a search word, verify there are 10 results at the page`,
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
            cy.get('.CoveoPager').should('have.attr', 'aria-hidden', 'false')
        })

    it.skip(`verify there are no results shown at the page`,
        () => {
            //verify there are no results shown at the page (ОКРЕМО ВИНЕСТИ!!! в окремий тест)
            cy.get(selectors.search.searchField).type(testData.searchComponent.searchNotValidValue);
            cy.get(selectors.search.magnifierGlass).last().click();
            cy.get(selectors.search.noResultsText).contains('No results for ');
        })

    it.skip(`Check whether searching works for filter "Type", "Topic", value is selected and breadcrumb value is correct`,
        () => {

            //select "Video" option in Type filter, verify breadcrumbs and Type at the result element, unclick Type option
            cy.get(selectors.search.filterTypeSearchField).type(testData.searchComponent.typeSearchFieldValid).should('have.value', testData.searchComponent.typeSearchFieldValid).click();
            cy.verifyFilterAndBreadcrumbs(
                selectors.search.typeSerchDropDown,
                selectors.search.typeSearchDropDownValidOption,
                selectors.search.breadCrumbValue,
                testData.searchComponent.typeSearchFieldValid
            );
            //cy.get(selectors.search.typeSerchDropDown).should('have.length', 1).click();
            // cy.get(selectors.search.typeSearchDropDownValidOption).should('have.class', 'coveo-selected');
            // cy.get(selectors.search.breadCrumbValue).contains(testData.searchComponent.typeSearchFieldValid);
            //cy.get(selectors.search.optionDisplayed).contains(testData.searchComponent.typeSearchFieldValid);


            cy.clearFilter(selectors.search.clearType);

            //cy.get(selectors.search.clearType).should('be.visible').click();
            //cy.get(selectors.search.breadCrumbArea).should('have.attr', 'style', 'display: none;')

            //select "Health Science" option in Topic filter, verify breadcrumbs and Topic at the result element, unclick Topic option, check no 
            cy.get(selectors.search.filterTopicSearchField).type(testData.searchComponent.topicSearchFieldValid)
            .should('have.value', testData.searchComponent.topicSearchFieldValid).click();
            cy.verifyFilterAndBreadcrumbs(
                selectors.search.topicSerchDropDown,
                selectors.search.topicSearchDropDownValidOption,
                selectors.search.breadCrumbValue,
                testData.searchComponent.topicSearchFieldValid
            );
            //  cy.get(selectors.search.topicSerchDropDown).should('have.length', 1).click();
            // cy.get(selectors.search.topicSearchDropDownValidOption).should('have.class', 'coveo-selected');
            // cy.get(selectors.search.breadCrumbValue).contains(testData.searchComponent.topicSearchFieldValid);
            // cy.get(selectors.search.optionDisplayed).contains(testData.searchComponent.topicSearchFieldValid);
            // cy.get(selectors.search.clearTopic).should('be.visible').click();


            //Want to change the code above to the next one:
            

            cy.clickButtonAndVerifyBreadCrumbAreaHasValues(
                selectors.search.breadCrumbXButton,
                selectors.search.breadCrumbArea,
                false
            );
            //cy.get(selectors.search.breadCrumbXButton).should('be.visible').click();
            //cy.get(selectors.search.breadCrumbIsEmpty).should('not.exist');

        })
    it.skip(`select 2 filter options and clear all filters`,
        () => {
            cy.get(selectors.search.documentOption).should('be.visible').click();
            cy.get(selectors.search.breadCrumbItem).should('have.length', 1);

            cy.clickButtonAndVerifyBreadCrumbAreaHasValues(
                selectors.search.connectivityTopicOption,
                selectors.search.breadCrumbArea,
                true
            );
            // cy.get(selectors.search.connectivityTopicOption).should('be.visible').click();
            //cy.get(selectors.search.breadCrumbIsEmpty).should('exist');
            cy.get(selectors.search.breadCrumbItem).should('have.length', 2);

            cy.clickButtonAndVerifyBreadCrumbAreaHasValues(
                selectors.search.clearAllFiltersButton,
                selectors.search.breadCrumbArea,
                false
            );
            //cy.get(selectors.search.clearAllFiltersButton).should('be.visible').click();
            // cy.get(selectors.search.breadCrumbArea).should('have.attr', 'style', selectors.general.displayNone);           
        })
})

// cy.get('.coveo-accessible-button.coveo-clickable').first().click();
// cy.get('.coveo-checkbox-button[aria-pressed="true"]').should('be.visible', 'true'); or should exist