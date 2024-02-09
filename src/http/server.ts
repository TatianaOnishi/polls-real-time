import fastify from "fastify";
import cookie from "@fastify/cookie";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";

// fastify é um sistema de roteamento
const app = fastify();

app.register(cookie,{
	secret: "polls-app-nlw",  
	hook: "onRequest", 
} );

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

// Quando acessar a localhost nesta porta, irá para a API
app.listen({ port: 3333 }).then(() => {
	console.log("HTTP server running");
});
