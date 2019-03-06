package com.cucumberFramework.stepdefinitions;

import org.testng.Assert;

import com.cucumberFramework.pageObjects.Leads_Search_Edit_Delete_Page;
import com.cucumberFramework.testBase.TestBase;
import com.cucumberFramework.verification.beans.LeadsData;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Leads_Search_Edit_Delete_StepDefinition extends TestBase {

	//WaitHelper waitHelper = new WaitHelper(driver);
	//Logger log = LoggerHelper.getLogger(Leads_Search_Edit_Delete_StepDefinition.class);
	//AlertHelper alertHelper = new AlertHelper(driver);

	Leads_Search_Edit_Delete_Page leadsSearchEditDeleteObj = new Leads_Search_Edit_Delete_Page(driver);
	
	// leads search steps
	@When("^I enter \"([^\"]*)\" in the Search For box$")
	public void i_enter_in_the_Search_For_box(String searchwords) throws Throwable {
		leadsSearchEditDeleteObj.enterSearchWords(searchwords);
	}

	@When("^I click Search Now button$")
	public void i_click_Search_Now_button() throws Throwable {
		leadsSearchEditDeleteObj.clickSearchNowbtn();
	}

	@Then("^I only see row with \"([^\"]*)\" displayed$")
	public void i_only_see_row_with_displayed(String arg1) throws Throwable {
      String actual = leadsSearchEditDeleteObj.getSearchWords();
      Assert.assertEquals(actual, "LEA21", "Leads Searching function is passed");
	}
	
	@When("^I click on Edit link in the Leads table$")
	public void i_click_on_Edit_link_in_the_Leads_table() throws Throwable {
		leadsSearchEditDeleteObj.clickEditLink();
	}
	
	@When("^I modify First Name \"([^\"]*)\"$")
	public void i_modify_First_Name(String arg1) throws Throwable {
		LeadsData.setFirstName(arg1);
		leadsSearchEditDeleteObj.modifyFirstName(arg1);
	}

	@When("^I modify Last name \"([^\"]*)\"$")
	public void i_modify_Last_name(String arg1) throws Throwable {
		LeadsData.setLastName(arg1);
		leadsSearchEditDeleteObj.modifyLastName(arg1);
	}

	@When("^I modify Company name \"([^\"]*)\"$")
	public void i_modify_Company_name(String arg1) throws Throwable {
		LeadsData.setCompanyName(arg1);
		leadsSearchEditDeleteObj.modifyCompanyName(arg1);
	}

	@When("^I change Industry to \"([^\"]*)\"$")
	public void i_change_Industry_to(String arg1) throws Throwable {
		leadsSearchEditDeleteObj.changeIndustryTo(arg1);
	}

	@When("^I should verify updated leads information$")
	public void i_should_verify_updated_leads_information() throws Throwable {
		Assert.assertTrue(leadsSearchEditDeleteObj.getFirstName().getText().contains(LeadsData.getFirstName()));
		Assert.assertTrue(leadsSearchEditDeleteObj.getLastName().getText().contains(LeadsData.getLastName()));
		Assert.assertTrue(leadsSearchEditDeleteObj.getCompanyName().getText().contains(LeadsData.getCompanyName()));
	}
	
	@When("^I click on Delete link in the Leads table$")
	public void i_click_on_Delete_link_in_the_Leads_table() throws Throwable {
		leadsSearchEditDeleteObj.clickDeleteLink();
	}

	@When("^I dismiss Alert popup window$")
	public void i_dismiss_Alert_popup_window() throws Throwable {
		leadsSearchEditDeleteObj.switchAlertDismiss();
	}

	@Then("^the row with \"([^\"]*)\" disappears\\.$")
	public void the_row_with_disappears(String arg1) throws Throwable {
	    
	}


}
