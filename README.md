# E-commerce
<strong>Backend</strong>: REST API feita com Express.js, banco de dados MongoDB utilizando o Mongoose.</br>
<strong>Frontend (web)</strong>: Feita com React.js e Redux.</br>

## Backend
- Rotas para cadastro, atualização e remoção de usuários, endereços, categorias, produtos, upload de imagens de produtos e ordens de compra;
- Rota para autenticação de usuário com JWT (Json Web Token);
- Integração com a API dos Correios para calculo de frete;
- Integração com a API de pagamentos PayPal, para pagamentos com cartão de crédito e boleto.
- Testes unitários com Jest.

## Frontend
- Páginas responsivas;
- Menu dropdown de categorias de produtos, montada automaticamente a partir das categorias cadastradas no banco de dados;
- Busca recursiva de produtos cadastrados nas categorias filhas;
- Barra de busca pelo nome do produto;
- Paginação na página de busca, com filtros de menor e maior valor;
- Card do produto, mostrando imagem, nome, preço, "em falta", porcentagem de desconto e preço após desconto;
- Página do produto exibindo um slider das imagens cadastradas, breadcrumb da árvore de categoria, nome, desconto, preço, quantidade a comprar, quantidade em estoque, dados de peso e medida, descrição e detalhes do produto;
- Carrinho de compra, mostrando preço total, botões para aumentar e diminuir quantidade ou remover do carrinho e calcular o frete;
- Página para seleção do endereço de entrega, podendo cadastrar um novo endereço ou apagar um já cadastrado (podendo ter vários endereços cadastrados por usuário);
- Tela de confirmação de compra;
- Tela da conta do usuário, onde ele pode alterar suas informações de cadastro (nome, email e senha), adicionar ou remover endereços e visualizar suas ordens de compra.
