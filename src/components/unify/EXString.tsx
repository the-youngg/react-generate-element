import React from "react";
import {Input} from "antd";
import {InputAttribute} from "./index";
import EXBase from "./EXBase";

const EXString: React.FC<InputAttribute<any> | any> = (props) => {
    const element = (
        <Input
            {...props}
            allowClear={true}
            maxLength={255}
        />
    );
    return (
        <EXBase element={element}/>
    )
}

export default EXString;
