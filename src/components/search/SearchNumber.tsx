import React from "react";
import {InputNumber} from "antd";
import SearchBase from "./SearchBase";
import {InputAttribute} from "./search";

const SearchNumber: React.FC<InputAttribute> = (props) => {
    const {placeholder, fileName, label} = props;
    const element = (
        <InputNumber style={{width: '100%'}} placeholder={placeholder} maxLength={255}/>
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}
export default SearchNumber;