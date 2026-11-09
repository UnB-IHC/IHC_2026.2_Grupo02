# Capítulo 5 — Acessibilidade digital: normas (WCAG/NBR)

Este capítulo apresenta a importância legal e ética da acessibilidade digital, os princípios da WCAG 2.2 e uma seleção de verificações associadas à WCAG e à ABNT NBR 17225:2025.

!!! warning "Checklist não é certificado de conformidade"
    Use as perguntas para orientar a revisão e registrar evidências. Elas não substituem a leitura das normas completas, testes com pessoas com deficiência nem uma avaliação de conformidade.

## Importância legal e ética

No Brasil, a acessibilidade digital está relacionada a direitos previstos em legislações como:

- **Lei Brasileira de Inclusão (Lei nº 13.146/2015):** garante o direito à acessibilidade e prevê requisitos para sítios da internet mantidos por empresas e órgãos de governo.
- **Decreto nº 5.296/2004:** regulamenta disposições relacionadas à acessibilidade e estabelece requisitos para sua promoção.
- **ABNT NBR 17225:2025:** estabelece requisitos de acessibilidade para conteúdos e aplicações web, alinhados à WCAG 2.2.

A acessibilidade também é uma responsabilidade ética. Um serviço público digital inacessível pode impedir que uma pessoa consulte informações ou solicite serviços com autonomia, fazendo-a depender da ajuda de outras pessoas para exercer seus direitos.

## WCAG 2.2

As *Web Content Accessibility Guidelines* (WCAG), desenvolvidas pelo W3C, orientam a criação de conteúdos e aplicações web acessíveis. Seus princípios são conhecidos pela sigla **POUR**:

<div class="grid cards" markdown>

-   **Perceptível**

    ---

    Informações e componentes devem poder ser percebidos; o acesso ao conteúdo não pode depender exclusivamente de um único sentido.

-   **Operável**

    ---

    Componentes e mecanismos de navegação devem permitir a interação por diferentes formas de uso dos dispositivos.

-   **Compreensível**

    ---

    Conteúdo, navegação e ações precisam ser entendidos. Use linguagem e instruções claras, com comportamentos previsíveis e consistentes.

-   **Robusto**

    ---

    Estruturas e identificações técnicas devem permitir que navegadores e tecnologias assistivas reconheçam os elementos e suas funções.

</div>

### Níveis de conformidade

| Nível | Descrição |
|---|---|
| **A** | Requisitos básicos de acessibilidade. |
| **AA** | Requisitos adicionais; é geralmente recomendado como objetivo de conformidade. Para alcançar AA, é necessário atender aos critérios dos níveis A e AA. |
| **AAA** | Critérios mais rigorosos, que nem sempre são aplicáveis a todo o conteúdo. |

### Revisão prática: foco e interação

Os itens a seguir adaptam as verificações de WCAG apresentadas no material. Marque um item depois de testá-lo e registrar evidências.

<div class="ihc-checklist" data-checklist="wcag-foco-interacao">
  <div class="checklist-heading">
    <strong>Foco visível e formas de interação</strong>
    <span data-progress-label>0 de 4 itens concluídos</span>
  </div>
  <progress max="4" value="0" aria-label="Progresso da revisão de foco e interação"></progress>
  <fieldset>
    <legend>Teste o teclado e os controles</legend>
    <label><input type="checkbox"><span>Naveguei com <kbd>Tab</kbd> e confirmei que menus fixos, banners e janelas não escondem o elemento que recebeu foco.</span></label>
    <label><input type="checkbox"><span>O destaque do foco é visível, com tamanho e contraste suficientes.</span></label>
    <label><input type="checkbox"><span>Ações que exigem arrastar também podem ser realizadas por cliques ou comandos simples.</span></label>
    <label><input type="checkbox"><span>Botões, ícones e outros elementos clicáveis têm área adequada para evitar acionamentos acidentais.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Revisão prática: consistência e autenticação

<div class="ihc-checklist" data-checklist="wcag-consistencia-autenticacao">
  <div class="checklist-heading">
    <strong>Ajuda, dados repetidos e autenticação</strong>
    <span data-progress-label>0 de 3 itens concluídos</span>
  </div>
  <progress max="3" value="0" aria-label="Progresso da revisão de consistência e autenticação"></progress>
  <fieldset>
    <legend>Revise os fluxos entre páginas</legend>
    <label><input type="checkbox"><span>Mecanismos de ajuda, como contato, suporte e FAQ, aparecem em posições consistentes entre as páginas.</span></label>
    <label><input type="checkbox"><span>Informações já preenchidas são reaproveitadas quando apropriado, sem exigir digitação repetida no mesmo processo.</span></label>
    <label><input type="checkbox"><span>O login oferece alternativas acessíveis que não dependem exclusivamente de memorizar, resolver desafios ou transcrever informações, como gerenciadores de senha e copiar e colar.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

## ABNT NBR 17225:2025

A **ABNT NBR 17225:2025** estabelece requisitos e recomendações para tornar conteúdos e aplicações web mais acessíveis a pessoas com deficiência. Use a norma como referência para criar, avaliar e melhorar sites, considerando barreiras que dificultam o acesso e o uso de serviços digitais.

### Revisão prática: estrutura e conteúdo

