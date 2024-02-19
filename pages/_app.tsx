// import Wrapper from "../layout/Wrapper/Wrapper";
import "../styles/globals.css";
// import { useAuth } from "firebase/auth";
import type { AppProps } from "next/app";

import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import dynamic from "next/dynamic";
import { RoomProvider } from "@/liveblocks.config";
import { Room } from "./Room";

const Wrapper=dynamic(()=> import('@/layout/Wrapper/Wrapper'), {ssr: false})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Room>
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
    </Room>
  );
}
