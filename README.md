# 🎬 Movie Search Engine

A responsive movie search application built with **React.js** and the **TMDB API**. Discover movies, explore movie posters, search for your favorite titles, and create your own personal collection of favorite movies.

## ✨ Features

- **Movie Search:** Search for movies by their titles using movie data from TMDB.
- **Movie Discovery:** Browse and explore available movies.
- **Favorites Management:** Add or remove movies from your personal favorites list.
- **Persistent Favorites:** Favorites are stored in Local Storage, so your collection remains available even after refreshing the page.
- **Dynamic UI:** Movie cards and favorite buttons update dynamically based on user interactions.
- **Client-Side Routing:** Navigate between the Home and Favorites pages without reloading the application.
- **Responsive Design:** Clean and user-friendly interface designed for different screen sizes.

## 🛠️ Tech Stack

| Technology        | Purpose                                                                            |
| ----------------- | ---------------------------------------------------------------------------------- |
| React.js          | Builds the user interface using reusable components and manages application state. |
| JavaScript (ES6+) | Handles application logic, events, data processing, and interactions.              |
| HTML5             | Provides the structure of the application.                                         |
| CSS3              | Handles styling, layouts, animations, and responsive design.                       |
| React Router DOM  | Manages navigation between different pages without full page reloads.              |
| Context API       | Shares favorite movie data across components without prop drilling.                |
| Local Storage     | Persists favorite movies in the browser across page refreshes.                     |
| TMDB API          | Provides movie information, search results, and poster images.                     |
| Vite              | Provides a fast development environment and application build tooling.             |
| Git & GitHub      | Used for version control and source code management.                               |

## 📂 Project Structure

```text
movie-search-engine/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   └── MovieContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Favorites.jsx
│   │
│   ├── css/
│   │   ├── App.css
│   │   ├── MovieCard.css
│   │   └── Favorites.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

*Note: The folder structure above is illustrative. Adjust it to match your actual project.*

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd movie-search-engine
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## 🌐 API Integration

This project uses the **TMDB (The Movie Database) API** to retrieve movie information and poster images.

Movie poster images are loaded using TMDB's image service.

API Documentation: [https://developer.themoviedb.org/docs](https://developer.themoviedb.org/docs)

## 📸 Screenshots

*Add screenshots of your application here.*

You can add screenshots by creating a `screenshots` folder in the project and referencing the images:

```markdown
![Home Page](screenshots/home.png)
![Favorites Page](screenshots/favorites.png)
```

## 🎯 Learning Outcomes

Through this project, I practised:

- Building reusable React components.
- Managing shared state using Context API.
- Working with external APIs.
- Implementing client-side routing.
- Handling user interactions and dynamic UI updates.
- Using Local Storage for persistent data.
- Organizing a React project into reusable components and pages.

## 👨‍💻 Author

**Prajot Dviwedi**

- GitHub: [Prajot-Dviwedi](https://github.com/Prajot-Dviwedi)

---

*Built with React.js and a passion for learning web development.*
