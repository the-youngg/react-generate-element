import React from "react";
import {Checkbox, Col, DatePicker, Form, Input, InputNumber, Radio, Select, Tag} from "antd";
import "./Search.less";


/**
 * string：文字输入框 <br/>
 * number：数字输入框 <br/>
 * radio：单选框 <br/>
 * checkbox：复选框 <br/>
 * select：下拉框 <br/>
 */
type InputType = "string" | "number" | "radio" | "checkbox" | "select" | DateType;
/**
 * year：2020 <br/>
 * month：2020-12 <br/>
 * date：2020-12-23 <br/>
 * dateTime：2020-12-23 18:00:00 <br/>
 * startAndEndDate：[2020-12-23, 2020-12-24] <br/>
 * startAndEndDateTime：[2020-12-23 18:00:00, 2020-12-24 18:00:00] <br/>
 */
type DateType = "year" | "month" | "date" | "dateTime" | "startAndEndDate" | "startAndEndDateTime";

export interface InputAttribute {
    /**
     * 检索条件的描述
     */
    label?: string
    /**
     * 检索条件属性的key
     * ⚠️注意：在同一组InputAttribute中，该属性不能重复
     */
    fileName: string
    /**
     * 输入提示
     */
    placeholder?: string
    /**
     * 检索框类型
     */
    type?: InputType
    /**
     * 被选择的数据源
     * ⚠️注意：当type的值为radio、checkbox、select时该属性为必填参数
     */
    dataSource?: any[]
}

interface InputProps {
    /**
     * 检索框的属性
     */
    attribute: InputAttribute
}

interface BaseProps extends InputAttribute {
    element: React.ReactNode
}


const SearchInput: React.FC<InputProps> = (props) => {
    const {attribute} = props;
    const {label, placeholder, fileName, type, dataSource} = attribute;

    console.log("渲染SearchInput")
    return (
        <React.Fragment>
            {type === "string" && <SearchString label={label} fileName={fileName} placeholder={placeholder}/>}
            {type === "number" && <SearchNumber label={label} fileName={fileName} placeholder={placeholder}/>}
            {type === "radio" &&
            <SearchRadio label={label} fileName={fileName} placeholder={placeholder} dataSource={dataSource}/>}
            {type === "checkbox" &&
            <SearchCheckBox label={label} fileName={fileName} placeholder={placeholder} dataSource={dataSource}/>}
            {type === "select" &&
            <SearchSelect label={label} fileName={fileName} placeholder={placeholder} dataSource={dataSource}/>}
            {type === "year" && <SearchYear label={label} fileName={fileName}/>}
            {type === "month" && <SearchMonth label={label} fileName={fileName}/>}
            {type === "date" && <SearchDate label={label} fileName={fileName}/>}
            {type === "dateTime" && <SearchDateTime label={label} fileName={fileName}/>}
            {type === "startAndEndDate" && <SearchStartAndEndDate label={label} fileName={fileName}/>}
            {type === "startAndEndDateTime" && <SearchStartAndEndDateTime label={label} fileName={fileName}/>}
        </React.Fragment>
    )
}

const SearchBase: React.FC<BaseProps> = (props) => {
    const {label, fileName, element} = props;
    return (
        <Col xs={{span: 24}} md={{span: 12}} xl={{span: 8}} xxl={{span: 6}} className={'search-input-col'}>
            <Form.Item label={label} name={fileName}>
                {element}
            </Form.Item>
        </Col>
    )
}

const SearchString: React.FC<InputAttribute> = (props) => {
    const {placeholder, fileName, label} = props;
    const element = (
        <Input
            placeholder={placeholder}
            allowClear={true}
            maxLength={128}
        />
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}

const SearchNumber: React.FC<InputAttribute> = (props) => {
    const {placeholder, fileName, label} = props;
    const element = (
        <InputNumber style={{width: '100%'}} placeholder={placeholder} maxLength={11}/>
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}

const SearchRadio: React.FC<InputAttribute> = (props) => {
    const {fileName, label, dataSource} = props;
    const element = (
        <Radio.Group
            options={dataSource}
            optionType="button"
        />
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}

const SearchCheckBox: React.FC<InputAttribute> = (props) => {
    const {fileName, label, dataSource} = props;
    const element = (
        <Checkbox.Group>
            {
                dataSource?.map((item, index) => {
                    return (
                        <Checkbox key={index} value={item.value}>
                            <Tag style={{cursor: "pointer", width: 75, textAlign: "center"}}>
                                {item.label}
                            </Tag>
                        </Checkbox>
                    )
                })
            }
        </Checkbox.Group>
    )
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}

const SearchSelect: React.FC<InputAttribute> = (props) => {
    const {fileName, label, dataSource, placeholder} = props;
    const element = (
        <Select placeholder={placeholder} options={dataSource}/>
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}

const SearchYear: React.FC<InputAttribute> = (props) => {
    const {fileName, label} = props;
    const element = (
        <DatePicker picker={"year"} style={{width: '100%'}}/>
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}

const SearchMonth: React.FC<InputAttribute> = (props) => {
    const {fileName, label} = props;
    const element = (
        <DatePicker picker={"month"} style={{width: '100%'}}/>
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}

const SearchDate: React.FC<InputAttribute> = (props) => {
    const {fileName, label} = props;
    const element = (
        <DatePicker style={{width: '100%'}}/>
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}

const SearchDateTime: React.FC<InputAttribute> = (props) => {
    const {fileName, label} = props;
    const element = (
        <DatePicker showTime style={{width: '100%'}}/>
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}

const SearchStartAndEndDate: React.FC<InputAttribute> = (props) => {
    const {fileName, label} = props;
    const element = (
        <DatePicker.RangePicker style={{width: '100%'}}/>
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}

const SearchStartAndEndDateTime: React.FC<InputAttribute> = (props) => {
    const {fileName, label} = props;
    const element = (
        <DatePicker.RangePicker showTime style={{width: '100%'}}/>
    );
    return (
        <SearchBase label={label} element={element} fileName={fileName}/>
    )
}

export default SearchInput;