# 👠 Luxo em Passos - Frontend

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-Components-06B6D4?style=for-the-badge&logo=primeng)
![Sass](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

O **Luxo em Passos** é uma plataforma premium de gestão para boutiques de calçados de alto padrão. O sistema foi projetado para oferecer um controle rigoroso de clientes VIP e inventário, unindo uma estética minimalista a uma arquitetura robusta e escalável.

## ✨ Funcionalidades Principais

### 👥 Gestão de Clientes VIP (Full CRUD)
* **Listagem Inteligente:** Tabela dinâmica com classificação por níveis de fidelidade (`BLACK`, `GOLD`, `STANDARD`).
* **Cadastro em Lote:** Fluxo de inscrição contínuo que permite múltiplos registros sem interrupção da experiência (UX).
* **Edição & Visualização:** Interface modal versátil para gestão de dados sem troca de contexto.
* **Segurança de Dados:** Sistema de confirmação de exclusão para prevenir perdas acidentais de registros.

### 🎨 Excelência em UI/UX
* **Design de Luxo:** Estética "Clean & Dark" baseada em tipografia elegante e espaços negativos.
* **Feedback Reativo:** Notificações em tempo real (Toasts) para confirmação de todas as ações do usuário.
* **Acessibilidade:** Navegação otimizada via teclado e conformidade com padrões WCAG.

## 🛠️ Stack Tecnológica

| Tecnologia | Descrição |
| :--- | :--- |
| **Angular 17** | Desenvolvimento baseado em componentes standalone e signals. |
| **PrimeNG** | Biblioteca de componentes de interface de alta fidelidade. |
| **PrimeFlex** | Sistema de grid e utilitários CSS para layouts responsivos. |
| **RxJS** | Programação reativa para manipulação de fluxos de dados assíncronos. |
| **SCSS** | Arquitetura de estilos modular com variáveis e mixins. |

## 📁 Estrutura de Pastas (Pattern: Feature-based)

```text
src/app/
├── core/           # Configurações globais e serviços de singleton
├── features/       # Módulos de negócio independentes
│   └── cliente/    # Listagem, Cadastro, Modais e Lógica de Domínio
├── models/         # Interfaces TypeScript (Espelho do Backend Java)
├── services/       # Serviços de dados e lógica de estado (RxJS)
└── shared/         # Componentes reutilizáveis, Pipes e Diretivas

## 🚀 Como Executar o Projeto

Antes de começar, certifique-se de ter o **Node.js** (v18+) e o **Angular CLI** instalados em sua máquina.

### 1. Clonar o Repositório
```bash
git clone [https://github.com/cristiano-brito/luxo-em-passos-frontend.git](https://github.com/cristiano-brito/luxo-em-passos-frontend.git)
cd luxo-em-passos-frontend
