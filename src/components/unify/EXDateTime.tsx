import React from "react";
import {DatePicker} from "antd";
import EXBase from "./EXBase";

const EXDateTime: React.FC = (props) => {
    const element = (
        <DatePicker {...props}  showTime style={{width: '100%'}}/>
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXDateTime;