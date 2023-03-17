import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import React, { createContext, useContext, useMemo } from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { Web3ContextType, Web3ProviderProps } from "./Web3Provider.types";

const Web3Context = createContext<Web3ContextType|null>(null);

function WalletConnectModal() {
  const { projectId, ethereumClient } = useWeb3();
  return (
    <React.Fragment>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </React.Fragment>
  );
}

export default function Web3Provider(props: Web3ProviderProps) {
  const [client, value] = useMemo(() => {
    const { chains, provider, webSocketProvider } = configureChains(
      props.chains,
      [walletConnectProvider({ projectId: props.projectId })]
    );
    const client = createClient({
      autoConnect: true,
      connectors: modalConnectors({
        appName: props.appName,
        chains: chains,
        projectId: props.projectId,
        version: "2",
      }),
      provider,
      webSocketProvider,
    } as any);
    const ethereumClient = new EthereumClient(client, chains);
    return [
      client,
      {
        chains: chains,
        ethereumClient: ethereumClient,
        projectId: props.projectId,
      },
    ];
  }, [props.projectId, props.chains, props.appName]);

  return (
    <Web3Context.Provider value={value}>
      <WagmiConfig client={client}>
        {props.children}
        <WalletConnectModal/>
      </WagmiConfig>
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error("useWeb3 must be inside Web3Provider");
  }
  return context;
}
