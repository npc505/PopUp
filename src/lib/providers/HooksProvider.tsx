import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type AddHookFunc = ({ useHook, data, id }: HookProps) => string;
export type RemoveHookFunc = (id: string) => void;

type HookContextType = {
  createID: () => string;
  addHook: AddHookFunc;
  removeHook: RemoveHookFunc
};

const HooksContext = createContext<HookContextType | null>(null);

interface HookProps {
  useHook: any;
  data: any;
  id?: string;
}
//TODO: add generics and remove any

function HookWrapper({ useHook, data, id }: HookProps) {
  const hookRes = useHook(data);
  //TODO: make its value readable
  useEffect(()=>{
    console.debug("Hook created", useHook, data)
  },[ useHook, data])
  return <React.Fragment />;
}

export default function HooksProvider({ children }: { children: ReactNode }) {
  const [hooks, setHooks] = useState<{ [key: string]: HookProps }>({});
  const value = useMemo(() => {
    const createID = () => uuidv4();
    const addHook = ({ useHook, data, id }: HookProps) => {
      if (!id) {
        id = createID();
      }
      setHooks((prev) => ({
        ...prev,
        [id!]: { useHook: useHook, data: data, id: id },
      }));
      return id;
    };
    const removeHook = (id: string) => {
      setHooks((prev) => {
        if (prev[id] === undefined) {
          return prev;
        }
        const aux = { ...prev };
        delete aux[id];
        return aux;
      });
    };
    return {
      createID,
      addHook,
      removeHook,
    };
  }, []);
  return (
    <HooksContext.Provider value={value}>
      {Object.entries(hooks).map(([id, value]) => (
        <HookWrapper {...value} key={id} />
      ))}
      {children}
    </HooksContext.Provider>
  );
}

export function useHooks(){
    const context = useContext(HooksContext)
    if(!context){
        throw new Error("useHooks must be inside HooksProvider");
    }
    return context
}