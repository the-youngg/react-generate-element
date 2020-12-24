import React from "react";
import "./Search.less";
import SearchString from "./SearchString";
import SearchNumber from "./SearchNumber";
import SearchRadio from "./SearchRadio";
import SearchCheckBox from "./SearchCheckBox";
import SearchSelect from "./SearchSelect";
import SearchYear from "./SearchYear";
import SearchMonth from "./SearchMonth";
import SearchDate from "./SearchDate";
import SearchDateTime from "./SearchDateTime";
import SearchStartAndEndDate from "./SearchStartAndEndDate";
import SearchStartAndEndDateTime from "./SearchStartAndEndDateTime";
import {InputProps} from "./search";

const SearchInput: React.FC<InputProps> = (props) => {
    const {attribute} = props;
    const {label, placeholder, fileName, type, dataSource,} = attribute;

    console.log("渲染SearchInput")
    return (
        <React.Fragment>
            {type === "string" &&
            <SearchString label={label} fileName={fileName} placeholder={placeholder}/>}
            {type === "number" && <SearchNumber label={label} fileName={fileName} placeholder={placeholder}/>}
            {type === "radio" && <SearchRadio label={label} fileName={fileName} dataSource={dataSource}/>}
            {type === "checkbox" && <SearchCheckBox label={label} fileName={fileName} dataSource={dataSource}/>}
            {type === "select" &&
            <SearchSelect label={label} fileName={fileName} placeholder={placeholder} dataSource={dataSource}/>}
            {type === "year" && <SearchYear label={label} fileName={fileName}/>}
            {type === "month" && <SearchMonth label={label} fileName={fileName}/>}
            {type === "date" && <SearchDate label={label} fileName={fileName}/>}
            {type === "dateTime" && <SearchDateTime label={label} fileName={fileName}/>}
            {type === "startAndEndDate" && <SearchStartAndEndDate label={label} fileName={fileName}/>}
            {type === "startAndEndDateTime" && <SearchStartAndEndDateTime label={label} fileName={fileName}/>}
        </React.Fragment>
    )
}

export default SearchInput;