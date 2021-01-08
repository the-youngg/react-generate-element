import React, {useContext} from "react";
import {Col, Form} from "antd";
import {ContextField} from "../EXInput";
import {BaseProps} from "../EXBase";

const SearchBase: React.FC<BaseProps> = (props) => {
    const {element, gridData,} = props;
    const field = useContext(ContextField);

    return (
        <Col
            xs={{span: gridData ? gridData[0] : 24}}
            md={{span: gridData ? gridData[1] : 12}}
            xl={{span: gridData ? gridData[2] : 8}}
            xxl={{span: gridData ? gridData[3] : 6}}
            className={'search-input-col'}
        >
            <Form.Item label={field.label} labelCol={{flex: '0 0 90px'}} name={field.fieldName}>
                {element}
            </Form.Item>
        </Col>
    )
}

export default SearchBase;