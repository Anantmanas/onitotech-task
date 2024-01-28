# React User Management App with Vite

This is a simple React application for managing user data, built with Vite. It includes a multi-step form for adding users, and the user information is displayed in a table using Redux for state management.

Features
Multi-step form for user input.
User data displayed in a table.
Redux integration for state management.
Toast notifications for user feedback.
Getting Started

Clone the repository.

bash
Copy code
git clone https://github.com/your-username/react-user-management-vite.git
cd react-user-management-vite


Install dependencies.

bash
Copy code
npm install


Run the application.

bash
Copy code
npm run dev


Open your browser and visit http://localhost:3000.

Usage
Fill in user details using the multi-step form.
View the added users in the table.
Toast notifications will appear for successful user additions.
Technologies Used
Vite
React
Redux
MUI (Material-UI)
TypeScript
React-Data-Table
react-toastify

Feel free to explore and customize the application according to your needs. Happy coding!


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
