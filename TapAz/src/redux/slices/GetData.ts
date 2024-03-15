
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

export const GetData = createAsyncThunk('app/appConfiguration', async () => {
    
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s`)
     
    return response.data;
});

const App = createSlice({
    name: 'AppConfiguration',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(GetData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(GetData.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

export const getData = App.reducer;