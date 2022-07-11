import { Calendar } from "primereact/calendar";
import { FloatWrapper } from './util'
import React from "react";
import styled from 'styled-components'
import { utils } from "@rjsf/core";

const { localToUTC, utcToLocal, getDisplayLabel } = utils;

const StyledCalendar = styled(Calendar)`
  width: 100%;
`
function DateTimeWidget(props) {
    const {
        id,
        required,
        readonly,
        disabled,
        name,
        label,
        schema,
        uiSchema,
        value,
        onChange,
        onBlur,
        onFocus,
        autofocus,
        options,
        placeholder,
    } = props;

    const _onChange = ({ target: { value } }) => onChange && onChange(localToUTC(value));
    const _onBlur = () => onBlur && onBlur(id, value);
    const _onFocus = () => onFocus && onFocus(id, value);
    const dateValue = utcToLocal(value);
    const displayLabel = getDisplayLabel(
        schema,
        uiSchema
    );
    return (
        < FloatWrapper
            float={!!options.float
            }
            key={id}
            required={required}
            id={id}
            label={label}
            labelColor={options?.labelColor}
        >
            <StyledCalendar
                key={id}
                id={id}
                value={dateValue}
                required={required}
                disabled={disabled || readonly}
                placeholder={placeholder}
                type="datetime-local"
                label={displayLabel ? label || schema.title : false}
                autoFocus={autofocus}
                name={name}
                minDate={options?.minDate}
                maxDate={options?.maxDate}
                showTime
                showIcon
                onChange={_onChange}
                onBlur={_onBlur}
                onFocus={_onFocus}
            />
        </FloatWrapper >

    );
}
export default DateTimeWidget;