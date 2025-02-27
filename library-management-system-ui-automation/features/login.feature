Feature: Login functionality

Background:
  Given the user is on the login page
   
Scenario Outline: Can login successfully 
    Given the user enters username "<Username>" and a "<Password>"
    When the user clicks on login button
    Then the user is redirected to the books catalog page with a "<Message>" and logout button is displayed 

    Examples:
     |Username      |Password        |Message        |
     |admin1        |securePassword  |Welcome, Admin!|
    
 Scenario Outline: Cannot login successfully 
    Given the user enters invalid username "<Username>" and a "<Password>"
    When the user clicks on login button
    Then an "<ErrorMessage>" shall be displayed to the user

    Examples:
     |Username      |Password        |ErrorMessage                                   |
     |adm4n1        |securePassword  |Invalid username or password. Please try again.|
     |admin1        |securePas$wrd   |Invalid username or password. Please try again.|
     |              |securePassword  |Please enter your username                     |
     |admin1        |                |Please enter your password                     |