import { Search, MessageCircle, Truck } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: <Search className="w-6 h-6" />,
    title: 'Escolha o Arranjo',
    description: 'Navegue pelo nosso catálogo e encontre o arranjo perfeito para sua ocasião especial.',
  },
  {
    number: '2',
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Fale pelo WhatsApp',
    description: 'Tiramos todas as suas dúvidas e personalizamos o arranjo do seu jeito.',
  },
  {
    number: '3',
    icon: <Truck className="w-6 h-6" />,
    title: 'Entrega Rápida',
    description: 'Entregamos no mesmo dia para BH e região com todo cuidado que suas flores merecem.',
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-rose font-medium tracking-widest text-sm uppercase">
            Simples e Prático
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mt-3">
            Como Funciona
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-6">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading text-lg font-semibold">
                  {step.number}
                </span>
                <div className="text-primary">{step.icon}</div>
              </div>
              
              <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
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
