'use client';

import TokenLaunchpad from "@/components/TokenLaunchpad";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function Home() {
  return (
    <ConnectionProvider endpoint='https://solana-devnet.g.alchemy.com/v2/3DA02PmwQQwLVjRWVxCKD-U_RlGcnAIS'>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen w-full text-white relative">
            
            <div className="absolute top-4 right-4 flex space-x-3 z-50">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>

            <div className="flex items-center justify-center min-h-screen px-4">
              <TokenLaunchpad />
            </div>

          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
