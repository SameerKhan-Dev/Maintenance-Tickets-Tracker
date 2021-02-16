import React from "react";
import Chart from "react-google-charts";

export default function Pie_Chart() {
  return (
    <Chart
      width={"500px"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Maintenance Type", "Cost"],
        ["Plumbing", 2],
        ["Electrical", 2],
        ["General Maintenance", 3],
      ]}
      options={{
        title: "Maintenance Cost",
        is3D: true,
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}
