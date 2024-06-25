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

# Features :

    Responsive Design: Adjusts layout based on screen size using CSS Grid and Flexbox.
    Error Handling: Displays error messages if API calls fail.
    Loading State: Shows a loading animation while fetching data.
    Dark/Light Theme: Switches themes based on user preference.
    Favorites Management: Adds/removes articles to/from favorites with local storage persistence.
    Pagination: Divides articles into pages, allowing navigation through results.

    
# Project Conclusion :

The News App project showcases the effective use of React and Redux to create a modern, responsive, and user-friendly news application. By integrating with the GNews API, the app fetches and displays the latest news articles, allowing users to search for specific topics and paginate through results seamlessly. The inclusion of a dark/light theme toggle enhances the user experience, catering to individual preferences.

The project demonstrates robust state management using Redux, ensuring efficient handling of user inputs, API responses, and application state. The local storage implementation for favorites ensures that users' preferences are preserved across sessions, providing a consistent user experience.

Error handling and loading states are meticulously managed, ensuring that users are informed of the app's status during network requests. The responsive design, achieved through CSS Grid and Flexbox, ensures that the app functions well on a variety of devices, from desktops to mobile phones.

Overall, this project highlights the importance of combining modern web development techniques with thoughtful user experience design to build a practical and enjoyable application. The News App serves as a solid foundation for further enhancements, such as more advanced search filters, user authentication, or additional news sources, demonstrating its potential for real-world application.

# Screenshots :

    Laptop View : 
![Laptop View](https://github.com/Kunal-Deep011/News-Application/assets/117732649/f00e9719-8b11-43cb-adc2-9a9cddbf6e0f)

    Tablet View :
![Tablet View](https://github.com/Kunal-Deep011/News-Application/assets/117732649/860a70c0-3b8c-4695-954a-f85a8e17874e)

    Mobile View :
![Mobile View](https://github.com/Kunal-Deep011/News-Application/assets/117732649/cae39ff0-1d25-4e00-b472-aaad6176bd3a)

    Dark Mode Theme :
![Dark Mode View](https://github.com/Kunal-Deep011/News-Application/assets/117732649/bf82a168-ce45-4dc3-9191-f10c405b0f6e)

    Light Mode Theme :
![Light Mode View](https://github.com/Kunal-Deep011/News-Application/assets/117732649/3683d659-93cd-42e8-b2fb-8b8e12d981ae)
