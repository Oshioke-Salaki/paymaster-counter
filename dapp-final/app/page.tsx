import CounterInterface from "@/components/CounterInterface";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4"
            style={{
              backgroundImage: "var(--gradient-primary)",
            }}
          >
            Starknet Counter
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A decentralized counter application built on Starknet. Connect your
            wallet and start interacting with the blockchain.
          </p>
        </div>

        <CounterInterface />
      </main>
    </div>
  );
};

export default Index;
