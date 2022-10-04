import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedVideos } from "./relatedVideosAPI"


const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ''

}
export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos',
    async ({tags,id}) => {
        const relatedVideos = await getRelatedVideos({tags,id})
        return relatedVideos

    })

const relatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(fetchRelatedVideos.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = ''

        })
            .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.relatedVideos = action.payload


            })
            .addCase(fetchRelatedVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
                state.relatedVideos = []


            })

    }

})

export default relatedVideosSlice.reducer