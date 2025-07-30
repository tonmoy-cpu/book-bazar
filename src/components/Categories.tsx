import { Button } from "@/components/ui/button";
import { BookOpen, Code, TrendingUp, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: "fiction",
    name: "Fiction",
    icon: BookOpen,
    description: "Novels & Stories",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "tech",
    name: "Tech",
    icon: Code,
    description: "Programming & IT",
    color: "from-green-500 to-teal-600",
  },
  {
    id: "self-help",
    name: "Self-Help",
    icon: TrendingUp,
    description: "Personal Growth",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "exam-prep",
    name: "Exam Prep",
    icon: GraduationCap,
    description: "Academic Success",
    color: "from-purple-500 to-pink-600",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Popular Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover books across diverse genres tailored for every reader's taste and interest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant="category"
                onClick={() => navigate('/books')}
                className="h-auto p-6 flex-col space-y-4 group"
              >
                <div className={`p-4 rounded-full bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;