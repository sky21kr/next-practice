import NavBar from "@/components/NavBar";
import '@/app/globals.css';

export default function App({ Component, pageProps }) {
  
  return <div>
    <NavBar/>
    <Component {...pageProps} />
  </div>
}