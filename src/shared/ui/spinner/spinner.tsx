import { LoaderIcon } from "@/shared/icons/loader";
import styles from "./spinner.module.scss";

export const Spinner = () => {
  return <LoaderIcon className={styles.spinner} />;
};
