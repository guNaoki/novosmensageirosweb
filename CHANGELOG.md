# 📜 Registro de Alterações (CHANGELOG)

Todas as alterações notáveis deste projeto são documentadas neste arquivo, seguindo a convenção de **[Versionamento Semântico (SemVer)](https://semver.org/lang/pt-BR/)**:
* **`MAJOR` (X.0.0)**: Grandes marcos, reestruturações completas e redesigns.
* **`MINOR` (0.X.0)**: Novas funcionalidades, novas seções ou melhorias médias.
* **`PATCH` (0.0.X)**: Correções de bugs pontuais, ajustes finos de layout e pequenas melhorias.

---

## [2.0.0] — 2026-09-01 *(Versão Atual)*

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
