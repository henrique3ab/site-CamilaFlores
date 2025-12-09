import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-flowers.jpg';
import { Heart, Flower2, CheckCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/c/553193726771";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen hero-gradient overflow-hidden pt-20">
      {/* Hero Image - positioned on right side */}
      <div className="absolute inset-0 flex justify-end items-center pointer-events-none">
        <img
          src={heroImage}
          alt="Arranjo floral elegante com rosas"
          className="w-full md:w-2/3 lg:w-1/2 h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content - left aligned */}
      <div className="container relative z-10 flex flex-col justify-center min-h-[calc(100vh-5rem)] py-16 lg:py-20">
        <div className="max-w-xl lg:max-w-2xl animate-fade-up">
          {/* Tagline with line */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-rose" />
            <span className="text-rose font-medium tracking-widest text-sm uppercase">
              Floricultura Artesanal
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.15] mb-8">
            Flores que encantam.{' '}
            <span className="italic text-forest-light">Momentos</span> que ficam na memória.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Arranjos exclusivos para todas as ocasiões. Feitos com amor e dedicação para transformar momentos em lembranças eternas.
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="xl" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Ver Catálogo no WhatsApp
            </a>
          </Button>
        </div>

        {/* Features - bottom aligned with separator */}
        <div className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-10 border-t border-border/40 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <FeatureBadge icon={<Flower2 className="w-5 h-5 text-rose" />} title="Flores Frescas" subtitle="Sempre do dia" />
          <FeatureBadge icon={<Heart className="w-5 h-5 text-rose" />} title="Feito com Amor" subtitle="Artesanal" />
          <FeatureBadge icon={<CheckCircle className="w-5 h-5 text-rose" />} title="Entrega Rápida" subtitle="No mesmo dia" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-14 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

const FeatureBadge = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="font-medium text-foreground text-sm">{title}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </div>
  </div>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default Hero;
