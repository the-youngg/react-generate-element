import React, {useContext} from "react";
import {Col, Form} from "antd";
import {ContextFile} from "./SearchInput";

interface BaseProps {
    element: React.ReactNode
    gridData?: number[]
}

const SearchBase: React.FC<BaseProps> = (props) => {
    const {element, gridData,} = props;
    const file = useContext(ContextFile);
    return (
        <Col
            xs={{span: gridData ? gridData[0] : 24}}
            md={{span: gridData ? gridData[1] : 12}}
            xl={{span: gridData ? gridData[2] : 8}}
            xxl={{span: gridData ? gridData[3] : 6}}
            className={'search-input-col'}
        >
            <Form.Item label={file.label} name={file.fileName}>
                {element}
            </Form.Item>
        </Col>
    )
}

export default SearchBase;