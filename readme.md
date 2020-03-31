# MargoStats

## Stack

- **Front-end**

  Written in TypeScript with Next.js framework and Apollo Client (GraphQL) for fetching data.

- **Back-end**

  Under `server` folder.

  Express, Apollo (GraphQL), x-ray with TypeScript.

## Development

In the beginning you must compile TypeScript on server to JS with `npm run build-server`.

Run `node server` to start front-end and back-end at the same time (on port 80).

Development front-end server: `npm run dev` (it will start on port 3000).

## Production

At first, you have to build client and server with `npm run build`, then just run `node server.js` with NODE_ENV environment variable set to "production".

## Environment variables
```
DAILY_STATS_INTERVAL=2
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
HOSTNAME=localhost
PORT=80
NODE_ENV=
```