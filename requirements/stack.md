# Stack & project structure

## Basic file structure

.
├── client/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── routes/
│   │   │   ├── __root.tsx
│   │   │   ├── about.lazy.tsx
│   │   │   └── index.lazy.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── routeTree.gen.ts
│   │   └── vite-env.d.ts
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── requirements/
│   ├── brief.md
│   ├── setup.md
│   └── stack.md
├── server/
│   ├── index.ts
│   ├── mockData.ts
│   └── types.ts
├── .gitignore
├── package.json
└── tsconfig.json

## Client side

This stack relates only to the client side of the application.

The client app is a [Vite React app](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) which uses [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/start/overview) for routing and [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview) to query the backend mock API.

Using [Shadcn](https://ui.shadcn.com/docs) for UI components, which in turn consumes [Radix UI primitives](https://www.radix-ui.com/primitives/docs/overview), and [Tailwind CSS](https://tailwindcss.com/docs/installation) for styling.

Using [TanStack Forms](https://tanstack.com/form/latest/docs/overview) for form handling, and [Zod](https://github.com/colinhacks/zod) for form validation.

The package manager is npm.

## Server side

[Hono](https://hono.dev/docs/) provides mock data for the client app.
