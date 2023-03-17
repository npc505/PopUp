import { EthereumClient } from "@web3modal/ethereum";
import { ReactNode } from "react";
import { Chain } from "wagmi";

export  interface Web3ProviderProps {
    children?: ReactNode;
    chains: Chain[];
    projectId: string;
    appName: string;
}

export type Web3ContextType = {
  chains: Chain[],
  ethereumClient: EthereumClient,
  projectId: string
}