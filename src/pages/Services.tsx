
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Building, KeyRound, FileSearch, BarChart4, Users, Briefcase, ShieldCheck, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок и описание */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Наши услуги</h1>
          <p className="text-lg text-muted-foreground">
            Комплексное сопровождение сделок с коммерческой недвижимостью — 
            от подбора идеального помещения до юридического оформления всех документов
          </p>
        </div>

        {/* Табы с категориями услуг */}
        <Tabs defaultValue="rent" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto mb-8">
            <TabsTrigger value="rent">Аренда</TabsTrigger>
            <TabsTrigger value="sale">Продажа</TabsTrigger>
            <TabsTrigger value="consulting">Консалтинг</TabsTrigger>
          </TabsList>
          
          <TabsContent value="rent">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Building />} 
                title="Подбор коммерческой недвижимости"
                description="Подберем объекты, соответствующие вашим требованиям к расположению, площади и бюджету" 
                price="от 20 000 ₽"
              />
              <ServiceCard 
                icon={<KeyRound />} 
                title="Сопровождение при аренде"
                description="Полное юридическое сопровождение сделки аренды, проверка документов, согласование условий" 
                price="от 30 000 ₽"
              />
              <ServiceCard 
                icon={<FileSearch />} 
                title="Аудит существующих договоров"
                description="Проверка действующих договоров аренды, выявление рисков и рекомендации по оптимизации" 
                price="от 15 000 ₽"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="sale">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<BarChart4 />} 
                title="Оценка объекта недвижимости"
                description="Профессиональная оценка рыночной стоимости коммерческой недвижимости для продажи" 
                price="от 40 000 ₽"
              />
              <ServiceCard 
                icon={<HeartHandshake />} 
                title="Юридическое сопровождение сделки"
                description="Полное сопровождение сделки купли-продажи, подготовка и проверка всех документов" 
                price="от 50 000 ₽"
              />
              <ServiceCard 
                icon={<Briefcase />} 
                title="Инвестиционный анализ"
                description="Анализ инвестиционной привлекательности объекта, расчет окупаемости и доходности" 
                price="от 35 000 ₽"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="consulting">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Users />} 
                title="Представление интересов арендатора"
                description="Полное представление интересов арендатора в переговорах с собственниками" 
                price="от 25 000 ₽"
              />
              <ServiceCard 
                icon={<ShieldCheck />} 
                title="Due Diligence объекта"
                description="Комплексная проверка объекта недвижимости перед заключением сделки" 
                price="от 45 000 ₽"
              />
              <ServiceCard 
                icon={<BarChart4 />} 
                title="Маркетинговый анализ локации"
                description="Анализ локации для размещения бизнеса с оценкой трафика и конкурентной среды" 
                price="от 30 000 ₽"
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Процесс работы */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center relative">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Консультация</h3>
              <p className="text-muted-foreground">
                Определяем ваши требования к объекту недвижимости и бюджет
              </p>
              <div className="hidden md:block absolute top-8 right-0 w-3/4 h-1 bg-primary/20"></div>
            </div>
            <div className="text-center relative">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Подбор объектов</h3>
              <p className="text-muted-foreground">
                Формируем подборку объектов, соответствующих вашим критериям
              </p>
              <div className="hidden md:block absolute top-8 right-0 w-3/4 h-1 bg-primary/20"></div>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Заключение сделки</h3>
              <p className="text-muted-foreground">
                Сопровождаем процесс заключения договора и передачи объекта
              </p>
            </div>
          </div>
        </div>

        {/* Преимущества сотрудничества */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Преимущества сотрудничества с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Обширная база объектов</h3>
                <p className="text-muted-foreground">
                  У нас собрана база из более чем 5000 объектов коммерческой недвижимости различного назначения
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Опытные специалисты</h3>
                <p className="text-muted-foreground">
                  В нашей команде работают брокеры с опытом более 10 лет на рынке коммерческой недвижимости
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Юридическая безопасность</h3>
                <p className="text-muted-foreground">
                  Все сделки проходят тщательную юридическую проверку, что исключает риски для наших клиентов
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <HeartHandshake className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Индивидуальный подход</h3>
                <p className="text-muted-foreground">
                  Мы учитываем все особенности вашего бизнеса и подбираем решения, максимально соответствующие запросам
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA блок */}
        <div className="bg-primary/5 p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Свяжитесь с нами, чтобы получить бесплатную консультацию по вопросам 
            аренды или покупки коммерческой недвижимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
            <Button variant="outline" size="lg">
              <a href="tel:+74951234567">+7 (495) 123-45-67</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Компонент карточки услуги
const ServiceCard = ({ icon, title, description, price }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  price: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <div className="text-primary">
            {icon}
          </div>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="font-semibold text-lg">{price}</div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Link to="/contacts" className="w-full">Заказать услугу</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Services;
