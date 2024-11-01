import React from "react";
import UpcomingAppointmentsContainer from "./containers/UpcomingAppointmentsContainer";
import TestResultsContainer from "./containers/TestResultsContainer";
import NotificationsPatient from "./containers/NotificationsPatient";

const MainSectionPatient = ({ user }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome back, {user}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UpcomingAppointmentsContainer />
        <TestResultsContainer />
        <NotificationsPatient />
      </div>
    </div>
  );
};

export default MainSectionPatient;
