# Especificação Técnica: Arco Orbital Invertido de Tela Cheia & Anti-Vibecoding

**Data:** 2026-09-14  
**Status:** Aprovado para Implementação  
**Autor:** Antigravity & Naoki  
**Branch:** `code-dev`  

---

## 1. Contexto e Motivação

Após testes diretos de UX e análise crítica do usuário no branch `code-dev`, identificaram-se limitações fundamentais na primeira versão da seção dos 5 Princípios:
1. **Aspecto de "Widget Fechado"**: O conteúdo estava isolado dentro de um card flutuante pequeno com cantos excessivamente arredondados e glassmorphism genérico, cercado de espaço ocioso sem imersão.
2. **Scroll Desgovernado e Frouxo**: A progressão via `Math.floor(progress * 5)` num container de 280vh sem trava fazia o scroll "passar reto", sem platô de leitura e sem gravidade, tornando a experiência desinteressante.
3. **Modo Claro Lavado e Sem Contraste**: Imagens de céu e gradientes com opacidade muito baixa (15%-20%) davam aparência esbranquiçada e apagada, ocultando traçados vetoriais e elementos de navegação.
4. **Sentido do Arco**: O arco anterior curvava para dentro à esquerda `(`, limitando a expansão da leitura.
5. **Vícios de Interface Genérica ("Vibecoding")**: Presença de dot grids (`bg-grid-pattern`), auras circulares de blur excessivo, bordinhas coloridas laterais (`border-l-2`) e ícones sem identidade.

---

## 2. Decisões Arquiteturais e de Design (Opção B)

### 2.1 Cenário de Tela Cheia (Full-Screen Immersive Canvas)
- **Eliminação Total do Card Flutuante**: O texto não vive dentro de uma caixa branca com borda arredondada. Toda a viewport (100vh) é o próprio espaço editorial e cósmico.
- **Divisão Proporcional em Desktop**:
  - **Lado Esquerdo (60% da largura)**: Área nobre de leitura.
    - Numeração clássica: `01 / 05` com tipografia refinada.
    - Subtítulo em caixa alta com espaçamento largo (`tracking-widest`).
    - Título Monumental em **`Playfair Display`** (fonte serifada já integrada no projeto), transmitindo calor humano, reverência e elegância editorial.
    - Explicação em `Plus Jakarta Sans` com alto contraste (`text-slate-900`/`text-slate-800` no modo claro; `text-slate-100` no modo escuro).
    - Citação kardequiana em itálico clássico com aspas tipográficas tradicionais (“ ”), **sem a faixa lateral colorida clichê**.
    - Botão discreto e integrado de acesso ao acervo de Recursos.
  - **Lado Direito (40% da largura)**: O Grande Arco Orbital Invertido `)`.
    - Curvatura monumental: nasce no canto superior direito, projeta-se em direção ao centro e desce graciosa até o canto inferior direito `)`.
    - Ocupa a altura inteira da seção (100% da viewport).
    - 5 marcos astronômicos com números interativos (`01` a `05`) distribuídos pela curva.
    - Baliza orbital (o astro-guia) deslizando pela curva e exibindo o símbolo autoral com emanação de luz atmosférica autêntica (sem borrão de néon saturado).

### 2.2 Contraste & Atmosfera no Modo Claro
- Aumentar a presença e nitidez da textura celeste para **70% a 85% de opacidade**, revelando azul celeste real e camadas de nuvens autênticas.
- Traçado do arco com contraste nítido em azul marinho profundo (`#003766`) e toques solares contrastados, visível com clareza em qualquer tela.
- Remoção da classe `.bg-grid-pattern` (dot grid artificial) da seção, deixando o céu orgânico e limpo.
- Substituição do roxo de cripto (`#a855f7`) por tonalidades cósmicas equilibradas no 5º princípio.

### 2.3 Mecânica de Scroll: Trava Magnética (Snapping) e Platô de Leitura
Para que o usuário sinta peso, presença e imersão ao rolar:
- **Platô de Permanência (Dwell Zone)**:
  - Cada princípio possui uma faixa ampla de scroll onde o conteúdo fica **100% estável e legível**, permitindo que o visitante leia sem pressa e sem que o texto fuja.
- **Ancoragem Magnética (Snapping)**:
  - O container de 100vh trava suavemente em cada princípio quando o usuário rola a rodinha do mouse ou arrasta a tela.
  - Suporte total a navegação por teclado (setas ← / → e ↑ / ↓) e cliques diretos nos marcos do arco.
- **Responsividade Mobile**:
  - Arco proporcional com toque e gesto de arraste (touch swipe horizontal) ultra suave para troca de princípios, sem bloquear a rolagem vertical natural da página.

---

## 3. Plano de Implementação

1. **Refatorar `src/components/CelestialArcPrinciples.tsx`**:
   - Reconstruir o layout de tela cheia sem card delimitador.
   - Implementar o novo traçado do arco no sentido invertido `)` com coordenadas de tela cheia.
   - Adicionar tipografia serifada `Playfair Display` nos títulos e citações kardequianas.
   - Implementar a mecânica de scroll com snap e platô estável.
   - Remover as classes de dot grid e bordas coloridas laterais.
2. **Ajustes Globais de Contraste e Limpeza**:
   - Elevar opacidade e contraste do fundo celeste no modo claro.
   - Remover os orbs de néon fluorescente e dot grids onde aplicável.
3. **Verificação & Testes**:
   - Executar `bun run lint` (oxlint) e `bun run build` (TypeScript e Vite).
   - Validar a fluidez do scroll no desktop e o swipe no mobile.
4. **Commit e Push no `code-dev`**.
