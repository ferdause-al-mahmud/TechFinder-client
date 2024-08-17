# TechFinder

Server side: (https://github.com/ferdause-al-mahmud/TechFinder-server)

Live Site URL: [TechFinder](https://tehcfinder.web.app)

## Overview

TechFinder is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), focusing on creating a product-based e-commerce or catalog system. Key functionalities include data management, user interactions, and UI design, with a specific emphasis on efficient data handling, user authentication, and responsive design.

## Best Features

1. **Pagination for Efficient Data Loading**: The backend server includes pagination to handle large datasets, ensuring that only a subset of products is loaded at a time. This improves performance and user experience by preventing the entire dataset from being fetched at once.

2. **Comprehensive Filtering and Sorting**: Users can filter products by multiple criteria such as brand name, category, and price range, and sort products based on price or date added. This provides a flexible and intuitive way for users to find products that match their preferences.

3. **Multi-Authentication Options**: The project includes both Google Authentication and Email/Password authentication via Firebase. This offers users a choice of how they want to log in, enhancing the accessibility and security of the application.

## Technology Used

- **Frontend**: React, Redux, React Router, Tanstack Query
- **Backend**: Firebase Authentication, postImages/ImgBB for image uploads
- **Styling**: CSS,daisyUi, Material-UI,ta
- **Deployment**: Firebase Hosting

## Getting Started

To run this project on your local device, follow these steps:

### Prerequisites

Ensure you have the following installed on your device:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository**
2. **npm install**
3. **Create a .env.local file in the root of the project and add the necessary environment variables for firebase ,imagebb api,backendAPIurl**
4. **npm run dev**
