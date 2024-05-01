# Empower Spend Tracker

## Development

Install dependancies in client and root folders:

```bash
bun install
```

```bash
cd client
bun install
```

- React for developing components
- Vite for a dev server & build tool
- React Router for client side routing
  (I would like to try @tanstack router at some point, but stuck with react router for familiarity)
- React Query for asynchronous state management
- TailwindCSS for styling
- TypeScript of course

From the root folder, to start the development client run:

```bash
bun run client
```

---

I am using Elysia.js as a backend library to send mocked JSON data to the front end to demonstrate asyncronous data transfer. I am using [Bun](https://bun.sh/) as a package manager (front and backend), JavaScript runtime, backend bundler and toolkit.

In new terminal window, to start the development server run:

```bash
bun run server
```

Open http://localhost:5173/ with your browser to see the result.

---

## Notes & Assumptions

### Auth

- This would all be behind an authentication barrier and check for an authenticated user.
- If I were creating a login/signup then I would have private routes that verify the user and only render pages if the user is authenticated. See example at `client/components/PrivateRoute.tsx`.
- An authentication token from the backend would often be stored in http only cookie or local storage depending on the implementation from the API.
- A login endpoint might return userData that I would store in a context provider or state management tool to authenticate and authorize, and use the data easily between components.
- In this case all the API calls would probably have an authentication token with a userId and api key.

### Styles

- For the sake of time/demo I am styling the app for default desktop size, but normally I would make sure it responds to all supported screen sizes.

## Other Considerations

- I left a comment in a file, but rather than getting all transactions on the account deatils page, maybe for that situation it would be more performant to load transactions by accountId.
- For fetching all transactions, I'd imagine over time it will grow large in size. We might be able to leverage either pagination and/or lazy loading for this.
- For adding, viewing, updating, and removing tracker categories, I used the react context api for state. This is just for demo purposes as it will not persist over refreshes. Normally in this scenerio I would be calling a post, update, or delete endpoint to update the database, then I would refresh the get query for user trackers.
