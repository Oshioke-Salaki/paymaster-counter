"use client";
import { useState } from "react";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import WalletModal from "./WalletModal";
import AccountModal from "./AccountModal";

const Navbar = () => {
  // Todo: Fetch Correct Address
  const address = undefined;
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  S
                </span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Starknet Counter
              </span>
            </div>

            {/* Connect Wallet / Account */}
            <div className="flex items-center">
              {!address ? (
                <Button
                  variant="default"
                  onClick={() => setShowWalletModal(true)}
                  className="flex items-center gap-2"
                >
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </Button>
              ) : (
                <button
                  onClick={() => setShowAccountModal(true)}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-card border border-border hover:bg-accent hover:border-primary transition-all duration-200"
                >
                  <div className="w-8 h-8 text-2xl"> ⚡</div>
                  <span className="font-mono text-sm text-foreground">
                    {shortenAddress(address)}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <WalletModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
      />

      <AccountModal
        isOpen={showAccountModal}
        onClose={() => setShowAccountModal(false)}
      />
    </>
  );
};

export default Navbar;
