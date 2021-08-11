import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '.';

const initialState = {
  data: [{
    id: 1,
    name: 'Productivity',
  }, {
    id: 2,
    name: 'Sport'
  }, {
    id: 3,
    name: 'Hobbie'
  }],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

  },
})

export default categorySlice.reducer;