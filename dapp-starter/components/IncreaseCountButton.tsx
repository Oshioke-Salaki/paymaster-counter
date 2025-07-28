import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

function IncreaseCountButton({
  amount,
  disabled,
}: {
  amount: number;
  disabled: boolean;
}) {
  const handleIncrease = async () => {
    // TODO: Implement increase count with Starknet React
  };

  return (
    <Button
      variant="default"
      size="lg"
      onClick={handleIncrease}
      className="h-16 flex flex-col items-center justify-center gap-1 hover:shadow-elegant"
      //   TODO: Fix disabled
      disabled={disabled}
    >
      <Plus className="w-6 h-6" />
      <span className="text-sm">Increase by {amount}</span>
    </Button>
  );
}

export default IncreaseCountButton;
