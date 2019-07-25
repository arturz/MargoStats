# MargoStats

## Stack

- **Front-end**

  Written in TypeScript with Next.js framework and Apollo Client (GraphQL) for fetching data.

- **Back-end**

  Path: server/src/

  Written in TypeScript with Express, Apollo Server (GraphQL) and Agenda for scheduling jobs.

## Development

In the beginning you must compile TypeScript on server to JS - run `npm run build-server`.

Run `npm run x` or `node server` to start front-end and back-end at the same time (on port 80).

If you would like to run only client, run `npm run dev` (it will start on port 3000).

## Production

At first, you have to build client and server. To accomplish it you just have to run `npm run build`.

Then just run `node server.js` with NODE_ENV environment variable set to "production".