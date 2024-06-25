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
       2) Functionality: Shows a centered loading spinner during API calls

