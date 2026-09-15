Atue como um desenvolvedor Frontend Sênior e Especialista em UXUI. 
Gere e mantenha a aplicação web em React 19, utilizando Tailwind CSS para a estilização e estruturado para rodar no ambiente Bun.

### 🕊️ Conceito e Estrutura dos Projetos
1. **Novos Mensageiros (Projeto Principal)**
   - Iniciativa espírita focada na divulgação de conteúdos, consolo, ensinamentos filosóficos e obras da Doutrina Espírita no ambiente digital (Instagram `@novosmensageiros`, TikTok, YouTube Shorts).
   - Alcance e métricas: +68,9 mil seguidores no Instagram e +3.7M de visualizações no TikTok.
   - Objetivo do Portal Principal (`/`): Oferecer consolo diário, esclarecimentos espirituais, acervo de livros em PDF, palestras, filmes recomendados e mapa de casas espíritas.

2. **Projeto de Resgate (Braço Ativo de Socorro Emergencial)**
   - Braço especializado dos Novos Mensageiros focado na busca ativa e amparo a pessoas em sofrimento profundo ou ideação suicida.
   - Operação: Utiliza uma **conta dedicada no TikTok** para identificar ativamente comentários de desespero em posts virais, analisar o nível de risco, iniciar diálogo fraterno e encaminhar para atendimento com Psicólogos e amparo nas Casas Espíritas.
   - Objetivo da Landing Page de Resgate (`/#/resgate`): RECRUTAR VOLUNTÁRIOS (casas espíritas, psicólogos, voluntários para mensagens ativas e pesquisadores) e apresentar a jornada do acolhimento.

### 🛠️ Stack Técnica
- React 19 (Componentes funcionais estruturados, hooks nativos)
- Tailwind CSS (Design moderno, limpo, responsivo e focado em legibilidade)
- Lucide React (Ícones para suporte visual)
- Framer Motion (Transições fluidas e micro-animações)

### 🎨 Identidade Visual & Estilo
- Paleta de Cores: Tons de azul (confiança, tranquilidade, espiritualidade), branco e cinza claro para as seções de texto.
- Estilo: Interface acolhedora, limpa, humana e altamente profissional. Boa aplicação de espaçamentos (padding/margin) para evitar fadiga visual.

### 📐 Estrutura das Páginas (UX Storytelling)

#### A. Portal Novos Mensageiros (`/`)
1. **Hero Section:** Transmitir luz, consolo e alcance social (+68,9k Instagram, +3.7M TikTok). CTA para explorar acervo ou conhecer o Projeto de Resgate.
2. **Gerador de Mensagem Diária:** Reflexão inspiradora aleatória.
3. **Entenda o Espiritismo:** Cards dos 5 princípios básicos (pilares) da doutrina.
4. **Acervo de Recursos:** Abas interativas (Livros PDF, Palestras, Filmes).
5. **Encontre uma Casa Espírita:** Busca e direcionamento local.
6. **Chamada em Destaque:** Apresentação do Projeto de Resgate com botão para se voluntariar.

#### B. Landing Page do Projeto de Resgate (`/#/resgate`)
1. **Hero Section:** Posicionamento de resgate e socorro emergencial ativo via conta dedicada TikTok. Card com métricas do resgate (+100 vidas amparadas, triagem de risco, rede de suporte).
2. **A Dor / O Contexto (O Iceberg):** Explicar que os comentários são apenas a ponta do iceberg e a necessidade de ampliação da equipe de voluntários.
3. **Jornada do Acolhimento:** 4 passos (01. Busca e Contato Ativo, 02. Triagem e Nível de Risco, 03. Atendimento Fraterno, 04. Encaminhamento Psicológico e Espiritual).
4. **Rede de Apoio:** 4 perfis de voluntariado (Psicólogos, Casas Espíritas, Atendimento Ativo, Pesquisadores).
5. **CTA de Inscrição:** Formulário de cadastro de voluntários ("Fora da caridade não há salvação").

### ⚠️ Requisitos de Código & Padrões do Projeto
- **Versionamento Semântico (`MAJOR.MINOR.PATCH`)**:
  - `MAJOR` (ex: `2.0.0`): Grandes reformulações de arquitetura/design.
  - `MINOR` (ex: `2.1.0`): Novas páginas, seções ou recursos.
  - `PATCH` (ex: `2.0.1`): Correções de bugs pontuais e ajustes finos.
- **Padrão de Mensagens de Commit (Conventional Commits)**:
  - Formato: `tipo(escopo): descrição concisa` (ex: `fix(hero): corrigir z-index do background`).
  - Tipos: `feat`, `fix`, `refactor`, `perf`, `style`, `docs`.
- Manter transições nativas do Tailwind e Framer Motion (`transition-all duration-300`).
- Garanta que o design seja totalmente responsivo (mobile-first usando `md` e `lg` do Tailwind).
- Manter o suporte a Dark Mode em todos os componentes.
- Manter o runtime e gerenciador de pacotes **Bun** para todos os comandos de desenvolvimento e build.
- Registrar alterações relevantes no [`CHANGELOG.md`](./CHANGELOG.md).

<!-- graft:start -->
## Graft — repo context graph

This repo is indexed in `graft/`: small linked markdown nodes that explain each
system and carry exact file:line spans, kept in sync with the code through git.

For ANY task here — understanding how something works, finding where code lives,
or scoping a change — get context from the graph before grepping or opening
source files. Re-ask freely (it's cheap) and reuse literal identifiers you
already have (symbol, error string, file name) as the query. New to this repo?
Run `graft map` first — a token-budgeted orientation (dir clusters, hubs,
hotspots), no LLM, no key.

- Run `graft ask "<your question>" --source` → ranked nodes with the relevant
  code spans inlined (each hit's ≤8-line crux by default; `--full` for whole
  definitions when the crux isn't enough). Match the tool to the task shape:
  for understanding or editing, the top node IS the answer — cite its
  `covers:` file:line spans and edit straight from `--source`. For
  exhaustive tasks ("every occurrence / every caller of this pattern"), ranked
  results are top-N, not complete — run `graft grep "<literal>"` instead
  (exhaustive over indexed files, grouped by enclosing symbol), falling back
  to raw `grep -rn` only for unindexed files.
- `graft skeleton <file>` → every definition's signature + span, ~10× cheaper
  than reading the file; use it to skim an API surface.
- `graft callers <symbol>` gives precomputed, exact edges — who calls this.
  Add `--direction out` for what it calls, or `--depth N` to walk
  transitively for the full blast radius. For structural questions, skip
  ranking and use this directly.
- Or browse: `graft/INDEX.md` lists every node; follow the links.
- Monorepos and folders of multiple repos rank fairly across sub-projects —
  hits carry `[scope/]` labels naming which one they're from. Narrow with
  `graft ask "<task>" --in <scope>/` once you know where you're working.

If a returned span is truncated ("+N more lines"), open the file at that exact
range before finalizing. Only open source files when a node genuinely lacks a
needed detail, and then at the exact file:line the node points to — never
re-read whole files.

After big code changes, refresh the graph with `graft build` (deterministic,
no API key, $0).
<!-- graft:end -->
