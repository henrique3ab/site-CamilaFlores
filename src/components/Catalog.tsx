import { Button } from '@/components/ui/button';
import buqueRomantico from '@/assets/buque-romantico.jpg';
import produtoRosasBrancas from '@/assets/produto-rosas-brancas.jpg';
import produtoGirassol from '@/assets/produto-girassol.jpg';
import produtoTulipas from '@/assets/produto-tulipas.jpg';
import produtoLavanda from '@/assets/produto-lavanda.jpg';
import produtoRosasMix from '@/assets/produto-rosas-mix.jpg';
import produtoOrquidea from '@/assets/produto-orquidea.jpg';
import arranjoPresente from '@/assets/arranjo-presente.jpg';
import cestaFlores from '@/assets/cesta-flores.jpg';

const WHATSAPP_LINK = "https://wa.me/c/553193726771";

const products = [
  { name: 'Buquê de Rosas Vermelhas', description: 'Clássico e romântico, perfeito para declarações de amor', price: 'R$ 89,90', image: buqueRomantico },
  { name: 'Buquê de Rosas Brancas', description: 'Elegância e pureza em cada pétala', price: 'R$ 79,90', image: produtoRosasBrancas },
  { name: 'Arranjo de Girassóis', description: 'Alegria e energia positiva para iluminar o dia', price: 'R$ 69,90', image: produtoGirassol },
  { name: 'Buquê de Tulipas Rosa', description: 'Delicadeza e sofisticação holandesa', price: 'R$ 119,90', image: produtoTulipas },
  { name: 'Arranjo Lavanda & Rosas', description: 'Combinação aromática e encantadora', price: 'R$ 99,90', image: produtoLavanda },
  { name: 'Mix de Rosas Coloridas', description: 'Variedade de cores para alegrar qualquer ambiente', price: 'R$ 84,90', image: produtoRosasMix },
  { name: 'Orquídea Branca Premium', description: 'Sofisticação e durabilidade em um vaso elegante', price: 'R$ 149,90', image: produtoOrquidea },
  { name: 'Arranjo Delicado Rosa', description: 'Perfeito para presentear com carinho', price: 'R$ 74,90', image: arranjoPresente },
  { name: 'Cesta de Rosas Premium', description: 'Luxuosa cesta com rosas selecionadas', price: 'R$ 189,90', image: cestaFlores },
];

const Catalog = () => {
  return (
    <section id="catalogo" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-rose font-medium tracking-widest text-sm uppercase">
            Nosso Catálogo
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mt-3 mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada arranjo é feito com flores frescas selecionadas e muito carinho
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
                  A partir de {product.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <Button variant="outline" size="default" className="w-full" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Ver Catálogo no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
