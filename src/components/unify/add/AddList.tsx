import React, {useContext} from "react";
import {Button, Col, Form, Input, Space} from "antd";
import EXInput, {ContextField} from "../EXInput";
import {BaseProps} from "../EXBase";
import AddBase from "./AddBase";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {InputProps} from "../index";

interface P extends BaseProps{
    fieldName: string;
    fieldType: Object;
}
const AddList: React.FC<InputProps> = (props) => {
    const {attribute} = props;
    const field = useContext(ContextField);

    return (
        <Col
            span={24}
            className={'search-input-col'}
        >
            <Form.List name={attribute.fieldName || ""}>
                {
                    (fields, {add, remove}) => (
                        <>
                            {fields.map(field => (
                                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'first']}
                                        fieldKey={[field.fieldKey, 'first']}
                                        rules={[{ required: true, message: 'Missing first name' }]}
                                    >
                                        <Input placeholder="First Name" />
                                    </Form.Item>
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'last']}
                                        fieldKey={[field.fieldKey, 'last']}
                                        rules={[{ required: true, message: 'Missing last name' }]}
                                    >
                                        <Input placeholder="Last Name" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    新增
                                </Button>
                            </Form.Item>
                        </>
                    )
                }
            </Form.List>
        </Col>
    )
}

export default AddList;