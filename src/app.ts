import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

import {} from 'graphql';

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => 'Hello world!' };

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

export const startApp = () => app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));