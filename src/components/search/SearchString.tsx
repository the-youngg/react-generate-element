import React from "react";
import {Input} from "antd";
import SearchBase from "./SearchBase";
import {InputAttribute} from "./search";

const SearchString: React.FC<InputAttribute> = (props) => {
    const {placeholder} = props;
    const element = (
        <Input
            placeholder={placeholder}
            allowClear={true}
            maxLength={255}
        />
    );
    return (
        <SearchBase element={element}/>
    )
}

export default SearchString;
