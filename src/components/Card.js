import React, { useContext, useEffect, useState } from "react";
import { endpoint, datatype } from "../api/EndPoints";
import axios from "axios-jsonp-pro";
import RecallContext from "./RecallContext";
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";

function RecallCard() {
  const { year, make, model } = useContext(RecallContext);
  const [campaigns, setCampaigns] = useState([]);
  console.log(campaigns);

  // function handleChange() {
  //   // const make = e.target.value;
  //   // changeMake(make);
  //   console.log(campaigns);
  // }

  useEffect(() => {
    if (year === "" || make === "" || model === "") {
      setCampaigns([]);
      return;
    }

    axios
      .jsonp(
        endpoint +
          "/modelyear/" +
          year +
          "/make/" +
          make +
          "/model/" +
          model +
          datatype
      )
      .then((data) => {
        let newCampaigns = data.Results.map((data) => {
          // Convert UNIX timestamp (in ms) from Microsoft JSON format
          const d = data.ReportReceivedDate
            ? parseInt(data.ReportReceivedDate.slice(6, -1).split("-")[0], 8)
            : 0;
          return { ...data, ReportReceivedDate: new Date(d) };
        });
        newCampaigns.sort(
          (a, b) => b.ReportReceivedDate - a.ReportReceivedDate
        );
        // console.log(newCampaigns);
        setCampaigns(newCampaigns);
      });
  }, [year, make, model]);

  return (
    <CardDeck id="card-deck" className="row justify-content-center">
      {campaigns.map((campaign) => (
        <Card
          className="col-sm-4 m-2 shadow"
          key={campaign.NHTSACampaignNumber}
        >
          <CardBody className="text-dark">
            <CardTitle>{campaign.NHTSACampaignNumber}</CardTitle>
            {/* <CardSubtitle>{campaign.ReportReceivedDate}</CardSubtitle> */}
            <CardText>{campaign.Summary}</CardText>
            <CardText>{campaign.Conequence}</CardText>
            <CardText>{campaign.Remedy}</CardText>
          </CardBody>
        </Card>
      ))}
    </CardDeck>
  );
}

export default RecallCard;
