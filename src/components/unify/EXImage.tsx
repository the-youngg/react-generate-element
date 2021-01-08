import React from "react";
import {DatePicker} from "antd";
import EXBase from "./EXBase";

const EXImage: React.FC = (props) => {
    const element = (
        <DatePicker {...props}  style={{width: '100%'}}/>
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXImage;