import type { ReactNode, VFC } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};
export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div id="app" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-red-50">{children}</main>
    </div>
  );
};
