// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { selectors } from "../selectors/selectors";
import { testData } from "../fixtures/testData";
import { faker } from '@faker-js/faker';
import 'cypress-iframe';

Cypress.Commands.add('clearFilter', (selectorType) => {
    cy.get(selectorType)
        .should('be.visible')
        .click();
    cy.get(selectors.search.breadCrumbIsEmpty)
        .should('not.exist');
})

Cypress.Commands.add("blockNonUsedAPIs", (listOfAPIS) => {
    cy.wrap(listOfAPIS).each((call) => {
        const parsedCallInfo = call.split(' ');
        cy.intercept(parsedCallInfo[0], parsedCallInfo[1], []);
    });
}
);

/*Cypress.Commands.add("blockNonUsedAPIs", (listOfAPIS) => {
    cy.wrap(listOfAPIS).each((call) => {
        const parsedCallInfo = call.split(' ');
        cy.intercept(parsedCallInfo[0], parsedCallInfo[1], { body: [] }).as('silentBlock');
    });
});*/

Cypress.Commands.add("removeChatBot", () => {
    const chatBotSelectors = ['iframe.ld-chat-bot'];

    // Iterate through each selector and remove matching elements from the DOM
    chatBotSelectors.forEach((selector) => {
        cy.get('body').then(($body) => {
            if ($body.find(selector).length > 0) {
                cy.get(selector).then(($el) => {
                    $el.remove();
                });
            }
        });
    });
});

Cypress.Commands.add('submitContactForm', (inquiryType, subjectOption, typeOfFeedbackOption) => {
    cy.get(selectors.contact.inquiryType)
        .select(inquiryType);

    cy.get(selectors.contact.firstName)
        .should('be.visible')
        .type(testData.contact.firstName);

    cy.get(selectors.contact.lastName)
        .should('be.visible')
        .type(testData.contact.lastName);

    cy.get(selectors.contact.email)
        .should('be.visible')
        .type(testData.contact.email);

    cy.get(selectors.contact.companyName)
        .should('be.visible')
        .type(testData.contact.companyName);

    cy.get(selectors.contact.jobTitle)
        .should('be.visible')
        .type(testData.contact.jobTitle);

    cy.get(selectors.contact.locationDropDown).find('option').then(options => {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomOption = options[randomIndex].value;

        cy.get(selectors.contact.locationDropDown)
            .select(randomOption);

        cy.get(selectors.contact.locationDropDown)
            .should('have.value', randomOption);

        const randomNumbers = faker.datatype.number({ min: 1000000000, max: 9999999999 })
            .toString();

        cy.get(selectors.contact.phone)
            .should('be.visible')
            .type(randomNumbers);

        cy.get(selectors.contact.questionField)
            .should('be.visible')
            .type(testData.contact.questionMessage);

        if (subjectOption) {
            cy.get(selectors.contact.subject)
                .select(subjectOption);
        }

        if (typeOfFeedbackOption) {
            cy.get(selectors.contact.typeOfFeedback)
                .select(typeOfFeedbackOption);
        }

        cy.get(selectors.contact.sendMessageButton)
            .should('be.visible').click();

        cy.get(selectors.contact.formIsSubmittedSuccessfully)
            .should('be.visible');

        cy.get(selectors.contact.formIsSubmittedSuccessfullyThankYou)
            .should('be.visible');
    });
});

Cypress.Commands.add('selectOptionAndVerifyResults', (dropdownId, resultsArea, resultElements, expectedClass) => {
    cy.get(dropdownId)
        .parent(selectors.findJob.containerDropDown)
        .click();
    cy.get(resultsArea)
        .find(selectors.findJob.selectedListOption)
        .then(options => {
            const randomIndex = Math.floor(Math.random() * options.length);
            const selectedOption = options[randomIndex];
            const optionText = selectedOption.innerText;
            cy.log(`Selected option text: ${optionText}`);
            cy.wrap(selectedOption).click();
            cy.wait(3000)
            cy.get(resultElements)
                .each((element) => {
                    cy.wrap(element).invoke('text').then(text => {
                        expect(text).to.contain(optionText);
                    });
                });
        });
});

Cypress.Commands.add('handleDividendScriptCalculator', (selectors, testData) => {
    // Select the location from the dropdown
    cy.get(selectors.scriptDividend.locationDropDown).select(1);
  
    // Click the Submit button if it's not disabled
    cy.get(selectors.scriptDividend.buttonTag)
      .contains(testData.dividendCalculator.submitButton)
      .should('not.have.class', selectors.scriptDividend.disabledButtonClass)
      .click();
  
    // Click "Don't Agree" after enabling pointer events
    cy.get(selectors.scriptDividend.buttonTextClass)
      .contains(testData.dividendCalculator.dontAgreeButton)
      .invoke('css', 'pointer-events', 'auto')
      .click();
  
    // Verify error message is visible
    cy.get(selectors.scriptDividend.errorMessage)
      .should('be.visible');
  
    // Click the "Agree" button after enabling pointer events
    cy.get(selectors.scriptDividend.buttonTextClass)
      .contains(testData.dividendCalculator.agreeButton)
      .invoke('css', 'pointer-events', 'auto')
      .click();
  });

Cypress.Commands.add('selectFilterVerifyFilterBreadcrumbs', ({ filterField, searchValue, dropDown, validOption }) => {
    cy.get(filterField).type(searchValue)
        .should('have.value', searchValue)
        .click();

    cy.get(dropDown)
        .should('have.length', 1)
        .click();

    cy.get(validOption).should('exist');

    cy.get(selectors.search.breadCrumbValue)
        .contains(searchValue);

    cy.get(selectors.search.optionDisplayed)
        .contains(searchValue);
});


Cypress.Commands.add("clearFilterAndVerifyBreadCrumbRemoval", (buttonSelector) => {
    cy.get(buttonSelector)
        .should('be.visible')
        .click();

    cy.get(selectors.search.breadCrumbIsEmpty)
        .should('not.exist');
});

Cypress.Commands.add('verifyFormErrorMessages', (errorMessages) => {
    cy.get(selectors.contact.sendMessageButton).should('be.visible').click();

    errorMessages.forEach((message, index) => {
        cy.get(selectors.contact.fieldInvalidMessage).eq(index)
            .should('be.visible')
            .and('contain', message);
    });
});

    Cypress.Commands.add('selectRandomOption', (dropdownSelector) => {
        cy.get(dropdownSelector).find('option').then(options => {
            const randomIndex = Math.floor(Math.random() * options.length);
            const randomOption = options[randomIndex].value;

            cy.get(dropdownSelector).select(randomOption);
            cy.get(dropdownSelector).should('have.value', randomOption);
        });
    });

    Cypress.Commands.add('MoveFromStep1ToStep2', (selectors) => {
        // Click the first topic option
        cy.get(selectors.subscriptionCenter.topicOption).eq(0).click();
      
        // Click the "Next" button after enabling pointer events
        cy.get(selectors.subscriptionCenter.buttonNext)
          .contains('Next')
          .invoke('css', 'pointer-events', 'auto')
          .click();
      });

