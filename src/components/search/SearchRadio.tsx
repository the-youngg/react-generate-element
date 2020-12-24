import React from "react";
import {Radio} from "antd";
import SearchBase from "./SearchBase";
import {InputAttribute} from "./search";

const SearchRadio: React.FC<InputAttribute> = (props) => {
    const {fileName, label, dataSource} = props;
    const element = (
        <Radio.Group
            options={dataSource}
            optionType="button"
            style={{width: '100%'}}
        />
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}
export default SearchRadio;