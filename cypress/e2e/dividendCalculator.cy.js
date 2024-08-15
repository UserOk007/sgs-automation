import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";
import { resources } from "../fixtures/blockAPI";
//import { it } from "@faker-js/faker";


describe('tests for dividend calculator page', () => {

    beforeEach('Open dividend calculator page', () => {

        cy.visit(urls.dividendCalculatorUAT);
        cy.wait(5000);
        cy.get(selectors.cookiesPopUp.acceptButton).should('be.visible').click();
        cy.wait(3000);
    })

    it.only('select location, go to step 2, check error if user doesn"t agree conditions, go to page 3, verify error messages are shown if user submits form with empty fields', () => {
        cy.get(selectors.scriptDividend.locationDropDown).select(1);
        cy.get('button').contains(testData.dividendCalculator.submitButton).should('not.have.class', selectors.scriptDividend.disabledButtonClass).click();
        cy.get(selectors.scriptDividend.buttonTextClass).contains(testData.dividendCalculator.dontAgreeButton).click({force: true});
        cy.get(selectors.scriptDividend.errorMessage).should('be.visible');
        cy.get(selectors.scriptDividend.buttonTextClass).contains(testData.dividendCalculator.agreeButton).click({force: true});
        cy.get(selectors.scriptDividend.dividendCalculatorArea).should('be.visible');
      //  cy.get(selectors.scriptDividend.fieldClass).eq(2).should('have.class', selectors.scriptDividend.disabledClass);
      //  cy.get(selectors.scriptDividend.fieldClass).eq(3).should('have.class', selectors.scriptDividend.disabledClass);
      //  cy.get(selectors.scriptDividend.fieldClass).eq(4).should('have.class', selectors.scriptDividend.disabledClass);
      //  cy.get(selectors.scriptDividend.fieldClass).eq(5).should('have.class', selectors.scriptDividend.disabledClass);
        cy.get('button').contains('Calculate').click();
        cy.get(selectors.scriptDividend.errorMessageWhenAllFieldsEmpty).should('have.length', 2)


        });
    })
