import React from "react";

const Inventory = () => {
  const inventoryData = [
    { bloodType: "A+", units: 25 },
    { bloodType: "B+", units: 30 },
    { bloodType: "O+", units: 20 },
    { bloodType: "AB+", units: 15 },
    { bloodType: "A-", units: 10 },
    { bloodType: "B-", units: 12 },
    { bloodType: "O-", units: 8 },
    { bloodType: "AB-", units: 5 },
  ];

  return (
    <div className=" flex items-center justify-center w-full h-full "></div>
  );
};

export default Inventory;
