import React, {useState} from "react";
import Issue_Form from "./Issue_Form";

export default function Tenant_interface() {

  const [maintenanceType, setMaintenanceType] = useState("");

  return (
    <section className="Tenant_Interface">
      <h1 className="Text--address-header">
        42 Wallaby Way Toronto, ON M1P 3R9
      </h1>
      <Issue_Form />
    </section>
  )
}
