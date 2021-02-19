import React from "react";
import Chart from "react-google-charts";
import Spinner from 'react-bootstrap/Spinner'

export default function Comparison_Chart() {
  const data = [
    ["Property Name", "Plumbing", "Electrical", "General Maintenance"],
    ["Bridlewood", 1400, 3000, 1200],
    ["Castle Hill", 800, 2460, 250],
    ["Arcadia", 660, 1120, 300],
    ["Carleton", 1030, 4500, 350],
  ];

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
      loader={<div>
        <Spinner animation="border" role="status" size="lg">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>}
      data={data}
      options={{
        // Material design options
        chart: {
          title: "Total Maintenance Cost",
          subtitle: "Categorized by maintenance type",
          hAxis: {
            title: "Cost",
            viewWindow: { min: 0, max: 5000 },
          },
          vAxis: {
            title: "Maintenance Type",
          },
        },
        // colors: ["#8395a7", "#54a0ff", "#ee5253"],
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
