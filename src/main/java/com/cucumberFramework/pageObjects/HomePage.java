package com.cucumberFramework.pageObjects;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumberFramework.helper.Constants;
import com.cucumberFramework.helper.LoggerHelper;
import com.cucumberFramework.helper.WaitHelper;

public class HomePage {

	private WebDriver driver;

	WaitHelper waitHelper;

	private static Logger log = LoggerHelper.getLogger(LeadsCreationPage.class);

	@FindBy(xpath = "//span[contains(text(),' Administrator')]")
	public WebElement administrator;

	@FindBy(xpath = "//table[@class='hdrTabBg']/tbody/tr//td/a[text()='Leads']")
	WebElement leadsLink;

	@FindBy(xpath = "//table[@class='hdrTabBg']/tbody/tr//td/a[text()='Organizations']")
	WebElement organizationsLink;

	@FindBy(xpath = "//table[@class='hdrTabBg']/tbody/tr//td/a[text()='Contacts']")
	WebElement contactsLink;

	@FindBy(xpath = "//table[@class='hdrTabBg']/tbody/tr//td/a[text()='Opportunities']")
	WebElement opportunitiesLInk;

	@FindBy(xpath = "//img[@alt='Create Lead...']")
	WebElement leadsButton;
	
	@FindBy(xpath = "//img[@title='Create Lead...']")
	public WebElement createLeadsButton;

	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
	}

	public Leads_Search_Edit_Delete_Page navigateToLeads() {
		leadsLink.click();
		return new Leads_Search_Edit_Delete_Page(driver);
	}
	
	public LeadsCreationPage clickOnCreateLeads() {
		waitHelper.WaitForElement(createLeadsButton, Constants.getExplicitwait());
		log.info("clicking on create leads button");
		createLeadsButton.click();
		return new LeadsCreationPage(driver);
	}

	public Organizations navigateToOrganizations() {
		organizationsLink.click();
		return new Organizations(driver);
	}

	public void navigateToContacts() {
		contactsLink.click();
	}

	public void navigateToOpportunities() {
		opportunitiesLInk.click();
	}
	
	public WebElement getAdministrator() {
		waitHelper.WaitForElement(administrator, Constants.getExplicitwait());
		return administrator;
	}


}
