import { useMemo } from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'

export const WalletConnectProvider = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet
    const endpoint = useMemo(() => {
        if (network === WalletAdapterNetwork.Devnet) {
            return "https://billowing-aged-dream.solana-devnet.discover.quiknode.pro/9e11d48c306fc811464fd81db165230ab908c35d/"
        }
        return clusterApiUrl(network)
    }, [network])

    const wallets = useMemo(() => [
        new PhantomWalletAdapter(), 
        new GlowWalletAdapter(), 
        new SlopeWalletAdapter(), 
        new SolflareWalletAdapter({ network }), 
        new TorusWalletAdapter()
    ], [network])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}
