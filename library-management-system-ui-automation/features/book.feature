Feature: Book functionality

Background:
  Given the user login with username "admin1" and password "securePassword" successfully

Scenario: Can view the book page
    Then the user is displayed with the list of books available

Scenario Outline: Create a different books functionality
    Given the user clicks on add book button on home page 
    When the user add a new book "<Title>", "<Author>", "<Genre>", "<ISBN>", "<PublicationDate>" and "<Price>"
    And the user clicks on add book button 
    Then a new book should be added to the book catalog

    Examples:
    |Title                          |Author                |Genre        |ISBN            |PublicationDate|Price|
    |When The water drops           |Dr.BE Overview        |Fiction      |000123456789012 |02/08/2002     |5    |
    |ETFs                           |EB. Market Overview   |Non-Fiction  |966034567890167 |05/02/2024     |2    |
    |Things Fall                    |My Watchlist          |Fantasy      |0987654321094567|10/12/1999     |2.55 |

Scenario Outline: Update existing book functionality
    Given the user clicks on edit button
    When the user change existing title to a new title "<NewTitle>" 
    And the user clicks on saves changes button
    Then the book title "<NewTitle>" is updated and should displayed 

    Examples:
    |NewTitle   | 
    |NewTest2   |

Scenario: delete existing book functionality
    Given the user clicks on add book button on home page 
    When the user add a new book "<Title>", "<Author>", "<Genre>", "<ISBN>", "<PublicationDate>" and "<Price>"
    And the user clicks on add book button 
    And the user clicks on delete button 
    Then the book should be deleted from the books list

    Examples:
    |Title                          |Author                |Genre        |ISBN            |PublicationDate|Price|
    |Our mothers tales              |Dr.BU Taken           |Fiction      |000179356789012 |02/01/2005     |9    |


Scenario Outline: Create a book without the required fields 
    Given the user clicks on add book button on home page 
    When the user add a new book "<Title>", "<Author>", "<Genre>", "<ISBN>", "<PublicationDate>" and "<Price>"
    And the user clicks on add book button 
    Then a validation error message "<ErrorMessage>" indicating the fields are required 

    Examples:
     |Title                          |Author                |Genre        |ISBN            |PublicationDate|Price|ErrorMessage                   |
     |                               |Dr.BE Overview        |Fiction      |000123456789012 |02/08/2002     |5    |"Title is required."           |
     |ETFs                           |                      |Non-Fiction  |966034567890167 |05/02/2024     |2    |"Author is required."          |
     |Things Fall                    |My Watchlist          |             |0987654321094567|10/12/1999     |2.55 |"Genre is required."           |
     |My heart                       |Oluwo JP              |Mystery      |                |03/02/2004     |1.90 |"ISBN is required."            |
     |All of us                      |Okoli Harmony         |Fantasy      |647890354656826 |               |6    |"Publication Date is required."|


  # Potential Bugs
  # - Publication date accepts wrong format (e.g., 01/01/98765)
  # - No character limits for ISBN field
  # - Logout doesn't redirect to homepage
  # - System accepts duplicate book entries
  # - After adding or deleting a book and refreshing the page, the total book count resets to the default value of three
  
   

  # Suggested Improvements
  # - Implement search functionality
  # - Allow viewing without clicking edit
  # - Show confirmation message before deleting a book
  # - Display success message when adding/editing/deleting a book
