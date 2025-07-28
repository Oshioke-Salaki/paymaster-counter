"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal = ({ isOpen, onClose }: WalletModalProps) => {
  // TODO Implement handle connect
  async function handleConnect() {
    try {
      toast("Wallet connected successfully");
      onClose();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border border-border">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Connect Your Wallet
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-6">
          <Button
            variant="default"
            className="w-full h-16 flex items-center justify-start gap-4 p-4"
            onClick={() => handleConnect()}
          >
            <img src="Fix image" className="w-[30px]" alt="connector image" />
            <div className="text-left">
              <div className="font-semibold">Dummy connector</div>
              <div className="text-sm text-muted-foreground">
                Fast and simple wallet
              </div>
            </div>
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Connect your wallet to use counter.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;
