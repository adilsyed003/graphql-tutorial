export const typeDefs = `#graphql
 type Game{
    id : ID!
    title : String!
 } 
 type Review{

    rating : String!
    content : String!
 }
 type Query{
    reviews : [Review]
 }

`;
