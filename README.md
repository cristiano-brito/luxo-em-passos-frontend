# 👠 Luxo em Passos - Frontend

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-Components-06B6D4?style=for-the-badge&logo=primeng)
![Chart.js](https://img.shields.io/badge/Chart.js-Analytics-FF6384?style=for-the-badge&logo=chartdotjs)
![Sass](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

O **Luxo em Passos** é uma plataforma premium de gestão para boutiques de calçados de alto padrão. O sistema une uma estética minimalista a uma arquitetura robusta, focada no controle rigoroso de clientes VIP, inventário de luxo e fluxo de vendas transacional.

---

## ✨ Funcionalidades Implementadas

### 📊 Business Intelligence & Relatórios (Novo)
* **Dashboard Executivo:** Visualização em tempo real de KPIs críticos como Faturamento Bruto e Ticket Médio.
* **Análise de Mix de Produtos:** Gráficos de rosca reativos (Doughnut) que detalham a performance de vendas por categoria (Scarpin, Rasteirinha, etc).
* **Monitoramento de Conversão:** Rastreamento de pedidos finalizados versus estornos para análise de saúde operacional.

### 🛍️ Módulo de Vendas & Checkout
* **Checkout VIP:** Processo de venda orquestrado com busca preditiva de clientes e seleção de produtos em tempo real.
* **Gestão de Estoque Atômica:** Validação rigorosa de inventário que impede vendas sem saldo e realiza o abatimento automático.
* **Histórico & Estorno:** Listagem de transações com funcionalidade de cancelamento total e retorno automático de produtos ao acervo.

### 📦 Gestão de Inventário (Full CRUD)
* **Vitrine de Luxo:** Listagem dinâmica com tratamento visual diferenciado e tags de identificação de perfil.
* **Edição em Modal:** Interface fluida via `p-dialog` para atualização de preços e estoque sem perda de contexto.

### 👥 Gestão de Clientes VIP
* **Controle de Fidelidade:** Cadastro e listagem de clientes com histórico de gastos acumulados automaticamente.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Descrição |
| :--- | :--- |
| **Angular 17** | Uso de componentes standalone e injeção de dependência moderna. |
| **PrimeNG** | Componentes de UI de alta fidelidade e sistema de notificações reativo. |
| **Chart.js** | Motor gráfico para visualização de dados e métricas de BI. |
| **RxJS** | Gestão de estados assíncronos via `BehaviorSubjects` no `LuxoService`. |
| **Local Storage** | Estratégia de persistência Client-side para manutenção dos dados. |

---

## 📁 Estrutura de Pastas (Feature-based)

```text
src/app/
├── core/           # Serviços globais (Storage, Connection Status)
├── features/       # Módulos de negócio independentes
│   ├── cliente/    # Gestão de Clientes VIP
│   ├── dashboard/  # Home Hub (Centro de Comando)
│   ├── relatorio/  # BI e Gráficos de Performance
│   ├── sandalia/   # Inventário e Curadoria
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
