import { goerli, mainnet, polygonMumbai } from 'wagmi/chains'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Web3Provider } from "../src/lib/providers";
import SmartContractProviderWrapper from '../src/lib/providers/SmartContractProvider';
import abi from "../src/assets/abi.json"



// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

// 2. Configure wagmi client
const chains = [polygonMumbai]

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Web3Provider appName='Test App' chains={chains} projectId={projectId}>
      <SmartContractProviderWrapper address='0x7E5d1bd04280E1Ca2c5Aa2567fA5184094Fc87E5' abi={abi}>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/owo4gkq.css" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SmartContractProviderWrapper>
    </Web3Provider>
  );
}
