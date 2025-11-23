# Hypermedia-project-part-2-connect4-MAX-BRU
Development of a Connect Four web game for two players, implemented using HTML, CSS, and vanilla JavaScript. Features include player naming, score tracking, win/draw detection, and chip drop animation.


# MAX & BRU CONNECT 4 | Hypermedia Project

## 1. 🎯 Project Goals

This project involves developing an implementation of the popular board game **Connect Four** as a two-player web game.

### Game Rules

* [cite_start]The game is played on a vertical grid that is 6 rows high and 7 columns wide[cite: 6].
* [cite_start]Players take turns dropping colored tokens (Red or Yellow) into one of the seven columns[cite: 6].
* [cite_start]The pieces fall straight down, occupying the lowest available space within the column[cite: 7].
* [cite_start]The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens[cite: 8].

---

## 2. 🚀 Technical Implementation

The project has been developed using fundamental web technologies:

* **HTML5 (`index.html`):** Provides the game structure, the initial setup screen for player names, and the container for the game board.
* **CSS3 (`style.css`):** Manages the visual presentation, responsive layout, and thematic styles (Vibrant Red background, full-width Navy Blue header, Red and Yellow chip colors). It also handles the display/hiding of screens (`setup-screen` vs `game-screen`) and the styles for the end-game modal.
* **JavaScript (`script.js`):** Contains all the functional game logic:
    * State management (the 6x7 board matrix).
    * Detection of the lowest available drop row (`getLowestAvailableRow`).
    * Turn management and score updates.
    * Logic for checking win and draw conditions (`checkWin`, `checkDraw`).
    * Implements a "dropping" animation for the chips using CSS transitions (`transform`).

---

## 3. ✨ Design and Style (Considerations)

While the style was not strictly fixed by the example, a design has been adopted that enhances the user interface (UI) and uses contrasting colors:

| Element | Style | Justification |
| :--- | :--- | :--- |
| **Header** | Navy Blue (`#00008b`), full width. | Provides a strong contrast against the background and maximizes the visual impact of the logo. |
| **Background (`body`)** | Vibrant Red (`#FF0000`). | Creates a striking, classic game theme as requested. |
| **Logo** | The image `connect4.png` is used as the main logo. | [cite_start]Improves the UI and aligns with the suggestion to be creative[cite: 45]. |
| **Start Button** | "START" text in Navy Blue. | Achieves brand uniformity with the header and board color. |
| **Game Board** | Navy Blue. | Uses the same color as the header for visual consistency, simulating the original game's structure color. |

---

## 4. 🛠️ Tool and Framework Usage

[cite_start]No external frameworks or libraries (such as Bootstrap) were used[cite: 43].

The implementation relies exclusively on **HTML5, CSS3, and vanilla JavaScript**, which ensures:

1.  [cite_start]**Code Clarity and Correctness:** The code is lightweight and easily traceable within `script.js`, which is key to evaluation[cite: 46].
2.  **Fundamental Approach:** Fulfills the project's requirement to develop the core logic using standard web technologies.

---

## 5. 💡 Potential Enhancements

The code is designed to be extensible. [cite_start]The following features could be added to expand the requirements and potentially increase the project's mark[cite: 47]:

* **AI (Computer Player):** Implementing a computer opponent (e.g., using a Minimax algorithm).
* **Advanced Animation:** Enhancing the visualization of the "four-in-a-row" winner (e.g., highlighting the winning chips).
* **Data Persistence:** Storing player names and the overall score permanently using browser `localStorage`.
