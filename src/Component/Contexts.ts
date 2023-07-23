import { createContext } from "react";
type countProps = {
  handleChangeCart: ({}) => void;
};
export const CountContexts = createContext<countProps | any>({});

export const AlertContexts = createContext<{} | undefined>({});
