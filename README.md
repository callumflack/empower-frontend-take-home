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
