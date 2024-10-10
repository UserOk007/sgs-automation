import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";
import { resources } from "../fixtures/blockAPI";
import { faker } from "@faker-js/faker";

describe("validate tests in Certified Client Directory page", () => {
  beforeEach("Open home page", () => {
    cy.visit(urls.certifiedClientDirectoryUAT);
    cy.wait(5000);
    cy.get(selectors.cookiesPopUp.acceptButton).should("be.visible").click();
    cy.wait(3000);
  });
  it('Search certificates by "Company name" + "Location" and check returned results are shown', () => {
    cy.get(selectors.certifiedClientDirectory.searchByCompanyField).type(
      testData.certifiedClientDirectory.searchByCompany
    );
    cy.get(selectors.certifiedClientDirectory.locationField).select(
      testData.certifiedClientDirectory.specificCountry
    );
    cy.get(selectors.certifiedClientDirectory.agreeCheckBox).click();
    cy.get(selectors.certifiedClientDirectory.buttonSearch)
      .should("be.enabled")
      .click();
    cy.get(selectors.certifiedClientDirectory.resultTable).should("be.visible");
  });

  it('Search certificates by "Company name" + "Location" with invalid values and check no results are returned', () => {
    const randomCompanyName = Math.random().toString(36).substring(2, 12);
    cy.get(selectors.certifiedClientDirectory.searchByCompanyField).type(
      randomCompanyName
    );
    cy.selectRandomLocation(
      selectors.certifiedClientDirectory.locationDropDownList
    );
    cy.get(selectors.certifiedClientDirectory.agreeCheckBox).click();
    cy.get(selectors.certifiedClientDirectory.buttonSearch)
      .should("be.enabled")
      .click();
    cy.get(selectors.certifiedClientDirectory.noResults).should("be.visible");
  });

  it('Search certificates by "Certification ID" and check the certification result is returned', () => {
    cy.get(selectors.certifiedClientDirectory.certificationIdField).type(
      testData.certifiedClientDirectory.certificationId
    );
    cy.get(selectors.certifiedClientDirectory.agreeCheckBox).click();
    cy.get(selectors.certifiedClientDirectory.buttonSearch)
      .should("be.enabled")
      .click();
    cy.get(selectors.certifiedClientDirectory.resultTable).should("be.visible");
  });

  it('Search certificates by "Certification ID" with invalid value and check no results are returned', () => {
    const randomCertificationID = Math.random().toString(36).substring(2, 7);
    cy.get(selectors.certifiedClientDirectory.certificationIdField).type(
      randomCertificationID
    );
    cy.get(selectors.certifiedClientDirectory.agreeCheckBox).click();
    cy.get(selectors.certifiedClientDirectory.buttonSearch)
      .should("be.enabled")
      .click();
    cy.get(selectors.certifiedClientDirectory.noResults).should("be.visible");
  });
});
