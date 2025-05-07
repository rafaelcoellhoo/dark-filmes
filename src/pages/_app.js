import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return <>
    <ToastContainer 
      position="top-right"
      hideProgressBar
      closeOnClick
      autoClose={5000}
      theme="dark"
      />
    <Component {...pageProps} />
  </>
}
