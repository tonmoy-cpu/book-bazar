import { Card, CardContent } from "@/components/ui/card";
import { Truck, DollarSign, Award, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Handpicked Books",
    description: "Carefully curated collection from bestselling authors and emerging talents",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your books delivered within 2-3 business days nationwide",
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: DollarSign,
    title: "Budget Friendly",
    description: "Competitive prices with frequent discounts and special offers",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Users,
    title: "Curated for Every Reader",
    description: "From casual readers to academic scholars, we have something for everyone",
    gradient: "from-purple-500 to-pink-600",
  },
];

const WhyBookBazaar = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Why Book Bazaar?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us the preferred destination for book lovers across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group border-0 shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-fit">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${feature.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyBookBazaar;