import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";
import { resources } from "../fixtures/blockAPI";
//import 'cypress-iframe';
//import { it } from "@faker-js/faker";


describe('home page tests', () => {

    beforeEach('Open home page', () => {

        cy.blockNonUsedAPIs(resources.homePage);
        cy.visit(urls.homePageUAT);
        cy.wait(5000);

        cy.get(selectors.cookiesPopUp.acceptButton)
            .should('be.visible').click();

        cy.wait(3000);
        cy.removeChatBot();
    })



    it('should return a status code of 200', () => {
        cy.request(testData.homePage.homePageURL)
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    })

    it('home page contains logo image', () => {
        cy.get(selectors.homePage.logoImage)
            .should('be.visible');
    });

    it('switch the country and language from navigation menu', () => {
        cy.get(selectors.homePage.currentCountryInNavigationBar)
            .should('contain', testData.homePage.countryValueInNavigationArea)
            .click();
        cy.get(selectors.homePage.countryValueInCountrySelectionMenu)
            .should('have.length', testData.homePage.quantityOfCountries);
        cy.get(selectors.homePage.countryValueInCountrySelectionMenu).eq(27)
            .invoke('removeAttr', 'target')
            .click();
        cy.url()
            .should('include', testData.homePage.partialUrlForFranceFrench);
        cy.get(selectors.homePage.currentCountryInNavigationBar)
            .should('contain', testData.homePage.currentCountry)
        cy.get(selectors.homePage.currentLanguageInNavigationBar)
            .should('contain', testData.homePage.currentLanguage)
        cy.get(selectors.homePage.languageSelector)
            .click();
        cy.get(selectors.homePage.languageOption)
            .click();
        cy.url()
            .should('include', testData.homePage.partialUrlForFranceEnglish);
        cy.get(selectors.homePage.currentCountryInNavigationBar)
            .should('contain', testData.homePage.currentCountry);
    });

    it('switch the country and language from the footer area', () => {
        cy.get(selectors.homePage.changeLocationButtonInFooter)
            .click();
        cy.get(selectors.homePage.countryValueInCountrySelectionMenu)
            .should('have.length', testData.homePage.quantityOfCountries);
        cy.get(selectors.homePage.countryValueInCountrySelectionMenu).eq(27)
            .invoke('removeAttr', 'target').click();
        cy.url()
            .should('include', testData.homePage.partialUrlForFranceFrench);
        cy.get(selectors.homePage.currentCountryLanguageInFooter).eq(0)
            .should('contain', testData.homePage.currentCountry);
        cy.get(selectors.homePage.currentCountryLanguageInFooter).eq(1)
            .should('contain', testData.homePage.currentLanguage);
    });
})
