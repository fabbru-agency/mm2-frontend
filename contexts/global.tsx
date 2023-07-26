import { Context } from "@/types/Context";
import { createContext, useState } from "react";

interface IGlobalContextProps {
  context: Context;
  setContext: (context: Context) => void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  context: {},
  setContext: () => {},
});

export const GlobalContextProvider = (props: any) => {
  const [currentContext, setContext] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        context: currentContext,
        setContext: setContext,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
