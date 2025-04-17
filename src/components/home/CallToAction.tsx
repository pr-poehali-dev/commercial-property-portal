
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Нужна помощь в подборе помещения?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Наши специалисты помогут вам подобрать идеальное помещение под ваши задачи 
          и ответят на все интересующие вопросы
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link to="/contacts">Получить консультацию</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
