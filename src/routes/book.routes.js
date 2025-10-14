import bookController from '../controller/bookController.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.post('/', bookController.createBookController);
bookRoutes.get('/', bookController.getAllBooksController);
//bookRoutes.get('/:id', bookController.getBookById); Implementar depois
bookRoutes.patch('/:id', bookController.updateBookByIdController);
bookRoutes.delete('/:id', bookController.deleteBookController);

export default bookRoutes;