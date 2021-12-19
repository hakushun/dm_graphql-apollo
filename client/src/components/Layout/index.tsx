import type { ReactNode, VFC } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};
export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div id="app">
      <Header />
      <main>{children}</main>
    </div>
  );
};
