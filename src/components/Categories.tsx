import buqueRomantico from '@/assets/buque-romantico.jpg';
import floresEspeciais from '@/assets/flores-especiais.jpg';
import arranjoPresente from '@/assets/arranjo-presente.jpg';
import arranjoEspecial from '@/assets/arranjo-especial.jpg';
import girassois from '@/assets/girassois.jpg';
import cestaFlores from '@/assets/cesta-flores.jpg';

const WHATSAPP_LINK = "https://wa.me/c/553193726771";

const categories = [
  { title: 'Mais Vendidos', description: 'Os favoritos dos nossos clientes', image: buqueRomantico },
  { title: 'Flores abaixo de R$89,90', description: 'Beleza que cabe no seu bolso', image: floresEspeciais },
  { title: 'Buquês de Rosas', description: 'Clássicos e elegantes', image: arranjoPresente },
  { title: 'Arranjos para Presente', description: 'Surpreenda quem você ama', image: arranjoEspecial },
  { title: 'Girassóis', description: 'Alegria e energia em forma de flor', image: girassois },
  { title: 'Cestas de Café da Manhã', description: 'Presente completo e especial', image: cestaFlores },
];

const Categories = () => {
  return (
    <section id="categorias" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-rose font-medium tracking-widest text-sm uppercase">
            Nossas Categorias
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-5">
            Encontre o Arranjo Perfeito
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore nossa coleção cuidadosamente selecionada de flores e arranjos para todas as ocasiões
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.title}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-card hover:shadow-hover transition-all duration-500"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-heading text-xl md:text-2xl font-medium text-primary-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm md:text-base">
                  {category.description}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-primary-foreground underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver no WhatsApp
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
