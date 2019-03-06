@Leads
Feature: Leads Search
  As a Test Engineer I want to test Leads Search functionality.

  Background: User should be on Home page
    Given I am on the Login page URL "http://localhost:8888/index.php?"
    When I enter username as "admin"
    And I enter password as "password"
    And click on login button
    Then I should see application homepage

  @sanity @regression
  Scenario: Search Leads
    When I click on leads link
    And I enter "LEA21" in the Search For box
    And I click Search Now button
    Then I only see row with "LEA21" displayed

  @sanity @regression
  Scenario: Edit Leads
    When I click on leads link
    And I click on Edit link in the Leads table
    And I modify First Name "darwin"
    And I modify Last name "smith"
    And I modify Company name "abc"
    And I change Industry to "Entertainment"
    And I click on Save button
    #Then I should see lead update success message
    And I should verify updated leads information

  @test
  Scenario: Delete Leads
    When I click on leads link
    And I click on Delete link in the Leads table
    And I dismiss Alert popup window
    #Then the row with "LEA30" disappears.
