import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";
import { resources } from "../fixtures/blockAPI";


describe('validateSearch', () => {

    beforeEach('Open home page', () => {

        cy.visit(urls.contactUsTest);
        cy.wait(5000);
        cy.get(selectors.cookiesPopUp.acceptButton).should('be.visible').click();
        cy.wait(3000);
    });

    it(`send message for "Request Information" Inquiry Type`,
    () => {
        cy.get(selectors.contact.inquiryType).select(testData.contact.inquiryTypeRequestInformationOption),
        cy.get(selectors.contact.firstName).should('be.visible').type(testData.contact.firstName),
        cy.get(selectors.contact.lastName).should('be.visible').type(testData.contact.lastName),
        cy.get(selectors.contact.email).should('be.visible').type(testData.contact.email),
        cy.get(selectors.contact.companyName).should('be.visible').type(testData.contact.companyName),
        cy.get(selectors.contact.jobTitle).should('be.visible').type(testData.contact.jobTitle),

        cy.get(selectors.contact.locationDropDown).find('option').then(options => {
            const randomIndex = Math.floor(Math.random() * options.length);
            const randomOption = options[randomIndex].value;
            cy.get(selectors.contact.locationDropDown).select(randomOption);
            cy.get(selectors.contact.locationDropDown).should('have.value', randomOption);

            const randomNumbers = faker.datatype.number({ min: 1000000000, max: 9999999999 }).toString();
            cy.get(selectors.contact.phone).should('be.visible').type(randomNumbers);

        cy.get(selectors.contact.questionField).should('be.visible').type(testData.contact.questionMessage),
        cy.get(selectors.contact.subject).select(testData.contact.subjectTrainingCoursesOption),
        cy.get(selectors.contact.sendMessageButton).should('be.visible').click(),
        cy.get(selectors.contact.formIsSubmittedSuccessfully).should('be.visible'),
        cy.get(selectors.contact.formIsSubmittedSuccessfullyThankYou).should('be.visible')

 })
})

 it(`send message for "Request Quotation" Inquiry Type`,
    () => {
        cy.get(selectors.contact.inquiryType).select(testData.contact.subjectRequestQuotationOption),
        cy.get(selectors.contact.firstName).should('be.visible').type(testData.contact.firstName),
        cy.get(selectors.contact.lastName).should('be.visible').type(testData.contact.lastName),
        cy.get(selectors.contact.email).should('be.visible').type(testData.contact.email),
        cy.get(selectors.contact.companyName).should('be.visible').type(testData.contact.companyName),
        cy.get(selectors.contact.jobTitle).should('be.visible').type(testData.contact.jobTitle),
            cy.get(selectors.contact.locationDropDown).find('option').then(options => {
            const randomIndex = Math.floor(Math.random() * options.length);
            const randomOption = options[randomIndex].value;
            cy.get(selectors.contact.locationDropDown).select(randomOption);
            cy.get(selectors.contact.locationDropDown).should('have.value', randomOption);

            const randomNumbers = faker.datatype.number({ min: 1000000000, max: 9999999999 }).toString();
            cy.get(selectors.contact.phone).should('be.visible').type(randomNumbers);
        cy.get(selectors.contact.questionField).should('be.visible').type(testData.contact.questionMessage),
        cy.get(selectors.contact.sendMessageButton).should('be.visible').click(),
        cy.get(selectors.contact.formIsSubmittedSuccessfully).should('be.visible'),
        cy.get(selectors.contact.formIsSubmittedSuccessfullyThankYou).should('be.visible')
 })

 it(`send message for "Recruitment & Jobs" Inquiry Type`,
 () => {
     cy.get(selectors.contact.inquiryType).select(testData.contact.subjectRecruitmentJobsOption),
     cy.get(selectors.contact.firstName).should('be.visible').type(testData.contact.firstName),
     cy.get(selectors.contact.lastName).should('be.visible').type(testData.contact.lastName),
     cy.get(selectors.contact.email).should('be.visible').type(testData.contact.email),
     cy.get(selectors.contact.companyName).should('be.visible').type(testData.contact.companyName),
     cy.get(selectors.contact.jobTitle).should('be.visible').type(testData.contact.jobTitle),
            cy.get(selectors.contact.locationDropDown).find('option').then(options => {
            const randomIndex = Math.floor(Math.random() * options.length);
            const randomOption = options[randomIndex].value;
            cy.get(selectors.contact.locationDropDown).select(randomOption);
            cy.get(selectors.contact.locationDropDown).should('have.value', randomOption);
            const randomNumbers = faker.datatype.number({ min: 1000000000, max: 9999999999 }).toString();
            cy.get(selectors.contact.phone).should('be.visible').type(randomNumbers);
     cy.get(selectors.contact.questionField).should('be.visible').type(testData.contact.questionMessage),
     cy.get(selectors.contact.sendMessageButton).should('be.visible').click(),
     cy.get(selectors.contact.formIsSubmittedSuccessfully).should('be.visible'),
     cy.get(selectors.contact.formIsSubmittedSuccessfullyThankYou).should('be.visible')

 })
})

it(`send message for "Verify SGS Documents" Inquiry Type`,
() => {
    cy.get(selectors.contact.inquiryType).select(testData.contact.subjectVerifySGSDocumentsOption),
    cy.get(selectors.contact.firstName).should('be.visible').type(testData.contact.firstName),
    cy.get(selectors.contact.lastName).should('be.visible').type(testData.contact.lastName),
    cy.get(selectors.contact.email).should('be.visible').type(testData.contact.email),
    cy.get(selectors.contact.companyName).should('be.visible').type(testData.contact.companyName),
    cy.get(selectors.contact.jobTitle).should('be.visible').type(testData.contact.jobTitle),
            cy.get(selectors.contact.locationDropDown).find('option').then(options => {
            const randomIndex = Math.floor(Math.random() * options.length);
            const randomOption = options[randomIndex].value;
            cy.get(selectors.contact.locationDropDown).select(randomOption);
            cy.get(selectors.contact.locationDropDown).should('have.value', randomOption);
            const randomNumbers = faker.datatype.number({ min: 1000000000, max: 9999999999 }).toString();
            cy.get(selectors.contact.phone).should('be.visible').type(randomNumbers);
    cy.get(selectors.contact.questionField).should('be.visible').type(testData.contact.questionMessage),
    cy.get(selectors.contact.sendMessageButton).should('be.visible').click(),
    cy.get(selectors.contact.formIsSubmittedSuccessfully).should('be.visible'),
    cy.get(selectors.contact.formIsSubmittedSuccessfullyThankYou).should('be.visible')
})
})

it(`send message for "Provide Your Feedback" Inquiry Type`,
() => {
    cy.get(selectors.contact.inquiryType).select(testData.contact.subjectProvideFeedbackOption),
    cy.get(selectors.contact.firstName).should('be.visible').type(testData.contact.firstName),
    cy.get(selectors.contact.lastName).should('be.visible').type(testData.contact.lastName),
    cy.get(selectors.contact.email).should('be.visible').type(testData.contact.email),
    cy.get(selectors.contact.companyName).should('be.visible').type(testData.contact.companyName),
    cy.get(selectors.contact.jobTitle).should('be.visible').type(testData.contact.jobTitle),
            cy.get(selectors.contact.locationDropDown).find('option').then(options => {
            const randomIndex = Math.floor(Math.random() * options.length);
            const randomOption = options[randomIndex].value;
            cy.get(selectors.contact.locationDropDown).select(randomOption);
            cy.get(selectors.contact.locationDropDown).should('have.value', randomOption);
            const randomNumbers = faker.datatype.number({ min: 1000000000, max: 9999999999 }).toString();
            cy.get(selectors.contact.phone).should('be.visible').type(randomNumbers);
    cy.get(selectors.contact.questionField).should('be.visible').type(testData.contact.questionMessage),
    cy.get(selectors.contact.typeOfFeedback).select(testData.contact.typeOfFeedbackOption),
    cy.get(selectors.contact.sendMessageButton).should('be.visible').click(),
    cy.get(selectors.contact.formIsSubmittedSuccessfully).should('be.visible'),
    cy.get(selectors.contact.formIsSubmittedSuccessfullyThankYou).should('be.visible')
})
})


it('send message for "Request Information" Inquiry Type', () => {
    cy.submitContactForm(testData.contact.inquiryTypeRequestInformationOption, {
        [selectors.contact.subject]: testData.contact.subjectTrainingCoursesOption
    });
});

it('send message for "Request Quotation" Inquiry Type', () => {
    cy.submitContactForm(testData.contact.subjectRequestQuotationOption);
});

it('send message for "Recruitment & Jobs" Inquiry Type', () => {
    cy.submitContactForm(testData.contact.subjectRecruitmentJobsOption);
});

it('send message for "Verify SGS Documents" Inquiry Type', () => {
    cy.submitContactForm(testData.contact.subjectVerifySGSDocumentsOption);
});

it('send message for "Provide Your Feedback" Inquiry Type', () => {
    cy.submitContactForm(testData.contact.subjectProvideFeedbackOption, {
        [selectors.contact.typeOfFeedback]: testData.contact.typeOfFeedbackOption
    });
});



it.skip(`Contact button is disabled`,
() => {
    cy.get(selectors.contact.contactButton).should('be.disabled'),
    cy.get(selectors.contact.contactButton).should('not.be.clickable').contains('class','a[class*="HeaderComponent_o-header-component__toggle__wipJc"]')
});

it(`Verify Invalid messages are shown`,
() => {
   /* cy.get(selectors.contact.sendMessageButton).should('be.visible').click(),
    cy.get(selectors.contact.FieldInvalidMessage).eq(0).should('be.visible').and('contain', testData.contact.inquiryTypeInvalidMessage),
    cy.get(selectors.contact.FieldInvalidMessage).eq(1).should('be.visible').and('contain', testData.contact.firstNameInvalidMessage),
    cy.get(selectors.contact.FieldInvalidMessage).eq(2).should('be.visible').and('contain', testData.contact.lastNameInvalidMessage),
    cy.get(selectors.contact.FieldInvalidMessage).eq(3).should('be.visible').and('contain', testData.contact.emailInvalidMessage),
    cy.get(selectors.contact.FieldInvalidMessage).eq(4).should('be.visible').and('contain', testData.contact.questionFieldInvalidMessage)*/

    it.only('should display validation error messages for empty required fields', () => {
        cy.verifyFormErrorMessages([
            testData.contact.inquiryTypeInvalidMessage,
            testData.contact.firstNameInvalidMessage,
            testData.contact.lastNameInvalidMessage,
            testData.contact.emailInvalidMessage,
            testData.contact.questionFieldInvalidMessage
        ]);
    });
});
});
});
