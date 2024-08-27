import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js"
const resolvers = {
    Query: {
        reviews() {
            return [{
                rating: "any games",
                content: 'Kate Chopin',
            }]
        },
        games() {
            return [{
                name: "any gamesss",
            },
            {
                name: "adil game",
            },
            {
                name: "adsss",
            },]
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})
console.log("server is running on port ", { url })
