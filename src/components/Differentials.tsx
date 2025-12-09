import { Palette, Truck, CreditCard, Sparkles, Leaf } from 'lucide-react';

const differentials = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Arranjos Artesanais',
    description: 'Cada peça é única, criada com dedicação por nossos floristas',
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Entrega Rápida',
    description: 'Motoboy, carro ou retirada no local. Pedidos com até 3h de antecedência',
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Pagamento Facilitado',
    description: 'Cartão Mastercard (débito/crédito), Pix ou dinheiro no local',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Personalização Completa',
    description: 'Criamos arranjos exclusivos sob encomenda',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Flores Sempre Frescas',
    description: 'Selecionadas diariamente com rigor de qualidade',
  },
];

const Differentials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-rose font-medium tracking-widest text-sm uppercase">
            Por que nos escolher
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mt-3">
            Nossos Diferenciais
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
