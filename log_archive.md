# Registro de Sessão & Arquivo de Log (Session Log Archive)

Este arquivo registra o andamento do projeto **Novos Mensageiros** e define a nova arquitetura dividida, conforme alinhado para a sessão atual.

---

## 📅 Histórico Recente & Contexto
1. **Fase Inicial**: O projeto foi concebido como uma landing page única mesclando a divulgação/acolhimento do espiritismo e o recrutamento de voluntários para o *Projeto de Resgate*.
2. **Separação de Frentes (Sessão Atual)**: Separamos o projeto em duas frentes distintas:
   - **Frente 1: Novos Mensageiros (Acolhimento & Consolo)**: Para iniciantes. Leitura leve, buscador de centros espíritas e recomendações de conteúdo.
   - **Frente 2: Projeto de Resgate (Portal de Voluntários)**: Para recrutamento de psicólogos, casas espíritas e voluntários de monitoramento digital.
3. **História do Projeto (Frente 3)**: Adicionada a página dedicada sobre a história do projeto (`#/historia`) detalhando a trajetória desde a criação nas redes sociais até a estruturação do projeto de resgate.
4. **Fase de Aprimoramento Estético & UX (Navbar & Parallax Style)**:
   - Reconstruído o **cabeçalho (Navbar)** de forma muito mais limpa, clicável e responsiva, adicionando dropdowns modernos (Espiritismo, O Projeto) no estilo do site de referência `emito-nota-frontend.vercel.app`.
   - Adicionadas imagens/seções de fundo e efeitos de luz (`radial-gradient` parallax-style) para deixar a navegação mais agradável.

---

## 🛠️ Nova Arquitetura de Software (React + TypeScript)
Para manter o projeto limpo, modular e de alto desempenho, dividiremos a interface única anterior em componentes independentes e utilizaremos um roteador de hash nativo em React (`window.location.hash`). Isso permite manter a SPA (Single Page Application) leve, responsiva e compatível com o Bun/Vite sem adicionar dependências externas complexas.

### Estrutura de Arquivos Implementada:
- 📂 `src/`
  - 📂 `components/`
    - 📄 `Navbar.tsx` (Menu com navegação inteligente, dropdowns e suporte a âncoras inter-portais)
    - 📄 `RescuePortal.tsx` (Landing Page de Recrutamento com formulários e métricas)
    - 📄 `SpiritismPortal.tsx` (Portal de Acolhimento e consolos com limitador cognitivo)
    - 📄 `HistoryPortal.tsx` (Página dedicada sobre a história do projeto com linha do tempo animada)
    - 📄 `Footer.tsx` (Rodapé com créditos e redes)
  - 📄 `App.tsx` (Roteador central com `<AnimatePresence>` e troca suave de telas)
  - 📄 `index.css` (Estilos globais, Tailwind v4 e keyframes de animação)

---

## 🧠 UX/UI & Navegação Inteligente (Hick's Law)
- **Menu Simplificado**: A Navbar foi limpa de múltiplos botões concorrentes. Agora conta apenas com 3 opções centrais (`Início`, `Espiritismo` e `O Projeto`) e uma ação primária na direita (`Quero Ser Voluntário`).
- **Dropdowns Interativos**: O menu possui dropdowns que agrupam opções de forma lógica, abrindo sob hover/clique e oferecendo suporte de scroll direto para as seções corretas da página, mesmo se o usuário estiver em outro portal.
- **História do Projeto**: Uma página dedicada com linha do tempo de 4 marcos descrevendo a evolução do projeto, agregando autoridade e emoção à landing page.
- **Scroll e Offset de Cabeçalho**: As páginas receberam paddings corretos para compensar o cabeçalho fixado no topo e evitar sobreposição de elementos do Hero.
