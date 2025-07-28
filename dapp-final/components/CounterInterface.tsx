"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw } from "lucide-react";
import { HashLoader } from "react-spinners";
import IncreaseCountButton from "./IncreaseCountButton";
import DecreaseCountButton from "./DecreaseCountButton";
import { useContractFetch } from "@/app/hooks/use-blockchain";
import { COUNTER_ABI } from "@/abi/counter_abi";
import { useAccount } from "@starknet-react/core";

const CounterInterface = () => {
  const { address } = useAccount();
  const [amount, setAmount] = useState(0);
  const {
    readData: count,
    dataRefetch: countRefetch,
    readIsLoading: isLoadingCount,
    readError,
    readIsReFecthing,
  } = useContractFetch(COUNTER_ABI, "get_count", []);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Count Display */}
      <Card
        className="text-center border-border"
        style={{
          backgroundImage: "var(--gradient-glow)",
        }}
      >
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">
            Current Count
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="text-6xl flex justify-center font-bold bg-gradient-primary bg-clip-text text-transparent mb-4"
            style={{
              backgroundImage: "var(--gradient-primary)",
            }}
          >
            <HashLoader
              color="hsl(0 0% 15%)"
              loading={isLoadingCount || readIsReFecthing}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            {count &&
              !readError &&
              !isLoadingCount &&
              !readIsReFecthing &&
              count}
          </div>
          <Button
            variant="default"
            onClick={() => countRefetch()}
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Refresh Count
          </Button>
        </CardContent>
      </Card>

      {/* Amount Input */}
      <Card
        className="border-border"
        style={{
          backgroundImage: "var(--card)",
        }}
      >
        <CardHeader>
          <CardTitle className="text-lg text-foreground">Set Amount</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <label
              htmlFor="amount"
              className="text-sm font-medium text-muted-foreground whitespace-nowrap"
            >
              Amount:
            </label>
            <Input
              id="amount"
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value) || 1)}
              className="flex-1 bg-background border-border"
              placeholder="Enter amount"
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <IncreaseCountButton disabled={true} amount={amount} />
        <DecreaseCountButton
          disabled={true}
          amount={amount > count ? 1 : amount}
        />
      </div>

      {!address && (
        <div className="text-center text-muted-foreground text-sm bg-muted/30 p-4 rounded-lg border border-border">
          Connect your wallet to interact with the Starknet counter
        </div>
      )}
    </div>
  );
};

export default CounterInterface;
