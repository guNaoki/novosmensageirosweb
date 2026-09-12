# Redesign Editorial & Artístico Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reestruturar visualmente o portal Novos Mensageiros no conceito Editorial Humanista e Artístico, removendo 100% dos efeitos parallax que causavam bugs no scroll, erradicando pílulas decorativas artificiais ("AI-slop"), implementando uma nova Hero Section Full-Width com vitrine autêntica dos canais e ilustrações vetoriais sob medida (SVGs) para os 5 Princípios Básicos e a Trilha de Cuidado do Resgate.

**Architecture:** Transição de uma interface de caixas fechadas e efeitos pesados de scroll para uma diagramação editorial aberta inspirada em publicações nobres e gravuras vetoriais. Eliminação de listeners de scroll contínuos no DOM para os backgrounds, substituindo por elementos estáticos e performáticos com SVGs inline otimizados.

**Tech Stack:** React 19, Tailwind CSS v4, Framer Motion (apenas para transições de entrada suaves e micro-interações sem parallax), Lucide Icons, Vite 8, TypeScript.

**Spec:** [docs/superpowers/specs/2026-09-11-editorial-artistic-redesign.md](file:///C:/Naoki/Code/Mensageiros/docs/superpowers/specs/2026-09-11-editorial-artistic-redesign.md)

## Global Constraints

- Proibido qualquer uso de `useScroll` e `useTransform` atrelados a movimento de fundos ou paralaxe (eliminação total do bug de scroll).
- Proibido o uso de containers em formato de pílula (`rounded-full border px-3 py-1 text-xs`) soltos acima de títulos de seções.
- Proibido qualquer menção ou card simulando "atendimento ativo" ou métricas falsas.
- Manter acessibilidade WCAG AA em botões e contraste de texto em modo claro e escuro.
- Zero erros no `oxlint` e zero erros no build do TypeScript (`tsc -b && vite build`).

---

### Task 1: Limpeza do Parallax e Fundos Estáticos de Alta Performance

**Files:**
- Modify: `src/components/SpiritismPortal.tsx`
- Modify: `src/components/HistoryPortal.tsx`
- Modify: `src/components/RescuePortal.tsx`

**Interfaces:**
- Consumes: hooks de scroll nativos.
- Produces: Layout sem repaints pesados de GPU no scroll.

- [ ] **Step 1: Remover hooks de parallax em SpiritismPortal.tsx**
Remover `heroRef`, `principiosRef`, `useScroll({ target: heroRef })`, `heroBgY` e as chamadas `style={{ y: heroBgY }}`. Tornar os fundos estáticos com `absolute inset-0`.
- [ ] **Step 2: Remover hooks de parallax em HistoryPortal.tsx e RescuePortal.tsx**
Remover `useScroll` e `parallaxBgY` das imagens de fundo na linha do tempo e cabeçalhos.
- [ ] **Step 3: Testar com linter e build**
Executar `npm run lint` e `npm run build` para garantir que nenhuma variável de scroll ficou não utilizada.
- [ ] **Step 4: Commit**
`git commit -m "fix(performance): remover efeitos parallax e estabilizar scroll"`

---

### Task 2: Nova Hero Section Full-Width Contemplativa + Vitrine dos Canais & SVG de Luz

**Files:**
- Modify: `src/components/SpiritismPortal.tsx`

**Interfaces:**
- Produces: Hero Section panorâmica com título centralizado amplo, ilustração vetorial de feixes de luz, CTAs humanos e vitrine com Instagram, TikTok e YouTube autênticos.

- [ ] **Step 1: Remover o card de simulação "atendimento ativo" e a pílula de topo**
Eliminar o split hero com "Double-Bezel Community Window" e o badge flutuante "Luz, Razão e Consolo".
- [ ] **Step 2: Implementar a Composição Full-Width com Ilustração Vetorial de Luz (SVG)**
Inserir no Hero um grafismo vetorial delicado em SVG de feixes luminosos radiantes e ondas harmônicas em tela cheia com opacidades suaves.
- [ ] **Step 3: Implementar a Vitrine Oficial dos 3 Canais (Instagram, TikTok, YouTube)**
Construir a vitrine horizontal dos 3 canais com seus números reais verificados (+68.9k Instagram, +179k/+3.7M TikTok, YouTube oficial) e links diretos autênticos.
- [ ] **Step 4: Validar e testar build**
Executar `npm run lint` e `npm run build`.
- [ ] **Step 5: Commit**
`git commit -m "feat(hero): nova hero full-width com ilustracao de luz e vitrine dos canais reais"`

---

### Task 3: Os 5 Princípios Básicos em Folhas de Leitura com 5 Ilustrações em SVG

**Files:**
- Modify: `src/components/SpiritismPortal.tsx`

**Interfaces:**
- Produces: 5 SVGs autorais dedicados aos princípios (Existência de Deus, Imortalidade da Alma, Reencarnação, Mediunidade, Pluralidade dos Mundos) dentro de cards estilo Folhas de Leitura.

- [ ] **Step 1: Criar os 5 componentes de Ilustração Vetorial (SVG)**
  - `DeusVector`: Centelha primordial geométrica e radiante.
  - `AlmaVector`: Chama espiritual ascensional.
  - `ReencarnacaoVector`: Ciclos contínuos de espiral e renovação.
  - `MediunidadeVector`: Feixes de sintonia entre dois planos.
  - `MundosVector`: Constelação e esferas cósmicas interligadas.
- [ ] **Step 2: Construir o Grid das Folhas de Leitura**
Diagramação nobre em 2 níveis ou grid harmonioso, fundo `bg-[#FAFBFD] dark:bg-[#0B132B]/80`, bordas suaves `rounded-2xl`, sombras difusas, títulos sem pílulas decorativas.
- [ ] **Step 3: Validar com linter e build**
Executar `npm run lint` e `npm run build`.
- [ ] **Step 4: Commit**
`git commit -m "feat(doutrina): 5 principios em folhas de leitura com ilustracoes vetoriais proprietarias"`

---

### Task 4: Trilha Contínua de Cuidado Ilustrada em SVG no Projeto Resgate

**Files:**
- Modify: `src/components/RescuePortal.tsx`

**Interfaces:**
- Produces: Jornada do Acolhimento em formato de trilha contínua com SVG conectivo e painel solene de voluntariado.

- [ ] **Step 1: Remover pílulas e caixas genéricas do Resgate**
Eliminar badges `rounded-full` isolados em cima dos títulos.
- [ ] **Step 2: Implementar a Trilha Contínua Ilustrada em SVG**
Desenhar uma fita/trilha vetorial em SVG conectando as 4 etapas de acolhimento (Desabafo nas redes -> Busca ativa fraterna -> Escuta no WhatsApp -> Encaminhamento à vida).
- [ ] **Step 3: Redesenhar o Painel de Voluntariado e Psicologia**
Apresentação em folha de leitura aberta e digna com botão claro para o formulário oficial de voluntários.
- [ ] **Step 4: Validar com linter e build**
Executar `npm run lint` e `npm run build`.
- [ ] **Step 5: Commit**
`git commit -m "feat(resgate): trilha de cuidado ilustrada em svg e painel humanizado"`

---

### Task 5: Refinamento Editorial da História & Roteamento Geral

**Files:**
- Modify: `src/components/HistoryPortal.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Produces: Linha do tempo da história harmonizada com a estética de folha de leitura e links do rodapé consistentes.

- [ ] **Step 1: Padronizar HistoryPortal na estética editorial**
Ajustar os cards da linha do tempo para folhas de leitura com respiro e sem pílulas soltas.
- [ ] **Step 2: Conferência dos links e interações**
Verificar se todas as rotas (`#/`, `#/resgate`, `#/historia`, `#/links`) fluem com naturalidade.
- [ ] **Step 3: Validar com linter e build**
Executar `npm run lint` e `npm run build`.
- [ ] **Step 4: Commit**
`git commit -m "feat(history): estetica editorial na timeline e polimento visual"`

---

### Task 6: Validação Final e Relatório

- [ ] **Step 1: Executar suite de verificação**
`npm run lint` (0 warnings, 0 errors).
`npm run build` (sucesso completo do bundle).
- [ ] **Step 2: Gerar walkthrough final**
Atualizar `walkthrough.md` com a documentação do redesign completo e testes realizados.
