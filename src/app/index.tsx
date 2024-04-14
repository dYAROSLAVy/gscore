import { store } from "@/store/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

export function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
