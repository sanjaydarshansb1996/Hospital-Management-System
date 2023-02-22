import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <Link to={`/patientListing/in-patient"`}>In-Patient</Link>,
  },
  {
    key: "2",
    label: <Link to={`/patientListing/out-patient`}>Out-Patient</Link>,
  },
  {
    key: "3",
    label: (
      <Link to={`/patientListing/medicine-billing`}>Medicine Billing</Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link to={`/patientListing/rooms-available`}>Rooms Availability</Link>
    ),
  },
 
];

const AntdBreadcrumb = ({ items1 = [], ...props }) => (
  <Breadcrumb {...props}>
    <Breadcrumb.Item>PatientListing</Breadcrumb.Item>
    <Breadcrumb.Item
      menu={{
        items,
      }}
    >
      <Link to={`/patientListing/in-patient`}>In-Patient</Link>
    </Breadcrumb.Item>
  </Breadcrumb>
);
export default AntdBreadcrumb;
