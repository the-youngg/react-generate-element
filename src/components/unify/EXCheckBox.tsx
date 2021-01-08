import React from "react";
import {Checkbox, Tag} from "antd";
import {InputAttribute} from "./index";
import EXBase from "./EXBase";

const EXCheckBox: React.FC<InputAttribute<any> | any> = (props) => {
    const {dataSource} = props as InputAttribute<any>;
    const element = (
        <Checkbox.Group {...props}>
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
        <EXBase element={element} gridData={[24]}/>
    )
}
export default EXCheckBox;