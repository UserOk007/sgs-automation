import { selectors } from "../selectors/selectors";
import { urls } from "../fixtures/urls";
import { testData } from "../fixtures/testData";
import { resources } from "../fixtures/blockAPI";
//import { it } from "@faker-js/faker";

describe("find job tests (SmartRecruiters)", () => {
  beforeEach("Open home page", () => {
    cy.visit(urls.findJobUAT);
    cy.wait(5000);
    cy.get(selectors.cookiesPopUp.acceptButton).should("be.visible").click();
    cy.wait(3000);
  });

  it("should return a status code of 200", () => {
    cy.request(testData.findJob.findJobRequestURL).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it(`verify "City" field is disabled for Global version`, () => {
    cy.get(selectors.findJob.cityFieldId)
      .parent(selectors.findJob.jobFieldParentSelector)
      .should("have.class", selectors.findJob.disabledClass);
  });

  it("No results shown, default magnifier glass logo is shown", () => {
    cy.get(selectors.findJob.noResultLogo).should("be.visible");
  });
  it("click on Remote check-box, verify whether only remote jobs are shown and Job Titles are links", () => {
    cy.get(selectors.findJob.remoteCheckBox)
      .find(selectors.findJob.checkBox)
      .check();

    cy.get(selectors.findJob.allResultsArea).should("be.visible");

    cy.get(selectors.findJob.typeOfWorkResult).each((item, index) => {
      cy.wrap(item).should("contain", testData.findJob.remoteValue);

      cy.get(selectors.findJob.jobTitle)
        .should("have.attr", "href")
        .and("match", /jobs.smartrecruiters.com/);
    });
  });

  it("select location, verify results show selected location and check that City field becomes enabled", () => {
    cy.selectOptionAndVerifyResults(
      selectors.findJob.locationDropDownId,
      selectors.findJob.locationDropDownResultsArea,
      selectors.findJob.countryCityResult
    );
    cy.get(selectors.findJob.cityDropDown)
      .parent("div")
      .should("not.have.class", selectors.findJob.disabledClass);
  });

  it("select Department option and check that only specific department is shown in results block", () => {
    cy.selectOptionAndVerifyResults(
      selectors.findJob.departmentDropDownId,
      selectors.findJob.departmentDropDownResultsArea,
      selectors.findJob.departmentAccordionName
    );
  });

  it("select Business Line option and verify results show selected option", () => {
    cy.selectOptionAndVerifyResults(
      selectors.findJob.businessLineDropDownId,
      selectors.findJob.businessLineDropDownResultsArea,
      selectors.findJob.businessLineResult
    );
  });

  it("select Contract Type option and verify results show selected option", () => {
    cy.selectOptionAndVerifyResults(
      selectors.findJob.contractTypeDropDownId,
      selectors.findJob.contractTypeDropDownResultsArea,
      selectors.findJob.contractTypeResult
    );
  });
  it('Search results that contain "product" and Clear filters', () => {
    cy.get(selectors.findJob.searchField).type(testData.findJob.keyWord);
    cy.wait(3000);

    cy.get(selectors.findJob.clearFilterButton).should("be.visible");

    cy.get(selectors.findJob.allResultsArea).should("be.visible");

    cy.get(selectors.findJob.quantityResults)
      .invoke("text")
      .then((filteredResultsQuantity) => {
        const firstResultValue = parseFloat(
          filteredResultsQuantity.match(/\d+(\.\d+)?/)[0]
        );
        cy.get(selectors.findJob.clearFilterButton).click();
        cy.wait(3000);
        cy.get(selectors.findJob.quantityResults)
          .invoke("text")
          .then((clearedResultsQuantity) => {
            const secondResultValue = parseFloat(
              clearedResultsQuantity.match(/\d+(\.\d+)?/)[0]
            );
            expect(firstResultValue).to.be.lessThan(secondResultValue);
          }, cy.get(selectors.findJob.clearFilterButton).should("not.exist"));
      });
  });
});
