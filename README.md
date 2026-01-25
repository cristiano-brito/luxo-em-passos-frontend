# 👠 Luxo em Passos - Frontend

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-Components-06B6D4?style=for-the-badge&logo=primeng)
![Chart.js](https://img.shields.io/badge/Chart.js-Analytics-FF6384?style=for-the-badge&logo=chartdotjs)
![RxJS](https://img.shields.io/badge/RxJS-Reactive-B7178C?style=for-the-badge&logo=reactivex)
![Sass](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass)

O **Luxo em Passos** é uma plataforma premium de gestão para boutiques de calçados de alto padrão. O sistema une uma estética minimalista a uma arquitetura robusta, focada no controle rigoroso de clientes VIP, inventário de luxo e fluxo de vendas transacional.

---

## ✨ Funcionalidades Implementadas

### 📊 Business Intelligence & Analytics
* **Dashboard Executivo Reativo:** Visualização em tempo real de KPIs críticos (Faturamento, Ticket Médio e Conversão) orquestrados via `combineLatest`.
* **Motor de Filtros Temporais:** Alternância dinâmica entre períodos (**Hoje, Este Mês, Total**) com atualização instantânea de gráficos e indicadores sem refresh de página.
* **Inteligência de Inventário:** Painel de **Estoque Crítico** com alertas visuais dinâmicos e exibição de quantidades exatas.
* **CRM Analytics (Ranking VIP):** Identificação automática dos *Top Spenders* com segmentação visual por perfil de cliente (**BLACK** e **GOLD**).

### 📦 Gestão de Inventário & Curadoria (Novo)
* **Fluxo CRUD Completo:** Sistema de gestão total de peças permitindo inclusão, exclusão e edição detalhada com persistência em estado global.
* **Formulário Inteligente Dual-Mode:** Componente otimizado que alterna entre **Cadastro** e **Edição** via parâmetros de rota (`ActivatedRoute`), com bloqueio de integridade de SKU em modo de edição.
* **Curadoria com Live Preview:** Visualização em tempo real da peça através da URL da imagem, garantindo precisão estética no catálogo.
* **Busca Reativa Global:** Filtragem instantânea por modelo ou SKU utilizando `Observables` e `BehaviorSubjects`.
* **Tags Metálicas Dinâmicas:** Segmentação visual por categoria (**Scarpin, Rasteirinha, Salto Alto, Edição Limitada**).



### 👥 Gestão de Clientes VIP
* **Arquitetura Smart & Presentational:** Separação de responsabilidades entre a listagem e o modal especializado de gestão.
* **Dual-Mode UX:** Interface versátil com estados de **Insights** (Leitura) e **Edit** (Escrita) com tratamento de imutabilidade via clonagem de objetos.
* **Sincronização Reativa:** Uso de `@Output` e `EventEmitter` para atualização instantânea da UI após persistência.

### 🛍️ Módulo de Vendas & Checkout
* **Checkout VIP:** Processo de venda com busca preditiva de clientes e validação de estoque em tempo real.
* **Gestão Transacional:** Abatimento automático pós-venda e sistema de estorno/cancelamento com re-cálculo imediato de faturamento.

---

## 🛠️ Stack Tecnológica & Padrões

| Tecnologia | Descrição |
| :--- | :--- |
| **Angular 17** | Componentes standalone e arquitetura baseada em serviços de fachada. |
| **RxJS** | Gestão de estados assíncronos e operadores de combinação (`combineLatest`, `map`). |
| **PrimeNG** | Suite de componentes UI personalizada com foco em design minimalista. |
| **SASS/SCSS** | Estilização avançada utilizando paleta *Luxury* (**Azul Petróleo e Ouro Bronze**). |
| **Angular Router** | Navegação dinâmica com parâmetros de rota para gestão de estados de edição. |



---

## 📂 Estrutura de Pastas (Feature-based)

```text
src/app/
├── features/       
│   ├── cliente/     # Gestão VIP (Listagem e Modais)
│   ├── relatorio/   # BI e Analytics (Dashboard, Gráficos, KPIs)
│   ├── sandalia/    # Gestão de Inventário e Curadoria (CRUD)
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
