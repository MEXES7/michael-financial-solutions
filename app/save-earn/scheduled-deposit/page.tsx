import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import ScheduledDeposits from "@/app/components/ScheduledDeposit";
import React from "react";

const ScheduledDeposit = () => {
  return (
    <>
      <NavBar />
      <ScheduledDeposits />
      <Footer />
    </>
  );
};

export default ScheduledDeposit;
