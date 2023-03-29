# cashew-node-backend-focused-interview

## Setup
1. Run setup: `bash scripts/setup.sh`
1. Install dependencies `npm install`
1. Run the initial migration `npm run migrate`
1. Run with `npm run start`

## Project layout

1. `routes/index.js` - You'll be working mostly out of this file. Feel free to put all your route declarations here.
1. `prisma/schema.prisma` - This is the schema file for the database in Prisma's schema language. Modifications to this file can be pushed onto the database using `npm run migrate`.
1. `scripts/` - This contains some useful scripts, like how to connect to the database with the `psql` CLI with `psql_database.sh` or how to curl the backend with `curl_examples.sh`.
