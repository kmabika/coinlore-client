import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Coins {
    isHidden: Boolean!
  }

  extend type Query {
    hiddenItems: [String]
  }
`;
