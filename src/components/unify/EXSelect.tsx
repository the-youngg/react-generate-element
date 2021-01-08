import React from "react";
import {Select} from "antd";
import {InputAttribute} from "./index";
import EXBase from "./EXBase";

const EXSelect: React.FC<InputAttribute<any> | any> = (props) => {
    const {dataSource} = props as InputAttribute<any>;
    const element = (
        <Select {...props} options={dataSource}/>
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXSelect;