import React, {useState} from "react";
// import {Form , FormGroup, Label, Input} from "reactstrap";
import HeroComponent from "./Hero";
import SearchForm from "./Form";
import RecallContext from "./RecallContext";



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
    renderModel: setModel
  };
    return (
      // RecallContext lets us pass a value deep into the component tree
      // without explicitly threading it through every component.
      <RecallContext.Provider value={context}>
      
   

<main>

{/* component 1 - HERO COMPONENT */}

  <HeroComponent/>


<div className="container form-container">
    <h2 className="text-center p-3 fw-bold">Search Vehicle Recalls</h2>

    {/* COMPONENT 2 - FORM COMPONENT  - INSIDE THE FORM COMPONENT WE WILL RENDER 3 OTHER COMPONENTS. YEAR, MAKE , MODEL*/}
<SearchForm/>

{/* KEEP IN MAIN COMPOENTENT */}

<div className="text-center p-3">
<button id="btn-submit" type="submit" class="btn btn-lg px-4 me-md-2 text-light">Search</button>
</div>

</div>

<div className="container">
      <div className="row">
      <div className="col-lg-4 mt-4">
{/*      
     CARD COMPONENT  */}

        <div class="card card-margin">
            <div id="card-header" class="card-header no-border ">
                <h5 class="card-title text-white">MOM</h5>
            </div>
            <div id="card-body" class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper text-dark">
                        <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">09</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                        <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                        <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 mt-4">
        <div class="card card-margin">
            <div id="card-header" class="card-header no-border text-dark">
                <h5 class="card-title">MOM</h5>
            </div>
            <div id="card-body" class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper text-dark">
                        <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">09</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                        <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                        <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 mt-4">
        <div class="card card-margin">
            <div id="card-header" class="card-header no-border text-dark">
                <h5 class="card-title">MOM</h5>
            </div>
            <div id="card-body" class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper text-dark">
                        <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">09</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                        <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                        <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 mt-4">
        <div class="card card-margin">
            <div id="card-header" class="card-header no-border text-dark">
                <h5 class="card-title">MOM</h5>
            </div>
            <div id="card-body" class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper text-dark">
                        <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">09</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                        <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                        <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 mt-4">
        <div class="card card-margin">
            <div id="card-header" class="card-header no-border text-dark">
                <h5 class="card-title">MOM</h5>
            </div>
            <div id="card-body" class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper text-dark">
                        <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">09</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                        <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                        <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 mt-4">
        <div class="card card-margin">
            <div id="card-header" class="card-header no-border">
                <h5 class="card-title text-white">MOM</h5>
            </div>
            <div class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper text-dark">
                        <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">09</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                        <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                        <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 mt-4">
        <div class="card card-margin">
            <div class="card-header no-border text-dark">
                <h5 class="card-title">MOM</h5>
            </div>
            <div class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper text-dark">
                        <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">09</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                        <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                        <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
</div>

</main>
</RecallContext.Provider>
    )
}

export default Main;