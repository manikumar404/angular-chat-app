import {gql} from "apollo-server-express";

export const typeDefs = gql`
  type Leave {
    id: ID!
    startDate: String!,
    endDate: Int!,
    numberOfDays: Int!,
    title: String!,
    content: String!
    status: String!
    leaveTypeSetting: LeaveTypeSetting!
  }
  type LeaveTypeSetting {
    leaveType: String!,
    daysCount: String!,
    leavesTaken: Int
  }

  type Query {
    leaves:[Leave]
  }
`;
