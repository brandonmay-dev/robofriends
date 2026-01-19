# RoboFriends

RoboFriends is a simple React application that displays a list of robot profiles and allows users to search through them in real time.  
The project is built with React, Vite, and Tachyons, and uses an external API for robot data.

---

## Features

- Fetches robot data from an external API
- Real-time search filtering
- Responsive card layout
- Scrollable card list
- Clean UI with gradient background
- Built with modern React tooling (Vite)

---

## Tech Stack

- React
- Vite
- Tachyons
- JavaScript (ES6+)
- CSS

---

## Installation & Setup

1. Clone the repository:

   git clone [https://github.com/your-username/robofriends.git]

2. Navigate into the project folder:

   cd robofriends

3. Install dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open your browser and visit:

   [http://localhost:5173]

---

## Project Structure

src/
├── assets/
│ └── Abres-j9MaM.woff
├── components/
│ ├── Card.jsx
│ ├── CardList.jsx
│ ├── SearchBox.jsx
│ └── Scroll.jsx
├── containers/
│ └── App.css
│ └── App.jsx
├── index.css
└── main.jsx
└── robots.jsx

---

## Data Source

Robot data is fetched from:
[https://jsonplaceholder.typicode.com/users]

Robot images are generated using:
[https://robohash.org/]

---

## Styling

- Tachyons is used for layout, spacing, and utility styles
- Cards use a neutral background to complement the site gradient
- The header and search box are styled for clarity and accessibility

---

## What This Project Demonstrates

- Component-based architecture
- State management and lifecycle methods
- Controlled inputs for search functionality
- Passing props between components
- Clean UI design with minimal CSS

---

## Future Improvements

- Convert the App component to hooks
- Add loading and error states
- Improve accessibility
- Deploy the app (Netlify or Vercel)
- Add testing

---

## Author

Built by Brandon May  
Learning React and modern frontend development

---

## License

This project is open source and available under the MIT License.
