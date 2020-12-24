import React from "react";
import {Radio} from "antd";
import SearchBase from "./SearchBase";
import {InputAttribute} from "./search";

const SearchRadio: React.FC<InputAttribute> = (props) => {
    const {dataSource} = props;
    const element = (
        <Radio.Group
            options={dataSource}
            optionType="button"
            style={{width: '100%'}}
        />
    );
    return (
        <SearchBase element={element}/>
    )
}
export default SearchRadio;