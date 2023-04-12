import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./UserResolver";

// AppDataSource.initialize()
//   .then(async () => {
//     // console.log("Inserting a new user into the database...");
//     // const user = new User();
//     // user.firstName = "Timber";
//     // user.lastName = "Saw";
//     // user.age = 25;
//     // await AppDataSource.manager.save(user);
//     // console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await AppDataSource.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log(
//       "Here you can setup and run express / fastify / any other framework."
//     );
//   })
//   .catch((error) => console.log(error));

(async () => {
  const app = express();
  app.get("/", (req, res) => res.send("hello"));

  await AppDataSource.initialize();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Express server started");
  });
})();