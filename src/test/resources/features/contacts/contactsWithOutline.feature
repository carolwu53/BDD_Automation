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
  Scenario Outline: Create Contacts
    When I click on contacts link
    And I click on contacts plus button
    And I enter ContactID "<contactID>"
    And I enter contact First Name "<firstName>"
    And I enter contact Last Name "<lastName>"
    And I enter contact Title "<title>"
    And I enter contact Email "<email>"
    And I select Lead Source "<Lead Source>"
    And I click contact Save button
    Then I should see contacts creation success message
    And I should verify contacts information

    Examples: 
      | contactID | firstName  | lastName  | title  | email            | Lead Source |
      | cont1     | firstName1 | lastName1 | title1 | email1@gmail.com | Partner     |
      | cont2     | firstName2 | lastName2 | title2 | email2@gmail.com | Other       |
