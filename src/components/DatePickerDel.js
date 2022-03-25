import React, { useState } from "react";
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types'; // ES6
var PropTypes = require('prop-types'); // ES5 with npm

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function DatePickerDel () {

  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <div class="DatePickerApp">
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    /></div>
  );
};

