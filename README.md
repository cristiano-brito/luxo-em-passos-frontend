# 👠 Luxo em Passos - Frontend

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-Components-06B6D4?style=for-the-badge&logo=primeng)
![Sass](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass)

O **Luxo em Passos** é uma plataforma premium de gestão de clientes VIP e estoque de calçados de alto luxo. Este repositório contém a interface desenvolvida em Angular, focada em uma experiência de usuário minimalista, acessível e sofisticada.

## ✨ Funcionalidades Implementadas

### 👥 Gestão de Clientes VIP
* **Listagem Dinâmica:** Visualização clara de clientes com identificação por badges de fidelidade (`BLACK`, `GOLD`, `STANDARD`).
* **Modal de Gestão:** Detalhamento de informações com suporte a modo de leitura e edição rápida.
* **Inscrição de Membros:** Página dedicada para cadastro completo, incluindo dados de contato e endereço aninhado.

### 🎨 Diferenciais de UI/UX
* **Design Minimalista:** Estética baseada em tipografia elegante e espaços negativos.
* **Acessibilidade (WCAG):** Campos de formulário e navegação via breadcrumb totalmente operáveis por teclado.
* **Arquitetura Escalável:** Organização por funcionalidades (*Features*) e separação de modelos de dados.

## 🛠️ Tecnologias Utilizadas

* **Angular 17:** Framework base para a SPA.
* **PrimeNG:** Suite de componentes de interface.
* **PrimeFlex:** Grid system para layouts responsivos.
* **RxJS:** Gestão de fluxos de dados assíncronos.
* **SCSS:** Estilização avançada e customização de temas.

## 📁 Estrutura do Projeto

```text
src/app/
├── core/           # Serviços globais e status do sistema
├── features/       # Módulos de negócio (Cliente)
│   └── cliente/    # Listagem, Cadastro e Modais
├── models/         # Interfaces TypeScript (Espelho do Backend Java)
├── services/       # Lógica de consumo de API (RxJS)
└── shared/         # Componentes reutilizáveis (Badges)

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone git@github.com:cristiano-brito/luxo-em-passos-frontend.git
