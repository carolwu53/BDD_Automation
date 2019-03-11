package com.cucumberFramework.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.cucumberFramework.verification.beans.LeadsData;

public class ContactsCreationPage {

	private WebDriver driver;
	
	@FindBy(xpath="//input[@name='firstname']")
	WebElement firstNametxt;
	
	@FindBy(xpath="//input[@name='lastname']")
	WebElement lastNametxt;
	
	@FindBy(xpath="//input[@id='email']")
	WebElement emailtxt;
	
	@FindBy(xpath="//input[@id='contact_no']")
	WebElement contactIDtxt;
	
	@FindBy(xpath="//input[@id='title']")
	WebElement titletxt;
	
	@FindBy(xpath="//select[@name='leadsource']")
	WebElement leadSourcedpl;
	
	@FindBy(xpath="//input[@name='reference']")
	WebElement referencecb;
	
	@FindBy(xpath="//input[@class='crmButton small save']")
	WebElement savebtn;
	
	@FindBy(xpath="//a[@class='hdrLink']")
	WebElement aContactslnk;
	
	@FindBy(xpath="//span[@class='dvHeaderText']")
	WebElement contacHeaderlnk;
	

	public ContactsCreationPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void enterFirstName(String firstname){
		LeadsData.setFirstName(firstname);
		firstNametxt.sendKeys(firstname);
	}
	
	public WebElement getFirstName(){
		return firstNametxt;
	}
	
	public void enterLastName(String lastname){
		LeadsData.setLastName(lastname);
		lastNametxt.sendKeys(lastname);
	}
	
	public WebElement getLastName(){
		return lastNametxt;
	}
	
	public void enterContactID(String contactid){
		contactIDtxt.sendKeys(contactid);
	}
	
	public void enterTitle(String title){
		titletxt.sendKeys(title);
	}
	
	public void enterEmail(String email){
		emailtxt.sendKeys(email);
	}
	
	public WebElement getEmail(){
		return emailtxt;
	}
	
	public void selectLeadSource(String leadsource){
		Select selectLD = new Select(leadSourcedpl);
		selectLD.selectByVisibleText(leadsource);
	}
	
	public void checkReference(){
		referencecb.click();
	}
	
	public void clickSaveButton(){
		savebtn.click();
	}
	
	public void clickAContactsLink(){
		aContactslnk.click();
	}
	
	public String getContactsHeader(){
		return contacHeaderlnk.getText();
	}
	
}
