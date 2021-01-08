import {Rule} from "antd/lib/form";
import {FormLayout} from "antd/lib/form/Form";
import {InputProps as AntdInputProps} from "antd/lib/input";
import {ItemFactory} from "./EXInput";

/**
 * string：文字输入框 <br/>
 * number：数字输入框 <br/>
 * radio：单选框 <br/>
 * checkbox：复选框 <br/>
 * select：下拉框 <br/>
 */
declare type InputType = DateType | keyof ItemFactory;
/**
 * year：2020 <br/>
 * month：2020-12 <br/>
 * date：2020-12-23 <br/>
 * dateTime：2020-12-23 18:00:00 <br/>
 * startAndEndDate：[2020-12-23, 2020-12-24] <br/>
 * startAndEndDateTime：[2020-12-23 18:00:00, 2020-12-24 18:00:00] <br/>
 */
declare type DateType =
    "year"
    | "month"
    | "date"
    | "dateTime"
    | "startAndEndDate"
    | "startAndEndDateTime"
    | "startAndEndTime";

declare export interface InputAttribute<T> extends AntdInputProps {
    /**
     * 描述
     */
    label?: string
    /**
     * 点击查询查询按钮后获得的对象，其中的key值就是该值（最好就是设置成对象中的key值）
     * ⚠️注意：在同一组InputAttribute中，该属性不能重复
     */
    fieldName?: keyof T| (keyof T)[]
    /**
     * 用于ExInputList
     * ⚠️注意：childAttributes.fieldName仅能为string
     */
    childAttributes?: RuleInputAttribute<any>[]
    /**
     * 输入提示
     */
    placeholder?: string
    /**
     * 类型
     */
    type?: InputType
    /**
     * 被选择的数据源
     * ⚠️注意：当type的值为radio、checkbox、select时该属性为必填参数
     */
    dataSource?: any[]
    /**
     * 异步加载数据源dataSource的方法
     */
    loadData?: (selectedOptions?: any[]) => void
}

declare export interface RuleInputAttribute<T> extends InputAttribute<T> {
    /**
     * 校验规则
     * 详细：https://ant.design/components/form-cn/#Rule
     */
    rules?: Rule[]
    /**
     * 上传图片的数量
     * 当前是 upload 时可以设置该值
     */
    uploadCount?: number
}

/**
 * add：新增组件
 * search：检索组件
 */
declare type GroupType = "add" | "search";

declare interface InputProps {
    /**
     * 属性
     */
    attribute: RuleInputAttribute
    type: GroupType
}

declare interface GroupProps {
    /**
     * 所有传入的属性
     */
    attributes: InputAttribute[]
    /**
     * 获取所有属性的值
     */
    getData: (data: any) => void
    onReset?: (data: any) => void
    /**
     * 所有属性的值（直接传入对象即可）
     */
    value?: {}
    /**
     * label与输入框排列方式
     */
    layout?: FormLayout
    /**
     * 显示重置按钮
     */
    hiddenResetButton?: boolean
    /**
     * 重置按钮文字
     */
    resetText?: string
    /**
     * 显示提交按钮
     */
    hiddenSubmitButton?: boolean
    /**
     * 提交按钮文字
     */
    submitText?: string
}
