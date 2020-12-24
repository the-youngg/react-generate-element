import React, {createContext} from "react";
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

export class BaseFile {
    label: string = ""
    fileName: string = ""
}

export const ContextFile = createContext(new BaseFile());

const SearchInput: React.FC<InputProps> = (props) => {
    const {attribute} = props;
    const {label, placeholder, fileName, type, dataSource,} = attribute;
    const file = new BaseFile();
    file.label = label || "";
    file.fileName = fileName || "";

    return (
        <React.Fragment>
            <ContextFile.Provider value={file}>
                {type === "string" && <SearchString placeholder={placeholder}/>}
                {type === "number" && <SearchNumber placeholder={placeholder}/>}
                {type === "radio" && <SearchRadio dataSource={dataSource}/>}
                {type === "checkbox" && <SearchCheckBox dataSource={dataSource}/>}
                {type === "select" && <SearchSelect placeholder={placeholder} dataSource={dataSource}/>}
                {type === "year" && <SearchYear/>}
                {type === "month" && <SearchMonth/>}
                {type === "date" && <SearchDate/>}
                {type === "dateTime" && <SearchDateTime/>}
                {type === "startAndEndDate" && <SearchStartAndEndDate/>}
                {type === "startAndEndDateTime" && <SearchStartAndEndDateTime/>}
            </ContextFile.Provider>
        </React.Fragment>
    )
}

export default SearchInput;