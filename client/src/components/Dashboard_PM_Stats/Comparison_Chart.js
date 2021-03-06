import React from "react";
import Chart from "react-google-charts";
import Spinner from "react-bootstrap/Spinner";
import { allPropertiesComparison } from "./Graphs_functions/AllPropertiesComparisonGraph.js";

export default function Comparison_Chart(props) {
  let finalData = allPropertiesComparison(
    props.ticketsOrganizedByProperty,
    props.properties
  );
  const data = finalData;

  // have to figure out
  const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
        console.log("Selected ", chartWrapper.getChart().getSelection());
      },
    },
  ];

  return (
    <Chart
      width={"500px"}
      height={"300px"}
      chartType="Bar"
      loader={
        <div>
          <Spinner animation="border" role="status" size="lg">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      }
      data={data}
      options={{
        chart: {
          hAxis: {
            title: "Cost",
            viewWindow: { min: 0, max: 5000 },
          },
          vAxis: {
            title: "Maintenance Type",
          },
        },
        colors: ["#8395a7", "#54a0ff", "#ee5253"],
        position: "top",
        legend: {
          position: "right",
          textStyle: { color: "#b0120a", fontSize: 11 },
        },
      }}
      chartEvents={chartEvents}
      // For tests
      rootProps={{ "data-testid": "2" }}
    />
  );
}
