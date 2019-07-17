
const { gql } = require("apollo-server");

const typeDefs = gql`
  type Course {
    title: String,
    author: String,
    description: String,
    url: String
  }

  type User {
    name: String
  }

  type Query {
    courses: [Course],
    users: [User]
}`;

module.exports = typeDefs;