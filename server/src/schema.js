const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the home page grid"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track
    "Fetch a specific module, provided a module's ID"
    module(id: ID!): Module!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this tracks contains"
    modulesCount: Int
    "The Track's complete description, can be in Markdow format"
    description: String
    "The number of time a Track has been viewed"
    numberOfViwes: Int
    "The track's complete array of modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Mutliple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Modules length in minutes"
    length: Int
    "The module text-based description, can be in a Markdown format. In case of a video, it will be the enriched transcript"
    content: String
    "The module video url, for video-based modules"
    videoUrl: String
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
