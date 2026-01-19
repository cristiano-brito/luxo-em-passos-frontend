# 👠 Luxo em Passos - Frontend

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-Components-06B6D4?style=for-the-badge&logo=primeng)
![Sass](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

O **Luxo em Passos** é uma plataforma premium de gestão para boutiques de calçados de alto padrão. O sistema une uma estética minimalista a uma arquitetura robusta, focada no controle rigoroso de clientes VIP e inventário.

## ✨ Funcionalidades Principais

### 🏛️ Private Hub (Lauchpad)
* **Centro de Comando:** Interface centralizada com atalhos rápidos para as principais operações.
* **Navegação Inteligente:** Design baseado em cards interativos com foco em acessibilidade e rapidez operacional.

### 👥 Gestão de Clientes VIP (Full CRUD)
* **Listagem Inteligente:** Tabela dinâmica com classificação por níveis de fidelidade (`BLACK`, `GOLD`, `STANDARD`).
* **Cadastro em Lote:** Fluxo de inscrição contínuo que permite múltiplos registros sem interrupção da UX.
* **Segurança de Dados:** Sistema de confirmação de exclusão para prevenir perdas acidentais.

### 🎨 Excelência em UI/UX (Estética de Grife)
* **Tipografia Premium:** Uso estratégico das fontes *Playfair Display* e *Montserrat* para um visual sofisticado.
* **Tags Metálicas:** Sistema de labels com gradientes que simulam metais preciosos (Ouro, Platina e Diamante Negro).
* **Feedback Reativo:** Notificações em tempo real (Toasts) e micro-interações de interface.

## 🛠️ Stack Tecnológica

| Tecnologia | Descrição |
| :--- | :--- |
| **Angular 17** | Desenvolvimento baseado em componentes standalone e signals. |
| **PrimeNG** | Biblioteca de componentes de interface de alta fidelidade. |
| **PrimeFlex** | Sistema de grid e utilitários CSS para layouts responsivos. |
| **RxJS** | Programação reativa para manipulação de fluxos de dados assíncronos. |
| **SCSS** | Arquitetura de estilos modular com variáveis, mixins e gradientes complexos. |

## 📁 Estrutura de Pastas (Pattern: Feature-based)

```text
src/app/
├── core/           # Configurações globais e serviços de singleton
├── features/       # Módulos de negócio independentes
│   ├── dashboard/  # Home Hub (Centro de Comando)
│   └── cliente/    # Gestão de Clientes VIP
├── models/         # Interfaces TypeScript (Espelho do Backend Java)
├── services/       # Serviços de dados e lógica de estado (RxJS)
└── shared/         # Componentes reutilizáveis, Pipes e Diretivas

## 🚀 Como Executar o Projeto

Antes de começar, certifique-se de ter o **Node.js** (v18+) e o **Angular CLI** instalados em sua máquina.

### 1. Clonar o Repositório
```bash
git clone [https://github.com/cristiano-brito/luxo-em-passos-frontend.git](https://github.com/cristiano-brito/luxo-em-passos-frontend.git)
cd luxo-em-passos-frontend
