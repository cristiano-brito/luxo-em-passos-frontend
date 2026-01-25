# 👠 Luxo em Passos - Frontend

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-Components-06B6D4?style=for-the-badge&logo=primeng)
![Sass](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

O **Luxo em Passos** é uma plataforma premium de gestão para boutiques de calçados de alto padrão. O sistema une uma estética minimalista a uma arquitetura robusta, focada no controle rigoroso de clientes VIP, inventário de luxo e fluxo de vendas transacional.

---

## ✨ Funcionalidades Implementadas

### 🛍️ Módulo de Vendas & Checkout (Novo)
* **Checkout VIP:** Processo de venda orquestrado com busca preditiva de clientes e seleção de produtos em tempo real.
* **Gestão de Estoque Atômica:** Validação rigorosa de inventário que impede vendas sem saldo e realiza o abatimento automático após a conclusão.
* **Histórico & Estorno:** Listagem de transações com funcionalidade de cancelamento total, realizando o estorno automático de produtos ao estoque e ajuste no perfil financeiro do cliente.
* **Controle de Fluxo Manual:** Interface inteligente que permite múltiplas vendas consecutivas sem perda de contexto (Nova Venda/Limpar).

### 📦 Gestão de Inventário (Full CRUD)
* **Vitrine de Luxo:** Listagem dinâmica de sandálias com tratamento visual diferenciado por categoria.
* **Edição em Modal:** Interface de atualização de preços e estoque via `p-dialog`, mantendo o fluxo de navegação fluido.
* **Exclusão com Confirmação:** Sistema de segurança que exige validação antes de remover itens do acervo com `p-confirmDialog`.
* **Tags Metálicas:** Labels customizadas que identificam peças `BLACK`, `GOLD` e `STANDARD`.

### 👥 Gestão de Clientes VIP
* **Controle de Fidelidade:** Cadastro e listagem de clientes com histórico de gastos e perfil de consumo.
* **Arquitetura Reativa:** Dados sincronizados via RxJS, garantindo que a UI reflita as mudanças instantaneamente.

### 📡 Core & Arquitetura
* **Persistência Local (StorageService):** Camada de persistência em `localStorage` para manutenção do estado da aplicação entre sessões.
* **Services Layered Pattern:** Separação clara entre Repositório de Dados (`LuxoService`) e Orquestradores de Negócio (`VendaService`).
* **Monitoramento de Conexão:** Detecção em tempo real do status da rede (`ONLINE`/`OFFLINE`) com feedback visual global.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Descrição |
| :--- | :--- |
| **Angular 17** | Uso de componentes standalone e injeção de dependência moderna. |
| **PrimeNG** | Componentes de interface de alta fidelidade (Dialog, Table, Toast, AutoComplete). |
| **RxJS** | Gestão de estados e fluxos de dados assíncronos (BehaviorSubjects). |
| **Local Storage** | Estratégia de persistência Client-side para simulação de banco de dados. |
| **SCSS** | Estilização avançada com foco em tipografia clássica e cores sóbrias. |

---

## 📁 Estrutura de Pastas (Feature-based)

```text
src/app/
├── core/           # Serviços globais (StorageService, Connection Status)
├── features/       # Módulos de negócio independentes
│   ├── cliente/    # Gestão de Clientes VIP
│   ├── dashboard/  # Home Hub (Centro de Comando)
│   ├── sandalia/   # Inventário e Curadoria
│   └── venda/      # Checkout, Histórico e Lógica de Estorno
├── models/         # Interfaces e Enums (StatusPedido, Pedido, Cliente)
└── services/       # LuxoService (Mock Database Central)

## 🚀 Como Executar o Projeto

Para garantir a melhor experiência de desenvolvimento, certifique-se de ter o **Node.js** (v18+) e o **Angular CLI** configurados em seu ambiente.

---

### 📥 1. Clonar o Repositório
Inicie clonando o acervo digital para sua máquina local:
```bash
git clone [https://github.com/cristiano-brito/luxo-em-passos-frontend.git](https://github.com/cristiano-brito/luxo-em-passos-frontend.git)
cd luxo-em-passos-frontend
