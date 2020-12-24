import React from "react";
import {DatePicker} from "antd";
import SearchBase from "./SearchBase";

const SearchYear: React.FC = () => {
    const element = (
        <DatePicker picker={"year"} style={{width: '100%'}}/>
    );
    return (
        <SearchBase element={element}/>
    )
}
export default SearchYear;