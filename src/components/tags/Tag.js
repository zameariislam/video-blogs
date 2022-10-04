import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../../features/filter/filterSlice';

const Tag = ({ tag }) => {

    const { tags, search } = useSelector(state => state.filter)
    const dispatch = useDispatch()


    const selected = tags.includes(tag.title)

    const style=selected? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    :"bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
    



    const handleSelect = () => {

        if (selected) {
            dispatch(tagRemoved(tag.title))


        }

        else {
            dispatch(tagSelected(tag.title))

        }





    }



    return (
        <div onClick={handleSelect}
            class={style}
        >
            {tag.title}
        </div>

        // <div
        // //     class="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
        // // >
        // //     redux
        // // </div>
    );
};

export default Tag;