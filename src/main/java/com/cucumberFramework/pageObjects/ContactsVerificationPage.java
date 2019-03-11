package com.cucumberFramework.pageObjects;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumberFramework.helper.Constants;
import com.cucumberFramework.helper.LoggerHelper;
import com.cucumberFramework.helper.WaitHelper;

public class ContactsVerificationPage {
	
	WebDriver driver;
	private WaitHelper waitHelper;

	private static Logger log = LoggerHelper.getLogger(LeadsVerificationPage.class);
	
	@FindBy(xpath="//*[@id='mouseArea_First Name']")
	WebElement firstName;
	
	@FindBy(xpath="//*[@id='mouseArea_Last Name']")
	WebElement lastName;
	
	@FindBy(xpath="//*[@id='mouseArea_Email']")
	WebElement email;
	
	public ContactsVerificationPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
	}

	public WebElement getFirstName() {
		waitHelper.WaitForElement(firstName, Constants.getExplicitwait());
		return firstName;
	}

	public WebElement getLastName() {
		return lastName;
	}
	
	public WebElement getEmail() {
		return email;
	}

}
