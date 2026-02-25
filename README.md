# Portfolio.Next 📖
Explore my portfolio to learn more about me, the projects I’ve built, and the skills and technologies I work with.

## Figma Design 🎨
I created a custom style guide as a way to further develop my web design skills and deepen my knowledge of prototyping in Figma.
You can explore the full design process and components in the [Figma Project](https://www.figma.com/community/file/1603455341874713038)

## Project Structure 📂
```
src/
    ├── assets/                     # Static files (images, icons)
    ├── app/                        # Application Directory
    │   ├── AboutMePage/            # Other Page
    │   │   ├── AboutClient.tsx     # Server Component Side
    │   │   ├── AboutContent.tsx    # Static Page Content
    │   │   ├── page.tsx            # Next.js Route
    │   ├── ContactsPage/           
    │   ├── HomePage/              
    │   ├── ProjectsPage/          
    │   ├── page.tsx                # Application File
    ├── components/                 # Reusable Components
    │   ├── NavBar/                 # Reusable NavBar 
    │   │   ├── NavBar.tsx          # React Component
    │   │   └── navBar.module.scss  # Modular Component Styles
    ├── hooks/                      # State Handlers (Hooks)
    │   ├── useSentEmail.ts         
    ├── style/
    │   └── base                    # Base Styles
    │   │   └── _global.scss        # Global Style
    │   │   └── _reset.scss         # Default CSS Reset
    │   └── utils                   # Reusable Elements
    │   │   └── _variables.scss     # Styles Variables
    │   │   └── _mixins.scss        # Reusable Mixins
    │   │   └── _index.scss         # Exports variables & mixins to main.scss
    │   └── main.scss               # Exports Global Styles
```

## Development 💻
This repository represents an evolving learning journey. Since the first version, I’ve continuously refactored and improved the project while applying new concepts and best practices.
The development process followed these stages:

- Initial Version [v1.0](https://github.com/LyanBrito/portifolio.next/releases/tag/v1.0): A simple Next.js application.

- Architecture Experiment [v2.0-beta](https://github.com/LyanBrito/portifolio.next/releases/tag/v2.0-beta): Implementation of a microfrontend architecture using Module Federation.

- Final Version [v2.0](https://github.com/LyanBrito/portifolio.next/releases/tag/v2.0): A refined Next.js application built with modern standards, scalable structure, and best practices.
  
The microfrontend approach was ultimately discontinued due to incompatible architectural & maintainability trade-offs for this project’s scope.

## Dependencies & Technologies 🏗️
The project is built using the following stack:

- [Next.js](https://nextjs.org/docs) (latest) – React framework for SSR, routing, and performance optimization

- [TypeScript](https://www.typescriptlang.org/docs/) – Static typing for improved reliability and maintainability

- [SCSS](https://sass-lang.com/documentation/) – Modular and scalable styling

- [EmailJS](https://www.emailjs.com/docs/) – Client-side email service integration

## Local Testing 🚀
Follow the steps below to run the project in your local development environment.
### 1. Clone the repository:
```git
git clone https://github.com/LyanBrito/portifolio.next.git
cd portifolio.next
```
### 2. Installing Dependencies (Use any node package manager)
```bash
pnpm install
```
or
```bash
npm install
```
or
```bash
yarn install
```
### 3. Run Project & Open on `http://localhost:3000` (Use any node package manager)
```bash
pnpm run
```
or
```bash
npm run
```
or
```bash
yarn run
```

## Contribuition 🍀
Feel free to explore, and support the project whenever you want. Just fork the repository and be happy!
