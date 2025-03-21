export const LogTypeDefs = `#graphql
  enum LogLevel {
    DEBUG
    ERROR
    INFO
    TRACE
    WARN
  }

  type Log {
    id: Int!
    time: DateTime!
    message: String!
    level: LogLevel!
  }

  type Query {
    logs: [Log!]
  }

  type Mutation {
    addLog(
      time: DateTime!
      message: String!
      level: LogLevel!
    ): [Log!]
  }
`;
