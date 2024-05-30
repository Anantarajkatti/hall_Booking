import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";

const plans = [
  {
    type: "Free",
    price: "$0/month",
    users: "single",
    storage: "50GB",
    unlimitedpublicproject: "yes",
    communityaccess: "yes",
    unlimitedprivateprojects: "no",
    freesubdomain: "no",
    monthlystatusreports: "no",
  },
  {
    type: "plus",
    price: "$9/month",
    users: "3",
    storage: "50GB",
    unlimitedpublicproject: "yes",
    communityaccess: "yes",
    unlimitedprivateprojects: "yes",
    freesubdomain: "yes",
    monthlystatusreports: "no",
  },
  {
    type: "pro",
    price: "$49/month",
    users: "9",
    storage: "50GB",
    unlimitedpublicproject: "yes",
    communityaccess: "yes",
    unlimitedprivateprojects: "yes",
    freesubdomain: "yes",
    monthlystatusreports: "yes",
  },
];

const PriceCard = ({ plan }) => {
  return (
    <div className="price-card">
      <div className="price-card-header">
        <h2>{plan.type}</h2>
        <p style={{ fontSize: "2em" }}>{plan.price}</p>
        <hr />
      </div>
      <div className="price-card-features">
        <p>
          <CheckIcon />
          {plan.users} Users
        </p>

        <p>
          <CheckIcon />
          {plan.storage} Storage
        </p>

        <p
          style={
            plan.unlimitedpublicproject === "yes"
              ? { color: "black" }
              : { color: "gray" }
          }
        >
          {plan.unlimitedpublicproject === "yes" ? (
            <CheckIcon />
          ) : (
            <ClearIcon />
          )}{" "}
          Unlimited Public Project
        </p>
        <p
          style={
            plan.communityaccess === "yes"
              ? { color: "black" }
              : { color: "gray" }
          }
        >
          {plan.communityaccess === "yes" ? <CheckIcon /> : <ClearIcon />}
          Community Access
        </p>
        <p
          style={
            plan.unlimitedprivateprojects === "yes"
              ? { color: "black" }
              : { color: "gray" }
          }
        >
          {plan.unlimitedprivateprojects === "yes" ? (
            <CheckIcon />
          ) : (
            <ClearIcon />
          )}
          Unlimited Private Projects
        </p>
        <p
          style={
            plan.freesubdomain === "yes"
              ? { color: "black" }
              : { color: "gray" }
          }
        >
          {plan.freesubdomain === "yes" ? <CheckIcon /> : <ClearIcon />}
          Free Subdomain
        </p>
        <p
          style={
            plan.monthlystatusreports === "yes"
              ? { color: "black" }
              : { color: "gray" }
          }
        >
          {plan.monthlystatusreports === "yes" ? <CheckIcon /> : <ClearIcon />}
          Monthly Status Reports
        </p>
      </div>
      <div className="button">
        <Button variant="contained"> Get Started </Button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="pricing-container">
      {plans.map((plan) => (
        <PriceCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
};

export default App;
