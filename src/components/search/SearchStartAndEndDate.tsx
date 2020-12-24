import React from "react";
import {DatePicker} from "antd";
import SearchBase from "./SearchBase";

const SearchStartAndEndDate: React.FC = () => {
    const element = (
        <DatePicker.RangePicker style={{width: '100%'}}/>
    );
    return (
        <SearchBase element={element}/>
    )
}
export default SearchStartAndEndDate;