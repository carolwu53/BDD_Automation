package com.cucumberFramework.stepdefinitions;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.testng.Assert;

import com.cucumberFramework.helper.LoggerHelper;
import com.cucumberFramework.pageObjects.ContactsCreationPage;
import com.cucumberFramework.pageObjects.ContactsVerificationPage;
import com.cucumberFramework.pageObjects.HomePage;
import com.cucumberFramework.pageObjects.LeadsVerificationPage;
import com.cucumberFramework.testBase.TestBase;
import com.cucumberFramework.verification.beans.LeadsData;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Contacts_Creation_WithMap_StepDefinition extends TestBase {

	HomePage homePage = new HomePage(driver);
	ContactsCreationPage contactsCreationPage = new ContactsCreationPage(driver);
	ContactsVerificationPage contactsVerificationPage = new ContactsVerificationPage(driver);
	
	private static Logger log = LoggerHelper.getLogger(LeadsVerificationPage.class);

	@When("^I click on contacts link$")
	public void i_click_on_contacts_link() throws Throwable {
		homePage.navigateToContacts();
	}

	@When("^I click on contacts plus button$")
	public void i_click_on_contacts_plus_button() throws Throwable {
		homePage.clickOnContactsPlus();
	}

	@When("^I enters contacts details and verifiy them$")
	public void i_enters_contacts_details_and_verifiy_them(DataTable cData) throws Throwable {
		// Map<String, String> data = (Map<String, String>)
		// cData.asMaps(String.class, String.class);
		for (Map<String, String> data : cData.asMaps(String.class, String.class)) {
			LeadsData.setFirstName(data.get("firstName"));
			contactsCreationPage.enterFirstName(data.get("firstName"));
			
			LeadsData.setLastName(data.get("lastName"));
			contactsCreationPage.enterLastName(data.get("lastName"));
						
			contactsCreationPage.enterContactID(data.get("contactID"));
			contactsCreationPage.enterTitle(data.get("title"));
			
			LeadsData.setEmail(data.get("email"));
			contactsCreationPage.enterEmail(data.get("email"));
						
			contactsCreationPage.selectLeadSource(data.get("Lead Source"));
			
			contactsCreationPage.checkReference();
			
			contactsCreationPage.clickSaveButton();
			
			log.info("contacts verification info: " + contactsVerificationPage.getFirstName().getText());
			log.info("leads data info: " + LeadsData.getFirstName());
			
			Assert.assertTrue(contactsVerificationPage.getFirstName().getText().contains(LeadsData.getFirstName()));
			Assert.assertTrue(contactsVerificationPage.getLastName().getText().contains(LeadsData.getLastName()));
			Assert.assertTrue(contactsVerificationPage.getEmail().getText().contains(LeadsData.getEmail()));
		
			homePage.clickOnContactsPlus();
		}
	}

	@When("^I click the Contacts link on the top left cornor$")
	public void i_click_the_Contacts_link_on_the_top_left_cornor() throws Throwable {
		contactsCreationPage.clickAContactsLink();
	}

//	@Then("^I should verify this contact is created successfully$")
//	public void i_should_verify_this_contact_is_created_successfully() throws Throwable {
//		Assert.assertTrue(contactsVerificationPage.getFirstName().getText().contains(LeadsData.getFirstName()));
//		Assert.assertTrue(contactsVerificationPage.getLastName().getText().contains(LeadsData.getLastName()));
//		Assert.assertTrue(contactsVerificationPage.getEmail().getText().contains(LeadsData.getEmail()));
//
//	}

}
