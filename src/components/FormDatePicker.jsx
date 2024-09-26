import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarDays } from "react-icons/fa6";

import "react-datepicker/dist/react-datepicker.css";

import "react-datepicker/dist/react-datepicker-cssmodules.css";

const FormDatePicker = ({ name, label }) => {
  const [startDate, setStartDate] = useState();
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="text-right">
        <span className="label-text text-slate-950  capitalize text-right">{label}</span>
      </label>
      <DatePicker
        showIcon
        icon={<FaCalendarDays className="mt-1" />}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="indent-2 text-lg bg-red-200"
        id={name}
        name={name}
      />
    </div>
  );
};

export default FormDatePicker;
