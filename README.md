# Novos Mensageiros — Projeto de Resgate 🕊️

> "Fora da caridade não há salvação." — Allan Kardec

O **Novos Mensageiros — Projeto de Resgate** é uma iniciativa espírita que nasceu nas redes sociais (Instagram e TikTok) com o objetivo de acolher, escutar e direcionar pessoas em sofrimento mental profundo, depressão ou ideação suicida que interagem em publicações virais. 

Esta landing page foi desenvolvida para apresentar o propósito do projeto, divulgar os canais de atuação e, principalmente, **recrutar voluntários** nas seguintes frentes:
1. **Casas Espíritas:** Para suporte espiritual e atendimento fraterno local.
2. **Psicólogos/Profissionais de Saúde Mental:** Para suporte técnico e encaminhamento especializado.
3. **Voluntários Gerais:** Para atuação no acolhimento digital (redes sociais), envio de mensagens ativas e pesquisa.

---

## 🛠️ Stack Tecnológica

O projeto foi construído utilizando as tecnologias mais modernas do ecossistema Frontend:
- **React 19** — Interface declarativa e componentizada de alta performance.
- **TypeScript** — Tipagem estática para maior robustez e manutenibilidade.
- **Vite** — Tooling rápido para o desenvolvimento do app.
- **Tailwind CSS** — Estilização moderna, responsiva, focada em legibilidade e experiência acolhedora.
- **Framer Motion** — Micro-animações fluidas e transições suaves entre portais/páginas.
- **Lucide React** — Biblioteca de ícones modernos e minimalistas.
- **Bun** — Runtime e gerenciador de pacotes rápido.

---

## 🎨 Identidade Visual e UX/UI

A interface foi projetada sob o conceito de **acolhimento e paz**:
- **Cores:** Tons suaves de azul (espiritualidade, tranquilidade, confiança), contrastados com branco e cinza-claro para proporcionar uma leitura leve e sem fadiga visual.
- **Espaçamento e Tipografia:** Foco em legibilidade textual, respiros generosos e hierarquia visual bem demarcada para guiar o usuário em sua jornada.
- **Experiência do Usuário (Storytelling):**
  1. **Apresentação do Propósito (Hero):** Título impactante e estatísticas de alcance nas redes.
  2. **O Contexto (A Dor):** Explicando a ponta do iceberg das redes sociais e a urgência por ajuda.
  3. **A Jornada de Acolhimento:** Um fluxo visual do primeiro contato até o encaminhamento terapêutico e espiritual.
  4. **Rede de Apoio (Frentes de Atuação):** Descrição de como cada voluntário pode somar.
  5. **Chamada para Ação (CTA Final):** Formulário direto de inscrição para os novos mensageiros.

---

## 🚀 Como Executar o Projeto Localmente

Para rodar a aplicação em sua máquina local, certifique-se de ter o [Bun](https://bun.sh/) instalado.

### 1. Clonar o repositório
```bash
git clone https://github.com/guNaoki/novosmensageirosweb.git
cd novosmensageirosweb
```

### 2. Instalar as dependências
```bash
bun install
```

### 3. Executar em ambiente de desenvolvimento
```bash
bun run dev
```
Acesse `http://localhost:5180` no seu navegador.

### 4. Build de produção
Para gerar a versão otimizada para publicação:
```bash
bun run build
```
Os arquivos prontos para deploy estarão na pasta `dist/`.

---

## 🏷️ Controle de Versão e Padrão de Commits

O projeto adota o **[Semantic Versioning (SemVer)](https://semver.org/lang/pt-BR/)** no formato `MAJOR.MINOR.PATCH` (ex: `2.0.0`):

| Posição | Tipo | Quando incrementar? | Exemplo |
| :--- | :--- | :--- | :--- |
| **1º Número (`MAJOR`)** | Grande Atualização | Reestruturações completas de design/arquitetura, quebra de compatibilidade ou marcos principais (ex: migração da v1 legada para v2 com Tailwind v4 e WebP). | `1.0.0` ➔ `2.0.0` |
| **2º Número (`MINOR`)** | Média Atualização | Adição de novas seções, páginas, recursos ou fluxos funcionais sem quebrar a estrutura. | `2.0.0` ➔ `2.1.0` |
| **3º Número (`PATCH`)** | Pequena Atualização | Correções pontuais de bugs, ajustes finos de CSS/layout, textos e otimizações menores. | `2.0.0` ➔ `2.0.1` |

### 📝 Convenção de Commits (Conventional Commits)
Para manter o histórico do repositório limpo e organizado:
* `feat(escopo): descrição` — Nova funcionalidade ou seção adicionada.
* `fix(escopo): descrição` — Correção de bug ou erro de renderização.
* `refactor(escopo): descrição` — Reestruturação de código/estilos sem alteração de comportamento.
* `perf(escopo): descrição` — Melhorias de performance e otimização (ex: conversão WebP).
* `style(escopo): descrição` — Ajustes cosméticos e de formatação.
* `docs(escopo): descrição` — Alterações em arquivos de documentação.

Consulte o histórico detalhado em [`CHANGELOG.md`](./CHANGELOG.md).

---

## 🤝 Como Contribuir

Seja com código, design, divulgação ou voluntariado, toda ajuda é bem-vinda.
- Siga nosso perfil oficial no Instagram: [@novosmensageiros](https://instagram.com/novosmensageiros)
- Se você quer se voluntariar diretamente, preencha o formulário de cadastro na landing page!

---

*Desenvolvido com carinho para o resgate de vidas.* ❤️
