package com.cucumberFramework.pageObjects;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.cucumberFramework.helper.AlertHelper;
import com.cucumberFramework.helper.Constants;
import com.cucumberFramework.helper.LoggerHelper;
import com.cucumberFramework.helper.WaitHelper;
import com.cucumberFramework.verification.beans.LeadsData;

public class Leads_Search_Edit_Delete_Page {
	WebDriver driver;
	private WaitHelper waitHelper;
	private AlertHelper alertHelper;

	private static Logger log = LoggerHelper.getLogger(Leads_Search_Edit_Delete_Page.class);
	
	@FindBy(xpath = "//input[@name='search_text']")
	public WebElement searchWords;
	
	@FindBy(xpath = "//table[@class='searchUIBasic small']//input[contains(@value,'Search Now')]")
	WebElement searchNowBtn;
	
	@FindBy(xpath = "//td[contains(text(),'LEA21')]")
	WebElement backSearchWords;
	
	@FindBy(xpath="//a[@href='index.php?module=Leads&action=EditView&record=22&return_module=Leads&return_action=index&parenttab=Marketing&return_viewname=1']")
	WebElement editLink22;
	
	@FindBy(xpath="//span[@class='lvtHeaderText']")
	WebElement editHeaderMsg;
	
	@FindBy(xpath="//input[@name='firstname']")
	WebElement firstName;
	
	@FindBy(xpath="//input[@name='lastname']")
	WebElement lastName;
	
	@FindBy(xpath="//input[@name='company']")
	WebElement companyName;
	
	@FindBy(xpath = "//select[@name='industry']")
	WebElement selIndustry;
	
	@FindBy(xpath = "//a[@title='Leads' and contains(text(), 'darwin')]")
	WebElement sfirstName;
	
	@FindBy(xpath = "//a[@title='Leads' and contains(text(), 'smith')]")
	WebElement sLastName;
	
	@FindBy(xpath = "//*[@id='row_22']/td[5]/text()")
	WebElement scompanyName;
	
	@FindBy(xpath="//*[@id='row_30']/td[10]/a[2]")
	WebElement deleteLink30;
			
	Select select;

	public Leads_Search_Edit_Delete_Page(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
		alertHelper = new AlertHelper(driver);
	}
	
	public void enterSearchWords(String keywords){
		searchWords.sendKeys(keywords);
	}
	
	public void clickSearchNowbtn(){
		searchNowBtn.click();
	}
	
	public String getSearchWords(){
		return backSearchWords.getText().toString();
	}
	
	public void clickEditLink(){
		editLink22.click();
	}
	
	public void modifyFirstName(String newfirstname){
		firstName.clear();
		firstName.sendKeys(newfirstname);
	}
	
	public void modifyLastName(String newlastname){
		lastName.clear();
		lastName.sendKeys(newlastname);
	}
	
	public void modifyCompanyName(String newcompanyname){
		companyName.clear();
		companyName.sendKeys(newcompanyname);
	}
	
	public void changeIndustryTo(String newindustry){
		select = new Select(selIndustry);
		//select.deselectAll();
		select.selectByVisibleText(newindustry);
	}
	
	public WebElement getLeadsEditHeaderMsg() {
		waitHelper.WaitForElement(editHeaderMsg, Constants.explicitWait);
		return editHeaderMsg;
	}
	
	public WebElement getFirstName() {
		waitHelper.WaitForElement(sfirstName, Constants.getExplicitwait());
		return sfirstName;
	}
	
	public WebElement getLastName() {
		waitHelper.WaitForElement(sLastName, Constants.getExplicitwait());
		return sLastName;
	}
	
	public WebElement getCompanyName() {
		waitHelper.WaitForElement(scompanyName, Constants.getExplicitwait());
		return scompanyName;
	}
	
	public void clickDeleteLink(){
		deleteLink30.click();
	}
	
	public void switchAlertDismiss(){
		alertHelper.dismissAlert();;
	}
	
	
	
	

}
