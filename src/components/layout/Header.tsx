
import { Link } from "react-router-dom";
import { Phone, MapPin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="Логотип" className="h-10" />
          <span className="font-bold text-xl hidden sm:inline-block">НедвижимостьПро</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-primary hover:text-primary/80 font-medium">Главная</Link>
          <Link to="/properties" className="text-primary hover:text-primary/80 font-medium">Объекты</Link>
          <Link to="/services" className="text-primary hover:text-primary/80 font-medium">Услуги</Link>
          <Link to="/about" className="text-primary hover:text-primary/80 font-medium">О компании</Link>
          <Link to="/contacts" className="text-primary hover:text-primary/80 font-medium">Контакты</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+74951234567" className="text-sm font-medium hover:text-primary">+7 (495) 123-45-67</a>
          </div>
          <Button asChild size="sm">
            <Link to="/contacts">Связаться с нами</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-6">
              <Link to="/" className="text-primary hover:text-primary/80 font-medium py-2">Главная</Link>
              <Link to="/properties" className="text-primary hover:text-primary/80 font-medium py-2">Объекты</Link>
              <Link to="/services" className="text-primary hover:text-primary/80 font-medium py-2">Услуги</Link>
              <Link to="/about" className="text-primary hover:text-primary/80 font-medium py-2">О компании</Link>
              <Link to="/contacts" className="text-primary hover:text-primary/80 font-medium py-2">Контакты</Link>
              
              <div className="flex flex-col gap-4 mt-4 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+74951234567" className="text-sm font-medium">+7 (495) 123-45-67</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">г. Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
