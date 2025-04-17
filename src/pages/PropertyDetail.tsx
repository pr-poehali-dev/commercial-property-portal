
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Phone, ArrowLeft, Building, Clock, Ruler, Accessibility, Zap, Wifi, LucideIcon, Hammer, ArrowRight } from "lucide-react";

// Примеры объектов недвижимости (обычно эти данные будут загружаться с сервера)
const propertiesData = [
  {
    id: "1",
    title: "Офисное помещение на Арбате",
    type: "office",
    area: 120,
    price: 150000,
    metro: "Арбатская",
    distanceToMetro: "5 минут пешком",
    address: "ул. Арбат, 10",
    description: "Светлое офисное помещение с качественным ремонтом и панорамными окнами. Планировка включает несколько кабинетов, переговорную комнату и просторную рецепцию. В помещении есть все необходимые коммуникации для комфортной работы.",
    features: ["Отдельный вход", "Кондиционирование", "Интернет", "Система контроля доступа", "Парковка"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    badge: "Популярное",
    floor: 3,
    totalFloors: 8,
    renovationStatus: "Хороший ремонт",
    securitySystem: true,
    infrastructure: "Развитая инфраструктура: кафе, рестораны, магазины в шаговой доступности",
    parkingPlaces: 2,
    similarProperties: [2, 3, 5]
  },
  {
    id: "2",
    title: "Торговое помещение у метро",
    type: "retail",
    area: 85,
    price: 200000,
    metro: "Октябрьская",
    distanceToMetro: "3 минуты пешком",
    address: "Ленинский проспект, 15",
    description: "Торговое помещение на первой линии домов с отличной проходимостью. Большие витринные окна обеспечивают хорошую видимость с улицы. Идеально подходит для магазина, шоурума или салона.",
    features: ["Первая линия", "Витринные окна", "Высокая проходимость", "Мокрая точка", "Высокие потолки"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    floor: 1,
    totalFloors: 6,
    renovationStatus: "Требуется косметический ремонт",
    securitySystem: true,
    infrastructure: "Расположено в оживленном торговом районе с высоким пешеходным трафиком",
    parkingPlaces: 0,
    similarProperties: [4, 6]
  },
  {
    id: "3",
    title: "Офис с отдельным входом",
    type: "office",
    area: 150,
    price: 180000,
    metro: "Таганская",
    distanceToMetro: "7 минут пешком",
    address: "ул. Марксистская, 5",
    description: "Просторный офис с отдельным входом и собственной парковкой. Кабинетная система, есть комната отдыха и мини-кухня. Все офисные помещения оборудованы системой кондиционирования.",
    features: ["Отдельный вход", "Собственная парковка", "Круглосуточный доступ", "Система видеонаблюдения", "Кондиционирование"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    badge: "Новое",
    floor: 1,
    totalFloors: 5,
    renovationStatus: "Отличное состояние",
    securitySystem: true,
    infrastructure: "Рядом банки, кафе, салоны красоты и другие объекты инфраструктуры",
    parkingPlaces: 4,
    similarProperties: [1, 5]
  },
  {
    id: "4",
    title: "Помещение под магазин",
    type: "retail",
    area: 95,
    price: 220000,
    metro: "Тверская",
    distanceToMetro: "2 минуты пешком",
    address: "ул. Тверская, 24",
    description: "Торговое помещение в центре Москвы с высоким пешеходным трафиком. Отличная визуальная доступность, витринные окна. Подойдет для магазина одежды, косметики, аксессуаров.",
    features: ["Центр города", "Большие витрины", "Высокий трафик", "Готовое торговое помещение", "Вывеска на фасаде"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    floor: 1,
    totalFloors: 7,
    renovationStatus: "Хороший ремонт",
    securitySystem: true,
    infrastructure: "Престижный район с развитой инфраструктурой",
    parkingPlaces: 0,
    similarProperties: [2, 6]
  },
  {
    id: "5",
    title: "Офисный блок",
    type: "office",
    area: 200,
    price: 250000,
    metro: "Павелецкая",
    distanceToMetro: "10 минут пешком",
    address: "ул. Валовая, 8",
    description: "Офисный блок в бизнес-центре класса B+. Open space планировка с возможностью зонирования. Качественная отделка, современные инженерные системы, круглосуточный доступ.",
    features: ["Бизнес-центр B+", "Open space", "Круглосуточный доступ", "Подземный паркинг", "Современные коммуникации"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    floor: 5,
    totalFloors: 12,
    renovationStatus: "Отличное состояние",
    securitySystem: true,
    infrastructure: "Бизнес-центр с развитой внутренней инфраструктурой (кафе, конференц-залы, банкоматы)",
    parkingPlaces: 3,
    similarProperties: [1, 3]
  },
  {
    id: "6",
    title: "Торговая площадь с витринами",
    type: "retail",
    area: 120,
    price: 300000,
    metro: "Белорусская",
    distanceToMetro: "5 минут пешком",
    address: "ул. Лесная, 5",
    description: "Торговое помещение с отдельным входом и большими витринами. Расположено на перекрестке с интенсивным автомобильным и пешеходным трафиком. Идеально для розничной торговли, услуг, общественного питания.",
    features: ["Отдельный вход", "Угловое расположение", "Большие витрины", "Высокий потолок", "Мокрая точка"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    badge: "Эксклюзив",
    floor: 1,
    totalFloors: 9,
    renovationStatus: "Требуется косметический ремонт",
    securitySystem: true,
    infrastructure: "Расположено на оживленной улице с хорошим трафиком",
    parkingPlaces: 1,
    similarProperties: [2, 4]
  }
];

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  
  // Найти объект недвижимости по id
  const property = propertiesData.find(p => p.id === id);
  
  // Получение похожих объектов
  const similarProperties = property 
    ? property.similarProperties.map(id => propertiesData.find(p => p.id === id.toString())).filter(Boolean)
    : [];
  
  // Если объект не найден, показываем сообщение
  if (!property) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Объект не найден</h1>
          <p className="text-muted-foreground mb-6">Запрашиваемый объект недвижимости не существует или был удален.</p>
          <Button asChild>
            <Link to="/properties">Вернуться к списку объектов</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Функция для отображения преимуществ в виде иконок
  const renderFeatureIcon = (feature: string): LucideIcon => {
    if (feature.includes("вход")) return Building;
    if (feature.includes("парк")) return Accessibility;
    if (feature.includes("доступ")) return Clock;
    if (feature.includes("конди")) return Zap;
    if (feature.includes("интернет") || feature.includes("Wi-Fi")) return Wifi;
    return Ruler;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Навигация */}
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm" className="hover:bg-transparent">
            <Link to="/properties" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Вернуться к списку объектов
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Галерея и основная информация */}
          <div className="lg:col-span-2 space-y-8">
            {/* Галерея */}
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer h-full">
                      <img 
                        src={property.images[activeImage]} 
                        alt={property.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{property.title}</DialogTitle>
                    </DialogHeader>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={property.images[activeImage]} 
                        alt={property.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2">
                {property.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`w-24 h-16 rounded-md overflow-hidden cursor-pointer transition-all ${activeImage === index ? 'ring-2 ring-primary' : 'opacity-70'}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${property.title} - изображение ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Основная информация */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {property.badge && (
                  <Badge className="bg-primary">{property.badge}</Badge>
                )}
                <Badge variant="outline">
                  {property.type === 'office' ? 'Офисное помещение' : 'Торговое помещение'}
                </Badge>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="h-4 w-4" />
                <span>м. {property.metro}, {property.address} ({property.distanceToMetro})</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="text-sm text-muted-foreground">Площадь</div>
                  <div className="text-lg font-semibold">{property.area} м²</div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="text-sm text-muted-foreground">Этаж</div>
                  <div className="text-lg font-semibold">{property.floor}/{property.totalFloors}</div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="text-sm text-muted-foreground">Состояние</div>
                  <div className="text-lg font-semibold">{property.renovationStatus}</div>
                </div>
              </div>
              
              <div className="text-xl font-bold text-primary mb-4">{property.price.toLocaleString()} ₽/мес</div>
              
              <p className="text-base leading-relaxed mb-8">{property.description}</p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Особенности и преимущества</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => {
                    const FeatureIcon = renderFeatureIcon(feature);
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <FeatureIcon className="h-4 w-4 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Дополнительная информация (в табах) */}
            <Tabs defaultValue="infrastructure">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-4">
                <TabsTrigger value="infrastructure">Инфраструктура</TabsTrigger>
                <TabsTrigger value="technical">Технические данные</TabsTrigger>
                <TabsTrigger value="conditions">Условия аренды</TabsTrigger>
              </TabsList>
              
              <TabsContent value="infrastructure" className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Инфраструктура</h3>
                <p>{property.infrastructure}</p>
                
                {property.parkingPlaces > 0 && (
                  <div className="mt-4">
                    <div className="font-medium">Паркинг:</div>
                    <p>{property.parkingPlaces} {property.parkingPlaces === 1 ? 'машиноместо' : property.parkingPlaces < 5 ? 'машиноместа' : 'машиномест'}</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="technical" className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Технические данные</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium">Тип помещения:</div>
                      <p>{property.type === 'office' ? 'Офисное' : 'Торговое'}</p>
                    </div>
                    <div>
                      <div className="font-medium">Площадь:</div>
                      <p>{property.area} м²</p>
                    </div>
                    <div>
                      <div className="font-medium">Этаж:</div>
                      <p>{property.floor}/{property.totalFloors}</p>
                    </div>
                    <div>
                      <div className="font-medium">Состояние:</div>
                      <p>{property.renovationStatus}</p>
                    </div>
                    <div>
                      <div className="font-medium">Безопасность:</div>
                      <p>{property.securitySystem ? 'Система безопасности' : 'Нет'}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="conditions" className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Условия аренды</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">Арендная ставка:</div>
                    <p>{property.price.toLocaleString()} ₽/месяц ({Math.round(property.price / property.area).toLocaleString()} ₽/м² в месяц)</p>
                  </div>
                  <div>
                    <div className="font-medium">Обеспечительный платеж:</div>
                    <p>1 месяц аренды</p>
                  </div>
                  <div>
                    <div className="font-medium">Индексация:</div>
                    <p>Ежегодно, на уровень инфляции</p>
                  </div>
                  <div>
                    <div className="font-medium">Коммунальные платежи:</div>
                    <p>Оплачиваются отдельно по фактическим расходам</p>
                  </div>
                  <div>
                    <div className="font-medium">Минимальный срок аренды:</div>
                    <p>11 месяцев</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Сайдбар с формой для связи */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Связаться с менеджером</h3>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <a href="tel:+74951234567" className="text-lg font-medium hover:text-primary">+7 (495) 123-45-67</a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block text-muted-foreground">Ваше имя</label>
                    <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block text-muted-foreground">Телефон</label>
                    <input type="tel" className="w-full px-3 py-2 border rounded-md" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block text-muted-foreground">Сообщение</label>
                    <textarea className="w-full px-3 py-2 border rounded-md h-24 resize-none" placeholder="Меня интересует данный объект..."></textarea>
                  </div>
                  <Button className="w-full">Отправить заявку</Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку «Отправить заявку», вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Дополнительные услуги */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4">Дополнительные услуги</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Hammer className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Ремонт и отделка</div>
                      <p className="text-sm text-muted-foreground">Поможем с ремонтом под ваши требования</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Подключение коммуникаций</div>
                      <p className="text-sm text-muted-foreground">Поможем с подключением всех необходимых коммуникаций</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Похожие объекты */}
        {similarProperties.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Похожие объекты</h2>
              <Button asChild variant="ghost" size="sm">
                <Link to="/properties" className="flex items-center gap-2">
                  Все объекты <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.slice(0, 3).map((similar) => (
                similar && (
                  <Link to={`/properties/${similar.id}`} key={similar.id}>
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={similar.images[0]} 
                          alt={similar.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                        {similar.badge && (
                          <Badge className="absolute top-3 right-3 bg-primary">{similar.badge}</Badge>
                        )}
                      </div>
                      <CardContent className="pt-4">
                        <h3 className="font-semibold mb-2">{similar.title}</h3>
                        <div className="flex items-center text-muted-foreground text-sm mb-2">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>м. {similar.metro}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-muted-foreground">{similar.area} м²</span>
                          <span className="font-bold text-primary">{similar.price.toLocaleString()} ₽/мес</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PropertyDetail;
