import React from "react";
import {Button, Col, Form, Row} from "antd";
import EXInput from "../EXInput";
import {BaseProps} from "../EXBase";
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {InputProps} from "../index";

interface P extends BaseProps {
    fieldName: string;
    fieldType: Object;
}

const ExInputList: React.FC<InputProps> = (props) => {
    const {attribute} = props;

    return (
        <Col
            span={24}
            className={'search-input-col'}
            style={{marginBottom: 24}}
        >
            <Form.Item label={attribute.label} name={attribute.fieldName} rules={attribute.rules}>
                <Form.List name={attribute.fieldName || ""}>
                    {
                        (fields, {add, remove}) => (
                            <React.Fragment>
                                <div style={{border: '1px solid #eaeaea', padding: 12}}>
                                    {fields.map(field => (
                                        <Row>
                                            {
                                                attribute.childAttributes?.map((childAttribute: any, index: number) => (
                                                    <Col span={11}>
                                                        <EXInput key={index}
                                                                 attribute={{
                                                                     ...childAttribute,
                                                                     fieldName: [String(field.name), childAttribute.fieldName as string]
                                                                 }}
                                                                 type={"add"}/>
                                                    </Col>
                                                ))
                                            }
                                            <Col span={2} style={{textAlign: 'center'}}>
                                                <MinusCircleOutlined onClick={() => remove(field.name)}/>
                                            </Col>
                                        </Row>
                                    ))}
                                    <Form.Item>
                                        <Row>
                                            <Col span={22} className={'search-input-col'}>
                                                <Button type="dashed" onClick={() => add()} block
                                                        icon={<PlusOutlined/>}>
                                                    新增
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                </div>
                            </React.Fragment>
                        )
                    }
                </Form.List>
            </Form.Item>
        </Col>
    )
}

export default ExInputList;