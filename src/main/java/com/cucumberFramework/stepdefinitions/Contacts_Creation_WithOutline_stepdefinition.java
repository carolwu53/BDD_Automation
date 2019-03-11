package com.cucumberFramework.stepdefinitions;

import org.apache.log4j.Logger;
import org.testng.Assert;

import com.cucumberFramework.helper.LoggerHelper;
import com.cucumberFramework.pageObjects.ContactsCreationPage;
import com.cucumberFramework.pageObjects.ContactsVerificationPage;
import com.cucumberFramework.pageObjects.HomePage;
import com.cucumberFramework.pageObjects.LeadsVerificationPage;
import com.cucumberFramework.testBase.TestBase;
import com.cucumberFramework.verification.beans.LeadsData;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Contacts_Creation_WithOutline_stepdefinition extends TestBase{
	
	HomePage homePage = new HomePage(driver);
	ContactsCreationPage contactsCreationPage = new ContactsCreationPage(driver);
	ContactsVerificationPage contactsVerificationPage = new ContactsVerificationPage(driver);
	
	private static Logger log = LoggerHelper.getLogger(LeadsVerificationPage.class);

	@When("^I enter ContactID \"([^\"]*)\"$")
	public void i_enter_ContactID(String arg1) throws Throwable {
		contactsCreationPage.enterContactID(arg1);
	}
	
	@When("^I enter contact First Name \"([^\"]*)\"$")
	public void i_enter_contact_First_Name(String firstname) throws Throwable {
		LeadsData.setFirstName(firstname);
		contactsCreationPage.enterFirstName(firstname);
	    
	}

	@When("^I enter contact Last Name \"([^\"]*)\"$")
	public void i_enter_contact_Last_Name(String lastname) throws Throwable {
		LeadsData.setLastName(lastname);
		contactsCreationPage.enterLastName(lastname);
	}

	@When("^I enter contact Title \"([^\"]*)\"$")
	public void i_enter_contact_Title(String title) throws Throwable {
		contactsCreationPage.enterTitle(title);
	}

	@When("^I enter contact Email \"([^\"]*)\"$")
	public void i_enter_contact_Email(String email) throws Throwable {
		LeadsData.setEmail(email);
		contactsCreationPage.enterEmail(email);
	}
	
	@When("^I click contact Save button$")
	public void i_click_contact_Save_button() throws Throwable {
		contactsCreationPage.clickSaveButton(); 
	}

	@Then("^I should see contacts creation success message$")
	public void i_should_see_contacts_creation_success_message() throws Throwable {
		log.info(LeadsData.getFirstName());
		log.info(LeadsData.getLastName());
		if (contactsCreationPage.getContactsHeader().contains(LeadsData.getFirstName())
				&& contactsCreationPage.getContactsHeader().contains(LeadsData.getLastName())) {
			Assert.assertTrue(true, "contacts creation message is valid");
		} else {
			Assert.assertTrue(false, "contacts creation message is invalid " + contactsCreationPage.getContactsHeader());
		}
	}

	@Then("^I should verify contacts information$")
	public void i_should_verify_contacts_information() throws Throwable {
		Assert.assertTrue(contactsVerificationPage.getFirstName().getText().contains(LeadsData.getFirstName()));
		Assert.assertTrue(contactsVerificationPage.getLastName().getText().contains(LeadsData.getLastName()));
		Assert.assertTrue(contactsVerificationPage.getEmail().getText().contains(LeadsData.getEmail()));
	   
	}

}
