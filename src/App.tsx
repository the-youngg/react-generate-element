import React from 'react';
import './App.less';
import SearchGroup from "./components/unify/search/SearchGroup";
import {RuleInputAttribute} from "./components/unify";

function App() {

    const data = [
        {label: '第一个', value: '1'},
        {label: '第二个', value: '2'},
        {label: '第三个', value: '3',},
        {label: '第四个', value: '4',},
        {label: '第五个', value: '5',},
        {label: '第六个', value: '6',},
    ];

    // 一般的，建议单选框内容不超过4个，不然可以选择下拉框
    const radioData = [
        {label: '第一个', value: '1'},
        {label: '第二个', value: '2'},
        {label: '第三个', value: '3',},
        {label: '第三个', value: '4',},
    ]

    const attributes: RuleInputAttribute<any>[] = [
        {label: "兴趣", fieldName: "d", type: "checkbox", dataSource: data},
        {label: "姓名", placeholder: "请输入姓名", fieldName: "a", type: "string"},
        {label: "年龄", placeholder: "请输入年龄", fieldName: "b", type: "number"},
        {label: "性别", fieldName: "c", type: "radio", dataSource: radioData},
        {label: "城市", placeholder: "请选择城市", fieldName: "e", type: "select", dataSource: data},
        {label: "出生年", fieldName: "f", type: "year"},
        {label: "计划时间", fieldName: "g", type: "startAndEndDateTime"},
        {
            label: "头像",
            placeholder: "请上传头像",
            fieldName: "image",
            type: "upload",
            rules: [{required: true, message: "请上传头像"}],
            uploadCount: 2
        },
    ];

    const getData = (data: any) => {
        console.log("click me", data)
    }

    return (
        <React.Fragment>
            <div style={{marginTop: 12}}/>
            <SearchGroup attributes={attributes} getData={data => getData(data)}/>
        </React.Fragment>
    );
}

export default App;
