import React, {useContext} from "react";
import AddBase from "../unify/add/AddBase";
import SearchBase from "./search/SearchBase";
import {ContextField} from "./EXInput";

export interface BaseProps {
    element: React.ReactNode
    gridData?: number[]
    reValue?: string
}

const EXBase: React.FC<BaseProps> = (props) => {
    const {element, gridData} = props;
    const field = useContext(ContextField);

    return (
        field.type === "search" ?
            <SearchBase element={element} gridData={gridData}/>
            :
            <AddBase element={element}/>
    )
}

export default EXBase;