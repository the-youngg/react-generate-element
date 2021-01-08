import React from "react";
import {Select} from "antd";
import {InputAttribute} from "./index";
import EXBase from "./EXBase";

const EXSelectMultiple: React.FC<InputAttribute<any> | any> = (props) => {
    const {dataSource} = props as InputAttribute<any>;
    const element = (
        <Select
            {...props}
            mode={"multiple"}
            showSearch
            options={dataSource}
            filterOption={
                (input, option) =>
                    option?.label && option?.label?.toString().indexOf(input.toLowerCase()) >= 0
            }
        />
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXSelectMultiple;