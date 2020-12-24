import React from "react";
import {Checkbox, Tag} from "antd";
import SearchBase from "./SearchBase";
import {InputAttribute} from "./search";

const SearchCheckBox: React.FC<InputAttribute> = (props) => {
    const {fileName, label, dataSource} = props;
    const element = (
        <Checkbox.Group>
            {
                dataSource?.map((item, index) => {
                    return (
                        <Checkbox key={index} value={item.value}>
                            <Tag style={{cursor: "pointer", width: 75, textAlign: "center"}}>
                                {item.label}
                            </Tag>
                        </Checkbox>
                    )
                })
            }
        </Checkbox.Group>
    )
    return (
        <SearchBase label={label} element={element} fileName={fileName} gridData={[24]}/>
    )
}
export default SearchCheckBox;