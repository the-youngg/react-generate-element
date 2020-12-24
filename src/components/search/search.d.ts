/**
 * string：文字输入框 <br/>
 * number：数字输入框 <br/>
 * radio：单选框 <br/>
 * checkbox：复选框 <br/>
 * select：下拉框 <br/>
 */
declare type InputType = "string" | "number" | "radio" | "checkbox" | "select" | DateType;
/**
 * year：2020 <br/>
 * month：2020-12 <br/>
 * date：2020-12-23 <br/>
 * dateTime：2020-12-23 18:00:00 <br/>
 * startAndEndDate：[2020-12-23, 2020-12-24] <br/>
 * startAndEndDateTime：[2020-12-23 18:00:00, 2020-12-24 18:00:00] <br/>
 */
declare type DateType = "year" | "month" | "date" | "dateTime" | "startAndEndDate" | "startAndEndDateTime";

declare export interface InputAttribute {
    /**
     * 检索条件的描述
     */
    label?: string
    /**
     * 点击查询查询按钮后获得的对象，其中的key值就是该值
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

declare interface InputProps {
    /**
     * 检索框的属性
     */
    attribute: InputAttribute
}