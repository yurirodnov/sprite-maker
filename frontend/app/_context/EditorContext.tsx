// sprite-maker/frontend/app/_context/EditorContext.ts

"use client";

import React, { useContext, createContext, useState } from "react";

const EditorContext = createContext({ ok: true, toggleOk: () => {} });

export const EditorContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [ok, setOk] = useState(true);
  const toggleOk = () => {
    setOk((prev) => (prev === true ? false : true));
  };
  return <EditorContext.Provider value={{ ok, toggleOk }}>{children}</EditorContext.Provider>;
};
