import React from "react";
import Chart from "react-google-charts";
import { individualPropertyCostGraph } from "./Graphs_functions/CostBarGraphCode.js"

export default function Bar_Chart(props) {
  
  let avgCosts = individualPropertyCostGraph(props.specificTicketsforProperty);

  const data = [
    ["Maintenance Type", "Average Estimated Cost", "Average Actual Cost"],
    ["Plumbing", avgCosts.plumbingAvgEstCost, avgCosts.plumbingAvgActualCost],
    ["General Maintenance", avgCosts.generalAvgEstCost, avgCosts.generalAvgActualCost],
    ["Electrical", avgCosts.electricalAvgEstCost, avgCosts.electricalAvgActualCost]
  ];

  return (
    <Chart
      width={"500px"}
      height={"300px"}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      // We have to format data retrevied from DB to be like the following
      data={data}
      options={{
        // Material design options
        chart: {
          title: "Maintenance Cost: Estimated Cost vs. Actual Cost",
          hAxis: {
            title: "Cost",
            // minValue: 1000,
          },
          vAxis: {
            title: "Maintenance Type",
          },
        },

        // colors: ["red", "green", "blue"],
        position: "top",

        legend: { position: "right" },
      }}
      // For tests
      rootProps={{ "data-testid": "2" }}
    />
  );
}
