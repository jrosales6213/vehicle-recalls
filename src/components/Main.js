import React, { useState } from "react";
import HeroComponent from "./Hero";
import SearchForm from "./Form";
import RecallContext from "./RecallContext";
import RecallCard from "./Card";

function Main() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  function renderYear(year) {
    setYear(year);
    setMake("");
    setModel("");
  }

  function renderMake(make) {
    setMake(make);
    setModel("");
  }

  const context = {
    year,
    renderYear,
    make,
    renderMake,
    model,
    renderModel: setModel,
  };
  return (
    // RecallContext lets us pass a value deep into the component tree
    // without explicitly threading it through every component.
    <RecallContext.Provider value={context}>
      <main>
        <HeroComponent />
        <div className="container form-container">
          <h2 className="text-center p-3 fw-bold">Search Vehicle Recalls</h2>
          <SearchForm />
          {/* <div className="text-center p-3">
            <button id="btn-submit" type="submit" className="btn btn-lg px-4 me-md-2 text-light">Search</button>
        </div> */}
        </div>

        <div className="container">
          <div className="row">
            <div className="mt-4">
              {/*      
     CARD COMPONENT  */}
              <RecallCard />
            </div>
          </div>
        </div>
      </main>
    </RecallContext.Provider>
  );
}

export default Main;
