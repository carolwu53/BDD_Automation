$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts/contactsWithOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Contacts Creation",
  "description": "As a Test Engineer I want to test Contacts Creation functionality.",
  "id": "contacts-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ContactsWithMaps"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Create Contacts",
  "description": "",
  "id": "contacts-creation;create-contacts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on contacts plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter ContactID \"\u003ccontactID\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter contact First Name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter contact Last Name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter contact Title \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter contact Email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"\u003cLead Source\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click contact Save button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see contacts creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should verify contacts information",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "contacts-creation;create-contacts;",
  "rows": [
    {
      "cells": [
        "contactID",
        "firstName",
        "lastName",
        "title",
        "email",
        "Lead Source"
      ],
      "line": 27,
      "id": "contacts-creation;create-contacts;;1"
    },
    {
      "cells": [
        "cont1",
        "firstName1",
        "lastName1",
        "title1",
        "email1@gmail.com",
        "Partner"
      ],
      "line": 28,
      "id": "contacts-creation;create-contacts;;2"
    },
    {
      "cells": [
        "cont2",
        "firstName2",
        "lastName2",
        "title2",
        "email2@gmail.com",
        "Other"
      ],
      "line": 29,
      "id": "contacts-creation;create-contacts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7774216251,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 5496823272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 356863262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 248115052,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 9098470689,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 564548105,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Create Contacts",
  "description": "",
  "id": "contacts-creation;create-contacts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@ContactsWithMaps"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on contacts plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter ContactID \"cont1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter contact First Name \"firstName1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter contact Last Name \"lastName1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter contact Title \"title1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter contact Email \"email1@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Partner\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click contact Save button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see contacts creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should verify contacts information",
  "keyword": "And "
});
formatter.match({
  "location": "Contacts_Creation_WithMap_StepDefinition.i_click_on_contacts_link()"
});
formatter.result({
  "duration": 7689375857,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_Creation_WithMap_StepDefinition.i_click_on_contacts_plus_button()"
});
formatter.result({
  "duration": 3019531989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cont1",
      "offset": 19
    }
  ],
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_enter_ContactID(String)"
});
formatter.result({
  "duration": 175753463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName1",
      "offset": 28
    }
  ],
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_enter_contact_First_Name(String)"
});
formatter.result({
  "duration": 380881689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName1",
      "offset": 27
    }
  ],
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_enter_contact_Last_Name(String)"
});
formatter.result({
  "duration": 350394736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 23
    }
  ],
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_enter_contact_Title(String)"
});
formatter.result({
  "duration": 287784758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email1@gmail.com",
      "offset": 23
    }
  ],
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_enter_contact_Email(String)"
});
formatter.result({
  "duration": 545532706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Partner",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 312337603,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_click_contact_Save_button()"
});
formatter.result({
  "duration": 6362512130,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_should_see_contacts_creation_success_message()"
});
formatter.result({
  "duration": 163633638,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_should_verify_contacts_information()"
});
formatter.result({
  "duration": 509642013,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1595780569,
  "status": "passed"
});
formatter.before({
  "duration": 3862009923,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1920438555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 135157945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 207382992,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5800358170,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 487158366,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Create Contacts",
  "description": "",
  "id": "contacts-creation;create-contacts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@ContactsWithMaps"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on contacts plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter ContactID \"cont2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter contact First Name \"firstName2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter contact Last Name \"lastName2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter contact Title \"title2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter contact Email \"email2@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Other\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click contact Save button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see contacts creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should verify contacts information",
  "keyword": "And "
});
formatter.match({
  "location": "Contacts_Creation_WithMap_StepDefinition.i_click_on_contacts_link()"
});
formatter.result({
  "duration": 8859710182,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_Creation_WithMap_StepDefinition.i_click_on_contacts_plus_button()"
});
formatter.result({
  "duration": 3904438425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cont2",
      "offset": 19
    }
  ],
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_enter_ContactID(String)"
});
formatter.result({
  "duration": 209489872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName2",
      "offset": 28
    }
  ],
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_enter_contact_First_Name(String)"
});
formatter.result({
  "duration": 382033585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName2",
      "offset": 27
    }
  ],
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_enter_contact_Last_Name(String)"
});
formatter.result({
  "duration": 329840100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title2",
      "offset": 23
    }
  ],
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_enter_contact_Title(String)"
});
formatter.result({
  "duration": 283886626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email2@gmail.com",
      "offset": 23
    }
  ],
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_enter_contact_Email(String)"
});
formatter.result({
  "duration": 599220454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Other",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 316632396,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_click_contact_Save_button()"
});
formatter.result({
  "duration": 6387470144,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_should_see_contacts_creation_success_message()"
});
formatter.result({
  "duration": 122392280,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_Creation_WithOutline_stepdefinition.i_should_verify_contacts_information()"
});
formatter.result({
  "duration": 368421117,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1429828958,
  "status": "passed"
});
formatter.uri("contacts/contacts_creation.feature");
formatter.feature({
  "line": 2,
  "name": "Contacts Creation",
  "description": "As a Test Engineer I want to test Contacts Creation functionality.",
  "id": "contacts-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ContactsWithMaps"
    }
  ]
});
formatter.before({
  "duration": 3468401466,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1662963285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 142403990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 181847612,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5584877872,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 1070679732,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create Contacts",
  "description": "",
  "id": "contacts-creation;create-contacts",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on contacts plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enters contacts details and verifiy them",
  "rows": [
    {
      "cells": [
        "contactID",
        "firstName",
        "lastName",
        "title",
        "email",
        "Lead Source"
      ],
      "line": 17
    },
    {
      "cells": [
        "cont1",
        "firstName1",
        "lastName1",
        "title1",
        "email1@gmail.com",
        "Partner"
      ],
      "line": 18
    },
    {
      "cells": [
        "cont2",
        "firstName2",
        "lastName2",
        "title2",
        "email2@gmail.com",
        "Other"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click the Contacts link on the top left cornor",
  "keyword": "And "
});
formatter.match({
  "location": "Contacts_Creation_WithMap_StepDefinition.i_click_on_contacts_link()"
});
formatter.result({
  "duration": 8756843814,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_Creation_WithMap_StepDefinition.i_click_on_contacts_plus_button()"
});
formatter.result({
  "duration": 4276911639,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_Creation_WithMap_StepDefinition.i_enters_contacts_details_and_verifiy_them(DataTable)"
});
formatter.result({
  "duration": 24755029060,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_Creation_WithMap_StepDefinition.i_click_the_Contacts_link_on_the_top_left_cornor()"
});
formatter.result({
  "duration": 4099652567,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1581628415,
  "status": "passed"
});
formatter.uri("leads/leads.feature");
formatter.feature({
  "line": 2,
  "name": "Leads Creation",
  "description": "As a Test Engineer I want to test Leads Creation functionality.",
  "id": "leads-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Leads"
    }
  ]
});
formatter.before({
  "duration": 3963692388,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1816983881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 150526822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 199292980,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5649878753,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 1005909392,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 9081956400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 3411050988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 266533636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName",
      "offset": 20
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 402359300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_last_name(String)"
});
formatter.result({
  "duration": 413797226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 351765018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Title(String)"
});
formatter.result({
  "duration": 361831040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 297609704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Industry(String)"
});
formatter.result({
  "duration": 276922983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 24
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 230355272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 165283081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 561738257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Street(String)"
});
formatter.result({
  "duration": 326255569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 310317430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Country(String)"
});
formatter.result({
  "duration": 192215891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Description(String)"
});
formatter.result({
  "duration": 246463177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Phone(String)"
});
formatter.result({
  "duration": 527901365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 313122416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Fax(String)"
});
formatter.result({
  "duration": 344353259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Email(String)"
});
formatter.result({
  "duration": 472306487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enetr_Website(String)"
});
formatter.result({
  "duration": 339148456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 293224964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 247902338,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_Save_button()"
});
formatter.result({
  "duration": 6339665857,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 262402126,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 458659174,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1407066555,
  "status": "passed"
});
formatter.uri("leads/leadsWithParameters.feature");
formatter.feature({
  "line": 2,
  "name": "Leads Creation",
  "description": "As a Test Engineer I want to test Leads Creation functionality.",
  "id": "leads-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"\u003ccompanyName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"\u003cannualRevenue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "leads-creation;create-leads;",
  "rows": [
    {
      "cells": [
        "title",
        "firstName",
        "lastName",
        "companyName",
        "annualRevenue",
        "Country"
      ],
      "line": 42,
      "id": "leads-creation;create-leads;;1"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName1",
        "auto_lastName1",
        "companyName1",
        "1000",
        "US"
      ],
      "line": 43,
      "id": "leads-creation;create-leads;;2"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName2",
        "auto_lastName2",
        "companyName2",
        "2000",
        "US"
      ],
      "line": 44,
      "id": "leads-creation;create-leads;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3659347961,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1819982942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 170576212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 246465609,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5879093474,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 574718255,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"1000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 7110624953,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 3634804435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 306048567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName1",
      "offset": 20
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 673695406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName1",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_last_name(String)"
});
formatter.result({
  "duration": 324984553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName1",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 393297692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Title(String)"
});
formatter.result({
  "duration": 388765064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 285032039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Industry(String)"
});
formatter.result({
  "duration": 304703406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 24
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 291682485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 169980613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 575150976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Street(String)"
});
formatter.result({
  "duration": 313763393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 263287421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Country(String)"
});
formatter.result({
  "duration": 197247685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Description(String)"
});
formatter.result({
  "duration": 281281793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Phone(String)"
});
formatter.result({
  "duration": 469885601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 297831332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Fax(String)"
});
formatter.result({
  "duration": 346421647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Email(String)"
});
formatter.result({
  "duration": 625489596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enetr_Website(String)"
});
formatter.result({
  "duration": 333747956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 260188282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 289578037,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_Save_button()"
});
formatter.result({
  "duration": 5630329341,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 241008385,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 402694375,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1491942198,
  "status": "passed"
});
formatter.before({
  "duration": 3613616115,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2160069364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 181121143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 215963259,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5064077096,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 745088235,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"2000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 14841112514,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 4195141212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 382707380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName2",
      "offset": 20
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 437556749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName2",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_last_name(String)"
});
formatter.result({
  "duration": 402208172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName2",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 369299524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Title(String)"
});
formatter.result({
  "duration": 356242543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 274925500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Industry(String)"
});
formatter.result({
  "duration": 263046751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 24
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 244400461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 160338803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 484438466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Street(String)"
});
formatter.result({
  "duration": 315383260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 226770336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Country(String)"
});
formatter.result({
  "duration": 201378385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Description(String)"
});
formatter.result({
  "duration": 363529104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Phone(String)"
});
formatter.result({
  "duration": 306007645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 322485469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Fax(String)"
});
formatter.result({
  "duration": 349137091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Email(String)"
});
formatter.result({
  "duration": 468219140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enetr_Website(String)"
});
formatter.result({
  "duration": 340182853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 252295182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 175671619,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_Save_button()"
});
formatter.result({
  "duration": 6069177365,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 245061697,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 388290611,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1452987211,
  "status": "passed"
});
formatter.uri("leads/searchEditDeleteLeads.feature");
formatter.feature({
  "line": 2,
  "name": "Leads Search/Edit/Delete",
  "description": "As a Test Engineer I want to test Leads Search functionality.",
  "id": "leads-search/edit/delete",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Leads"
    }
  ]
});
formatter.before({
  "duration": 4200180706,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1833810555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 200863010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 198125687,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 6062966932,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 419393827,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search Leads",
  "description": "",
  "id": "leads-search/edit/delete;search-leads",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter \"LEA21\" in the Search For box",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click Search Now button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I only see row with \"LEA21\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 9255898756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LEA21",
      "offset": 9
    }
  ],
  "location": "Leads_Search_Edit_Delete_StepDefinition.i_enter_in_the_Search_For_box(String)"
});
formatter.result({
  "duration": 193138055,
  "status": "passed"
});
formatter.match({
  "location": "Leads_Search_Edit_Delete_StepDefinition.i_click_Search_Now_button()"
});
formatter.result({
  "duration": 168694606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LEA21",
      "offset": 21
    }
  ],
  "location": "Leads_Search_Edit_Delete_StepDefinition.i_only_see_row_with_displayed(String)"
});
formatter.result({
  "duration": 98517284,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1470660284,
  "status": "passed"
});
formatter.before({
  "duration": 3486610578,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2145473146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 129259087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 234464093,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5570777175,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 548678440,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "#@sanity @regression"
    },
    {
      "line": 20,
      "value": "#@test"
    }
  ],
  "line": 21,
  "name": "Edit Leads",
  "description": "",
  "id": "leads-search/edit/delete;edit-leads",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on Edit link in the Leads table",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I modify First Name \"darwin\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I modify Last name \"smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I modify Company name \"abc\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I change Industry to \"Entertainment\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#Then I should see lead update success message"
    }
  ],
  "line": 30,
  "name": "I should verify updated leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 8831363333,
  "status": "passed"
});
formatter.match({
  "location": "Leads_Search_Edit_Delete_StepDefinition.i_click_on_Edit_link_in_the_Leads_table()"
});
formatter.result({
  "duration": 3824063806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "darwin",
      "offset": 21
    }
  ],
  "location": "Leads_Search_Edit_Delete_StepDefinition.i_modify_First_Name(String)"
});
formatter.result({
  "duration": 309621349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith",
      "offset": 20
    }
  ],
  "location": "Leads_Search_Edit_Delete_StepDefinition.i_modify_Last_name(String)"
});
formatter.result({
  "duration": 266881676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 23
    }
  ],
  "location": "Leads_Search_Edit_Delete_StepDefinition.i_modify_Company_name(String)"
});
formatter.result({
  "duration": 234028131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Entertainment",
      "offset": 22
    }
  ],
  "location": "Leads_Search_Edit_Delete_StepDefinition.i_change_Industry_to(String)"
});
formatter.result({
  "duration": 179511407,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_Save_button()"
});
formatter.result({
  "duration": 7406695825,
  "status": "passed"
});
formatter.match({
  "location": "Leads_Search_Edit_Delete_StepDefinition.i_should_verify_updated_leads_information()"
});
formatter.result({
  "duration": 429375978,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 1495427463,
  "status": "passed"
});
formatter.before({
  "duration": 3716680611,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1863253792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 191596386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 198936836,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 6393525802,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 502115591,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "#@sanity @regression"
    }
  ],
  "line": 34,
  "name": "Delete Leads",
  "description": "",
  "id": "leads-search/edit/delete;delete-leads",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on Delete link in the Leads table",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I dismiss Alert popup window",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 7880350715,
  "status": "passed"
});
formatter.match({
  "location": "Leads_Search_Edit_Delete_StepDefinition.i_click_on_Delete_link_in_the_Leads_table()"
});
formatter.result({
  "duration": 162988609,
  "status": "passed"
});
formatter.match({
  "location": "Leads_Search_Edit_Delete_StepDefinition.i_dismiss_Alert_popup_window()"
});
formatter.result({
  "duration": 20942383,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 1662363230,
  "status": "passed"
});
formatter.uri("login/login.feature");
formatter.feature({
  "line": 2,
  "name": "Sign In",
  "description": "As an employee of the company\nI want to login to application with my credentails\r\nIn order to use the application features.",
  "id": "sign-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 3674370013,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2013544399,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 73326297,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 132256124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 165604786,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5984453660,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 583769734,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 394155435,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 1300491268,
  "status": "passed"
});
formatter.before({
  "duration": 3347887954,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2031944346,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 52588524,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Sign In with invalid credential",
  "description": "",
  "id": "sign-in;sign-in-with-invalid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"carol\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should get a red warning message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "carol",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 180139418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 211404296,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 2361716783,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_get_a_red_warning_message()"
});
formatter.result({
  "duration": 81653333,
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 1167875759,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I should see administrator text message on home Page",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 35,
      "id": "sign-in;sign-in-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 36,
      "id": "sign-in;sign-in-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 37,
      "id": "sign-in;sign-in-with-valid-credentials;;3"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 38,
      "id": "sign-in;sign-in-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3640696000,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2129564990,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 36242785,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 26,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I should see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 153779519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 167017611,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5075368754,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 467953349,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 255260210,
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 1327144509,
  "status": "passed"
});
formatter.before({
  "duration": 3645468487,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2949927981,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 58400271,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 26,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I should see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 148392390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 207705507,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5002942338,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 419204207,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 81033424,
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 2011402270,
  "status": "passed"
});
formatter.before({
  "duration": 3877298575,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1756343025,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 38692033,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 26,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I should see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 124771029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 149816560,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 6473887456,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_application_homepage()"
});
formatter.result({
  "duration": 711074691,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 50445990,
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 1330637878,
  "status": "passed"
});
});