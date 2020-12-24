import React from "react";
import {DatePicker} from "antd";
import SearchBase from "./SearchBase";

const SearchDateTime: React.FC = () => {
    const element = (
        <DatePicker showTime style={{width: '100%'}}/>
    );
    return (
        <SearchBase element={element}/>
    )
}
export default SearchDateTime;