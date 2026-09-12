# Especificação Técnica: Redesign Editorial & Artístico — Novos Mensageiros

**Data:** 2026-09-11  
**Status:** Aprovado para Planejamento e Implementação  
**Autor:** Antigravity & Naoki  

---

## 1. Visão Geral e Objetivos

O projeto **Novos Mensageiros** passa por uma reestruturação visual e estética para erradicar marcas de IA genérica ("AI-slop"), eliminando badges flutuantes em formato de pílula, remoção de simulações artificiais de atendimento e término absoluto de efeitos parallax que estavam causando instabilidade no scroll.

A nova linguagem visual adota o conceito **Editorial Humanista & Orgânico com Toques Artísticos em SVG**:
- Sensação de publicação nobre e acolhedora (papel de alta gramatura, respiro amplo, bordas disciplinadas).
- Hero Section panorâmica em tela cheia com ilustração vetorial de luz e vitrine real dos canais oficiais (Instagram, TikTok, YouTube).
- Cards dos 5 Princípios Básicos em formato de Folhas de Leitura com Ilustrações Vetoriais (SVGs) proprietárias.
- Trilha contínua de cuidado desenhada em SVG para a jornada do Projeto Resgate.
- Scroll 100% nativo, sem travamentos de GPU ou bugs de renderização.

---

## 2. Decisões de Design e Diretrizes Técnicas

### 2.1 Eliminação do Parallax e Performance de Scroll
- **Problema:** O uso de `useScroll` e `useTransform` para mover elementos de fundo verticalmente gerava saltos visuais e incompatibilidade com dispositivos móveis.
- **Solução:**
  - Remover completamente hooks de parallax (`useScroll`, `useTransform`, `heroBgY`, `parallaxBgY`) vinculados a fundos em `SpiritismPortal.tsx`, `HistoryPortal.tsx` e `RescuePortal.tsx`.
  - Fundos e gradientes serão posicionados de forma estática com `absolute inset-0`, garantindo 60fps constantes e scroll nativo suave.

### 2.2 Eliminação de "AI Tells" e Pílulas Artificiais
- **Problema:** Pílulas arredondadas flutuantes (`rounded-full border px-3.5 py-1 text-xs`) colocadas acima de quase todos os cabeçalhos davam impressão de template SaaS genérico.
- **Solução:**
  - Remover todas as pílulas decorativas soltas acima de títulos.
  - A hierarquia será expressa puramente através de tipografia (*Playfair Display* em detalhes editoriais e *Plus Jakarta Sans* no corpo e títulos principais) e linhas divisórias finas e elegantes.

### 2.3 Hero Section: Full-Width Contemplativo + Vitrine Real dos Canais
- **Composição Panorâmica:**
  - Céu celestial sóbrio em tela cheia (`bg-gradient-to-b` com opacidades equilibradas em dark e light mode).
  - Grafismo artístico em SVG com raios suaves de luz espiritual e ondas de harmonia que emolduram a área central.
  - Título editorial amplo e acolhedor sem viúvas tipográficas (`text-wrap: balance`).
- **Ações e Canais Oficiais:**
  - Ação Primária: Acolhimento Fraterno via WhatsApp (botão com contraste WCAG AA).
  - Ação Secundária: Conhecer o Projeto de Resgate.
  - Vitrine integrada dos 3 canais oficiais:
    - **Instagram**: @novosmensageiros (+68.9k seguidores)
    - **TikTok**: @novosmensageiros (+179k seguidores / +3.7M curtidas)
    - **YouTube**: @NovosMensageiros
    - Sem dados simulados de "atendimento ativo" ou componentes fictícios.

### 2.4 Os 5 Princípios Básicos: Folhas de Leitura com SVGs Proprietários
Em vez de ícones genéricos de biblioteca de terceiros, cada um dos 5 princípios receberá uma ilustração vetorial artística embutida em SVG:
1. **Existência de Deus (Inteligência Suprema):** SVG de centelha de luz primordial radiante com órbitas geométricas harmoniosas.
2. **Imortalidade da Alma (Continuidade da Consciência):** SVG de chama espiritual serena ascendendo além da forma física.
3. **Pluralidade das Existências (Reencarnação):** SVG de espiral e ondas cíclicas contínuas de evolução moral.
4. **Comunicabilidade dos Espíritos (Mediunidade):** SVG de feixes de frequência sutil conectando dois planos em harmonia.
5. **Pluralidade dos Mundos Habitados (Habitabilidade Universal):** SVG de constelação e moradas cósmicas interligadas.

- **Estilo dos Cards:**
  - Fundo acolhedor estilo folha de leitura (`bg-[#FAFBFD] dark:bg-[#0B132B]/80`).
  - Bordas finas com cantos comedidos (`rounded-2xl`, sem hiper-arredondamento desproporcional).
  - Sombras suaves de papel de alta gramatura (`shadow-sm hover:shadow-md`).
  - Numerais editoriais integrados com elegância.

### 2.5 Projeto Resgate: Trilha Contínua de Cuidado Ilustrada em SVG
- **Jornada do Acolhimento:**
  - Uma trilha vetorial desenhada em SVG conectando visualmente as 4 etapas:
    1. *O Desabafo Silencioso*: O sofrimento oculto nos comentários da internet.
    2. *A Aproximação Fraterna*: A busca ativa e a mensagem individualizada de carinho no direct.
    3. *A Escuta Segura*: O canal aberto no WhatsApp com voluntários preparados.
    4. *O Encaminhamento & Preservação da Vida*: Suporte de psicólogos e fortalecimento do espírito.
- **Painel de Voluntariado:**
  - Chamada acolhedora e formal para psicólogos, terapeutas e Casas Espíritas, com acesso direto ao formulário oficial.

---

## 3. Arquivos Impactados

1. `src/components/SpiritismPortal.tsx`:
   - Remoção de todos os hooks e efeitos de parallax (`heroRef`, `principiosRef`, `useScroll`, `useTransform`).
   - Reestruturação da Hero para Full-Width com arte vetorial em SVG e vitrine dos canais autênticos.
   - Remoção de badges/pílulas em cima de títulos.
   - Nova seção dos 5 Princípios em Folhas de Leitura com 5 SVGs proprietários.
   - Reestilização da seção Nossa História em narrativa fluida.
2. `src/components/RescuePortal.tsx`:
   - Remoção de hooks e efeitos de parallax.
   - Remoção de pílulas clichês.
   - Construção da Trilha Contínua de Cuidado ilustrada em SVG.
   - Painel de voluntários acolhedor estilo editorial.
3. `src/components/HistoryPortal.tsx`:
   - Remoção de hooks e efeitos de parallax na linha do tempo e background.
   - Remoção de pílulas clichês e padronização para a estética de folha de leitura.
4. `src/index.css`:
   - Adição de classes utilitárias para a textura suave de folha de leitura e filtros vetoriais.

---

## 4. Plano de Validação
- **Linting:** Executar `npm run lint` para garantir zero erros ou avisos com `oxlint`.
- **Compilação:** Executar `npm run build` (`tsc -b && vite build`) para garantir zero erros de tipagem e empacotamento.
- **Verificação Visual e Scroll:** Validar ausência de trepidação em scroll e harmonia no tema claro e escuro.
