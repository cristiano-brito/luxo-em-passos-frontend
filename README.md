# 👠 Luxo em Passos - Frontend

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-Components-06B6D4?style=for-the-badge&logo=primeng)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-Integrado-6DB33F?style=for-the-badge&logo=springboot)
![RxJS](https://img.shields.io/badge/RxJS-Reactive-B7178C?style=for-the-badge&logo=reactivex)
![Sass](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass)

O **Luxo em Passos** é uma plataforma premium de gestão para boutiques de calçados de alto padrão. O sistema une uma estética minimalista a uma arquitetura robusta, focada no controle rigoroso de clientes VIP, inventário de luxo e fluxo de vendas transacional.

---

## ✨ Funcionalidades Implementadas

### 🌐 Integração Backend & Arquitetura SaaS (Multi-tenant)
* **Contrato Genérico de API:** Implementação da interface `ApiResponse<T>`, garantindo que toda comunicação com o Spring Boot siga um envelope padronizado (`sucesso`, `mensagem`, `dados`, `timestamp`).
* **Consumo de DTOs Otimizados:** Integração com **Java Records** do backend, garantindo payloads leves e tempos de resposta sub-50ms (Média atual: 34ms).
* **Tenant Isolation (X-Tenant-ID):** Implementação de `TenantInterceptor` que injeta automaticamente a identidade da boutique em cada requisição via Header customizado, permitindo isolamento de dados no nível de infraestrutura.
* **Interceptor de Erros Global:** Motor de interceptação HTTP que captura falhas de validação e erros de infraestrutura, disparando feedbacks visuais via **Toast** automaticamente.
* **Ambiente SaaS Ready:** Persistência de contexto de loja via `localStorage` e monitoramento de latência do servidor (`tempoProcessamentoMs`).

### 🛒 Vendas Transacionais & Logística
* **Fluxo de Pedidos Reativo:** Motor de fechamento de vendas que valida estoque em tempo real, gera protocolos únicos e atualiza o LTV (*Lifetime Value*) do cliente de forma atômica.
* **Estorno Inteligente:** Lógica de cancelamento de pedidos com reposição automática de inventário e recalculo dinâmico do perfil de fidelidade.
* **Gestão de Inventário por SKU:** Controle rigoroso de estoque para peças de luxo com suporte a categorias premium e visualização de curadoria.

### 👥 CRM & Gestão de Clientes VIP
* **Ranking de Fidelidade:** Segmentação visual automática por perfil (**BLACK**, **GOLD** e **STANDARD**) baseada no gasto acumulado.
* **Arquitetura Smart & Presentational:** Separação rigorosa de responsabilidades entre componentes de listagem e modais especializados de gestão.
* **Type-Safe Forms:** Uso de *Non-null Assertion* e inicialização de modelos para garantir integridade em formulários complexos de endereçamento sob o modo estrito do Angular 17.

---

## 🛠️ Stack Tecnológica & Padrões

| Tecnologia | Descrição |
| :--- | :--- |
| **Angular 17** | Componentes standalone e arquitetura baseada em serviços de fachada. |
| **RxJS** | Gestão de estados assíncronos via `BehaviorSubject` e `combineLatest`. |
| **PrimeNG** | Suite de componentes UI customizada para design minimalista de alto padrão. |
| **SASS/SCSS** | Estilização avançada utilizando paleta *Luxury* (**Ouro, Black e Platina**). |
| **Arquitetura Core** | Centralização de regras de negócio em Services (Single Source of Truth). |
| **Proxy Configuration** | Redirecionamento de tráfego local para contornar políticas de CORS em desenvolvimento. |

---

## 📂 Estrutura de Pastas (Feature-based)

```text
src/app/
├── core/            # Interceptors (Tenant/Erros) e Storage Service
├── features/        
│   ├── cliente/     # CRM VIP (Listagem, Cadastro e Gestão)
│   ├── relatorio/   # Dashboard e Analytics reativo
│   └── sandalia/    # Gestão de Inventário (CRUD)
├── models/          # Interfaces de domínio (Cliente, Sandalia, Pedido)
├── services/        # Central de inteligência reativa (LuxoService)
└── environments/    # Configurações de API (Local, Staging, Prod)

## 🚀 Como Executar o Projeto

Para garantir a melhor experiência de desenvolvimento, certifique-se de ter o **Node.js** (v18+) e o **Angular CLI** configurados em seu ambiente.

---

### 📥 1. Clonar e Instalar
```bash
git clone [https://github.com/cristiano-brito/luxo-em-passos-frontend.git](https://github.com/cristiano-brito/luxo-em-passos-frontend.git)
cd luxo-em-passos-frontend
npm install
