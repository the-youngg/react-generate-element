import React from "react";
import SearchInput, {InputAttribute} from "./SearchInput";
import {Button, Col, Form, Row} from "antd";

interface GroupProps {
    attributes: InputAttribute[]
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

    console.log("渲染SearchGroup")
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
                    <Col xs={{span: 24}} md={{span: 12}} xl={{span: 8}} xxl={{span: 6}}
                         className={'search-btn-col'}
                    >
                        <Button type={"default"} onClick={onReset} style={{marginRight: 8}}>
                            重置
                        </Button>
                        <Button type="primary" onClick={onSearch}>
                            查询
                        </Button>
                    </Col>
                </Row>
            </Form>
        </React.Fragment>
    )
}
export default SearchGroup;