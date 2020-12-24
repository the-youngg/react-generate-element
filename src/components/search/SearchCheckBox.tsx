import React from "react";
import {Checkbox, Tag} from "antd";
import SearchBase from "./SearchBase";
import {InputAttribute} from "./search";

const SearchCheckBox: React.FC<InputAttribute> = (props) => {
    const {dataSource} = props;
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
        <SearchBase element={element} gridData={[24]}/>
    )
}
export default SearchCheckBox;