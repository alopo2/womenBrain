import bookController from '../controller/bookController.js';
import express from 'express';

const router = express.Router();

router.post('/books', bookController.createBook);
router.get('/books', bookController.getAllBooks);
//router.get('/books/:id', bookController.getBookById); Implementar depois
router.patch('/books/:id', bookController.updateBookById);
router.delete('/books/:id', bookController.deleteBook);

export default router;