import { Search, MessageCircle, Truck } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: <Search className="w-7 h-7" />,
    title: 'Escolha o Arranjo',
    description: 'Navegue pelo nosso catálogo e encontre o arranjo perfeito para sua ocasião especial.',
  },
  {
    number: '2',
    icon: <MessageCircle className="w-7 h-7" />,
    title: 'Fale pelo WhatsApp',
    description: 'Tiramos todas as suas dúvidas e personalizamos o arranjo do seu jeito.',
  },
  {
    number: '3',
    icon: <Truck className="w-7 h-7" />,
    title: 'Entrega Rápida',
    description: 'Entregamos no mesmo dia para BH e região com todo cuidado que suas flores merecem.',
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-rose font-medium tracking-widest text-sm uppercase">
            Simples e Prático
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Como Funciona
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line - only on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              {/* Icon container with number badge */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary mb-8">
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading text-xl font-semibold shadow-md">
                  {step.number}
                </span>
                <div className="text-primary">{step.icon}</div>
              </div>
              
              {/* Step content */}
              <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-base max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
