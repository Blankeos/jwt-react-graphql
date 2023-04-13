# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

### Carlo's Notes

#### Setting Up

1. I `npx typeorm`
2. Configured the `data-source.ts` with my postgres credentials

#### Express and Apollo

3. Ran the `index.ts` to migrate
4. Installed express and edited `index.ts` to contain the express server
5. Added Apollo and applyMiddleware (Used `typeDefs` and `resolvers` syntax for now)
6. `nodemon --exec ts-node src/index.ts`

#### TypeGraphQL

6. Created `UserResolver` that refactors the `typeDefs` and `resolvers` code.
7. `buildSchema` in Apollo

#### Auth in TypeGraphQ:

8. `@Mutation` for register
