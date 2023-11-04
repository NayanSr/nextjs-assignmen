import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
  // return <Component {...pageProps} />;
}

{
  /* <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider> */
}
