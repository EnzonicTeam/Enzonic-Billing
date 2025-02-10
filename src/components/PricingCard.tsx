
import { Check } from "lucide-react";

interface PricingCardProps {
  tier: string;
  price: string;
  ram: string;
  cpu: string;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, price, ram, cpu, isPopular }) => {
  return (
    <div className="group animate-fade-in">
      <div
        className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl group-hover:animate-card-hover ${
          isPopular
            ? "border-pricing-border bg-pricing-highlight"
            : "border-gray-200 bg-white"
        }`}
      >
        {isPopular && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-sm rounded-full font-medium">
            Most Popular
          </span>
        )}
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">{tier}</h3>
            <div className="flex justify-center items-baseline">
              <span className="text-4xl font-bold text-gray-900">{price}</span>
              <span className="ml-1 text-gray-500">/month</span>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="text-gray-600">{ram} RAM</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="text-gray-600">{cpu} CPU</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="text-gray-600">24/7 Support</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="text-gray-600">DDoS Protection</p>
            </div>
          </div>

          <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            isPopular
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-gray-50 text-gray-900 hover:bg-gray-100"
          }`}>
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
