import React from "react";
import { Button } from "./ui/button";
import { Minus } from "lucide-react";

function DecreaseCountButton({
  amount,
  disabled,
}: {
  amount: number;
  disabled: boolean;
}) {
  const handleDecrease = async () => {
    // TODO: Implement Decrease count with Starknet JS
  };
  return (
    <Button
      variant="default"
      size="lg"
      onClick={handleDecrease}
      className="h-16 flex flex-col items-center justify-center gap-1 hover:shadow-elegant"
      //   TODO: Fix disabled
      disabled={disabled}
    >
      <Minus className="w-6 h-6" />
      <span className="text-sm">Decrease by {amount}</span>
    </Button>
  );
}

export default DecreaseCountButton;
