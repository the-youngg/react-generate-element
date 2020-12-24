import React from "react";
import {Select} from "antd";
import SearchBase from "./SearchBase";
import {InputAttribute} from "./search";

const SearchSelect: React.FC<InputAttribute> = (props) => {
    const {fileName, label, dataSource, placeholder} = props;
    const element = (
        <Select placeholder={placeholder} options={dataSource}/>
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}
export default SearchSelect;