import React from "react";
import {DatePicker} from "antd";
import SearchBase from "./SearchBase";

const SearchStartAndEndDateTime: React.FC = () => {
    const element = (
        <DatePicker.RangePicker showTime style={{width: '100%'}}/>
    );
    return (
        <SearchBase element={element}/>
    )
}
export default SearchStartAndEndDateTime;