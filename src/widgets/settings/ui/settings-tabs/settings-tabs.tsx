import { Container } from "@/shared/ui/container/container";
import { useClasses } from "@/widgets/settings/ui/settings-tabs/styles/use-classes";
import { Tab, Tabs } from "@/shared/ui/tabs/tabs";
import { Personal } from "../tabs/personal";
import { Password } from "../tabs/password";

const TABS: Tab[] = [
  {
    id: "personal",
    text: "Personal info",
    content: <Personal />,
  },
  {
    id: "password",
    text: "Change password",
    content: <Password />,
  },
];

export const SettingsTabs = () => {
  const { cnRoot, cnTitle, cnCont, cnTabsWrap } = useClasses();

  return (
    <section className={cnRoot}>
      <Container className={cnCont}>
        <h1 className={cnTitle}>Settings</h1>
        <Tabs className={cnTabsWrap} tabs={TABS} secondary />
      </Container>
    </section>
  );
};
