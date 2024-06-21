import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";
import { resources } from "../fixtures/blockAPI";
//import { it } from "@faker-js/faker";


describe('find search', () => {

    beforeEach('Open home page', () => {

        cy.visit(urls.findJobUAT);
        cy.wait(5000);
        cy.get(selectors.cookiesPopUp.acceptButton).should('be.visible').click();
        cy.wait(3000);
    });

    it('should return a status code of 200', () => {
        cy.request(testData.findJob.findJobRequestURL).then((response) => {
            expect(response.status).to.eq(200);
        });
    })

    it(`verify "City" field is disabled for Global version`,
        () => {
            cy.get(selectors.findJob.cityFieldId).parent(selectors.findJob.jobFieldParentSelector).should('have.class', disabledClass);
        })

    it('No results shown, default magnifier glass logo is shown',
        () => {
            cy.get(selectors.findJob.noResultLogo).should('be.visible')
        })
    it('click on Remote check-box, verify whether only remote jobs are shown',
        () => {
            cy.get(selectors.findJob.remoteCheckBox).find(selectors.findJob.checkBox).check()
            cy.get(selectors.findJob.allResultsArea).should('be.visible')
            cy.get(selectors.findJob.typeOfWorkResult).each((item, index) => {
                cy.wrap(item).should('contain', testData.findJob.remoteValue)
            })
        })
    it('select location and verify results shown selected location', () => {
        cy.get(selectors.findJob.locationDropDownId).parent(selectors.findJob.locationDropDown).click();
        cy.get(selectors.findJob.locationDropDownResultsArea).find(selectors.findJob.locationDropDownListOption).then(options => {
            const randomIndex = Math.floor(Math.random() * options.length);
            const selectedOption = options[randomIndex];
            const optionText = selectedOption.innerText;
            cy.log(`Selected option text: ${optionText}`);
            cy.wrap(selectedOption).click();
            cy.wait(3000)
            cy.get(selectors.findJob.countryCityResult)
                .each((element) => {
                    // Extract the text from each element
                    cy.wrap(element).invoke('text').then(cityCountryText => {
                        // Compare superText with optionText
                        expect(cityCountryText).to.contain(optionText);
                    })

                });

        });

    })
})