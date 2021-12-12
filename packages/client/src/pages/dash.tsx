import Page from "layouts/page";
import Dashboard from "modules/dashboard";
import type { NextPage } from "next";

const DashboardPage: NextPage = () => {
  return (
    <Page title="Dashboard | Revelled">
      <Dashboard />
    </Page>
  );
};

export default DashboardPage;
