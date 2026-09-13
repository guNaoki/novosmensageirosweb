# Especificação Técnica: UX /recursos & Arco Celestial dos 5 Princípios

**Data:** 2026-09-13  
**Status:** Em Revisão / Pronto para Planejamento  
**Autor:** Antigravity & Naoki  
**Branch:** `code-dev`  

---

## 1. Visão Geral e Objetivos

Esta especificação aborda dois aprimoramentos fundamentais para a experiência do usuário (UX) e o apelo visual do portal **Novos Mensageiros**:

1. **Otimização da Arquitetura de Informação (IA & UX)**:
   * Migrar de roteamento com hash (`#/resgate`, `#/historia`) para URLs limpas do HTML5 History API (`/`, `/resgate`, `/historia`, `/links` e a nova `/recursos`), aproveitando o rewrite já existente no Vercel.
   * Criar a página dedicada de utilitários **/recursos**, agrupando a busca prática de Casas Espíritas e a biblioteca de Materiais Gratuitos (Livros PDF, Filmes e Palestras).
   * Aliviar a rolagem da página inicial (Home `/`), reduzindo a altura do scroll em mais de 40% e inserindo atalhos rápidos e elegantes no Hero.

2. **Redesign Imersivo dos 5 Princípios (Arco Celestial Sticky Scroll)**:
   * Substituir a grade estática de cards por uma experiência interativa inspirada no rascunho autoral de Naoki e em referências como `cri8.app` e `Framer University`.
   * **Mecânica Sticky**: A seção se fixa na tela durante a rolagem. Um arco vetorial em meia-lua à esquerda exibe um nó luminoso com o SVG e a cor do princípio ativo (Deus, Alma, Reencarnação, Mediunidade, Mundos), enquanto o lado direito apresenta o título e o texto explicativo com transições fluidas de revelação (*text reveal*).
   * **Comparador Mobile no `code-dev`**: Implementar os dois estilos móveis (Modo A: Arco em abóbada superior curva; Modo B: Arco vertical compacto à esquerda) com um seletor sutil para teste direto no smartphone.

---

## 2. Arquitetura de Roteamento Limpo (Clean URLs)

### 2.1 Estratégia de Roteamento
* **Substituição de Estado**: O estado `route` em `src/App.tsx` passa a ler e sincronizar com `window.location.pathname`.
* **Compatibilidade Retroativa com Links Antigos**:
  * Ao carregar a página, se `window.location.hash` contiver rotas legadas (ex: `#/resgate`, `#/historia`, `#/links`), o aplicativo automaticamente redireciona via `window.history.replaceState` para a rota limpa equivalente (`/resgate`, `/historia`, `/links`).
* **Navegação SPA**:
  * Função unificada `navigate(path, elementId?)` que executa `window.history.pushState({}, '', path)` e atualiza o estado React sem recarregar o navegador.
  * Ouvinte de evento `popstate` para garantir navegação perfeita pelos botões de avançar/voltar do navegador.

### 2.2 Mapa de Rotas do Portal
* `/`: Página Principal (Hero imersivo com vetor de luz animado, Frase de Kardec, 5 Princípios com Arco Sticky, História resumida, Amor Ideal, Rodapé).
* `/recursos`: Nova página de Utilitários (Encontrar Casa Espírita + Acervo de Livros, Filmes e Palestras).
* `/resgate`: Portal do Projeto de Resgate e Acolhimento à Depressão.
* `/historia`: Portal da Trajetória dos Novos Mensageiros.
* `/links`: Bio linktree compacta para Instagram/TikTok.

---

## 3. Nova Página: `ResourcesPortal.tsx` (`/recursos`)

### 3.1 Estrutura e Componentes
1. **Cabeçalho Editorial**:
   * Título acolhedor: *"Recursos Fraternos & Biblioteca Digital"*.
   * Mensagem de amparo reforçando a gratuidade de todo o material e do acolhimento presencial.
2. **Módulo 1: Encontrar uma Casa Espírita**:
   * Esclarecimento sobre o que esperar de um Centro Espírita (Atendimento Fraterno privativo, Palestras consoladoras e Passes magnéticos de alívio).
   * Ações diretas: Busca local via Google Maps e acesso ao portal oficial da FEB (Federação Espírita Brasileira).
3. **Módulo 2: Acervo de Materiais Gratuitos**:
   * Campo de busca textual rápida por título ou autor.
   * Filtros por categoria: `Todos`, `Livros PDF`, `Filmes`, `Palestras`.
   * Cards com metadados: Título, categoria, plataformas disponíveis (YouTube, Disney+, Amazon Prime) e link direto para leitura ou exibição.

### 3.2 Impacto na Página Inicial (Home)
* As seções `#buscar-ajuda` e `#materiais` são desacopladas da Home, tornando a rolagem fluida e focada.
* O Hero recebe um botão de ação rápida sutil: *"Buscar Casa Espírita ou Materiais Gratuitos ➔"*, direcionando o usuário com 1 clique para `/recursos`.
* A Navbar atualiza o dropdown "Aprender Espiritismo" apontando para a nova rota `/recursos`.

