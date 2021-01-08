import React from "react";
import {InputNumber} from "antd";
import {InputAttribute} from "./index";
import EXBase from "./EXBase";

const EXNumber: React.FC = (props) => {
    const element = (
        <InputNumber style={{width: '100%'}} {...props} maxLength={255}/>
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXNumber;