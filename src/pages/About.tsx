
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Phone, Mail, Clock, Award, Users, Building, Briefcase, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок и описание */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">О компании НедвижимостьПро</h1>
          <p className="text-lg text-muted-foreground">
            Мы помогаем бизнесу найти идеальное помещение для развития и процветания уже более 15 лет.
            Наша команда — это профессионалы с глубоким пониманием рынка коммерческой недвижимости.
          </p>
        </div>

        {/* История компании */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-4">Наша история</h2>
            <p className="mb-4">
              Компания НедвижимостьПро основана в 2008 году группой энтузиастов с опытом работы на рынке коммерческой недвижимости. 
              С первых дней работы мы сосредоточились на предоставлении качественных услуг по подбору и аренде коммерческих помещений.
            </p>
            <p className="mb-4">
              За годы работы мы реализовали более 2000 успешных сделок, помогая компаниям разного масштаба находить оптимальные решения для размещения бизнеса.
              Наша экспертиза позволяет нам работать с разными типами недвижимости: от небольших офисов до крупных торговых и складских комплексов.
            </p>
            <p>
              Сегодня НедвижимостьПро — это команда из 30 специалистов, обширная база эксклюзивных предложений и репутация надежного партнера на рынке коммерческой недвижимости.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary/10 rounded-full"></div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="История компании" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Ценности */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-muted-foreground">
                Мы стремимся предоставлять услуги наивысшего качества, уделяя внимание каждой детали в работе с клиентами.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Клиентоориентированность</h3>
              <p className="text-muted-foreground">
                Интересы клиента всегда на первом месте. Мы подбираем решения, которые максимально отвечают потребностям бизнеса.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Профессионализм</h3>
              <p className="text-muted-foreground">
                Наша команда состоит из опытных специалистов, которые постоянно совершенствуют свои знания и навыки.
              </p>
            </div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Большая база объектов</h3>
                <p className="text-sm text-muted-foreground">
                  В нашей базе более 5000 объектов коммерческой недвижимости разного класса и назначения.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Опыт работы</h3>
                <p className="text-sm text-muted-foreground">
                  Более 15 лет успешной работы на рынке коммерческой недвижимости и сотни довольных клиентов.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Оперативность</h3>
                <p className="text-sm text-muted-foreground">
                  Быстрая обработка заявок и подбор объектов, соответствующих вашим требованиям.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Команда */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Наша команда</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Александр Петров", position: "Генеральный директор", avatar: "/placeholder.svg" },
              { name: "Елена Смирнова", position: "Руководитель отдела аренды", avatar: "/placeholder.svg" },
              { name: "Максим Иванов", position: "Ведущий брокер", avatar: "/placeholder.svg" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Контактная информация */}
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-6 text-center">Контактная информация</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Телефон</div>
                <a href="tel:+74951234567" className="text-lg font-medium hover:text-primary">+7 (495) 123-45-67</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:info@nedvizhimost-pro.ru" className="text-lg font-medium hover:text-primary">info@nedvizhimost-pro.ru</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Адрес</div>
                <p className="text-lg font-medium">г. Москва, ул. Примерная, д. 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
