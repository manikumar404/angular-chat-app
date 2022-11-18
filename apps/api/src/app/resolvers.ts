import {leaves} from "./data";

export const resolvers = {

  Query: {
    leaves: () => leaves,
  }
};
