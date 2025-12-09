import { Quote } from 'lucide-react';

const testimonials = [
  {
    initials: 'AC',
    name: 'Ana Carolina',
    text: 'Flores lindíssimas! Minha mãe amou o arranjo de aniversário. Entrega super rápida e atendimento impecável.',
  },
  {
    initials: 'RS',
    name: 'Roberto Silva',
    text: 'Surpreendi minha esposa no nosso aniversário. O buquê estava perfeito e fresquíssimo. Recomendo demais!',
  },
  {
    initials: 'MC',
    name: 'Mariana Costa',
    text: 'Sempre compro aqui! A qualidade das flores é incomparável e o atendimento pelo WhatsApp é muito prático.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-rose font-medium tracking-widest text-sm uppercase">
            O que dizem nossos clientes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mt-3">
            Depoimentos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-heading text-lg font-semibold text-primary">
                    {testimonial.initials}
                  </span>
                </div>
                <h4 className="font-heading text-lg font-medium text-foreground">
                  {testimonial.name}
                </h4>
              </div>
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-rose/30" />
                <blockquote className="text-muted-foreground italic pl-6">
                  "{testimonial.text}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
