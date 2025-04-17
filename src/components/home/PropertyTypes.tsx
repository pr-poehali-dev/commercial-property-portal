
import { Building2, Store, CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PropertyTypes = () => {
  const types = [
    {
      id: 1,
      title: "Офисные помещения",
      description: "Комфортные офисы разных площадей, от мини-офисов до просторных помещений open space",
      icon: <Building2 className="h-12 w-12 text-primary" />,
      link: "/properties?type=office"
    },
    {
      id: 2,
      title: "Торговые помещения",
      description: "Помещения на первых линиях жилых домов с отличной проходимостью и видимостью",
      icon: <Store className="h-12 w-12 text-primary" />,
      link: "/properties?type=retail"
    },
    {
      id: 3,
      title: "Специальные предложения",
      description: "Выгодные условия для долгосрочной аренды и возможность индивидуальных планировок",
      icon: <CircleDollarSign className="h-12 w-12 text-primary" />,
      link: "/properties?type=special"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши предложения</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Предлагаем разнообразные варианты коммерческой недвижимости под различные цели
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map(type => (
            <Link to={type.link} key={type.id} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/40">
                <CardHeader className="flex flex-col items-center text-center">
                  {type.icon}
                  <CardTitle className="mt-4 group-hover:text-primary">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{type.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
