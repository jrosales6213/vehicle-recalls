import React from "react";
import {Form , FormGroup, Label , Input} from "reactstrap";
import Year from "./Year";
import Make from "./Make";

function SearchForm() {
    return (
   <Form className="row justify-content-center p-3">
    <FormGroup className = "col-sm-4">
      <Year/>

      {/* YEAR COMPONENT */}

    {/* <Label for="exampleSelect">
     Make
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input> */}
    </FormGroup>
    <FormGroup className = "col-sm-4">

      {/* MAKE COMPONENT */}
      <Make/>

    {/* <Label for="exampleSelect">
      Model
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input> */}
    </FormGroup>
    <FormGroup className = "col-sm-4">

      {/* MODEL COMPONENT
       */}
    <Label for="exampleSelect">
     Year
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
    </FormGroup>
  
</Form>
    )
}

export default SearchForm;