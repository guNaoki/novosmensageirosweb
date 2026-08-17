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

### ⚠️ Requisitos de Código
- Manter transições nativas do Tailwind e Framer Motion (`transition-all duration-300`).
- Garanta que o design seja totalmente responsivo (mobile-first usando `md` e `lg` do Tailwind).
- Manter o suporte a Dark Mode em todos os componentes.
