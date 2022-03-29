import React, { useEffect, useState, useContext } from 'react';
import { endpoint, datatype } from '../api/EndPoints';
import axios from 'axios-jsonp-pro';
import RecallContext from './RecallContext';
import { Label, Input } from 'reactstrap';

function Make() {
  const { year, renderMake } = useContext(RecallContext);
  const [makes, setMakes] = useState([]);

  function handleChange(e) {
    const make = e.target.value;
    renderMake(make);
  }

  useEffect(() => {
    if (year === '') return;
    axios.jsonp(endpoint + '/modelyear/' + year + datatype).then((data) => {
      let selectedMakes = [];

      for (let i = 0; i < data.Count; i++) {
        selectedMakes.push(data.Results[i].Make);
      }

      setMakes(selectedMakes);
    });
  }, [year]);

  return (
    <RecallContext.Consumer>
      {({ make }) => {
        return (
          <>
            <Label for="Make">Make</Label>
            <Input value={make} id="select" name="select" type="select" onChange={handleChange}>
              <option value="" />
              {makes.map((make) => (
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

export default Make;
