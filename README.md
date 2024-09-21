# Extensão para Caixa Alta

## Descrição
Esta extensão permite que os usuários transformem palavras selecionadas em caixa alta, facilitando a formatação de texto em várias plataformas.

## Arquitetura do Sistema
A extensão é composta por um arquivo de background, um script de conteúdo e uma interface de usuário simples. O script de conteúdo intercepta a seleção de texto e aplica a transformação.

## APIs
- **API do navegador**: Utilizada para manipular o DOM e interagir com o conteúdo da página.


## Estrutura de Dados
A extensão utiliza a seguinte estrutura de dados:
- `Texto`: Objeto que armazena a string original e a string convertida.
  - `original: string`
  - `caixaAlta: string`

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/extensao-caixa-alta.git
