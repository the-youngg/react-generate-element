import React from "react";
import {DatePicker} from "antd";
import EXBase from "./EXBase";

const EXDate: React.FC = (props) => {
    const element = (
        <DatePicker {...props} style={{width: '100%'}}/>
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXDate;