
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin, ArrowUpDown, Search } from "lucide-react";

// Примеры объектов недвижимости
const propertiesData = [
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
  },
  {
    id: 4,
    title: "Помещение под магазин",
    type: "retail",
    area: 95,
    price: 220000,
    metro: "Тверская",
    address: "ул. Тверская, 24",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Офисный блок",
    type: "office",
    area: 200,
    price: 250000,
    metro: "Павелецкая",
    address: "ул. Валовая, 8",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Торговая площадь с витринами",
    type: "retail",
    area: 120,
    price: 300000,
    metro: "Белорусская",
    address: "ул. Лесная, 5",
    image: "/placeholder.svg",
    badge: "Эксклюзив"
  }
];

const Properties = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || "all";
  
  const [propertyType, setPropertyType] = useState<string>(initialType);
  const [sortBy, setSortBy] = useState<string>("default");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [metroOnly, setMetroOnly] = useState<boolean>(false);
  
  // Фильтрация и сортировка объектов
  const filteredProperties = propertiesData
    .filter(property => {
      // Фильтр по типу
      if (propertyType !== "all" && property.type !== propertyType) return false;
      
      // Фильтр по поисковому запросу
      if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !property.address.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !property.metro.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Фильтр по метро
      if (metroOnly && !property.metro) return false;
      
      return true;
    })
    .sort((a, b) => {
      // Сортировка
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "area-asc":
          return a.area - b.area;
        case "area-desc":
          return b.area - a.area;
        default:
          return 0;
      }
    });

  return (
    <Layout>
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Аренда коммерческой недвижимости</h1>
          
          {/* Фильтры и поиск */}
          <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block text-muted-foreground">Тип помещения</label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="office">Офисные</SelectItem>
                    <SelectItem value="retail">Торговые</SelectItem>
                    <SelectItem value="special">Специальные</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block text-muted-foreground">Сортировка</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">По умолчанию</SelectItem>
                    <SelectItem value="price-asc">Цена (по возрастанию)</SelectItem>
                    <SelectItem value="price-desc">Цена (по убыванию)</SelectItem>
                    <SelectItem value="area-asc">Площадь (по возрастанию)</SelectItem>
                    <SelectItem value="area-desc">Площадь (по убыванию)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block text-muted-foreground">Поиск</label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Поиск по адресу или метро"
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-end">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="metroOnly" 
                    checked={metroOnly} 
                    onCheckedChange={(checked) => setMetroOnly(checked as boolean)}
                  />
                  <label
                    htmlFor="metroOnly"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Рядом с метро
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Результаты */}
          <div className="mb-4 flex justify-between items-center">
            <p className="text-muted-foreground">Найдено объектов: {filteredProperties.length}</p>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <ArrowUpDown className="h-4 w-4" /> Сортировка
            </Button>
          </div>
          
          {/* Список объектов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
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
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-lg text-muted-foreground">По вашему запросу ничего не найдено</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setPropertyType("all");
                    setSortBy("default");
                    setSearchQuery("");
                    setMetroOnly(false);
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Properties;
