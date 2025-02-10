
import PricingCard from "../components/PricingCard";

const Index = () => {
  const pricingTiers = [
    { tier: "Minecraft Server Tier 1", price: "$1.99", ram: "1GB", cpu: "I5 CPU" },
    { tier: "Minecraft Server Tier 2", price: "$2.99", ram: "4GB", cpu: "I5 CPU" },
    { tier: "Minecraft Server Tier 3", price: "$4.99", ram: "6GB", cpu: "I5 CPU", isPopular: true },
    { tier: "Minecraft Server Tier 4", price: "$5.99", ram: "8GB", cpu: "I5 CPU" },
    { tier: "Minecraft Server Tier 5", price: "$8.99", ram: "10GB", cpu: "I5 CPU" },
    { tier: "Minecraft Server Tier 6", price: "$10.99", ram: "12GB", cpu: "I5 CPU" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Choose Your Minecraft Server
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your Minecraft server. All plans include 24/7 support and DDoS protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier.tier}
              price={tier.price}
              ram={tier.ram}
              cpu={tier.cpu}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
