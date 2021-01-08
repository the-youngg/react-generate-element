import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Button, Col, Form, message, Row} from "antd";

import _ from "lodash";
import {GroupProps} from "../index";
import EXInput from "../EXInput";
import ExInputList from "./ExInputList";

export const ContextForm = createContext({} as any);

const AddGroup: React.FC<GroupProps> = (props) => {
    const {
        attributes,
        getData,
        value,
        layout,
        resetText,
        submitText,
        hiddenResetButton,
        hiddenSubmitButton,
        onReset
    } = props;
    const [addForm] = Form.useForm();
    const [allValue, setAllValue] = useState<any>();

    const onSubmit = () => {
        addForm.validateFields()
            .then(value => {
                getData(value);
            })
    }

    const onInnerReset = () => {
        onReset ?
            addForm.validateFields()
                .then(value => {
                    onReset(value)
                }) :
            addForm.resetFields();
    }


    useEffect(() => {
        addForm.setFieldsValue(value)
        setAllValue(value)
    }, [value]);

    const bottom = (buttons: ReactNode): ReactNode => {
        // 置右
        if (layout === "horizontal") {
            return (
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    {buttons}
                </Form.Item>
            );
        }

        // 置中
        return (
            <Row justify={"end"}>
                <Col span={24}
                     className={'search-btn-col'}>
                    {buttons}
                </Col>
            </Row>
        );

    }

    const debounce = (method: () => void) => {
        return _.debounce(
            method,
            1000,
            {leading: true, trailing: false}
        )
    }

    return (
        <React.Fragment>
            <Form style={{width: '100%'}}
                  layout={layout || "vertical"}
                  form={addForm}
                  scrollToFirstError
                  labelCol={{span: layout === "horizontal" ? 8 : 24}}
                  wrapperCol={{span: layout === "horizontal" ? 8 : 24}}
            >
                <ContextForm.Provider value={allValue}>
                    <Row>
                        {
                            attributes.map(
                                (item, index) =>
                                    item.childAttributes ?
                                        <ExInputList key={index}
                                                     attribute={item}
                                                     type={"add"}/>
                                        :
                                        <EXInput
                                            key={index}
                                            attribute={item}
                                            type={"add"}
                                        />
                            )
                        }
                    </Row>
                </ContextForm.Provider>
                {
                    bottom(
                        <React.Fragment>
                            <Button hidden={!!hiddenResetButton}
                                    type={"default"}
                                    onClick={debounce(onInnerReset)}
                                    style={{marginRight: 8}}>
                                {resetText || "重置"}
                            </Button>
                            <Button type="primary"
                                    hidden={!!hiddenSubmitButton}
                                    htmlType={"submit"}
                                    onClick={debounce(onSubmit)}>
                                {submitText || "提交"}
                            </Button>
                        </React.Fragment>
                    )
                }
            </Form>
        </React.Fragment>
    )
}
export default AddGroup;