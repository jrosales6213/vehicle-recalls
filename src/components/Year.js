import React, { useContext, useEffect, useState } from "react";
import { Input, Label } from "reactstrap";
import { endpoint, datatype } from "../api/EndPoints";
import axios from "axios-jsonp-pro";
import RecallContext from "./RecallContext";

function Year() {
  const { renderYear } = useContext(RecallContext);
  const [years, setYears] = useState([]);

  function handleChange(e) {
    const year = e.target.value;
    renderYear(year);
  }
  useEffect(() => {
    if (years.length) return;
    axios.jsonp(endpoint + datatype).then((data) => {
      let selectedYear = [];

      for (let i = 1; i < data.Count; i++) {
        selectedYear.push(data.Results[i].ModelYear);
      }
      setYears(selectedYear);
    });
  });
  return (
    <>
      <Label for="Year">Year</Label>
      <Input id="select" name="select" type="select" onChange={handleChange}>
        <option value="" />
        {years.map((year) => (
          <option value={year} key={year.toString()}>
            {year}
          </option>
        ))}
      </Input>
    </>
  );
}

export default Year;
