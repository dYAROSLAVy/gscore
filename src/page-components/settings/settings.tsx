import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { Personal } from "@/widgets/settings-tabs/personal";
import { Password } from "@/widgets/settings-tabs/password";
import { Tab, Tabs } from "@/shared/ui/tabs/tabs";

export const Settings = () => {
  const { cnRoot, cnTitle, cnCont, cnTabsWrap } = useClasses();

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

  return (
    <section className={cnRoot}>
      <Container className={cnCont}>
        <h1 className={cnTitle}>Settings</h1>
        <Tabs className={cnTabsWrap} tabs={TABS} secondary />
      </Container>
    </section>
  );
};
