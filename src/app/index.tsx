import { wrapper } from "@/app/store";
import { getMeData } from "@/entities/user";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";

export function App({ Component, ...rest }: AppProps) {
  const token =
    typeof window !== "undefined"
      ? window.localStorage.getItem("user-token") ?? ``
      : ``;

  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    store.dispatch(getMeData(token));
  }, [token]);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}
