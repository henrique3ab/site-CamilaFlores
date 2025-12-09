# Pasta de Imagens de Produtos

Esta pasta é destinada para as imagens dos seus produtos.

## Como atualizar as imagens

1. Adicione suas novas imagens nesta pasta
2. Mantenha os nomes dos arquivos consistentes com os imports no arquivo `src/components/Catalog.tsx`
3. Formatos recomendados: `.jpg`, `.png`, `.webp`
4. Tamanho recomendado: 800x800px ou proporção 1:1 (quadrado)

## Nomes dos arquivos atuais

Os seguintes nomes de arquivos são usados no catálogo:
- `buque-romantico.jpg`
- `produto-rosas-brancas.jpg`
- `produto-girassol.jpg`
- `produto-tulipas.jpg`
- `produto-lavanda.jpg`
- `produto-rosas-mix.jpg`
- `produto-orquidea.jpg`
- `arranjo-presente.jpg`
- `cesta-flores.jpg`

## Para adicionar novos produtos

1. Adicione a imagem nesta pasta
2. Importe a imagem no arquivo `src/components/Catalog.tsx`
3. Adicione o novo produto na lista `products`

Exemplo:
```tsx
import novoProduto from '@/assets/produtos/novo-produto.jpg';

const products = [
  // ... produtos existentes
  { 
    name: 'Nome do Novo Produto', 
    description: 'Descrição do produto', 
    price: 'R$ XX,XX', 
    image: novoProduto 
  },
];
```
