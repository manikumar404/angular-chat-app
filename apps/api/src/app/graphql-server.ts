import {ApolloServer} from "apollo-server-express";
import {typeDefs} from "./type-def";
import {resolvers} from "./resolvers";

export function initGraphql(app){

  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });
return server
}
