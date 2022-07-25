# Protótipo de um e-commerce
<strong>Backend</strong>: REST API feita com Express.js, banco de dados Postgres utilizando o ORM Sequelize.</br>
<strong>Frontend (web)</strong>: Feita com React.js utilizando o framework Next.js para gerar páginas estáticas (SSG) dos produtos com meta tags para maximizar a indexação de motores de busca (SEO).</br>
<strong>Painel de Controle (web-admin)</strong>: Também ReactJS com o framework Next.js, área acessivel apenas para administradores gerenciarem produtos, categorias e ordens de compra.

## Backend
- Validação de dados recebidos pelas rotas (headers, params, body e query) com o pacote [Celebrate](https://github.com/arb/celebrate), para garantir que os dados são do tipo correto;
- Rotas para cadastro, atualização e remoção de usuários, endereços, categorias, produtos, upload de imagens de produtos e ordens de compra;
- Rota para autenticação de usuário com JWT (Json Web Token);
- Conexão Web Socket com [Socket.io](https://github.com/socketio/socket.io) para acompanhamento das ordens de compra em tempo real no painel de controle;
- Integração com a API dos Correios para calculo de frete;
- Integração com [Sonic](https://github.com/valeriansaliou/sonic), para buscas com relevância de titulos de produtos;
- Background Jobs com [Bull](https://github.com/OptimalBits/bull) e [Redis](https://github.com/redis/redis) para gerenciar a fila de envio de emails;
- Integração com a API de pagamentos [Pagar.me](https://pagar.me/), para pagamentos com cartão de crédito e boleto.
- Testes unitários com Jest.

## Frontend
- Páginas responsivas;
- Menu dropdown de categorias de produtos, montada automaticamente a partir das categorias cadastradas no banco de dados;
- Busca recursiva de produtos cadastrados nas categorias filhas;
- Barra de busca pelo nome do produto;
- Paginação na página de busca, com filtros de menor e maior valor;
- Card do produto, mostrando imagem, nome, preço, "em falta", porcentagem de desconto e preço após desconto;
- Página do produto exibindo um slider das imagens cadastradas, breadcrumb da árvore de categoria, nome, desconto, preço, quantidade a comprar, quantidade em estoque, dados de peso e medida, descrição e detalhes do produto;
- Contagem regressiva quando o produto está em promoção, no card e na página;
- Carrinho de compra, mostrando preço total, botões para aumentar e diminuir quantidade ou remover do carrinho e calcular o frete;
- Página para seleção do endereço de entrega, podendo cadastrar um novo endereço ou apagar um já cadastrado (podendo ter vários endereços cadastrados por usuário);
- Tela de confirmação de compra, no caso de boleto exibe link para boleto;
- Tela da conta do usuário, onde ele pode alterar suas informações de cadastro (nome, email, CPF e senha), adicionar ou remover endereços e visualizar suas ordens de compra.
- Testes unitários com React Testing Library.
