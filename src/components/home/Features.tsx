
import { MapPin, Clock, Lightbulb } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Удобное расположение",
      description: "Все объекты находятся в пешей доступности от метро и имеют отличную транспортную доступность",
      icon: <MapPin className="h-8 w-8 text-primary" />
    },
    {
      id: 2,
      title: "Оперативное управление",
      description: "Быстрое решение всех вопросов, связанных с эксплуатацией и обслуживанием помещений",
      icon: <Clock className="h-8 w-8 text-primary" />
    },
    {
      id: 3,
      title: "Индивидуальный подход",
      description: "Гибкие условия аренды и возможность адаптации помещений под потребности вашего бизнеса",
      icon: <Lightbulb className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Преимущества работы с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы специализируемся на управлении собственной коммерческой недвижимостью и обеспечиваем высокий уровень сервиса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(feature => (
            <div key={feature.id} className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
