import express from "express";
import { books } from "./books";

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
    res.send("hello from server");
});

//GET /books
server.get("/books", (req, res) => {
    res.json({ books });
})

//POST /books
server.post("/books", (req, res) => {
    const book = req.body;

    books.push(book);
    res.json({ book });
    res.status(201).json({book})
})

//GET /book/:id
server.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find((book) => book.id === id);
    if (!book) {
        res.sendStatus(404);
    }
    res.json(book)
})

//DELETE /books/:id
server.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
        res.sendStatus(404)
    }
    const book = books[bookIndex];
    books.splice(bookIndex, 1);
    res.json({ book });
})

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
    
})