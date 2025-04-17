
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/placeholder.svg" 
          alt="Коммерческая недвижимость" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Аренда коммерческой недвижимости в Москве
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Офисные и торговые помещения в пешей доступности от метро.
            Найдите идеальное пространство для вашего бизнеса.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/properties">Смотреть объекты</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
