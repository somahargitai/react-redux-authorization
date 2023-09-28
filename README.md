# Authorization with React

This is a simple React app that demonstrates how set up an authorization system when you store your role in Redux state. I provide here three roles: `admin`, `basic` and `public`. Admin and Basic users have access to their specific pages and all the public pages. Public pages are accessible to everyone.

What you will learn:

- setting `useAuthorization` hook for authorization
- how to hide a page from unauthorized users
- how to use a single `/settings` path and render different components based on the role

## How to run

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`
4. Open the application, usually it is `http://localhost:5173`
