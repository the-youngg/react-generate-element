import React, {useContext} from "react";
import {Col, Form} from "antd";
import {ContextField} from "../EXInput";
import {BaseProps} from "../EXBase";

const AddBase: React.FC<BaseProps> = (props) => {
    const {element} = props;
    const field = useContext(ContextField);

    return (
        <Col
            span={24}
            className={'search-input-col'}
        >
            <Form.Item label={field.label} name={field.fieldName}
                       rules={field.rules}
            >
                {element}
            </Form.Item>
        </Col>
    )
}

export default AddBase;