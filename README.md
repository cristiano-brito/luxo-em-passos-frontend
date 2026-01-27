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
* **Tenant Isolation (X-Tenant-ID):** Implementação de `TenantInterceptor` que injeta automaticamente a identidade da boutique em cada requisição, permitindo o isolamento de dados transparente no backend.
* **Interceptor de Erros Global:** Motor de interceptação HTTP que captura falhas de validação (Jakarta Bean Validation) e erros de infraestrutura, disparando feedbacks visuais via **Toast** automaticamente.
* **Ambiente SaaS Ready:** Infraestrutura preparada para operação em nuvem com monitoramento de status de conexão e persistência de contexto de loja via `localStorage`.

### 📊 Business Intelligence & Analytics
* **Dashboard Executivo Reativo:** Visualização em tempo real de KPIs críticos (Faturamento, Ticket Médio e Conversão) orquestrados via `combineLatest`.
* **Motor de Filtros Temporais:** Alternância dinâmica entre períodos (**Hoje, Este Mês, Total**) com atualização instantânea de indicadores.
* **CRM Analytics (Ranking VIP):** Identificação automática dos *Top Spenders* com segmentação visual por perfil (**BLACK DIAMOND** e **OURO POLIDO**).

### 📦 Gestão de Inventário & Curadoria
* **Fluxo CRUD Completo:** Sistema de gestão total de peças permitindo inclusão, exclusão e edição detalhada com persistência em estado global.
* **Curadoria com Live Preview:** Visualização em tempo real da peça através da URL da imagem, garantindo precisão estética no catálogo.

### 👥 Gestão de Clientes VIP
* **Arquitetura Smart & Presentational:** Separação de responsabilidades entre a listagem e componentes especializados de gestão.
* **Sincronização Reativa:** Integração total com o banco de dados via `ClienteService`, suportando listagem e cadastro com filtragem automática por Tenant.
* **Identidade Visual VIP:** Tags metálicas personalizadas com gradientes complexos para categorização de clientes com base no LTV (*Lifetime Value*).

---

## 🛠️ Stack Tecnológica & Padrões

| Tecnologia | Descrição |
| :--- | :--- |
| **Angular 17** | Componentes standalone e arquitetura baseada em serviços de fachada. |
| **RxJS** | Gestão de estados assíncronos e operadores de combinação (`tap`, `catchError`, `map`). |
| **PrimeNG** | Suite de componentes UI personalizada com foco em design minimalista. |
| **SASS/SCSS** | Estilização avançada utilizando paleta *Luxury* (**Ouro, Black e Platina**). |
| **Arquitetura de Core** | Uso estratégico de Interceptors para injeção de Headers e tratamento global de erros. |

---

## 📂 Estrutura de Pastas (Feature-based)

```text
src/app/
├── features/       
│   ├── cliente/     # Gestão VIP (Listagem e Serviços)
│   ├── relatorio/   # BI e Analytics (Dashboard, Gráficos)
│   └── sandalia/    # Gestão de Inventário (CRUD)
├── core/            # Interceptors (Tenant e Erros), Guards e Models Globais
├── environments/    # Configurações de API (Local, Staging, Prod)
├── models/          # Interfaces de domínio (Cliente, Sandalia)

## 🚀 Como Executar o Projeto

Para garantir a melhor experiência de desenvolvimento, certifique-se de ter o **Node.js** (v18+) e o **Angular CLI** configurados em seu ambiente.

---

### 📥 1. Clonar o Repositório
Inicie clonando o acervo digital para sua máquina local:
```bash
git clone [https://github.com/cristiano-brito/luxo-em-passos-frontend.git](https://github.com/cristiano-brito/luxo-em-passos-frontend.git)
cd luxo-em-passos-frontend
