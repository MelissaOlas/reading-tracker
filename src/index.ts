import express, { request, response } from "express";
import { books } from "./books";

const server = express();

server.get("/", (request, response) => {
    response.send("hello from server");
});

//GET /books
server.get("/books", (request, response) => {
    response.json({ books });
})

//POST /books
server.post("/books", (request, response) => {
    //create & return new reading sheet
    response.send("POST request works");
})

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
    
})