# Vidraçaria e Serralheria Leonard - Website Oficial

Site profissional completo, moderno e responsivo desenvolvido para a **Vidraçaria e Serralheria Leonard**, localizada em Fragoso, Magé - RJ, com mais de 30 anos de experiência.

---

## 🛠️ Tecnologias Utilizadas

- **React 18+** com **TypeScript**
- **Vite** (Build ultrarrápido)
- **Tailwind CSS** (Estilização profissional e responsiva)
- **Lucide React** (Ícones modernos)

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina (versão 18 ou superior recomendada).

### 1. Instalar Dependências
Abra o terminal na pasta do projeto e execute:
```bash
npm install
```

### 2. Executar em Modo de Desenvolvimento
```bash
npm run dev
```
O site estará acessível em `http://localhost:3000`.

### 3. Gerar Build de Produção
Para criar os arquivos estáticos otimizados para publicação:
```bash
npm run build
```
Os arquivos gerados ficarão na pasta `dist/`.

---

## ⚙️ Onde Alterar as Informações da Empresa

Todas as informações centrais da empresa (WhatsApp, e-mail, endereço, redes sociais e serviços) estão centralizadas em:
```text
src/data/company.ts
```

### WhatsApp Oficial
O número oficial utilizado em todo o site é `+55 21 96428-7307` (`5521964287307`). Para alterar, basta editar o arquivo `src/data/company.ts`.

### Endereço e Mapa
O endereço e o link do Google Maps também são configurados em `src/data/company.ts`.

---

## 📦 Como Publicar

O projeto é um aplicativo frontend totalmente estático, pronto para ser hospedado em qualquer plataforma de hospedagem estática, como:
- **GitHub Pages**
- **Vercel**
- **Netlify**
- **Hostinger / CPanel**

### Publicação no GitHub Pages
1. Crie um repositório no GitHub e envie os arquivos do projeto.
2. Configure o build estático (`npm run build`).
3. Publique a pasta `dist` gerada.

---

© 2026 Vidraçaria e Serralheria Leonard. Todos os direitos reservados.
