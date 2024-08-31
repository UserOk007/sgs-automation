export const selectors =
{
    cookiesPopUp: {
        acceptButton: '#onetrust-accept-btn-handler',
        rejectButton: '#onetrust-reject-all-handler',
        cookieSettingsButton: '#onetrust-pc-btn-handler',
        cookiesPopUpArea: '#onetrust-banner-sdk .ot-sdk-row'
    },

    chatBotPopUp: {
        chatBotPopUpArea: 'iframe.ld-chat-bot.ld-chat-window',
        closeButton: 'iframe #root .ld-win-btn[title=Close]',
        bigCloseButton: 'iframe.ld-chat-bot.ld-chat-launcher'
    },

    search: {
        searchPageTag: 'section',
        searchBoxOverlay: 'SearchBoxOverlayComponent_o-search-box-overlay-component__duZl2',
        searchButton: 'button[class*="search-button"]',
        searchField: 'div.magic-box-input',
        searchFieldSuggestedList: 'div.magic-box-suggestions.magic-box-hasSuggestion',
        searchResultContainer: '.coveo-list-layout-container div.CoveoResult',
        xButton: '.magic-box-icon',
        noResultsText: 'div.coveo-query-summary-no-results-string',
        resultText: '.CoveoQuerySummary',
        breadCrumbValue: 'button.coveo-dynamic-facet-breadcrumb-value',
        magnifierGlass: '.CoveoSearchButton:visible()',
        sortingElement: 'div.CoveoSortDropdown._initialized',
        defaultSortingValue: '.CoveoSort.coveo-selected',

        filterTypeSearchField: 'input#coveo-combobox-13-input',
        typeSerchDropDown: '#coveo-combobox-13-listbox li',
        typeSearchDropDownValidOption: '.coveo-dynamic-facet-value[data-value="Video"]',
        optionDisplayed: '.coveo-selected.coveo-clickable',
        clearType: '.coveo-dynamic-facet-header-btn[aria-label="Clear Type"]',

        filterTopicSearchField: 'input#coveo-combobox-14-input',
        topicSerchDropDown: '#coveo-combobox-14-listbox li',
        topicSearchDropDownValidOption: '.coveo-dynamic-facet-value[data-value="Health Science"]',
        clearTopic: '.coveo-dynamic-facet-header-btn[aria-label="Clear Topic"]',
        breadCrumbCloseButton: '.coveo-dynamic-facet-breadcrumb-value-clear',
        breadCrumbArea: '.CoveoBreadcrumb',
        documentOption: '.coveo-dynamic-facet-value[data-value="Document"]',
        breadCrumbItem: '.coveo-breadcrumb-items ul',
        connectivityTopicOption: '.CoveoDynamicFacet[data-id="@sgstopic"] .coveo-dynamic-facet-value[data-value="Connectivity"]',
        clearAllFiltersButton: '.coveo-breadcrumb-clear-all.coveo-accessible-button',

        optionSelectedClass: 'coveo-selected',
        breadCrumbIsEmpty: '.coveo-dynamic-facet-breadcrumb.coveo-breadcrumb-item'
    },
    general: {
        displayNone: 'display: none;',
        padinationArea: '.CoveoPager',
        attrHidden: 'aria-hidden'
    },

    contact: {
        inquiryType: 'select#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_939a3ae7-e610-4d2d-8e94-e58b58d58353__Value',
        
       // inquiryTypeRequestInformationOption: '#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_939a3ae7-e610-4d2d-8e94-e58b58d58353__Value option[value="Request Information"]',
        subject: 'select#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_430c7641-301b-41b0-9c78-433be72dfa45__Value',
        typeOfFeedback: 'select#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_b7e0bf42-2c3d-43e1-b0be-955314467d90__Value',
       // subjectTrainingCourcesOption: '#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_430c7641-301b-41b0-9c78-433be72dfa45__Value option[value="Training Courses"]',
       locationDropDown: 'select#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_48820920-a124-41be-b7f3-94343795ee65__Value', 
       firstName: 'input#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_28fb90f9-75de-43ac-99e2-e64db1933595__Value',
        lastName: 'input#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_89714a4b-8bf7-4349-bb16-822b8891522b__Value',
        email: 'input#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_ac3dc88f-1b0d-4056-a5fc-53e07068a55e__Value',
        companyName: '#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_5a73af63-7d05-45b3-9e4d-0460f9c40264__Value',
        jobTitle: 'input#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_6c06bf07-454c-4521-b225-305b1a1c6ba8__Value',
        phone: 'input#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_0f58bcce-5839-4b47-a5e4-29be5e109f76__Value',
        questionField: '#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_Fields_8831cc05-79e7-473e-8565-a7dae2c89d22__Value',
        agreeCheckBox: 'CheckboxWithRichTextField___input__R5BLN',
        sendMessageButton: 'button#fxb_0e656d89-23a3-4b5c-aecf-d0bf5817bce9_fa966c1f-2d5b-4597-a06b-15f36e86e22e',
        formIsSubmittedSuccessfully: '.form-step-2',
        formIsSubmittedSuccessfullyThankYou: '#id-c87732c1-5e6f-43fe-8136-7ae10bb47838',
        contactButton: 'a[href*="contact-form"]',
        disabledContactButtonClass: '--disabled',
        fieldInvalidMessage: 'div[class="Form_o-form-component__invalid__91zNa relative"]',
        privacyStatementLink: '.Form_o-form-component__rich-text__dGlmf a'
    },

    findJob: {
    cityFieldId: '[id="react-select-3-live-region"]',
    jobFieldParentSelector: 'div.select-filter',
    disabledClass: 'select-filter--is-disabled',
    noResultLogo: '[class="StartSearch_a-start-search__logo-wrapper__W7UUR py-7"]',
    remoteCheckBox: '[class="flex items-center cursor-pointer"]',
    checkBox: '[type="checkbox"]',
    allResultsArea: '.AccordionComponent_o-accordion-component__y_QAz',
    typeOfWorkResult: 'dl.ResultItemSmartRecruiters_a-result-item-smart-recruiters__metadata__g2W72',
    countryCityResult: 'dl.ResultItemSmartRecruiters_a-result-item-smart-recruiters__location__CFCLx div dd',
    locationDropDownId: '#react-select-2-live-region',
    containerDropDown: '[class="select-filter css-b62m3t-container"]',
    locationDropDownResultsArea: '#react-select-2-listbox',
    selectedListOption: 'div.select-filter__option',
    departmentDropDownId: '#react-select-5-live-region',
    departmentDropDownResultsArea: '#react-select-5-listbox',
    departmentAccordionName: '.AccordionItemComponent_accordion-item__headline__Fif8D',
    businessLineDropDownId: '#react-select-6-live-region',
    businessLineDropDownResultsArea: '#react-select-6-listbox',
    businessLineResult: 'p.mb-3',
    contractTypeDropDownId: '#react-select-4-live-region',
    contractTypeDropDownResultsArea: '#react-select-4-listbox',
    contractTypeResult: 'dl.ResultItemSmartRecruiters_a-result-item-smart-recruiters__metadata__g2W72 div dd',
    cityDropDown: 'div div#react-select-3-placeholder',
    jobTitle: 'div.ResultItemSmartRecruiters_a-result-item-smart-recruiters__Wd2pH a',
    searchField: 'input#keywordSearch',
    quantityResults: '.Filters_m-filters__results___kkUd strong',
    clearFilterButton: 'button.Filters_m-filters__clear-button__qQ1cd',
    },

officeDirectory: {
    searchField: '.Filters_m-filters__search__Xdj7E',
    totalResultsArea: '.Filters_m-filters__results___kkUd',
    sortingField: '.select-filter__control',
    paginationArea: '.ListNavigation_m-navigation__EFcj1',
    allResultsArea: '.Results_m-results__0bMpS',
    searchField: '#keywordSearch',
    locationDropDownID: '[id*="live-region"]',
    locationDropDownResultsArea: '#react-select-2-listbox',
    titleResult: '.m-result-item__title',
    locationResult: '.m-result-item__options-icon-item span span',
    locationResult2: '.m-result-item__address.richtext',
    resultTitle: '.m-result-item__title',
    clearFilterButton: 'button.Filters_m-filters__clear-button__qQ1cd',
    resultsAll: '.FilteredListComponent_o-filtered-list-component__N_zhf div',
    allResultsAreNotReadyClass: '.Results__is-not-ready-ui__vU_re'
},

homePage: {
    logoImage: 'svg[xmlns="http://www.w3.org/2000/svg"]',
    heroBannerHomePageItemMainImage: 'a.HeroBannerHomepageItemComponent_o-hero-banner-homepage-item-component__link__yqHJ_ img',
    currentCountryInNavigationBar: '.NavigationUtilityDesktop_o-navigation-utility-desktop__4blA_  button span',
    countryValueInCountrySelectionMenu: 'a.CountryLanguageSelectorItem_m-country-language-selector-item__link__RoEYl',
    currentLanguageInNavigationBar: 'div.select-utility-nav__placeholder',
    languageSelector: '.select-utility-nav__value-container',
    languageOption: '.select-utility-nav__menu-list',
    changeLocationButtonInFooter: 'button.LocationSelectorComponent_o-location-selector-component__locator-button__qhrGz',
    currentCountryLanguageInFooter: '.LocationSelectorComponent_o-location-selector-component__current__p_aEC strong',
    

},

scriptDividend: {
    locationDropDown: 'select#location',
    buttonTextClass: '.button__text',
    errorMessage: '.ScriptDividendCalculatorComponent_o-dividend-calculator-component__error__bTThc',
    dividendCalculatorArea: '.ScriptDividendCalculatorComponent_o-dividend-calculator-component__container__qnjZP',
    fieldClass: '.Input_m-dividend-calculator-input__wrapper__WB0j2 input',
    disabledClass: '.Input_m-dividend-calculator-input--disabled__V4znL',
    errorMessageWhenAllFieldsEmpty: '.FieldValidationErrors_m-field-validation-error__invalid__FGARs',
    disabledButtonClass: '--disabled',
    discountField: 'input[value="6%"]',
    buttonTag: 'button',
   
}
}