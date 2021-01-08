import React from "react";
import {DatePicker} from "antd";
import EXBase from "./EXBase";

const EXStartAndEndDate: React.FC = (props) => {
    const element = (
        <DatePicker.RangePicker {...props} style={{width: '100%'}}/>
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXStartAndEndDate;