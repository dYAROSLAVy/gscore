import classNames from "classnames/bind";
import classes from "./code-card.module.scss";
import { CodeCardProps } from "../code-card";

const cn = classNames.bind(classes);

export const useClasses = ({ status, isHold }: CodeCardProps) => {
  const cnRoot = cn(`code-card`);
  const cnCheck = cn(`code-card__checkbox`);
  const cnLabel = cn(`code-card__label`);
  const cnInputWrap = cn(`code-card__input-wrapper`);
  const cnDomainWrap = cn(`code-card__domain-wrapper`, {
    "code-card__domain-wrapper--primary": status === "INACTIVE",
  });
  const cnStatusWrap = cn(`code-card__status-wrapper`);
  const cnStatus = cn(
    `code-card__status`,
    {
      "code-card__status--primary": status === "INACTIVE",
    },
    {
      "code-card__status--secondary": isHold,
    }
  );
  const cnButton = cn(`code-card__button`);

  return {
    cnRoot,
    cnCheck,
    cnLabel,
    cnInputWrap,
    cnStatus,
    cnDomainWrap,
    cnStatusWrap,
    cnButton,
  };
};
