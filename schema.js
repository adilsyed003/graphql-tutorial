export const typeDefs = `#graphql
 type Game{
    id : ID!
    name : String!
 } 
 type Review{
    id : ID!
    rating : String!
    content : String!
 }
 type Query{
    reviews : [Review]
    games : [Game]
 }

`;
