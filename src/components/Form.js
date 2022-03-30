import React from "react";
import { Form, FormGroup } from "reactstrap";
import Year from "./Year";
import Make from "./Make";
import Model from "./Model";

function SearchForm() {
  return (
    <Form className="row justify-content-center p-3">
      <FormGroup className="col-sm-4">
        <Year />
      </FormGroup>
      <FormGroup className="col-sm-4">
        <Make />
      </FormGroup>
      <FormGroup className="col-sm-4">
        <Model />
      </FormGroup>
    </Form>
  );
}

export default SearchForm;
