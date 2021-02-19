import React from "react";
import Chart from "react-google-charts";
import Spinner from 'react-bootstrap/Spinner'


export default function Pie_Chart() {
  return (
    <Chart
      width={"500px"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>
        <Spinner animation="border" role="status" size="lg">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>}
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
