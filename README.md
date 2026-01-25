# 👠 Luxo em Passos - Frontend

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-Components-06B6D4?style=for-the-badge&logo=primeng)
![Sass](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

O **Luxo em Passos** é uma plataforma premium de gestão para boutiques de calçados de alto padrão. O sistema une uma estética minimalista a uma arquitetura robusta, focada no controle rigoroso de clientes VIP e inventário de luxo.

---

## ✨ Funcionalidades Implementadas

### 📦 Gestão de Inventário (Full CRUD)
* **Vitrine de Luxo:** Listagem dinâmica de sandálias com tratamento visual diferenciado por categoria.
* **Edição em Modal:** Interface de atualização de preços e estoque via `p-dialog`, mantendo o fluxo de navegação fluido.
* **Exclusão com Confirmação:** Sistema de segurança que exige validação antes de remover itens do acervo com `p-confirmDialog`.
* **Tags Metálicas:** Labels customizadas que identificam peças `BLACK`, `GOLD` e `STANDARD`.

### 👥 Gestão de Clientes VIP
* **Controle de Fidelidade:** Cadastro e listagem de clientes com histórico de gastos e perfil de consumo.
* **Arquitetura Reativa:** Dados sincronizados via RxJS, garantindo que a UI reflita as mudanças instantaneamente.

### 📡 Core & UX
* **Monitoramento de Conexão:** Detecção em tempo real do status da rede (`ONLINE`/`OFFLINE`) com feedback visual global.
* **Toasts & Notificações:** Sistema de feedback reativo para todas as ações do usuário (sucesso, erro, avisos).

---

## 🛠️ Stack Tecnológica

| Tecnologia | Descrição |
| :--- | :--- |
| **Angular 17** | Uso de componentes standalone e injeção de dependência moderna. |
| **PrimeNG** | Componentes de interface de alta fidelidade (Dialog, Table, Toast). |
| **RxJS** | Gestão de estados e fluxos de dados assíncronos. |
| **SCSS** | Estilização avançada com foco em tipografia clássica e cores sóbrias. |

---

## 📁 Estrutura de Pastas (Feature-based)

```text
src/app/
├── core/           # Serviços globais (Status de Sistema, Interceptors)
├── features/       # Módulos de negócio independentes
│   ├── cliente/    # Gestão de Clientes VIP
│   ├── dashboard/  # Home Hub (Centro de Comando)
│   └── sandalia/   # Inventário e Curadoria (CRUD completo)
├── models/         # Interfaces TypeScript (Contratos de Dados)
└── services/       # LuxoService (Repositório Central de Dados/Mocks)

## 🚀 Como Executar o Projeto

Para garantir a melhor experiência de desenvolvimento, certifique-se de ter o **Node.js** (v18+) e o **Angular CLI** configurados em seu ambiente.

---

### 📥 1. Clonar o Repositório
Inicie clonando o acervo digital para sua máquina local:
```bash
git clone [https://github.com/cristiano-brito/luxo-em-passos-frontend.git](https://github.com/cristiano-brito/luxo-em-passos-frontend.git)
cd luxo-em-passos-frontend
