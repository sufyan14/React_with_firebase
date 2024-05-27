Getting Started
Prerequisites

Make sure you have the following installed:

    Node.js (>= 12.x)
    npm or Yarn
    Firebase: Set up a Firebase project and obtain your Firebase configuration.

Installation

    Clone the repository:

    bash

git clone https://github.com/sufyan14/react_with_firebase.git
cd react_with_firebase

Install the dependencies:

bash

npm install

or

bash

yarn install

Configure Firebase:


makefile

  apiKey: "AIzaSyA1_6x4samLoCIBTDG2O7ocf-66Y91BvXA",
  authDomain: "react-checkins.firebaseapp.com",
  projectId: "react-checkins",
  storageBucket: "react-checkins.appspot.com",
  messagingSenderId: "103621130626",
  appId: "1:103621130626:web:30bda7bc9ef552b53d779b"

Running the Development Server

Start the development server with the following command:

bash

npm run dev

or

bash

yarn dev

Open http://localhost:3000 in your browser to see your application running.
Building for Production

To create an optimized production build, run:

bash

npm run build

or

bash

yarn build

This will generate a .next folder with the compiled files. You can then start the production server with:

bash

npm start

or

bash

yarn start

Deploying to Vercel

Follow the Vercel deployment documentation to deploy your application to Vercel.
Project Structure

    pages/: Contains all the application routes and API endpoints.
    components/: Reusable UI components.
    styles/: Global and component-level styles.
    public/: Static assets like images, fonts, etc.
    lib/: Utility functions and custom hooks.
    types/: TypeScript type definitions.

Contributing

Contributions are welcome! Please follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature/your-feature-name).
    Make your changes.
    Commit your changes (git commit -m 'Add some feature').
    Push to the branch (git push origin feature/your-feature-name).
    Open a pull request.

Acknowledgements

    Next.js
    React
    TypeScript
    Material-UI
    Firebase
    Vercel
