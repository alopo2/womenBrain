import Book from '../model/BookModel.js';

const createBook = async (bookData) => {
  try {
    const existingBook = await Book.findOne({
      title: bookData.title,
      author: bookData.author,
    });

    if (existingBook) {
      throw new Error('Este livro já está cadastrado.');
    }

    const newBook = await Book.create(bookData);
    return newBook;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllBooks = async () => {
  try {
    const books = await Book.find();
    return books;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateBook = async (id, updatedData) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, updatedData, {
      new: true, 
      runValidators: true, 
    });

    if (!updatedBook) {
      throw new Error('Livro não encontrado.');
    }

    return updatedBook;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteBook = async (id) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      throw new Error('Livro não encontrado.');
    }
    return deletedBook;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook,
};