---

## 4. Seção dos 5 Princípios: Arco Celestial Sticky Scroll

### 4.1 Dados dos 5 Princípios
Cada princípio é parametrizado com seu vetor autoral SVG já existente, cores temáticas e textos:
1. **01. Existência de Deus** — Cor: Âmbar (`#f59e0b`), SVG: `DeusVector`, Subtítulo: *Inteligência Suprema e Causa Primária*.
2. **02. Imortalidade da Alma** — Cor: Ciano/Índigo (`#06b6d4`), SVG: `CentelhaAlmaVector`, Subtítulo: *Continuidade da Consciência*.
3. **03. Pluralidade das Existências** — Cor: Azul Céu (`#38bdf8`), SVG: `ReencarnacaoVector`, Subtítulo: *Reencarnação e Evolução Contínua*.
4. **04. Comunicabilidade dos Espíritos** — Cor: Esmeralda (`#10b981`), SVG: `MediunidadeVector`, Subtítulo: *Mediunidade com Caridade e Propósito*.
5. **05. Pluralidade dos Mundos** — Cor: Púrpura (`#a855f7`), SVG: `MundosVector`, Subtítulo: *Habitabilidade Universal no Cosmos*.

### 4.2 Mecânica de Sticky Scroll (Desktop)
* **Container de Altura Ampliada**: A seção possui altura de rolagem calculada (`h-[280vh]`), garantindo curso suficiente para uma progressão meditativa e fluida.
* **Viewport Sticky (`sticky top-20 h-[calc(100vh-5rem)]`)**: Mantém o conteúdo centralizado na tela enquanto a janela se desloca.
* **Cálculo de Progresso via Framer Motion (`useScroll`)**:
  * O progresso do scroll do container (0 a 1) é mapeado para o índice ativo (0 a 4).
  * O nó luminoso percorre o arco SVG em curva suave (`d="M 160,20 C 60,120 60,280 160,380"`).
  * Ao mudar de índice, a cor do arco, o brilho da aura e o ícone SVG são atualizados com transição suave (`transition: { duration: 0.4 }`).
* **Lado Direito (Revelação de Conteúdo)**:
  * O número, subtítulo, título e parágrafo fazem transição de saída e entrada (`AnimatePresence mode="wait"`) com sutil elevação vertical (`y: [8, 0]`) e desfoque gradual, garantindo leitura imersiva.

### 4.3 Experiência Mobile (Comparador A e B no `code-dev`)
Para atender à solicitação de Naoki de testar as duas ideias na prática:
* **Modo A (Abóbada Superior Curva - Recomendado)**:
  * O arco vetorial curva-se horizontalmente no topo da tela.
  * O nó desliza da esquerda para a direita, liberando a área inferior para títulos e parágrafos legíveis sem aperto lateral.
* **Modo B (Arco Fino Lateral)**:
  * O arco vertical permanece à esquerda ocupando 25% da tela, com o texto alinhado nos 75% restantes.
* **Alternador de Visualização**:
  * Um pequeno seletor em pílula discreto no topo da seção (ex: `[ Vista A: Topo ] [ Vista B: Lateral ]`) para que Naoki possa alternar diretamente no celular e avaliar a sensação de uso.

---

## 5. Plano de Implementação e Arquivos Afetados

1. **`src/App.tsx`**:
   * Atualizar gerenciador de rotas para HTML5 History API (`window.location.pathname`).
   * Adicionar redirecionamento de compatibilidade para hashes legados (`#/`).
   * Registrar renderização condicional do novo `ResourcesPortal`.
2. **`src/components/Navbar.tsx`**:
   * Atualizar links de navegação para as rotas limpas `/`, `/resgate`, `/historia`, `/recursos`.
3. **`src/components/ResourcesPortal.tsx` [NOVO]**:
   * Implementação completa da página de utilitários com busca de centros e acervo filtrável.
4. **`src/components/SpiritismPortal.tsx`**:
   * Remoção das seções antigas `#buscar-ajuda` e `#materiais`.
   * Adição do atalho de acesso rápido no Hero para `/recursos`.
   * Implementação do componente `CelestialArcPrinciples` com Sticky Scroll, arco SVG e suporte aos Modos A e B no mobile.

---

## 6. Critérios de Sucesso e Verificação

* **Zero Regressão de Linter**: Executar `bun run lint` sem nenhum aviso ou erro.
* **Build de Produção Limpo**: `bun run build` compilando sem falhas de tipagem TypeScript.
* **Navegação Histórica Perfeita**: Botões de voltar e avançar do navegador funcionando fluidamente entre `/`, `/recursos`, `/resgate` e `/historia`.
* **Desempenho de Scroll**: 60fps constantes sem pulos de layout ou travamentos na transição do arco.
* **Validação Mobile**: Ambos os modos A e B navegáveis com total clareza tipográfica.
