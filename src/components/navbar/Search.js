import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../../features/filter/filterSlice';

const Search = () => {
    
    const{search}=useSelector(state=>state.filter)

    const dispatch = useDispatch()

    const [input, setInput] = useState(search)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(searched(input))

    }




    return (
        <form onSubmit={handleSubmit} >
            <input
                class="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
};

export default Search;