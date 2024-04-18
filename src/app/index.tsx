import { store } from "@/store/store";
import { getMeData } from "@/store/user/selectors";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";

export function App({ Component, pageProps }: AppProps) {
  const token =
    typeof window !== "undefined"
      ? window.localStorage.getItem("user-token") ?? ``
      : ``;

  useEffect(() => {
    store.dispatch(getMeData(token));
  }, [token]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
