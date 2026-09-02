# 📜 Registro de Alterações (CHANGELOG)

Todas as alterações notáveis deste projeto são documentadas neste arquivo, seguindo a convenção de **[Versionamento Semântico (SemVer)](https://semver.org/lang/pt-BR/)**:
* **`MAJOR` (X.0.0)**: Grandes marcos, reestruturações completas e redesigns.
* **`MINOR` (0.X.0)**: Novas funcionalidades, novas seções ou melhorias médias.
* **`PATCH` (0.0.X)**: Correções de bugs pontuais, ajustes finos de layout e pequenas melhorias.

---

## [2.2.0] — 2026-09-01 *(Versão Atual)*

### 🌟 Redesenho do Hero Mobile, Frase de Kardec e Paralaxe Real (MINOR)
* **Hero Mobile Focado & Cards de Redes Sociais em Grid 2x1**:
  - Ajuste na tipografia e peso do título para destaque e leitura harmoniosa no celular.
  - Cards de Instagram e TikTok dispostos lado a lado em 2 colunas no celular (`grid grid-cols-2 lg:grid-cols-1`), compactos e sem ocupar a tela inteira.
  - Badge do TikTok atualizado com o degradê oficial da marca (ciano/preto/magenta) e ícone estilizado no mesmo padrão do Instagram.
* **Citação de Allan Kardec (Substituição das Métricas)**:
  - *"Fora da caridade não há salvação"* em destaque com aspas estilizadas em grande formato, animação sutil e autoria (*— Allan Kardec, O Evangelho Segundo o Espiritismo*).
* **Paralaxe 100% Funcional e Visível no Scroll**:
  - Configuração do `useScroll` atrelado ao progresso da seção (`scrollYProgress` com `[0%, 35%]`) e contêiner expandido (`h-[135%] -top-[15%]`), garantindo deslocamento real ao rolar a página.
* **Transição Atmosférica Contínua no Desktop**:
  - Fusão direta entre o Hero e a Citação, eliminando cortes secos e quebras duras antes dos 5 Princípios.
* **Favicon e Logo Full-Bleed**:
  - Removidas margens transparentes excessivas do favicon e da logo, garantindo preenchimento 100% na aba do navegador.
* **Sumário Lateral Desktop Aprimorado**:
  - Atualização do item para a Citação de Kardec e recálculo da posição via `getBoundingClientRect()`, sem saltos ou travamentos.

---

## [2.1.1] — 2026-09-01

### 🛠️ Ajustes Finos & Refinamento Visual (PATCH)
* **Restauração dos Fundos Originais com Paralaxe Limpo**:
  - Restauração de `ceunuvem1.webp` e `ceunuvem2.webp` com efeito de paralaxe fluido de scroll.
  - Opacidade de 45% a 50% no modo escuro com iluminação celestial e azul do céu bem visível.
  - Remoção de qualquer camada flutuante extra que gerasse sombras sobre os botões.
* **Métricas 100% Abertas (Opção B - Tipografia Editorial)**:
  - Totalmente sem caixas ou contêineres fechados em volta.
  - Números imponentes (`text-3xl sm:text-4xl md:text-5xl font-black`) com divisores verticais finos e translúcidos.
* **Equalização de Espaçamentos**:
  - Distâncias simétricas e harmônicas entre o Hero, as Métricas e a seção de 5 Princípios, sem quebras secas.
* **Ajuste de Escala do Logo & Branding**:
  - Aumento proporcional do tamanho da logo e tipografia na Navbar.

---

## [2.1.0] — 2026-09-01

### 🎨 Melhorias Visuais & Paralaxe (MINOR)
* **Fundo Celestial Puro & Paralaxe em Camadas**:
  - Remoção de fundos com nuvens estáticas duplicadas, substituindo por gradiente cósmico puro no Hero.
  - Implementação de camadas de nuvens transparentes WebP (`nuvem-transparente.webp` e `nuvem-cluster.webp`) com profundidade de paralaxe multi-plano via Framer Motion.
* **Transição Fluida entre Seções**:
  - Eliminação de cortes secos e do espaçamento excessivo entre o Hero, Métricas e 5 Princípios.
* **Novo Formato de Métricas (Opção B - Tipografia Editorial)**:
  - Eliminação do padrão genérico de caixas arredondadas ("cara de IA").
  - Criação de uma faixa editorial aberta, limpa e translúcida com divisores sutis e indicadores luminosos.
* **Transparência no Header (Navbar)**:
  - Adição de leve translucidez com `backdrop-blur-xl` e `bg-white/75 dark:bg-slate-950/75` para integração com o restante da atmosfera da página.

---

## [2.0.0] — 2026-09-01

### 🚀 Grandes Mudanças & Refatoração (MAJOR)
* **Padronização Tailwind CSS v4**:
  - Eliminação completa de arquivos CSS soltos e regras destrutivas com `!important`.
  - Configuração moderna via `@theme` com design tokens nomeados (`primary`, `whatsapp`, `alert-red`).
* **Suporte Completo a Dark e Light Mode**:
  - Implementada a variante `@custom-variant dark (&:where(.dark, .dark *))`.
  - Refatoradas todas as seções (Hero, Métricas, 5 Princípios, Resgate e História) para transição fluida entre modo claro e escuro.
* **Otimização de Imagens (WebP)**:
  - Conversão de 100% das imagens PNG para WebP (redução de 82% no peso total dos assets, de 17.4MB para 3.1MB).
  - Correção estrutural do empilhamento (*Stacking Context*) nos backgrounds em efeito parallax.
* **Componentização**:
  - Criação do componente reutilizável `Button` com variantes (`primary`, `secondary`, `whatsapp`, `outline`, `ghost`, `white`).
* **Infraestrutura**:
  - Padronização no ambiente e runtime **Bun**.
  - Servidor local configurado para a porta **5180**.

---

## [1.0.0] — 2026-08-24 *(Versão Inicial em Produção na Vercel)*

### ✨ Lançamento Inicial
* Landing page institucional dos Novos Mensageiros e braço Projeto de Resgate.
* Integração com Framer Motion para transições de páginas e componentes interativos.
* Acervo de recursos com livros em PDF, palestras e indicações de filmes espíritas.
* Formulário de contato direto e canais de acolhimento digital.
