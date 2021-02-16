import React from "react";
import Chart from "react-google-charts";

export default function Bar_Chart() {
  const data = [
    ["Maintenance Type", "Estimated Cost", "Actual Cost"],
    ["Plumbing", 1400, 1200],
    ["Electrical", 2460, 4000],
    ["General Maintenance", 880, 1000],
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
