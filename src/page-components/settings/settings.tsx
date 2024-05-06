import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { Personal, Password } from "@/widgets/settings-tabs/";
import { Tab, Tabs } from "@/shared/ui/tabs/tabs";

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

export const Settings = () => {
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
