import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

// 2. Configure wagmi client
const chains = [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum]
const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains }),
  provider
})

// 3. Configure modal ethereum client
export const ethereumClient = new EthereumClient(wagmiClient, chains)


export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return(
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/owo4gkq.css" />
      </Head>
      <WagmiConfig client={wagmiClient}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </WagmiConfig>

      {/* Demo purposes only, if custom path is set, we initialize different Web3Modal instance */}
      {pathname === '/custom' ? null : (
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeColor={"teal"}/>
      )}
    </>
  );
}