<div class="ihc-checklist" data-checklist="nbr17225-estrutura">
  <div class="checklist-heading">
    <strong>Estrutura semântica e links</strong>
    <span data-progress-label>0 de 4 itens concluídos</span>
  </div>
  <progress max="4" value="0" aria-label="Progresso da revisão de estrutura semântica e links"></progress>
  <fieldset>
    <legend>Confira a organização da página</legend>
    <label><input type="checkbox"><span>Títulos seguem uma hierarquia lógica e representam corretamente as seções.</span></label>
    <label><input type="checkbox"><span>Cabeçalho, menu principal, conteúdo e rodapé estão identificados de modo que tecnologias assistivas possam reconhecê-los.</span></label>
    <label><input type="checkbox"><span>Listas e tabelas usam estruturas adequadas e relações compreensíveis entre seus elementos.</span></label>
    <label><input type="checkbox"><span>Links descrevem claramente seu destino ou finalidade, evitando textos vagos como “clique aqui”.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Revisão prática: controles e adaptação

<div class="ihc-checklist" data-checklist="nbr17225-controles-adaptacao">
  <div class="checklist-heading">
    <strong>Controles, formulários e ampliação</strong>
    <span data-progress-label>0 de 3 itens concluídos</span>
  </div>
  <progress max="3" value="0" aria-label="Progresso da revisão de controles e adaptação"></progress>
  <fieldset>
    <legend>Teste os elementos interativos em diferentes condições</legend>
    <label><input type="checkbox"><span>Controles têm identificação clara e sua função pode ser compreendida por tecnologias assistivas.</span></label>
    <label><input type="checkbox"><span>Campos estão associados às respectivas identificações e apresentam instruções claras.</span></label>
    <label><input type="checkbox"><span>O conteúdo permanece legível e funcional ao ampliar a página e em diferentes tamanhos de tela.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Revisão prática: linguagem e multimídia

<div class="ihc-checklist" data-checklist="nbr17225-linguagem-multimidia">
  <div class="checklist-heading">
    <strong>Conteúdo, alternativas e animações</strong>
    <span data-progress-label>0 de 3 itens concluídos</span>
  </div>
  <progress max="3" value="0" aria-label="Progresso da revisão de conteúdo e multimídia"></progress>
  <fieldset>
    <legend>Revise a apresentação do conteúdo</legend>
    <label><input type="checkbox"><span>Textos estão organizados em blocos compreensíveis, com linguagem clara e formatação adequada.</span></label>
    <label><input type="checkbox"><span>Conteúdos multimídia têm alternativas acessíveis, como legendas, transcrições ou audiodescrição, conforme necessário.</span></label>
    <label><input type="checkbox"><span>Animações podem ser controladas e há tempo suficiente para realizar as interações.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

## eMAG 3.1

O eMAG é um conjunto de recomendações do Governo Federal para orientar o desenvolvimento e a adaptação de sites e portais governamentais e apoiar a padronização da acessibilidade digital no contexto brasileiro.

<div class="ihc-checklist" data-checklist="emag-31">
  <div class="checklist-heading">
    <strong>Revisão baseada no eMAG</strong>
    <span data-progress-label>0 de 3 itens concluídos</span>
  </div>
  <progress max="3" value="0" aria-label="Progresso da revisão baseada no eMAG"></progress>
  <fieldset>
    <legend>Verifique o acesso a serviços públicos</legend>
    <label><input type="checkbox"><span>O site oferece atalhos para acessar diretamente o conteúdo principal e facilitar a navegação?</span></label>
    <label><input type="checkbox"><span>Informações sobre serviços públicos, órgãos responsáveis e formas de atendimento estão organizadas e são fáceis de localizar?</span></label>
    <label><input type="checkbox"><span>Documentos disponibilizados para consulta ou download podem ser acessados por pessoas que usam tecnologias assistivas?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

## Lei Brasileira de Inclusão

A Lei Brasileira de Inclusão (LBI) determina acessibilidade em sites mantidos por órgãos governamentais, para garantir que pessoas com deficiência possam acessar as informações, e prevê a apresentação do símbolo de acessibilidade em local de destaque.

<div class="ihc-checklist" data-checklist="lbi-sites-publicos">
  <div class="checklist-heading">
    <strong>Revisão de acessibilidade em serviços públicos</strong>
    <span data-progress-label>0 de 3 itens concluídos</span>
  </div>
  <progress max="3" value="0" aria-label="Progresso da revisão de acessibilidade em serviços públicos"></progress>
  <fieldset>
    <legend>Verifique informação, acesso e suporte</legend>
    <label><input type="checkbox"><span>O site apresenta o símbolo de acessibilidade em local visível?</span></label>
    <label><input type="checkbox"><span>Informações e serviços públicos digitais estão disponíveis sem barreiras que impeçam o acesso de pessoas com deficiência?</span></label>
    <label><input type="checkbox"><span>Existe um canal acessível para comunicar problemas de acessibilidade?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

## Design System gov.br

O Design System gov.br reúne padrões visuais e componentes de interface para serviços digitais governamentais. Pode servir de referência para avaliar consistência e previsibilidade da navegação.

<div class="ihc-checklist" data-checklist="design-system-govbr">
  <div class="checklist-heading">
    <strong>Revisão de consistência da interface</strong>
    <span data-progress-label>0 de 3 itens concluídos</span>
  </div>
  <progress max="3" value="0" aria-label="Progresso da revisão do Design System gov.br"></progress>
  <fieldset>
    <legend>Revise padrões e estados dos componentes</legend>
    <label><input type="checkbox"><span>Elementos visuais e componentes da interface seguem uma identidade consistente entre as páginas?</span></label>
    <label><input type="checkbox"><span>Botões, menus e formulários apresentam estados e respostas visuais claros, como seleção, carregamento, sucesso e erro?</span></label>
    <label><input type="checkbox"><span>A interface mantém sua organização e funcionalidade em diferentes tamanhos de tela?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

Consulte também as [ferramentas de avaliação de acessibilidade](acessibilidade.md) e as [referências bibliográficas](referencias.md#referencias-bibliograficas).
