import React from "react";
import {DatePicker} from "antd";
import EXBase from "./EXBase";

const EXStartAndEndDateTime: React.FC = (props) => {
    const element = (
        <DatePicker.RangePicker {...props} showTime style={{width: '100%'}}/>
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXStartAndEndDateTime;