
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

// Примеры объектов недвижимости
const propertiesSample = [
  {
    id: 1,
    title: "Офисное помещение на Арбате",
    type: "office",
    area: 120,
    price: 150000,
    metro: "Арбатская",
    address: "ул. Арбат, 10",
    image: "/placeholder.svg",
    badge: "Популярное"
  },
  {
    id: 2,
    title: "Торговое помещение у метро",
    type: "retail",
    area: 85,
    price: 200000,
    metro: "Октябрьская",
    address: "Ленинский проспект, 15",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Офис с отдельным входом",
    type: "office",
    area: 150,
    price: 180000,
    metro: "Таганская",
    address: "ул. Марксистская, 5",
    image: "/placeholder.svg",
    badge: "Новое"
  }
];

const PropertiesShowcase = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Актуальные предложения</h2>
            <p className="text-muted-foreground max-w-2xl">
              Ознакомьтесь с нашими лучшими вариантами коммерческой недвижимости
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/properties" className="flex items-center gap-2">
              Все объекты <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesSample.map(property => (
            <Link to={`/properties/${property.id}`} key={property.id}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  {property.badge && (
                    <Badge className="absolute top-3 right-3 bg-primary">{property.badge}</Badge>
                  )}
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>м. {property.metro}, {property.address}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Площадь</span>
                    <span className="font-medium">{property.area} м²</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Тип</span>
                    <span className="font-medium">
                      {property.type === 'office' ? 'Офисное' : 'Торговое'}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xl font-bold text-primary">{property.price.toLocaleString()} ₽/мес</div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesShowcase;
