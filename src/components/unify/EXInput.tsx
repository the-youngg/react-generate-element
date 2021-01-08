import React, {createContext, ReactNode} from "react";
import "./index.less";
import {GroupType, InputProps, RuleInputAttribute} from "./index";
import EXString from "./EXString";
import EXNumber from "./EXNumber";
import EXRadio from "./EXRadio";
import EXCheckBox from "./EXCheckBox";
import EXSelect from "./EXSelect";
import EXYear from "./EXYear";
import EXMonth from "./EXMonth";
import EXDate from "./EXDate";
import EXDateTime from "./EXDateTime";
import EXStartAndEndDate from "./EXStartAndEndDate";
import EXStartAndEndDateTime from "./EXStartAndEndDateTime";
import EXSelectMultiple from "./EXSelectMultiple";
import EXStartAndEndTime from "./EXStartAndEndTime";
import EXTreeSelect from "./EXTreeSelect";
import EXCascader from "./EXCascader";
import EXUpload from "./EXUpload";

class BaseField {
    label: string = ""
    fieldName: string | string[] = ""
    type: GroupType = "search"
    rules: any
    reValues: any[] = []
}

export const ContextField = createContext(new BaseField());

export class ItemFactory<T> {
    "string" = (attribute: RuleInputAttribute<T>) => <EXString {...attribute}/>;
    "upload" = (attribute: RuleInputAttribute<T>) => <EXUpload {...attribute}/>;
    "number" = (attribute: RuleInputAttribute<T>) => <EXNumber {...attribute}/>;
    "radio" = (attribute: RuleInputAttribute<T>) => <EXRadio {...attribute}/>;
    "cascader" = (attribute: RuleInputAttribute<T>) => <EXCascader {...attribute}/>;
    "checkbox" = (attribute: RuleInputAttribute<T>) => <EXCheckBox {...attribute}/>;
    "select" = (attribute: RuleInputAttribute<T>) => <EXSelect {...attribute}/>;
    "select-multiple" = (attribute: RuleInputAttribute<T>) => <EXSelectMultiple {...attribute}/>;
    "select-tree" = (attribute: RuleInputAttribute<T>) => <EXTreeSelect {...attribute}/>;
    "year" = (attribute: RuleInputAttribute<T>) => <EXYear {...attribute}/>;
    "month" = (attribute: RuleInputAttribute<T>) => <EXMonth {...attribute}/>;
    "date" = (attribute: RuleInputAttribute<T>) => <EXDate {...attribute}/>;
    "dateTime" = (attribute: RuleInputAttribute<T>) => <EXDateTime {...attribute}/>;
    "startAndEndDate" = (attribute: RuleInputAttribute<T>) => <EXStartAndEndDate {...attribute}/>;
    "startAndEndDateTime" = (attribute: RuleInputAttribute<T>) => <EXStartAndEndDateTime {...attribute}/>;
    "startAndEndTime" = (attribute: RuleInputAttribute<T>) => <EXStartAndEndTime {...attribute}/>;
}

const factory = new ItemFactory<any>();

const EXInput: React.FC<InputProps> = (props) => {
    const {attribute} = props;
    const {label, fieldName, type, rules} = attribute;
    const field = new BaseField();
    field.label = label || "";
    field.fieldName = fieldName || "";
    field.type = props.type;
    field.rules = rules;

    return (
        <React.Fragment>
            <ContextField.Provider value={field}>
                {type && (factory as unknown as Record<string, (arg: any[]) => ReactNode>)[type]?.call(factory, attribute)}
            </ContextField.Provider>
        </React.Fragment>
    )
}

export default EXInput;