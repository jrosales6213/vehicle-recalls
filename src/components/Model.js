import React, {useContext, useState, useEffect} from "react";
import { endpoint, datatype } from "../api/EndPoints";
import axios from "axios-jsonp-pro";
import {Label, Input} from "reactstrap";
import RecallContext from "./RecallContext";

function Model() {
  const { year, make, renderModel } = useContext(RecallContext);
  const [models, setModels] = useState([]);

  function handleChange(e) {
    const model = e.target.value;
    renderModel(model);
  }

  useEffect(() => {
    if (year === "" || make === "") {
      setModels([]);
      return;
    }

    axios
      .jsonp(endpoint + "/modelyear/" + year + "/make/" + make + datatype)
      .then((data) => {
        let selectedModels = [];

        for (let i = 0; i < data.Count; i++) {
          selectedModels.push(data.Results[i].Model);
        }

        setModels(selectedModels);
      });
  }, [year, make]);

  return (
    <RecallContext.Consumer>
      {({ model }) => {
        return (
        <>
         <Label for="Model">Model</Label>
            <Input value={model} id="select" name="select" type="select" onChange={handleChange}>
              <option value="" />
              {models.map((make) => (
                <option value={make.replace('/&/g', '_')} key={make}>
                  {make}
                </option>
              ))}
            </Input>
        </>
        );
      }}
    </RecallContext.Consumer>
  );
}

export default Model;
