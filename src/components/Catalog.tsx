import { Button } from '@/components/ui/button';

// Importe suas imagens de produtos aqui
// Para atualizar uma imagem, basta substituir o arquivo na pasta src/assets/produtos/
// mantendo o mesmo nome do arquivo
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
    <section id="catalogo" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-rose font-medium tracking-widest text-sm uppercase">
            Nosso Catálogo
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-5">
            Produtos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada arranjo é feito com flores frescas selecionadas e muito carinho
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Price Badge */}
                <div className="absolute top-5 left-5 bg-primary/95 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  A partir de {product.price}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-7">
                <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mb-5">{product.description}</p>
                <Button variant="outline" size="lg" className="w-full" asChild>
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
