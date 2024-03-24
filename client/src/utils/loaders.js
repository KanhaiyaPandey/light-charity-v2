import { redirect } from "react-router-dom";
import { customFetchBloodbank, customFetchDonor } from "./helper";

export const DonordashboardLoader = async () => {
  try {
    const { data } = await customFetchDonor.get("/donor/current-donor");
    console.log(data);
    return data;
  } catch (error) {
    return redirect("/donor/login");
  }
};

export const BBDashboardLoader = async () => {
  try {
    const { data } = await customFetchBloodbank.get("/update/donors");
    return data;
  } catch (error) {
    return redirect("/blood-bank/login");
  }
};
