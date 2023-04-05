The use of reducers and the Redux-style approach can be helpful in managing complex application state and handling different interactions between components. While it might seem overkill for a simple application, it can be beneficial when the application grows in complexity.

Here are some ideas for features or functionality that can help you make better use of your reducers and showcase your ability to manage complex state:

Customization options: Allow users to customize their game experience by selecting specific regions or countries to include/exclude from the game. The gameDataReducer can be used to manage the available and unavailable countries and regions based on the user's preferences.

Modifiers: Implement game modifiers that can be purchased with in-game currency or unlocked through achievements. Modifiers can alter the gameplay in various ways, such as providing hints, eliminating wrong options, or doubling points earned for a correct answer. The gameModifiersReducer can handle the available and applied modifiers.

Leaderboard: Implement a leaderboard that displays the top scores of all players. You can use the gameStateReducer to manage the user's score and level, and send this information to a backend service to update the leaderboard.

Achievements: Introduce achievements based on user performance, such as answering a certain number of questions correctly in a row, reaching specific score milestones, or unlocking modifiers. The gameStateReducer can be used to manage user progress towards these achievements.

Game modes: Introduce different game modes, such as timed rounds, multiplayer mode, or themed quizzes (e.g., flags from a specific continent). The gameVariablesReducer can be used to manage the settings for each game mode.

By implementing these features, you can showcase your ability to manage complex state and create a more engaging application for your portfolio. It demonstrates that you can handle state management effectively using reducers and make your application scalable for future enhancements.

GEOGRAPHY ROGUELIKE
every 5 guesses it gets harder

_option mods_ affect the multiple choices

- language of the given country
- random language
-

_flag mods_ affect the flag classname

_state mods_ affect state variables

- add multiple choice option
- add none of the above option
-

trade offs:

- remove 1 country option, gain 1 country option for next two rounds
- get capital city clue, next round is capital city question
- get continent, next 2 rounds are nations only from that continent
- get languages, next round names are in that language

perks:

- lives (wrong guess allowace)
- filters
- clues
- flip flag
- pass
- hard countries pushed to end

clue types:

- population
- neighbours
- languages
- continent
- subregions
- capital city
- bordering countries
- timeZone

penalties:

- descriptive text (no flag)
- expand pool
- chance flag is upside down
- moving buttons
- timer
- sometimes only portion of flag shown
- chance of language change
- chance of anagramised name
- chance of no answer being correct
- name the bordering country
