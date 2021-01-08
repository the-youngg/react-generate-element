import React, {useEffect} from "react";
import {Button, Col, Form, Row} from "antd";
import _ from "lodash";
import {GroupProps} from "../index";
import EXInput from "../EXInput";

const SearchGroup: React.FC<GroupProps> = (props) => {
    const {attributes, getData} = props;
    const [searchForm] = Form.useForm();

    const onSearch = () => {
        searchForm.validateFields()
            .then(value => {
                getData(value);
            })
    }

    const onReset = () => {
        searchForm.resetFields();
    }

    useEffect(() => {
        // searchForm.setFieldsValue({"a": "hahah"})
    }, []);

    return (
        <React.Fragment>
            <div style={{padding: 24, backgroundColor: "white"}}>
                <Form form={searchForm} style={{marginRight: 24}}>
                    <Row>
                        {
                            attributes.map(
                                (item, index) =>
                                    <EXInput
                                        key={index}
                                        attribute={item}
                                        type={"search"}
                                    />
                            )
                        }
                    </Row>
                    <Row justify={"end"}>
                        <Col xs={{span: 24}} md={{span: 12}} xl={{span: 8}} xxl={{span: 6}}
                             className={'search-btn-col'}
                        >
                            <Button type={"default"} onClick={onReset} style={{marginRight: 8}}>
                                重置
                            </Button>
                            <Button type="primary"
                                    onClick={
                                        _.debounce(
                                            onSearch,
                                            1000,
                                            {leading: true, trailing: false}
                                        )
                                    }>
                                查询
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </React.Fragment>
    )
}
export default SearchGroup;