import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";
import { resources } from "../fixtures/blockAPI";

describe('tests for Office Directory page', () => {

    beforeEach('Open home page', () => {

        cy.visit(urls.officeDirectoryUAT);
        cy.wait(5000);
        cy.get(selectors.cookiesPopUp.acceptButton)
            .should('be.visible').click();
        cy.wait(3000);
    });

    it('verify Search field, results area, quantity of results, sorting field, pagination are visible at the page', () => {
        cy.get(selectors.officeDirectory.searchField)
            .should('be.visible');
        cy.get(selectors.officeDirectory.totalResultsArea)
            .should('be.visible');
        cy.get(selectors.officeDirectory.allResultsArea)
            .should('be.visible');
        cy.get(selectors.officeDirectory.sortingField)
            .should('be.visible');
        cy.get(selectors.officeDirectory.paginationArea)
            .should('be.visible');
    });

    it('select Location and check that each result contains this location', () => {
        cy.selectOptionAndVerifyResults(
            selectors.officeDirectory.locationDropDownID,
            selectors.officeDirectory.locationDropDownResultsArea,
            selectors.officeDirectory.locationResult2
        );
    })

    it('type search word "Ukraine" and verify each title contains this key word', () => {
        cy.get(selectors.officeDirectory.searchField)
            .type(testData.officeDirectory.keyWord);
        cy.wait(2000);
        cy.get(selectors.officeDirectory.resultTitle).eq(0)
            .invoke('text').then((firstTitleFiltered) => {
                const firstTitleFilteredResult = firstTitleFiltered;
                cy.get(selectors.officeDirectory.clearFilterButton)
                    .click();
                cy.wait(1000);
                cy.get(selectors.officeDirectory.resultTitle).eq(0)
                    .invoke('text').then((firstTitleNotFiltered) => {
                        const firstTitleNotFilteredResult = firstTitleNotFiltered;
                        cy.get(selectors.officeDirectory.resultsAll)
                            .should('not.have.class', selectors.officeDirectory.allResultsAreNotReadyClass);
                        expect(firstTitleFilteredResult).to.not.equal(firstTitleNotFilteredResult);
                    })
            })
    })
})
