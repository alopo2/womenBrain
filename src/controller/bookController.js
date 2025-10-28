import bookService from '../service/bookService.js';
import { uploadFileToGCS } from '../service/fileService.js';

const createBookController = async (req, res) => {
  try {
    
    let fileInfo = null;

    if (req.file) {
      fileInfo = await uploadFileToGCS(req.file);
    }

    const newBook = await bookService.createBook({
      ...req.body,
      file: fileInfo,
    });

    res.status(201).json({ message: '📚 Livro criado com sucesso!', data: newBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o livro', error: error.message });
  }
};

const getAllBooksController = async (_, res) => {
  try {
    const books = await bookService.getAllBooks();
    return res.status(200).json({
      message: '✅ Livros encontrados com sucesso',
      data: books
    });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar livros', error: error.message });
  }
};

const updateBookByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await bookService.updateBook(id, req.body);
    return res.status(200).json({
      message: '✍️ Livro atualizado com sucesso',
      data: updatedBook
    });
  } catch (error) {
    if (error.message.includes('não encontrado')) {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao atualizar o livro', error: error.message });
  }
};

const deleteBookController = async (req, res) => {
  try {
    const { id } = req.params;
    await bookService.deleteBook(id);
    return res.status(204).send();
  } catch (error) {
    if (error.message.includes('não encontrado')) {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao deletar o livro', error: error.message });
  }
};

export default {
  createBookController,
  getAllBooksController,
  updateBookByIdController,
  deleteBookController,
};