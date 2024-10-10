import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";
import { resources } from "../fixtures/blockAPI";
import { faker } from "@faker-js/faker";

describe("validate tests in Contact Us page form", () => {
  beforeEach("Open home page", () => {
    cy.visit(urls.contactUsTest);
    cy.wait(5000);
    cy.get(selectors.cookiesPopUp.acceptButton).should("be.visible").click();
    cy.wait(3000);
  });

  it('Submit successfully form for "Request Information" Inquiry Type', () => {
    cy.submitContactForm(
      testData.contact.inquiryTypeRequestInformationOption,
      testData.contact.subjectTrainingCoursesOption
    );
  });

  it('Submit successfully form for "Request Quotation" Inquiry Type', () => {
    cy.submitContactForm(testData.contact.subjectRequestQuotationOption);
  });

  it('Submit successfully form form "Recruitment & Jobs" Inquiry Type', () => {
    cy.submitContactForm(testData.contact.subjectRecruitmentJobsOption);
  });

  it('Submit successfully form for "Verify SGS Documents" Inquiry Type', () => {
    cy.submitContactForm(testData.contact.subjectVerifySGSDocumentsOption);
  });

  it('Submit successfully form for "Provide Your Feedback" Inquiry Type', () => {
    cy.submitContactForm(
      testData.contact.subjectProvideFeedbackOption,
      null,
      testData.contact.typeOfFeedbackOption
    );
  });

  it(`Contact button is disabled`, () => {
    cy.get(selectors.contact.contactButton).should(
      "have.class",
      selectors.contact.disabledContactButtonClass
    );
  });

  it(`Verify Invalid messages are shown`, () => {
    it("should display validation error messages for empty required fields", () => {
      cy.verifyFormErrorMessages([
        testData.contact.inquiryTypeInvalidMessage,
        testData.contact.firstNameInvalidMessage,
        testData.contact.lastNameInvalidMessage,
        testData.contact.emailInvalidMessage,
        testData.contact.questionFieldInvalidMessage,
      ]);
    });
  });

  it("Privacy Statement text is contains a link", () => {
    cy.get(selectors.contact.privacyStatementLink).should(
      "have.attr",
      "href",
      "/en/online-privacy-statement"
    );
  });
});
