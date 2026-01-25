# 👠 Luxo em Passos - Frontend

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-Components-06B6D4?style=for-the-badge&logo=primeng)
![Chart.js](https://img.shields.io/badge/Chart.js-Analytics-FF6384?style=for-the-badge&logo=chartdotjs)
![RxJS](https://img.shields.io/badge/RxJS-Reactive-B7178C?style=for-the-badge&logo=reactivex)
![Sass](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass)

O **Luxo em Passos** é uma plataforma premium de gestão para boutiques de calçados de alto padrão. O sistema une uma estética minimalista a uma arquitetura robusta, focada no controle rigoroso de clientes VIP, inventário de luxo e fluxo de vendas transacional.

---

## ✨ Funcionalidades Implementadas

### 📊 Business Intelligence & Analytics (Novo)
* **Dashboard Executivo Reativo:** Visualização em tempo real de KPIs críticos (Faturamento, Ticket Médio e Conversão) orquestrados via `combineLatest`.
* **Motor de Filtros Temporais:** Alternância dinâmica entre períodos (**Hoje, Este Mês, Total**) com atualização instantânea de gráficos e indicadores sem refresh de página.
* **Inteligência de Inventário:** Painel de **Estoque Crítico** com alertas visuais dinâmicos (Barra de status em vermelho para itens com 3 unidades ou menos) e exibição de quantidades exatas.
* **CRM Analytics (Ranking VIP):** Identificação automática dos *Top Spenders* com segmentação visual por perfil de cliente (**BLACK** e **GOLD**).
* **Evolução Financeira:** Gráficos de barras e roscas customizados via Chart.js, otimizados para reatividade através de gestão rigorosa de imutabilidade.

### 👥 Gestão de Clientes VIP
* **Arquitetura Smart & Presentational:** Separação de responsabilidades entre a listagem (Container) e o modal especializado de gestão (Presentational).
* **Dual-Mode UX:** Interface versátil com estados de **Insights** (Leitura) e **Edit** (Escrita) com tratamento de imutabilidade via clonagem de objetos.
* **Sincronização Reativa:** Uso de `@Output` e `EventEmitter` para atualização instantânea da UI após persistência.

### 📦 Gestão de Inventário & Curadoria
* **Busca Reativa Global:** Filtragem em tempo real por modelo ou SKU utilizando `Observables` e `BehaviorSubjects`.
* **Segmentação por Categoria:** Filtros inteligentes para Scarpin, Rasteirinha, Salto Alto e Edições Limitadas.
* **Vitrine de Luxo:** Listagem dinâmica com tipografia clássica e tags metálicas customizadas.

### 🛍️ Módulo de Vendas & Checkout
* **Checkout VIP:** Processo de venda com busca preditiva de clientes e validação de estoque em tempo real.
* **Gestão Transacional:** Abatimento automático pós-venda e sistema de estorno/cancelamento com re-cálculo imediato de faturamento.

---

## 🛠️ Stack Tecnológica & Padrões

| Tecnologia | Descrição |
| :--- | :--- |
| **Angular 17** | Componentes standalone e arquitetura baseada em serviços de fachada. |
| **RxJS** | Gestão de estados assíncronos e operadores de combinação (`combineLatest`, `map`, `switchMap`). |
| **PrimeNG** | Suite de componentes UI personalizada com paleta *Professional Slate*. |
| **Chart.js** | Visualização de dados analíticos com suporte a re-renderização reativa. |
| **SASS/SCSS** | Estilização avançada com foco em design minimalista e luxuoso. |

---

## 📂 Estrutura de Pastas (Feature-based)

```text
src/app/
├── features/       
│   ├── cliente/     # Gestão VIP (Listagem e Modais)
│   ├── relatorio/   # BI e Analytics (Dashboard, Gráficos, KPIs)
│   ├── sandalia/    # Gestão de Inventário e Curadoria
│   └── venda/       # Checkout e Transações
├── core/            # Serviços globais e persistência (Storage Service)
├── models/          # Interfaces e Enums (Contratos de Dados)
└── services/        # LuxoService (Single Source of Truth / Repository Pattern)

## 🚀 Como Executar o Projeto

Para garantir a melhor experiência de desenvolvimento, certifique-se de ter o **Node.js** (v18+) e o **Angular CLI** configurados em seu ambiente.

---

### 📥 1. Clonar o Repositório
Inicie clonando o acervo digital para sua máquina local:
```bash
git clone [https://github.com/cristiano-brito/luxo-em-passos-frontend.git](https://github.com/cristiano-brito/luxo-em-passos-frontend.git)
cd luxo-em-passos-frontend
