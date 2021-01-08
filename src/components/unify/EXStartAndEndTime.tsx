import React, {forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, useState} from "react";
import EXBase from "./EXBase";
import {TimePickerProps} from "antd/es/time-picker";
import {Col, Row, TimePicker} from "antd";

interface TimePickerRangeP extends TimePickerProps {
    onChange?: any,
    value?: any,
}

const TimePickerRange: ForwardRefExoticComponent<PropsWithoutRef<TimePickerRangeP> & RefAttributes<any>> =
    forwardRef((props, ref) => {

        const {
            className,
            style,
            onChange,
            value,
            disabled,
            ...rest
        } = props;

        const [startTime, setStartTime] = useState(value?.start);
        const [endTime, setEndTime] = useState(value?.end);

        /*定义时间数组*/
        const Hours = Array.from(Array(24), (v, k) => k);
        const Minutes = Array.from(Array(60), (v, k) => k);
        const Seconds = Array.from(Array(60), (v, k) => k);

        const triggerChange = (changedValue: any) => {
            if (onChange) {
                onChange(
                    Object.assign({}, {start: startTime, end: endTime}, changedValue)
                );
            }
        };

        /*结束时间控制-hour*/
        const disEndHouse = () => {
            if (startTime) {
                let h = startTime.hour();
                return Hours.slice(0, h);
            }
            return [];
        };

        /*结束时间控制-minute）*/
        const disEndMinute = (h: any) => {
            if (startTime) {
                if (h > startTime.hour()) return [];
                let m = startTime.minute();
                return Minutes.slice(0, m);
            }
            return [];
        };

        /*结束时间控制-second*/
        const disEndSeconds = (h: any, m: any) => {
            if (startTime) {
                if (h > startTime.hour()) return [];
                if (m > startTime.minute()) return [];
                let s = startTime.second();
                return Seconds.slice(0, s);
            }
            return [];
        };

        /*开始时间控制-hour*/
        const disStartHouse = () => {
            if (endTime) {
                let h = endTime.hour();
                return Hours.slice(h, Hours.length - 1);
            }
            return [];
        };

        /*开始时间控制-minute*/
        const disStartMinute = (h: any) => {
            if (endTime) {
                if (h < endTime.hour()) return [];
                let m = endTime.minute();
                return Minutes.slice(m, Minutes.length - 1);
            }
            return [];
        };

        /*开始时间控制-second*/
        const disStartSeconds = (h: any, m: any) => {
            if (endTime) {
                if (h < endTime.hour()) return [];
                if (m < endTime.minute()) return [];
                let s = endTime.second();
                return Seconds.slice(s, Seconds.length - 1);
            }
            return [];
        };

        return (
            <Row ref={ref}>
                <Col span={12}>
                    <TimePicker

                        placeholder={"开始时间"}
                        style={{width: '100%'}}
                        allowClear={false}
                        disabled={disabled}
                        onChange={value => {
                            setStartTime(value);
                            triggerChange({start: value});
                        }}
                        value={value?.start}
                        disabledHours={disStartHouse}
                        disabledMinutes={disStartMinute}
                        disabledSeconds={disStartSeconds}
                    />
                </Col>
                <Col span={12}>
                    <TimePicker
                        placeholder={"结束时间"}
                        style={{width: '100%'}}
                        allowClear={false}
                        disabled={disabled}
                        onChange={value => {
                            setEndTime(value);
                            triggerChange({end: value});
                        }}
                        value={value?.end}
                        disabledHours={disEndHouse}
                        disabledMinutes={disEndMinute}
                        disabledSeconds={disEndSeconds}
                    />
                </Col>
            </Row>);
    });

const EXStartAndEndTime: React.FC = () => {
    return (
        <EXBase element={<TimePickerRange/>}/>
    )
};

export default EXStartAndEndTime;