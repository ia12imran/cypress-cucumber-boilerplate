Feature: Registration on Root domain for College IDP with Different

    Background:Common Input data for registration form for College IDP
        Given Lunch home page url for Registration for College IDP with twelfth Passed with Different Education Stream
        Then Generate Random UserName for College IDP twelfth Passed
        Then Generate Random Email ID for College IDP twelfth Passed
        When Generate Random Mobile Number for College IDP twelfth Passed
        When Click on Studying Level and select twelfth Passed for College IDP

    @Colg_Idp_Cls_12_eng
    Scenario: User will create Class twelfth passed with engineering with B.tech M.tech
        Given Click on twelfth passing year for engineering
        Then  Click on Course interest of college for engineering with Btech and Mtech
        Then  Execute Commnon last some step for twelfth with engineering