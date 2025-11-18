# 🚀 Portifolio.Next: Micro-Frontends com Turborepo e Next.js

Este projeto representa uma arquitetura de **Micro-Frontends (MFE)** desenvolvida para um portfólio moderno. A aplicação é dividida em sessões independentes (`Sidebar`, `Portifolio Content`) que serão orquestradas por um *Shell* principal, garantindo **escalabilidade**, **independência de *deploy*** e **manutenção simplificada**.

---

## 💡 Por Que Micro-Frontends?

Optei pela estrutura MFE para ter **sessões independentes** na minha aplicação, e futuramente juntar tudo no `Shell` conforme o design autentico e unico que venho criando nos últimos meses.

* **Independência de Desenvolvimento:** Cada MFE pode ser desenvolvida e *deployada* separadamente. Se a `Sidebar` for atualizada, o `Content` não precisa de um novo *build*.
* **Isolamento de Falhas:** Um erro crítico em uma micro-frontend (ex: `Sidebar`) tem menos chances de derrubar todo o aplicativo (`Shell`).
* **Desempenho:** Utilizamos o **Module Federation** para carregar apenas o código necessário no momento certo (*Lazy Loading* de Remotes), otimizando o tempo de carregamento inicial.

---

## 🏗️ Estrutura do Monorepo

O projeto utiliza o **Turborepo** para gerenciar múltiplos aplicativos Next.js e pacotes internos (Estilos/UI) em um único repositório, garantindo builds rápidos via *cache* distribuído.

```shell

.
├── apps/
│   ├── shell/           # 1. HOST: Aplicativo Principal (Porta 3000, ex.)
│   │   ├── pages/         # Roteamento e Layout Principal
│   │   │   └── index.tsx    # Onde você carrega SideBar e Content
│   │   ├── public/
│   │   ├── next.config.js   # Define REMOTES para 'sidebar' e 'content'
│   │   ├── remote-declarations.d.ts # Tipagem para SideBar e Content
│   │   └── package.json
│   │
│   ├── sidebar/         # 2. REMOTE: Barra Lateral
│   │   ├── pages/
│   │   ├── components/    # Onde fica o componente SideBarComponent
│   │   ├── next.config.js   # Define EXPOSES para './SideBar'
│   │   └── package.json
│   │
│   └── portifolio-content/         # 3. REMOTE: Área de Conteúdo
│       ├── pages/
│       ├── components/    # Onde fica o componente ContentComponent
│       ├── next.config.js   # Define EXPOSES para './Content'
│       └── package.json
│
├── packages/
│   ├── ui/              # Pacote de Estilos e Componentes Compartilhados
│   │   ├── src/           # Componentes e o Theme/Context (Estado compartilhado)
│   │   │   └── index.ts     # Exporta estilos, componentes, e o SharedContext
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── tsconfig/        # Configurações TypeScript Compartilhadas
│   ├── eslint-config/   # Configurações ESLint Compartilhadas
│   └── package.json     # Package.json do diretório packages/
│
├── node_modules/
├── package.json         # Raiz do Monorepo (Contém o script 'turbo run dev')
├── turbo.json           # Configuração de Tasks do Turborepo
└── README.md

```

### Detalhes das Aplicações

| Aplicativo    | Papel no MFE          | Porta Dev | Função Principal                                                                                                |
|:--------------|:----------------------|:----------|:----------------------------------------------------------------------------------------------------------------|
| **`shell`**   | **Host (Consumidor)** | `3000`    | Define o layout principal e carrega dinamicamente os MFEs `sidebar` e `content` via Module Federation.          |
| **`sidebar`** | **Remote (Produtor)** | `3001`    | Exporta a tela da barra lateral. É responsável por *alterar* o conteudo de `content` pelas propriedades do APP. |
| **`content`** | **Remote (Produtor)** | `3002`    | Exporta o componente principal de conteúdo.                                                                     |

> Como não finalizei o design e a estrutura do monorepo, o `portifolio-content` está na porta `3000`, e as demais aplicações ainda não existem.
---

## 🛠️ Stack de Tecnologia e Dependências

A seleção de dependências foi feita para garantir estabilidade, tipagem e alto desempenho no desenvolvimento e em produção.

### Dependências Principais

| Dependência                                                                                                                                                                              | Versão/Tipo           | Por que estou usando?                                                                                                                                                                                                                                                                                                              |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [![Turborepo](https://img.shields.io/badge/Turborepo-FF1E56.svg?style=for-the-badge&logo=Turborepo&logoColor=white)](https://turborepo.com)                                              | Gerenciador de Build  | Essencial para o monorepo. Otimiza o *build* e o *cache* entre os três aplicativos, reduzindo o tempo de CI/CD e o desenvolvimento local.                                                                                                                                                                                          |
| [![Next.js](https://img.shields.io/badge/Next.JS--14-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/docs/14)                                         | Framework Front-end   | **Estabilidade com MF:** Escolhi a versão **Next.js 14.x (com Page Router)** e **não** a mais recente (com App Router). O Page Router é a opção madura e estável que garante a **compatibilidade total** com o Module Federation no modo de desenvolvimento (`next dev`) e produção. (com App Router o module-federation não roda) |
| [![Module Federation](https://img.shields.io/badge/Module--Federartion-8DD6F9.svg?style=for-the-badge&logo=Webpack&logoColor=black)](https://webpack.js.org/concepts/module-federation/) | Webpack Plugin        | O núcleo da arquitetura MFE. Permite que o `shell` consuma código (`remotes`) dos aplicativos `sidebar` e `content` (`exposes`) em tempo de execução.                                                                                                                                                                              |
| [![SASS](https://img.shields.io/badge/Module.Scss-CC6699.svg?style=for-the-badge&logo=Sass&logoColor=white)](https://sass-lang.com/documentation/)                                       | Estilização           | Usado para modularidade de estilos dentro de cada aplicativo e no pacote `ui`.                                                                                                                                                                                                                                                     |
| [![Webpack](https://img.shields.io/badge/Webpack-8DD6E1.svg?style=for-the-badge&logo=Webpack&logoColor=black)](https://webpack.js.org/concepts/module-federation/)                       | Dev Dependency (Root) | Necessário para satisfazer o *check* interno do plugin Module Federation, garantindo o ambiente de *build* **correto** para o MFE.                                                                                                                                                                                                 |

### Dependências de Desenvolvimento e Compartilhadas

* **`packages/ui`:** Contém o **Sistema de Estilos** e, crucialmente, o **Contexto Global de Estado**. Ao compartilhar o contexto via `packages/ui`, garantimos que `sidebar` e `content` possam se comunicar de forma limpa, orquestrados pelo `shell`.
* **TypeScript:** Usado em todo o projeto para garantir a segurança e tipagem do código, especialmente nas interações entre os MFEs (via `remote-declarations.d.ts`).