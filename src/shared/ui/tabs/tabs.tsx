import { FC, ReactNode, useEffect, useState, MouseEvent } from "react";
import { ButtonTabPrimary } from "../buttons/tab/primary/button-tab-primary";
import { useClasses } from "./styles/use-classes";
import { ButtonTabSecondary } from "../buttons/tab/secondary/button-tab-secondary";

export type Tab = {
  id: string;
  text: string;
  content: ReactNode;
  disabled?: boolean;
};

export type TabsProps = {
  defaultTab?: string;
  tabs: Tab[];
  className?: string;
  secondary?: boolean;
};

export const Tabs: FC<TabsProps> = ({
  tabs,
  defaultTab,
  className,
  secondary,
}) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab ?? tabs[0].id);

  const { cnRoot } = useClasses({ className });

  const onTabClick = (id: string) => (evt: MouseEvent<HTMLButtonElement>) => {
    setSelectedTab(id);
  };

  useEffect(() => {
    if (defaultTab) {
      setSelectedTab(defaultTab);
    }
  }, [defaultTab]);

  const selectedTabIndex = tabs.findIndex((tab) => tab.id === selectedTab);
  const selectedTabItem = tabs[selectedTabIndex];
  const selectedTabContent = selectedTabItem?.content;

  return (
    <>
      <div className={cnRoot}>
        {tabs.map((tab, index) => {
          return (
            <div key={tab.id}>
              {!secondary && (
                <ButtonTabPrimary
                  isActive={index <= selectedTabIndex}
                  onClick={onTabClick(tab.id)}
                  disabled={tab?.disabled}
                >
                  {tab.text}
                </ButtonTabPrimary>
              )}
              {secondary && (
                <ButtonTabSecondary
                  isActive={index === selectedTabIndex}
                  onClick={onTabClick(tab.id)}
                  disabled={tab?.disabled}
                >
                  {tab.text}
                </ButtonTabSecondary>
              )}
            </div>
          );
        })}
      </div>
      {selectedTabContent}
    </>
  );
};
