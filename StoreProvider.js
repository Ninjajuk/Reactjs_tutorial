// // Providers.js
'use client';
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
// import { Providers } from "@/Redux/provider"

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

// 'use client';
// import { Provider } from "react-redux";
// import { store } from "@/store";

// export function Providers({ children } : { children: React.ReactNode }) {
//   return <Provider store={store}>{children}</Provider>;
// }
