import React, { useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown';
import { GENRES } from "../constants/genres";
import { Genres } from "../types/types";
import classes from './GenresFilter.module.css';

const style = {
    searchBox: { // To change search box element look
        'fontSize': '10px',
        'minHeight': '30px',
    },
    inputField: { // To change input field position or margin
        margin: '5px',
        "backgroundColor": "#053352",
    },
    chips: { // To change css chips(Selected options)
        background: "#aa2e25",
    },
    optionContainer: { // To change css for option container
        border: '2px solid',
    },
    optionListContainer: { // To change css for option container
        border: '2px solid',
        background: "#aa2e25",
    },
    option: { // To change css for dropdown options
        color: "#053352",
    },
}
interface PropsType {
    onHandler: (selectedData:Genres[]) => void;
    isLoading: boolean;
}

export const GenresFilter = ({ onHandler, isLoading = false }: PropsType) => {
    const [selectedValue] = useState('');

    const onSelect = (selectedList: Genres[], selectedItem: Genres) => {
        onHandler([...selectedList])
    }

    const onRemove = (selectedList: Genres[], removedItem: Genres) => {
        onHandler(selectedList.filter(el => el.id !== removedItem.id))
    }

    return (
       <div className={classes.genresFilter}>
           <label htmlFor="genres">Choose the genre of movies what you prefer</label>
           <Multiselect
               options={GENRES} // Options to display in the dropdown
               selectedValues = {selectedValue} // Preselected value to persist in dropdown
               onSelect={onSelect} // Function will trigger on select event
               onRemove={onRemove} // Function will trigger on remove event
               displayValue="name" // Property name to display in the dropdown options
               placeholder="Choose the genre..."
               style={style}
           />
       </div>
    )
}
