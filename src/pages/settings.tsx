import { Layout } from "@/widgets/layout";
import { SettingsTabs } from "@/widgets/settings";

export default function SettingsPage() {
  return (
    <Layout headTitle="Settings">
      <SettingsTabs />
    </Layout>
  );
}
