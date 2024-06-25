# React News App Portal

# Overview : 
This News App is a React-based application that fetches and displays news articles using the GNews API. It allows users to search for articles, paginate through results, and save favorite articles. The app supports dark and light themes, and favorites are persisted using local storage. It handles loading and error states gracefully and is responsive, ensuring a good user experience on various devices.

# Component and Functionality Descriptions :

`App.js`

    1) Purpose: Main component managing state, fetching news, handling search, pagination, theme toggling, and managing favorites.
    2)Functionality:
       State Management: Uses React hooks and Redux for managing news articles, current page, search term, and theme.
       API Calls: Dispatches actions to fetch news articles from GNews API.
       Pagination: Manages pagination logic to display a subset of articles.
       Favorites Management: Adds/removes articles from favorites, persists favorites using local storage.
       Theme Toggling: Toggles between dark and light themes, applying appropriate classes to the body.
       Duplicate Message: Displays a temporary message when an article is already in the favorites list.
       
`newsSlice.js`

    1) Purpose: Redux slice for managing news-related state.
    2) Functionality:
          State: Manages the articles, loading status, error messages, current page, and total pages.
          Async Thunk: Defines asynchronous thunk action for fetching news articles from the API.
          Reducers: Handles state updates for fetched news, pagination, loading, and errors.
          
`favoritesSlice.js`

      1) Purpose: Redux slice for managing favorites state.
      2)Functionality:
           State: Manages the list of favorite articles.
           Reducers: Handles actions to add and remove articles from the favorites list.
           Local Storage: Loads and saves favorites to local storage for persistence.
           
`Loading.js`

       1) Purpose: Functional component displaying a loading animation.
       2) Functionality: Shows a centered loading spinner during API calls.

# Additional Files and Features :

`App.css`

   1) Purpose: Stylesheet for the application.
   2) Functionality:
         Theme Styles: Defines styles for dark and light themes.
         Responsive Design: Uses CSS Grid and Flexbox for responsive layouts.
         Component Styles: Styles for buttons, pagination, messages, and the overall layout.

#Features :

    Responsive Design: Adjusts layout based on screen size using CSS Grid and Flexbox.
    Error Handling: Displays error messages if API calls fail.
    Loading State: Shows a loading animation while fetching data.
    Dark/Light Theme: Switches themes based on user preference.
    Favorites Management: Adds/removes articles to/from favorites with local storage persistence.
    Pagination: Divides articles into pages, allowing navigation through results.

    
* --This project demonstrates the use of React, Redux, and modern JavaScript features to create a responsive and user-friendly news application.-- *

# Screenshots :

![Laptop View](https://github.com/Kunal-Deep011/News-Application/assets/117732649/17601a47-bc84-4dd3-8ec2-32794cf646fe)

![Tab View](https://github.com/Kunal-Deep011/News-Application/assets/117732649/373a6c4c-7a60-406e-95de-ec7a496388df)
      
![Mobile View](https://github.com/Kunal-Deep011/News-Application/assets/117732649/cae39ff0-1d25-4e00-b472-aaad6176bd3a)
       
![Dark Mode View](https://github.com/Kunal-Deep011/News-Application/assets/117732649/bf82a168-ce45-4dc3-9191-f10c405b0f6e)

![Light mode View](https://github.com/Kunal-Deep011/News-Application/assets/117732649/d35c7098-0cfc-420a-8a7e-b456db45287a)

