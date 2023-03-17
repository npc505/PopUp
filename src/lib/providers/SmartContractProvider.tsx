import { Result } from "ethers/lib/utils.js";
import { createContext, useCallback, useContext, useMemo } from "react";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { SendTransactionResult, PrepareWriteContractResult } from "@wagmi/core";
import {
  ABIObject,
  Address,
  Overrides,
  SmartContractContextType,
  SmartContractProviderProps,
} from "./SmartContractProvider.types";
import HooksProvider, { AddHookFunc, RemoveHookFunc, useHooks } from "./HooksProvider";

const SmartContractContext = createContext<SmartContractContextType | null>(
  null
);

function read(
  addHook: AddHookFunc,
  removeHook: RemoveHookFunc,
  functionName: string,
  abi: ABIObject[],
  address: Address,
  args?: any[],
  overrides?: Overrides
) {
  const id = { id: "" };
  return new Promise<Result>((resolve, reject) => {
    const onSuccess = (res: Result) => {
      resolve(res);
      removeHook(id.id)
    };
    const onError = (e: Error) => {
      reject(e);
      removeHook(id.id);
    };
    id.id = addHook({
      useHook: useContractRead,
      data: {
        address: address,
        abi: abi,
        functionName: functionName,
        args: args,
        overrides: overrides,
        onSuccess: onSuccess,
        onError: onError,
      },
    });
  });
}

async function write(
  addHook: AddHookFunc,
  removeHook: RemoveHookFunc,
  functionName: string,
  abi: ABIObject[],
  address: Address,
  args?: any[],
  overrides?: Overrides
) {
  const id = { id: "" };
  const preparedData = await new Promise<PrepareWriteContractResult>(
    (resolve, reject) => {
      const onSuccess = (res: PrepareWriteContractResult) => {
        resolve(res);
        removeHook(id.id)
      };
      const onError = (e: Error) => {
        reject(e);
        removeHook(id.id);
      };
      id.id = addHook({
        useHook: usePrepareContractWrite,
        data: {
          address: address,
          abi: abi as any,
          functionName: functionName,
          args: args,
          overrides: overrides,
          onSuccess: onSuccess,
          onError: onError,
        },
      });
    }
  );
  const id2 = { id: "" };
  return new Promise<SendTransactionResult>((resolve, reject) => {
    const onSuccess = (res: SendTransactionResult) => {
      resolve(res);
      removeHook(id2.id)
    };
    const onError = (e: Error) => {
      reject(e);
      removeHook(id2.id);
    };
    id2.id = addHook({
      useHook: useContractWrite,
      data: {
        ...(preparedData as any),
        onSuccess: onSuccess,
        onError: onError,
      },
    });
  });
}

function SmartContractProvider(props: SmartContractProviderProps) {
  const { addHook, removeHook } = useHooks();
  const value = useMemo(() => {
    const getABI = (functionName: string) => {
      for (const obj of props.abi) {
        if (obj.name === functionName) {
          return obj;
        }
      }
    };
    return {
      contractAddress: props.address,
      getABI: getABI,
      read: async (functionName: string, args?: any, overrides?: Overrides) =>
        read(addHook, removeHook, functionName, props.abi, props.address, args, overrides),
      write: async (functionName: string, args?: any, overrides?: Overrides) =>
        write(addHook, removeHook, functionName, props.abi, props.address, args, overrides),
    };
  }, [addHook, removeHook, props.abi, props.address]);
  return (
    <SmartContractContext.Provider value={value}>
      {props.children}
    </SmartContractContext.Provider>
  );
}

export default function SmartContractProviderWrapper(
  props: SmartContractProviderProps
) {
  return (
    <HooksProvider>
      <SmartContractProvider {...props} />
    </HooksProvider>
  );
}

export function useSmartContract() {
  const context = useContext(SmartContractContext);
  if (context === null) {
    throw new Error("useSmartContract must be inside SmartContractProvider");
  }
  return context;
}

export function useRead() {
  const read = useCallback(() => {}, []);
}
