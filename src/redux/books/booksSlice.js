import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iaUyZfZH6pe6TOHNZlwZ/books';

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (book) => {
  const result = await axios.post(API_BASE_URL, book);
  return result.data;
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(API_BASE_URL);
  const booksArray = Object.keys(response.data).map((key) => ({
    item_id: key,
    ...response.data[key][0],
  }));
  return booksArray;
});

export const removeBookFromApi = createAsyncThunk('books/removeBookFromApi', async (bookId) => {
  await axios.delete(`${API_BASE_URL}/${bookId}`);
  return bookId;
});

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
