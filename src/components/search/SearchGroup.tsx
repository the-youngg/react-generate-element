import React from "react";
import {Button, Col, Form, Row} from "antd";
import {InputAttribute} from "./search";
import SearchInput from "./SearchInput";
import _ from "lodash";

interface GroupProps {
    /**
     * 检索条件们的属性
     */
    attributes: InputAttribute[]
    /**
     * 获取所有检索条件的值
     */
    getData: (data: any) => void
}

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

    return (
        <React.Fragment>
            <Form form={searchForm}>
                <Row style={{margin: "0 12pxs"}}>
                    {
                        attributes.map(
                            (item, index) =>
                                <SearchInput
                                    key={index}
                                    attribute={item}
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
        </React.Fragment>
    )
}
export default SearchGroup;