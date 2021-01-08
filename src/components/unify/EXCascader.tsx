import React from "react";
import {InputAttribute} from "./index";
import {Cascader} from "antd";
import EXBase from "./EXBase";

const EXCascader: React.FC<InputAttribute<any> | any> = (props) => {
    const {dataSource} = props as InputAttribute<any>;
    const element = (
        <Cascader {...props} options={dataSource} changeOnSelect/>
    );
    return (
        <EXBase element={element}/>
    )
};
export default EXCascader;