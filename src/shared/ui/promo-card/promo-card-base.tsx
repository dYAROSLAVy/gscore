import { CheckIcon } from "@/shared/icons/check";
import { ButtonSecondary } from "../buttons/secondary/button-secondary";
import { useClasses } from "./styles/use-classes";
import { FC } from "react";

export type PromoCardProps = {
  className?: string;
  title?: string;
  price?: number;
  sites?: string;
  tomato?: boolean;
};

export const PromoCardBase: FC<PromoCardProps> = ({
  className,
  title,
  price,
  sites,
  tomato,
}) => {
  const {
    cnRoot,
    cnTopWrap,
    cnPrice,
    cnTitle,
    cnSlogan,
    cnBottomWrap,
    cnList,
    cnListDecor,
  } = useClasses({
    tomato,
  });
  return (
    <div className={cnRoot}>
      <div className={cnTopWrap}>
        <span className={cnPrice}>
          <b>${price}</b>
        </span>
        <h3 className={cnTitle}>{title}</h3>
        <p className={cnSlogan}>
          Get the advanced WordPress plugin that optimizes content with GSC
          keywords at one low annual price
        </p>
      </div>
      <div className={cnBottomWrap}>
        <ul className={cnList}>
          <li>
            <span className={cnListDecor}>
              <CheckIcon></CheckIcon>
            </span>
            <span>{sites}</span>
          </li>
          <li>
            <span className={cnListDecor}>
              <CheckIcon></CheckIcon>
            </span>
            <span>Special introductory pricing</span>
          </li>
          <li>
            <span className={cnListDecor}>
              <CheckIcon></CheckIcon>
            </span>
            <span>Unlimited Pages and Keywords</span>
          </li>
          <li>
            <span className={cnListDecor}>
              <CheckIcon></CheckIcon>
            </span>
            <span>Billed annually</span>
          </li>
        </ul>
        <ButtonSecondary>Get Gscore</ButtonSecondary>
      </div>
    </div>
  );
};
