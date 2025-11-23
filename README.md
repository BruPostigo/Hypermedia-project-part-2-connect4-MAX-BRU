# Hypermedia-project-part-2-connect4-MAX-BRU
Development of a Connect Four web game for two players, implemented using HTML, CSS, and vanilla JavaScript. Features include player naming, score tracking, win/draw detection, and chip drop animation.


# Connect Four Web Game

## I. Project Overview and Objective

This project delivers a browser-based implementation of the classic board game, **Connect Four (Conecta Cuatro)**, developed for two players.

The primary objective was to build a fully functional, two-player web game using core web technologies, meeting the specified requirements for game logic, UI/UX, and implementation documentation.

### Core Game Mechanics

* Grid Size: 6 rows by 7 columns.
* Gameplay: Players take turns dropping either a Red or Yellow token into any available column.
* Gravity: Tokens fall to the lowest unoccupied space in the selected column.
* Winning Condition:The first player to form a line of four consecutive tokens (horizontally, vertically, or diagonally) wins the round.

***

## II. Technical Implementation

The game is built entirely using standard web development languages, relying on no external frameworks or libraries.

### Technologies Used

| File | Technology | Role in the Project |
| :--- | :--- | :--- |
| `index.html` | **HTML5** | Defines the structure: the setup screen for name input, the game board container, and the end-game modal. |
| `style.css` | **CSS3** | Handles all visual aspects, including the custom color scheme (Vibrant Red background, Navy Blue header), board layout, responsiveness, and the smooth chip drop animation using CSS transitions. |
| `script.js` | **Vanilla JavaScript** | Contains the core application logic: board state management (6x7 array), turn switching, detecting available rows, checking for win conditions (`checkWin`), and updating the score and UI. |

***

## III. Design and Custom Styling

The user interface was styled to be clear, engaging, and themed after the classic game, incorporating the following design decisions:

Color Scheme:** A combination of **Vibrant Red (`#FF0000`)** for the background and **Navy Blue (`#00008b`)** for the header, game board, and primary buttons was chosen for high contrast and visual appeal.
Header and Branding:** The header strip is designed to span the **full width** of the screen, creating a distinct visual separation from the main content. The custom logo (`connect4.png`) is centered within this header.
* **Interface Flow:** The game employs a clean, modal-based system for transitioning between the name input screen, the gameplay itself, and the end-of-round message, ensuring a smooth user experience.
* **Button Styling:** The main "START" button uses the project's primary Navy Blue color for thematic consistency.

***

## IV. Potential Future Enhancements

The current codebase is stable and designed for future expansion:

* **Computer Opponent (AI):** Implementation of an AI player, likely utilizing a search algorithm like Minimax, to allow for single-player functionality.
* **Persistence:** Integrating `localStorage` to save player scores permanently across browser sessions.
* **Visual Feedback:** Adding animations or highlights to the four chips that constitute the winning line when a game ends.
