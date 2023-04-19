Ascend The Atlas, a geography based roguelike game that is nowhere near finished, but has a working shell.

This project is a geography guessing game with roguelike elements, where players are presented with multiple-choice questions about countries and have to guess the correct answer.

Features
Randomly generated geography questions about countries
Multiple choice answer options
Roguelike elements such as level progression, perks/penalties/modifiers, and a timer
Dynamic scaling difficulty adjustment based on player performance
Customizable gameplay settings

NOTE: currently reworking and expanding how penalties are applied to ensure greater structural consistency. Best features currently unavailable. Do not play until i get this finished.

the game was built using a modular and scalable architecture, leveraging React for the user currently-non-existent interface and a series of custom reducers for local state management. The design choices were made to ensure that the codebase remains maintainable, testable, and easily extensible.

State Management
The game state is managed using custom reducers, which are compartmentalized for clarity and then merged at the main page to create a single source of truth for the application's state. This makes it easier to track and debug changes in the state as the game progresses. The reducer functions are responsible for handling state updates, ensuring that state mutations are performed in a predictable manner. This is necessary because although the game is pretty simple right now, i wanted to leave the door open for interesting and complex interactions between the player, their choices, the options available and the unlcoks/perks they choose.

Dispatch Handlers and Helpers
The application's logic is primarily handled by helper functions and dispatch handlers, which are responsible for executing actions and managing the side effects. This approach allows for a clear separation of concerns between the UI components and the business logic. By keeping the components focused on rendering and user interactions, the codebase remains modular and easier to maintain.

Helpers play a crucial role in managing the game mechanics, such as generating questions, handling user input, and applying game modifiers. By encapsulating these functionalities within helper functions, the codebase remains organized, and the logic can be easily reused and tested.

Handlers and Application Flow
A series of handlers are used to orchestrate the application's flow and manage the interactions between the different components and the local state managed by custom reducers. Handlers are responsible for invoking the appropriate helper functions and dispatching actions to update the state. By centralizing the control flow within these handlers, the application becomes more manageable and easier to understand.

The combination of local state management through custom reducers, modular React components, and a clear separation of concerns through handlers and helper functions results in an architecture that is easy to maintain, test, and extend.
