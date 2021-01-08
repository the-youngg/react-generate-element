import React from "react";
import {DatePicker} from "antd";
import EXBase from "./EXBase";

const EXMonth: React.FC = (props) => {
    const element = (
        <DatePicker {...props}  picker={"month"} style={{width: '100%'}}/>
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXMonth;