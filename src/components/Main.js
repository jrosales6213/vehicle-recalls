import React, { useState } from "react";
import HeroComponent from "./Hero";
import SearchForm from "./Form";
import RecallContext from "./RecallContext";
import RecallCard from "./Card";
import Report from "./Report";
import Footer from "./Footer";

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
        <div id="search-form" className="container form-container">
          <h2 className="text-center p-3 fw-bold">Search Recall Database</h2>
          <SearchForm />
        </div>

        <div className="container card-container ">
          <div className="row">
            <div className="mt-4">
              <RecallCard />
            </div>
          </div>
        </div>
        <Report />
      </main>
      <Footer />
    </RecallContext.Provider>
  );
}

export default Main;
