import Page from "layouts/page";
import Dashboard from "modules/dashboard";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useStore } from "stores/store";

const DashboardPage: NextPage = () => {
  const { loadEvents } = useStore().eventStore;

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  return (
    <Page title="Dashboard | Revelled">
      <Dashboard />
    </Page>
  );
};

export default DashboardPage;
