import React from "react";
import {DatePicker} from "antd";
import SearchBase from "./SearchBase";

const SearchDate: React.FC = () => {
    const element = (
        <DatePicker style={{width: '100%'}}/>
    );
    return (
        <SearchBase element={element}/>
    )
}
export default SearchDate;