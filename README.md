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

  . Diagrama de Casos de Uso
•	Ator: Usuário
•	Casos de Uso:
o	Selecionar Texto
o	Converter Texto em Caixa Alta
o	Visualizar Mensagem de Confirmação
o	Acessar Histórico de Conversões
2. Diagrama de Classes
•	Classes:
o	Extensao
	Atributos: historico, preferencias
	Métodos: converterTexto(), salvarHistorico()
o	Usuario
	Atributos: id, nome
	Métodos: selecionarTexto(), visualizarHistorico()


## Instalação
1. Clone o repositório:
   [```bash
   git clone https://github.com/seuusuario/extensao-caixa-alta.git
](https://github.com/jurochash/sistematiza-o2.git)
