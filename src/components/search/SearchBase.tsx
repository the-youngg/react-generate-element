import React from "react";
import {Col, Form} from "antd";
import {InputAttribute} from "./search";

interface BaseProps extends InputAttribute {
    element: React.ReactNode
    gridData?: number[]
}

const SearchBase: React.FC<BaseProps> = (props) => {
    const {label, fileName, element, gridData,} = props;
    return (
        <Col
            xs={{span: gridData ? gridData[0] : 24}}
            md={{span: gridData ? gridData[1] : 12}}
            xl={{span: gridData ? gridData[2] : 8}}
            xxl={{span: gridData ? gridData[3] : 6}}
            className={'search-input-col'}
        >
            <Form.Item label={label} name={fileName}>
                {element}
            </Form.Item>
        </Col>
    )
}

export default SearchBase;