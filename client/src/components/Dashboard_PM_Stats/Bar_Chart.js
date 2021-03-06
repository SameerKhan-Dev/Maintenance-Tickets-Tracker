import React from "react";
import Chart from "react-google-charts";
import { individualPropertyCostGraph } from "./Graphs_functions/CostBarGraphCode.js";
import Spinner from "react-bootstrap/Spinner";

export default function Bar_Chart(props) {
  let avgCosts = individualPropertyCostGraph(props.specificTicketsforProperty);

  const data = [
    ["Maintenance Type", "Average Estimated Cost", "Average Actual Cost"],
    ["Plumbing", avgCosts.plumbingAvgEstCost, avgCosts.plumbingAvgActualCost],
    [
      "General Maintenance",
      avgCosts.generalAvgEstCost,
      avgCosts.generalAvgActualCost,
    ],
    [
      "Electrical",
      avgCosts.electricalAvgEstCost,
      avgCosts.electricalAvgActualCost,
    ],
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
          title: " ",
          hAxis: {
            title: "Cost",
          },
          vAxis: {
            title: "Maintenance Type",
          },
        },

        colors: ["#218AF5", "#D50FF5", "#F5D72C"],
        position: "top",

        legend: { position: "right" },
      }}
      // For tests
      rootProps={{ "data-testid": "2" }}
    />
  );
}
