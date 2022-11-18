import * as express from 'express'
import {initGraphql} from "./app/graphql-server";
const app = express();
const server = initGraphql(app)
app.listen({port:4001}, () =>
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
);

