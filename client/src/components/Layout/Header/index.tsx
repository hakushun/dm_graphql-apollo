import type { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="bg-red-100">
      <div className="max-w-screen-xl ml-auto mr-auto p-2">
        <h1 className="text-xl">Apollo de Todo</h1>
      </div>
    </header>
  );
};
