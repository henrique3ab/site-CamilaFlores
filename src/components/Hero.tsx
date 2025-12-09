import { Button } from "@/components/ui/button";
import { MessageCircle, Flower2, Heart, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-flowers.jpg";

const Hero = () => {
  const features = [
    { icon: Flower2, title: "Flores Frescas", subtitle: "Sempre do dia" },
    { icon: Heart, title: "Feito com Amor", subtitle: "Artesanal" },
    { icon: CheckCircle, title: "Entrega Rápida", subtitle: "No mesmo dia" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="Arranjo floral elegante com rosas"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in">
          {/* Subtitle */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-accent" />
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Floricultura Artesanal
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Flores que encantam.{" "}
            <span className="italic text-primary">Momentos</span> que ficam na memória.
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg">
            Arranjos exclusivos para todas as ocasiões. Feitos com amor e dedicação para transformar momentos em lembranças eternas.
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/c/553193726771"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="xl">
              <MessageCircle className="w-5 h-5" />
              Ver Catálogo no WhatsApp
            </Button>
          </a>
        </div>

        {/* Features */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="flex flex-wrap gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{feature.title}</p>
                  <p className="text-muted-foreground text-xs">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-indicator">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
