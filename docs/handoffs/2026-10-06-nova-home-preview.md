# Handoff: Nova Home Preview (Atos 2, 3, 4 + Lenis)

- **Data:** 2026-10-06
- **Chat ID:** `17a3ddfb-f528-4edc-98ce-47031a5194f6`
- **Branch:** `code-dev`
- **Rota de Teste:** `/preview-home`

### Decisões Técnicas e Arquiteturais
1. **Isolamento Total:** A home atual (`/`) permaneceu intocada; a nova narrativa humana foi plugada na rota `/preview-home` via `HomePreviewPortal.tsx`.
2. **Reaproveitamento:** Hero original (LCP prioritário) e Fechamento (Fale Conosco, Resgate, Parceiros) 100% preservados.
3. **Animações (Framer Motion 12):** 
   - Ato 2 (`ScrollStage.tsx`): Cards de vídeo estilo Tedy voando em profundidade + ticker de métricas reativo ao scroll.
   - Ato 3 (`TeamTrack.tsx`): Trilha horizontal orgânica com avatares autorais em traço de giz (`HandDrawnAvatar.tsx`) sem nomes pessoais.
   - Ato 4 (`KardecFullscreen.tsx`): Frase de Kardec em tela cheia com blur palavra a palavra (`WordReveal`).
4. **Smooth Scroll:** Adicionado `lenis@1.3.26` com `autoRaf: true` e `anchors: true`, harmonizado com o CSS removendo `scroll-behavior: smooth` nativo para evitar jitter.
5. **Carregamento Otimizado:** Chunks dos Atos 2, 3 e 4 carregados via `React.lazy` + `Suspense` com pré-aquecimento em `requestIdleCallback`.

### Principais Arquivos Criados/Modificados
- `src/components/HomePreviewPortal.tsx`
- `src/components/home/HomeHero.tsx`
- `src/components/home/ScrollStage.tsx`
- `src/components/home/TeamTrack.tsx`
- `src/components/home/KardecFullscreen.tsx`
- `src/components/home/HomeClosing.tsx`
- `src/components/home/shared.tsx`
- `src/components/ui/HandDrawnAvatar.tsx`
- `src/App.tsx` (integração do Lenis e rota)
- `src/index.css` & `src/main.tsx` (estilos do Lenis)
- `vite.config.ts` (`allowedHosts: true` para tunnels)

### Pendências / Próximos Passos
- Avaliação visual pelo usuário no link do Cloudflare.
- Ajustes finos de timing/sensibilidade do scroll conforme feedback.
