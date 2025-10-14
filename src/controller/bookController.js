import bookService from '../service/bookService.js';

const createBook = async (req, res) => {
    try {
        const newBook = await bookService.createBook(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar um novo livro' });
    }
};

const getAllBooks = async (_, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livros' });
    }
};

const updateBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await bookService.updateBook(id, req.body);
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o livro' });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await bookService.deleteBook(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar o livro' });
    }
};

export default {
    createBook,
    getAllBooks,
    updateBookById,
    deleteBook,
};
