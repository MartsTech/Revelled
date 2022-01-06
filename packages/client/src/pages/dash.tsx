import Page from "layouts/page";
import IsAuth from "modules/auth/IsAuth";
import Dashboard from "modules/dashboard";
import type { NextPage } from "next";

const DashboardPage: NextPage = () => {
  return (
    <IsAuth>
      <Page title="Dashboard | Revelled">
        <Dashboard />
      </Page>
    </IsAuth>
  );
};

export default DashboardPage;
