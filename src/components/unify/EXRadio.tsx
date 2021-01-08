import React from "react";
import {Radio} from "antd";
import {InputAttribute} from "./index";
import EXBase from "./EXBase";

const EXRadio: React.FC<InputAttribute<any> | any> = (props) => {
    const {dataSource} = props as InputAttribute<any>;
    const element = (
        <Radio.Group
            {...props}
            options={dataSource}
            optionType="button"
            style={{width: '100%'}}
        />
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXRadio;