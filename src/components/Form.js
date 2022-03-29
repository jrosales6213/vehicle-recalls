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
      {/* <div className="text-center p-3">
            <button id="btn-submit" type="submit" className="btn btn-lg px-4 me-md-2 text-light">Search</button>
        </div> */}
    </Form>
  );
}

export default SearchForm;
