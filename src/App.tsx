import React, { ChangeEvent, FormEventHandler, useState } from "react";

import { Button } from "snmt-button";
import { Input } from "snmt-input";
import { Select } from "snmt-select";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [showSubmitValues, setShowSubmitValues] = useState(false);
  const [formData, setFormData] = useState("");

  const selectOptions = [
    {
      value: "Option 1",
      label: "Option 1",
    },
    {
      value: "Option 2",
      label: "Option 2",
    },
    {
      value: "Option 3",
      label: "Option 3",
    },
  ];

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  const onSelectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target);
    setSelectValue(e.target.value);
  };

  const onSubmitFormHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setShowSubmitValues((prev) => !prev);
    setFormData((prev) => {
      if (prev) {
        return "";
      } else {
        return JSON.stringify({ inputValue, selectValue });
      }
    });
  };
  return (
    <div className="App">
      <form className="form" onSubmit={onSubmitFormHandler}>
        <Input
          name="Name"
          className="input"
          value={inputValue}
          width="300px"
          onChange={onChangeHandler}
          borderRadius="10px"
        />
        <Select
          borderRadius="10px"
          name="Option"
          height="50px"
          className="select"
          value={selectValue}
          options={selectOptions}
          onChange={onSelectChangeHandler}
        />

        <Button
          borderRadius="10px"
          secondary
          value={showSubmitValues ? "Reset" : "Save"}
          type="submit"
        />
      </form>
      {showSubmitValues && formData && <p>{formData}</p>}
    </div>
  );
}

export default App;
