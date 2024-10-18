import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";
import { resources } from "../fixtures/blockAPI";
import { faker } from "@faker-js/faker";

describe("validate tests in Contact Us page form", () => {
  beforeEach("Open home page", () => {
    cy.visit(urls.subscriptionCenterUAT);
    cy.wait(5000);
    cy.get(selectors.cookiesPopUp.acceptButton).should("be.visible").click();
    cy.wait(3000);
  });

  it("Select option in step 1 and go to step 2", () => {
    cy.MoveFromStep1ToStep2(selectors);

    cy.get(selectors.subscriptionCenter.Step2Title).contains(
      testData.subscriptionCenter.step2Title
    );
  });

  it("Select option in step 1, step 2, go to step 3 and submit the form", () => {
    cy.MoveFromStep1ToStep2(selectors);

    cy.get(selectors.subscriptionCenter.itemOption).eq(0).click();

    cy.get(selectors.subscriptionCenter.buttonNext)
      .eq(1)
      //.contains('Next')
      .invoke("css", "pointer-events", "auto")
      .click();

    cy.get(selectors.subscriptionCenter.firstNameField).type(
      testData.subscriptionCenter.firstNameValue
    );

    cy.get(selectors.subscriptionCenter.lastNameField).type(
      testData.subscriptionCenter.lastNameValue
    );

    cy.get(selectors.subscriptionCenter.emailField).type(
      testData.subscriptionCenter.emailValue
    );

    cy.get(selectors.subscriptionCenter.agreementCheckBox).click();

    cy.get(selectors.subscriptionCenter.submitButton).click("center");

    cy.get(selectors.subscriptionCenter.finalPageTitle).should(
      "contain",
      testData.subscriptionCenter.finalPageText
    );
  });
});
