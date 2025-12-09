import { Palette, Truck, CreditCard, Sparkles, Leaf } from 'lucide-react';

const differentials = [
  {
    icon: <Palette className="w-7 h-7" />,
    title: 'Arranjos Artesanais',
    description: 'Cada peça é única, criada com dedicação por nossos floristas',
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: 'Entrega Rápida',
    description: 'Motoboy, carro ou retirada no local. Pedidos com até 3h de antecedência',
  },
  {
    icon: <CreditCard className="w-7 h-7" />,
    title: 'Pagamento Facilitado',
    description: 'Cartão Mastercard (débito/crédito), Pix ou dinheiro no local',
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: 'Personalização Completa',
    description: 'Criamos arranjos exclusivos sob encomenda',
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: 'Flores Sempre Frescas',
    description: 'Selecionadas diariamente com rigor de qualidade',
  },
];

const Differentials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-rose font-medium tracking-widest text-sm uppercase">
            Por que nos escolher
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Nossos Diferenciais
          </h2>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-6">
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
