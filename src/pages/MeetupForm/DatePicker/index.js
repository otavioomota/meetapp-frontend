import React, { useRef, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import pt from "date-fns/locale/pt";

import { useField } from "@rocketseat/unform";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker({ name, locale }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: "props.selected",
      clearValue: pickerRef => {
        pickerRef.clear();
      }
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        minTime={setHours(setMinutes(new Date(), 0), 8)}
        maxTime={setHours(setMinutes(new Date(), 0), 23)}
        placeholderText="Selecione a data e hora"
        locale={pt}
      />
      {error && <span>{error}</span>}
    </>
  );
}
