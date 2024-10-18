import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";
import { resources } from "../fixtures/blockAPI";
//import { it } from "@faker-js/faker";

describe("tests for dividend calculator page", () => {
  beforeEach("Open dividend calculator page", () => {
    cy.visit(urls.dividendCalculatorUAT);
    cy.wait(5000);

    cy.get(selectors.cookiesPopUp.acceptButton).should("be.visible").click();

    cy.wait(3000);
  });

  it('select location, go to step 2, check error if user doesn"t agree conditions, go to page 3, verify error messages are shown if user submits form with empty fields', () => {
    cy.handleDividendScriptCalculator(selectors, testData);

    cy.get(selectors.scriptDividend.dividendCalculatorArea).should(
      "be.visible"
    );

    cy.get(selectors.scriptDividend.discountField).should("be.disabled");

    cy.get(selectors.scriptDividend.fieldClass).eq(3).should("be.disabled");

    cy.get(selectors.scriptDividend.fieldClass).eq(4).should("be.disabled");

    cy.get(selectors.scriptDividend.fieldClass).eq(5).should("be.disabled");

    cy.get(selectors.scriptDividend.buttonTag)
      .contains(testData.dividendCalculator.calculateButton)
      .click();

    cy.get(selectors.scriptDividend.errorMessageWhenAllFieldsEmpty).should(
      "have.length",
      2
    );
  });

  it("Submit form with valid values and verify calculated values are expected ones", () => {
    cy.handleDividendScriptCalculator(selectors, testData);

    cy.get(selectors.scriptDividend.fieldClass)
      .eq(2)
      .should("be.disabled")
      .and("have.value", testData.dividendCalculator.discountPercentage);

    cy.get(selectors.scriptDividend.fieldClass).eq(0).type("100");
    cy.get(selectors.scriptDividend.fieldClass).eq(1).type("20.5");
    cy.contains("button", "Calculate").click();

    cy.get(selectors.scriptDividend.fieldClass)
      .eq(3)
      .should("have.value", testData.dividendCalculator.issuePriceOfNewShares);

    cy.get(selectors.scriptDividend.fieldClass)
      .eq(4)
      .should("have.value", testData.dividendCalculator.numberOfNewShares);

    cy.get(selectors.scriptDividend.fieldClass)
      .eq(5)
      .should("have.value", testData.dividendCalculator.cashDistribution);
  });

  it("Go to step 3, reload the page and verify user is at the step 1", () => {
    cy.handleDividendScriptCalculator(selectors, testData);
    cy.reload();
    cy.get(selectors.scriptDividend.locationDropDownInStep1).should("exist");
    cy.get(selectors.scriptDividend.dividendCalculatorArea).should("not.exist");
  });
});
