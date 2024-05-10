import { CheckIcon } from "@/shared/icons/check";
import { useClasses } from "./styles/use-classes";
import { FC } from "react";
import { useAppSelector } from "@/shared/redux/hooks";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import { useRouter } from "next/router";
import { ButtonSecondary } from "@/shared/ui/buttons/secondary/button-secondary";
import { useChangeProductMutation } from "@/entities/subscribes";
import { getUserToken } from "@/entities/user";

export type PromoCardProps = {
  className?: string;
  id: number;
  sitesCount: number;
  price?: string;
  tomato?: boolean;
  onClick?: () => void;
  subscribeIndex?: string | string[];
  isSubscribeIndex?: boolean;
};

export const PromoCardBase: FC<PromoCardProps> = ({
  onClick,
  sitesCount,
  price,
  tomato,
  subscribeIndex,
  isSubscribeIndex,
  id,
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
  } = useClasses(tomato);

  const router = useRouter();

  const [changeProduct, { isLoading }] = useChangeProductMutation();

  const token = useAppSelector(getUserToken);

  const onChangeProductClick = async () => {
    try {
      const numberId = Number(subscribeIndex);
      const data = {
        token,
        subscribeId: numberId,
        productId: id,
      };
      await changeProduct(data).unwrap();

      alert("subscription changed");

      router.push("/subscriptions");
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        alert(error.data.message);
      }
    }
  };

  return (
    <div className={cnRoot}>
      <div className={cnTopWrap}>
        <span className={cnPrice}>
          <b>${price}</b>
        </span>
        <h3 className={cnTitle}>
          {" "}
          {sitesCount === 1
            ? "Single site license"
            : `${sitesCount} Site license`}
        </h3>
        <p className={cnSlogan}>
          Get the advanced WordPress plugin that optimizes content with GSC
          keywords at one low annual price
        </p>
      </div>
      <div className={cnBottomWrap}>
        <ul className={cnList}>
          <li>
            <span className={cnListDecor}>
              <CheckIcon />
            </span>
            <span>
              {sitesCount === 1
                ? "Single site license"
                : `All features for ${sitesCount} sites`}
            </span>
          </li>
          <li>
            <span className={cnListDecor}>
              <CheckIcon />
            </span>
            <span>Special introductory pricing</span>
          </li>
          <li>
            <span className={cnListDecor}>
              <CheckIcon />
            </span>
            <span>Unlimited Pages and Keywords</span>
          </li>
          <li>
            <span className={cnListDecor}>
              <CheckIcon />
            </span>
            <span>Billed annually</span>
          </li>
        </ul>
        <ButtonSecondary
          onClick={!isSubscribeIndex ? onClick : onChangeProductClick}
          disabled={isLoading}
        >
          {!isSubscribeIndex && "Get Gscore"}
          {isSubscribeIndex && "Сhange to this subscription"}
        </ButtonSecondary>
      </div>
    </div>
  );
};
