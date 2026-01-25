# 👠 Luxo em Passos - Frontend

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-Components-06B6D4?style=for-the-badge&logo=primeng)
![Chart.js](https://img.shields.io/badge/Chart.js-Analytics-FF6384?style=for-the-badge&logo=chartdotjs)
![Sass](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

O **Luxo em Passos** é uma plataforma premium de gestão para boutiques de calçados de alto padrão. O sistema une uma estética minimalista a uma arquitetura robusta, focada no controle rigoroso de clientes VIP, inventário de luxo e fluxo de vendas transacional.

---

## ✨ Funcionalidades Implementadas

### 👥 Gestão de Clientes VIP (Full CRUD & UI)
* **Arquitetura Smart & Presentational:** Separação de responsabilidades entre a listagem de clientes (Container) e o modal especializado de gestão (Presentational), facilitando a manutenção e o isolamento de lógica.
* **Comunicação Reativa Bidirecional:** Fluxo de dados orquestrado via `@ViewChild` para inicialização e `@Output` com `EventEmitter` para sincronização automática da UI após persistência no serviço.
* **Dual-Mode UX:** Modal versátil com estados de **Insights** (Modo Leitura com tipografia clássica e linhas pontilhadas) e **Edit** (Modo Escrita com inputs minimalistas).
* **Tratamento de Imutabilidade:** Garantia de integridade de dados através de clonagem de objetos, assegurando que alterações canceladas não afetem o estado global da aplicação.

### 📦 Gestão de Inventário & Curadoria (Atualizado)
* **Busca Reativa Global:** Sistema de filtragem em tempo real por modelo ou SKU utilizando `Observables` e `BehaviorSubjects`.
* **Filtro por Categoria:** Segmentação inteligente do acervo (Scarpin, Rasteirinha, etc.) integrada ao motor de dados reativo.
* **Vitrine de Luxo:** Listagem dinâmica com tratamento visual diferenciado, tipografia clássica (*Playfair Display*) e tags metálicas customizadas.
* **Edição em Modal:** Interface fluida via `p-dialog` para atualização de preços e estoque com persistência atômica.

### 📊 Business Intelligence & Relatórios
* **Dashboard Executivo:** Visualização de KPIs críticos como Faturamento Bruto e Ticket Médio com processamento via `combineLatest`.
* **Filtros Temporais:** Alternância dinâmica entre períodos (Hoje, Este Mês, Total) para análise de performance.
* **Análise de Mix de Produtos:** Gráficos de rosca (Doughnut) integrados com a identidade visual da marca via Chart.js.

### 🛍️ Módulo de Vendas & Checkout
* **Checkout VIP:** Processo de venda orquestrado com busca preditiva de clientes e validação de estoque em tempo real.
* **Gestão de Estoque:** Abatimento automático pós-venda e sistema de estorno com retorno imediato ao acervo.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Descrição |
| :--- | :--- |
| **Angular 17** | Uso de componentes standalone e injeção de dependência moderna. |
| **PrimeNG** | Suite de componentes UI de alta fidelidade para o segmento premium. |
| **RxJS** | Gestão de estados assíncronos e operadores de combinação para filtros dinâmicos. |
| **SASS/SCSS** | Estilização avançada com foco em design minimalista e luxuoso. |
| **Local Storage** | Estratégia de persistência Client-side para manutenção dos dados transacionais. |

---

## 📁 Estrutura de Pastas (Feature-based)

```text
src/app/
├── core/           # Serviços globais e persistência (Storage)
├── features/       # Módulos de negócio independentes
│   ├── cliente/    
│   │   ├── components/
│   │   │   ├── cliente-list/           # Listagem (Smart Component)
│   │   │   └── cliente-gestao-modal/   # Gestão & Insights (Dumb Component)
│   │   └── services/                   # ClienteService (Fachada)
│   ├── relatorio/  # BI e Business Intelligence
│   ├── sandalia/   # Inventário e Curadoria Reativa
│   └── venda/      # Checkout e Histórico de Transações
├── models/         # Interfaces e Enums (Contratos de Dados)
└── services/       # LuxoService (Single Source of Truth / Repository)

## 🚀 Como Executar o Projeto

Para garantir a melhor experiência de desenvolvimento, certifique-se de ter o **Node.js** (v18+) e o **Angular CLI** configurados em seu ambiente.

---

### 📥 1. Clonar o Repositório
Inicie clonando o acervo digital para sua máquina local:
```bash
git clone [https://github.com/cristiano-brito/luxo-em-passos-frontend.git](https://github.com/cristiano-brito/luxo-em-passos-frontend.git)
cd luxo-em-passos-frontend
