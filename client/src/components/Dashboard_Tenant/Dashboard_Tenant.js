import React, { useState } from "react";
import Issue_Form from "./Issue_Form";
import Top_NavBar_Tenant from "./Top_Nav_Bar_Tenant";

export default function Dashboard_Tenant(props) {
  const [maintenanceType, setMaintenanceType] = useState("");
  const { setLogoutState } = props;
  console.log("****Inside Dashboard_Tenant -- props = ", props);

  return (
    <>
      <div className="tenant__form">
        <div>
          <Top_NavBar_Tenant
            loggedInUserEmail={props.loggedInUserEmail}
            setLogoutState={setLogoutState}
          />
        </div>
        <section className="Tenant_View">
          <Issue_Form />
        </section>
      </div>
    </>
  );
}
