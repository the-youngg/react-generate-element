import React from "react";
import {TreeSelect} from "antd";
import {InputAttribute} from "./index";
import EXBase from "./EXBase";

const EXTreeSelect: React.FC<InputAttribute<any> | any> = (props) => {
    const {dataSource} = props as InputAttribute<any>;
    const element = (
        <TreeSelect {...props} treeData={dataSource} style={{width: '100%'}}
                    dropdownStyle={{maxHeight: 400, overflow: 'auto'}}/>
    );
    return (
        <EXBase element={element}/>
    )
}
export default EXTreeSelect;