import React from 'react';
import './App.less';
import SearchGroup from "./components/search/SearchGroup";
import {InputAttribute} from "./components/search/SearchInput";

function App() {

    const data = [
        {label: '第一个', value: '1'},
        {label: '第二个', value: '2'},
        {label: '第三个', value: '3',},
        {label: '第四个', value: '4',},
        {label: '第五个', value: '5',},
        {label: '第六个', value: '6',},
    ];


    const attributes: InputAttribute[] = [
        {label: "姓名", placeholder: "请输入姓名", fileName: "d", type: "checkbox", dataSource: data},
        {label: "数字", placeholder: "请输入姓名", fileName: "string", type: "string"},
        {label: "数字", placeholder: "请输入姓名", fileName: "b", type: "number"},
        {label: "数字", placeholder: "请输入姓名", fileName: "c", type: "radio", dataSource: data},
        {label: "姓名", placeholder: "请输入姓名", fileName: "e", type: "select", dataSource: data},
        {label: "姓名", placeholder: "请输入姓名", fileName: "f", type: "year"},
        {label: "姓名", placeholder: "请输入姓名", fileName: "g", type: "startAndEndDateTime"},
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
