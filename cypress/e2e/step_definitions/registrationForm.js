import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import { cdi } from '@pages/Common_Data_Input'
import { cip } from "@pages/College_IDP_Pages";
// import allure from '@shelex/cypress-allure-plugin';

Given("Lunch home page url for Registration for College IDP with twelfth Passed with Different Education Stream", function () {
    cdi.OpenURL()
});
Then('Generate Random UserName for College IDP twelfth Passed', () => {
    cdi.enterUserName()
})
Then('Generate Random Email ID for College IDP twelfth Passed', () => {
    cdi.enterEmail_ID()
})
When('Generate Random Mobile Number for College IDP twelfth Passed', () => {
    cdi.enterMobileNumber()
})
When('Click on Studying Level and select twelfth Passed for College IDP', () => {
    cip.enterStudying_twelfth_Passed()
})

// here start for College IDP for Class 12 with twelth passed user with engineering
Given('Click on twelfth passing year for engineering', () => {
    cip.enetrPassing_Year()
})
Then('Click on Course interest of college for engineering with Btech and Mtech', () => {
    cip.enterCourse_College_Interest_eng()
})
Then('Execute Commnon last some step for twelfth with engineering', () => {
    cdi.enterCurrentLocaiton()
    cdi.enterSubmitButton()
    cdi.enterOTP()
})
