import fastify from "fastify";

// fastify é um sistema de roteamento 

const app = fastify();

app.get("/hello", () => {
    return "Hello NLW"
})

// Quando acessar a localhost nesta porta, irá para a API 
app.listen({ port: 3333 }).then(() => {
	console.log("HTTP server running");
});
