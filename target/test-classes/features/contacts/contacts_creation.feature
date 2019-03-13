@ContactsWithMaps
Feature: Contacts Creation
  As a Test Engineer I want to test Contacts Creation functionality.

  Background: User should be on Home page
    Given I am on the Login page URL "http://localhost:8888/index.php?"
    When I enter username as "admin"
    And I enter password as "password"
    And click on login button
    Then I should see application homepage

  @sanity @regression
  Scenario: Create Contacts
    When I click on contacts link
    And I click on contacts plus button
    And I enters contacts details and verifiy them
      | contactID | firstName  | lastName  | title  | email            | Lead Source |
      | cont1     | firstName1 | lastName1 | title1 | email1@gmail.com | Partner     |
      | cont2     | firstName2 | lastName2 | title2 | email2@gmail.com | Other       |
    And I click the Contacts link on the top left cornor
    #Then I should verify this contact is created successfully
