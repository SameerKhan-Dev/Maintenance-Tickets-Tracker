import React from "react";
import Chart from "react-google-charts";
import Spinner from 'react-bootstrap/Spinner'
import { maintenanceCountPieChart } from "./Graphs_functions/PieChartFunction"


export default function Pie_Chart(props) {
  let finalCosts = maintenanceCountPieChart(props.specificTicketsforPropertyPie)

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
        ["Plumbing", finalCosts.numPlumbing],
        ["Electrical", finalCosts.numElectrical],
        ["General Maintenance", finalCosts.numGeneral],
      ]}
      options={{
        title: "Maintenance Cost",
        is3D: true,
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}
