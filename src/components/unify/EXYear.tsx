import React from "react";
import {DatePicker} from "antd";
import EXBase from "./EXBase";

const EXYear: React.FC = (props) => {
    const element = (
        <DatePicker {...props} picker={"year"} style={{width: '100%'}}/>
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXYear;