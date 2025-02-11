
import PricingCard from "../components/PricingCard";

const Index = () => {
  const pricingTiers = [
    { 
      tier: "Minecraft Server Tier 1", 
      price: "$1.99", 
      ram: "1GB", 
      cpu: "I5 CPU",
      checkoutUrl: "https://www.patreon.com/checkout/enzonic_com?rid=25112263"
    },
    { 
      tier: "Minecraft Server Tier 2", 
      price: "$2.99", 
      ram: "4GB", 
      cpu: "I5 CPU",
      checkoutUrl: "https://www.patreon.com/checkout/enzonic_com?rid=25112270"
    },
    { 
      tier: "Minecraft Server Tier 3", 
      price: "$4.99", 
      ram: "6GB", 
      cpu: "I5 CPU", 
      isPopular: true,
      checkoutUrl: "https://www.patreon.com/checkout/enzonic_com?rid=25112277"
    },
    { 
      tier: "Minecraft Server Tier 4", 
      price: "$5.99", 
      ram: "8GB", 
      cpu: "I5 CPU",
      checkoutUrl: "https://www.patreon.com/checkout/enzonic_com?rid=25112280"
    },
    { 
      tier: "Minecraft Server Tier 5", 
      price: "$8.99", 
      ram: "10GB", 
      cpu: "I5 CPU",
      checkoutUrl: "https://www.patreon.com/checkout/enzonic_com?rid=25112287"
    },
    { 
      tier: "Minecraft Server Tier 6", 
      price: "$10.99", 
      ram: "12GB", 
      cpu: "I5 CPU",
      checkoutUrl: "https://www.patreon.com/checkout/enzonic_com?rid=25112289"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute top-4 left-4">
        <a
          href="https://enzonic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Home
        </a>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Enzonic Minecraft Hosting
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the perfect plan for your Minecraft server with DDoS protection included.
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
              checkoutUrl={tier.checkoutUrl}
            />
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Want a bigger server?</h2>
          <p className="text-gray-300">
            Contact us at:{" "}
            <a href="mailto:host@enzonic.com" className="text-primary hover:underline">
              host@enzonic.com
            </a>
            {" "}or on{" "}
            <a 
              href="https://discord.gg/hp5qj94F3d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Discord
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
