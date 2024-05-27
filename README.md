## Getting Started with Next JS

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 12.x)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Firebase](https://firebase.google.com/): Set up a Firebase project and obtain your Firebase configuration.

### Installation

1. Clone the repository:

    ```
    git clone https://github.com/sufyan14/react_with_firebase.git
    cd nextjs-project
    ```

2. Install the dependencies:

    ```
    npm install
    ```

    or

    ```
    yarn install
    ```

3. Configure Firebase:

    Copy your own Firebase configuration and paste it into the appropriate environment variables in your `.env.local` file:

    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
    ```

### Running the Development Server

Start the development server with the following command:

    ```
    npm run dev
    ```

    or

    ```
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your application running.

### Building for Production

To create an optimized production build, run:

    ```
    npm run build
    ```

    or

    ```
    yarn build
    ```

### Deploying to Vercel

Follow the [Vercel deployment documentation](https://vercel.com/docs) to deploy your application to Vercel.

## Project Structure

- `app/`: Contains all the application routes and API endpoints.
- `components/`: Reusable UI components.
- `public/`: Static assets like images, fonts, etc.
- `types/`: TypeScript type definitions.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://material-ui.com/)
- [Firebase](https://firebase.google.com/)
- [Vercel](https://vercel.com/)
