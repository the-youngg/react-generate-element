import React from "react";
import {Select} from "antd";
import SearchBase from "./SearchBase";
import {InputAttribute} from "./search";

const SearchSelect: React.FC<InputAttribute> = (props) => {
    const {dataSource, placeholder} = props;
    const element = (
        <Select placeholder={placeholder} options={dataSource}/>
    );
    return (
        <SearchBase element={element}/>
    )
}
export default SearchSelect;