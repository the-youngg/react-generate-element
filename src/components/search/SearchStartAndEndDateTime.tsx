import React from "react";
import {DatePicker} from "antd";
import SearchBase from "./SearchBase";
import {InputAttribute} from "./search";

const SearchStartAndEndDateTime: React.FC<InputAttribute> = (props) => {
    const {fileName, label} = props;
    const element = (
        <DatePicker.RangePicker showTime style={{width: '100%'}}/>
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}
export default SearchStartAndEndDateTime;