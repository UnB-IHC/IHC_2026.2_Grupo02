# Capítulo 4 — Acessibilidade digital: ferramentas

Acessibilidade digital é a prática de remover barreiras para que pessoas com diferentes capacidades, incluindo quem usa tecnologias assistivas, possam acessar e operar conteúdo e serviços.

## Antes de executar uma ferramenta

Escolha uma tarefa e uma página representativas. Registre a data, o navegador, o dispositivo e as condições do teste; depois, acompanhe cada achado até sua correção e teste novamente.

!!! warning "Resultado automático não é garantia"
    Ferramentas detectam apenas parte dos problemas. Uma boa pontuação não prova conformidade, e alertas exigem julgamento humano. Combine inspeção automática, teclado, leitor de tela e testes com pessoas.

## WAVE

**Para que serve:** sinaliza erros, alertas, problemas de contraste e características relacionadas à acessibilidade. Pode exibir uma pontuação AIM.

**Como usar:**

1. Abra a página que será avaliada e execute o WAVE, pela extensão ou pelo serviço WebAIM.
2. Analise o resumo de erros, contraste, alertas e recursos.
3. Abra cada indicador para localizar o elemento e entender o contexto.
4. Registre os resultados e confira manualmente os alertas.

**Limite:** não automatiza toda avaliação. A estrutura e a ordem de leitura, por exemplo, precisam ser verificadas com mais do que uma pontuação.

<div class="ihc-checklist" data-checklist="aplicar-wave" data-progress-unit="etapas">
  <div class="checklist-heading">
    <strong>Como aplicar o WAVE</strong>
    <span data-progress-label>0 de 5 etapas concluídas</span>
  </div>
  <progress max="5" value="0" aria-label="Progresso da aplicação do WAVE"></progress>
  <fieldset>
    <legend>Siga e registre as etapas do material</legend>
    <label><input type="checkbox"><span>Abri a página que será avaliada.</span></label>
    <label><input type="checkbox"><span>Executei o WAVE pela extensão ou pelo site da WebAIM.</span></label>
    <label><input type="checkbox"><span>Revisei erros, erros de contraste, alertas e recursos.</span></label>
    <label><input type="checkbox"><span>Abri os indicadores para localizar cada problema na página.</span></label>
    <label><input type="checkbox"><span>Anotei a pontuação AIM e os totais, e considerei os limites da ferramenta.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

## Lighthouse

**Para que serve:** executa auditorias automatizadas da categoria Acessibilidade no Chrome e apresenta uma pontuação de 0 a 100.

**Como usar:**

1. Abra a página no Chrome e o DevTools (`F12`).
2. Selecione a categoria Acessibilidade no Lighthouse e gere o relatório.
3. Investigue cada auditoria reprovada e os itens marcados para revisão manual.

**Limite:** a nota representa verificações automatizáveis, não uma medida completa da experiência de todas as pessoas.

<div class="ihc-checklist" data-checklist="aplicar-lighthouse" data-progress-unit="etapas">
  <div class="checklist-heading">
    <strong>Como aplicar o Lighthouse</strong>
    <span data-progress-label>0 de 5 etapas concluídas</span>
  </div>
  <progress max="5" value="0" aria-label="Progresso da aplicação do Lighthouse"></progress>
  <fieldset>
    <legend>Siga e registre as etapas do material</legend>
    <label><input type="checkbox"><span>Abri a página que será avaliada no Chrome.</span></label>
    <label><input type="checkbox"><span>Abri o DevTools com <kbd>F12</kbd> e acessei o Lighthouse.</span></label>
    <label><input type="checkbox"><span>Selecionei somente a categoria Acessibilidade para a auditoria.</span></label>
    <label><input type="checkbox"><span>Gerei o relatório e examinei as auditorias reprovadas.</span></label>
    <label><input type="checkbox"><span>Revisei os itens marcados para verificação manual; não tratei a nota como garantia de acessibilidade.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

## NVDA

**Para que serve:** leitor de tela para Windows, útil para ouvir o conteúdo e navegar como uma pessoa que usa saída de voz.

**Como testar:**

1. Inicie o NVDA e abra a página no navegador.
2. Ouça o início e percorra títulos, texto, links e controles.
3. Use `Tab` para links e botões, `H` para títulos e as setas para ler o conteúdo.
4. Tente concluir uma tarefa real e anote o que foi anunciado, omitido ou difícil de compreender.

**Limite:** é uma avaliação qualitativa; resultados variam conforme navegador, configuração e tarefa.

<div class="ihc-checklist" data-checklist="aplicar-nvda" data-progress-unit="etapas">
  <div class="checklist-heading">
    <strong>Como aplicar o teste com NVDA</strong>
    <span data-progress-label>0 de 5 etapas concluídas</span>
  </div>
  <progress max="5" value="0" aria-label="Progresso do teste de aplicação do NVDA"></progress>
  <fieldset>
    <legend>Teste uma tarefa real e anote o que aconteceu</legend>
    <label><input type="checkbox"><span>Instalei o NVDA se necessário, iniciei o leitor de tela e abri a página no navegador.</span></label>
    <label><input type="checkbox"><span>Ouvi a introdução e percorri os títulos e o texto.</span></label>
    <label><input type="checkbox"><span>Naveguei por links e botões com <kbd>Tab</kbd>, por títulos com <kbd>H</kbd> e pelo texto com as setas.</span></label>
    <label><input type="checkbox"><span>Tentei realizar uma tarefa representativa, como encontrar uma informação.</span></label>
    <label><input type="checkbox"><span>Anotei o que foi confuso ou não foi anunciado, considerando que o teste é qualitativo.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

## ASES

**Para que serve:** o Avaliador e Simulador de Acessibilidade em Sítios (ASES) verifica recomendações do e-MAG e apresenta erros e avisos.

**Como usar:**

1. Informe o endereço da página na ferramenta oficial.
2. Gere e revise o relatório, separando erros de avisos.
3. Se a ferramenta falhar, registre a data e a mensagem; complemente a análise com outros métodos.

**Limite:** instabilidades podem impedir a geração do relatório, e avisos precisam de análise manual.

<div class="ihc-checklist" data-checklist="aplicar-ases" data-progress-unit="etapas">
  <div class="checklist-heading">
    <strong>Como aplicar o ASES</strong>
    <span data-progress-label>0 de 5 etapas concluídas</span>
  </div>
  <progress max="5" value="0" aria-label="Progresso da aplicação do ASES"></progress>
  <fieldset>
    <legend>Siga e registre as etapas do material</legend>
    <label><input type="checkbox"><span>Acessei o ASES (Avaliador e Simulador de Acessibilidade em Sítios) do Governo Federal.</span></label>
    <label><input type="checkbox"><span>Informei o endereço da página que será avaliada.</span></label>
    <label><input type="checkbox"><span>Executei a avaliação segundo as recomendações do e-MAG.</span></label>
    <label><input type="checkbox"><span>Revisei os erros e avisos do relatório.</span></label>
    <label><input type="checkbox"><span>Se a ferramenta falhou, anotei a data e a mensagem para tentar novamente.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

## Checklists do PDF

Os checklists abaixo adaptam os itens das páginas 31, 33, 35 e 37 do PDF. Marcar um item registra que ele foi revisado, não que foi aprovado. Os checklists ajudam a documentar a análise, mas não bastam para declarar uma página acessível. O progresso fica salvo localmente neste navegador.

### WAVE

<div class="ihc-checklist" data-checklist="wave">
  <div class="checklist-heading">
    <strong>Revisão do relatório WAVE</strong>
    <span data-progress-label>0 de 5 itens concluídos</span>
  </div>
  <progress max="5" value="0" aria-label="Progresso da revisão do relatório WAVE"></progress>
  <fieldset>
    <legend>Registre e investigue</legend>
    <label><input type="checkbox"><span>Imagens informativas têm texto alternativo que não repete o título.</span></label>
    <label><input type="checkbox"><span>Contraste foi conferido nos elementos sinalizados.</span></label>
    <label><input type="checkbox"><span>Campos de formulário têm rótulos compreensíveis.</span></label>
    <label><input type="checkbox"><span>Alertas foram revisados manualmente, incluindo PDFs e fontes pequenas.</span></label>
    <label><input type="checkbox"><span>Totais e pontuação AIM foram registrados com contexto.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Lighthouse

<div class="ihc-checklist" data-checklist="lighthouse-pdf">
  <div class="checklist-heading">
    <strong>Revisão do relatório Lighthouse</strong>
    <span data-progress-label>0 de 6 itens concluídos</span>
  </div>
  <progress max="6" value="0" aria-label="Progresso da revisão do relatório Lighthouse"></progress>
  <fieldset>
    <legend>Revise verificações automáticas e manuais</legend>
    <label><input type="checkbox"><span>Imagens informativas têm atributo `alt` útil.</span></label>
    <label><input type="checkbox"><span>Links e botões têm nomes acessíveis e compreensíveis.</span></label>
    <label><input type="checkbox"><span>Contraste de textos e controles foi verificado.</span></label>
    <label><input type="checkbox"><span>Idioma principal da página está definido.</span></label>
    <label><input type="checkbox"><span>ARIA foi revisado para evitar conflitos entre papéis e controles interativos.</span></label>
    <label><input type="checkbox"><span>Itens de revisão manual foram conferidos, além da pontuação.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### NVDA

<div class="ihc-checklist" data-checklist="nvda-pdf">
  <div class="checklist-heading">
    <strong>Teste de tarefa com NVDA</strong>
    <span data-progress-label>0 de 6 itens concluídos</span>
  </div>
  <progress max="6" value="0" aria-label="Progresso do teste com NVDA"></progress>
  <fieldset>
    <legend>Registre a experiência de navegação</legend>
    <label><input type="checkbox"><span>Título, propósito e estrutura foram identificados.</span></label>
    <label><input type="checkbox"><span>Links, seções e documentos são distinguíveis pelo nome.</span></label>
    <label><input type="checkbox"><span>Imagens informativas têm texto alternativo sem repetição desnecessária.</span></label>
    <label><input type="checkbox"><span>Tabelas e gráficos são anunciados com título ou contexto compreensível.</span></label>
    <label><input type="checkbox"><span>Títulos têm estrutura semântica e ajudam a navegar.</span></label>
    <label><input type="checkbox"><span>Tarefas foram concluídas sem dificuldade significativa na navegação com o NVDA.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### ASES

<div class="ihc-checklist" data-checklist="ases">
  <div class="checklist-heading">
    <strong>Registro do ASES</strong>
    <span data-progress-label>0 de 4 itens concluídos</span>
  </div>
  <progress max="4" value="0" aria-label="Progresso do registro do ASES"></progress>
  <fieldset>
    <legend>Documente a análise</legend>
    <label><input type="checkbox"><span>O relatório foi gerado por completo ou a falha foi registrada.</span></label>
    <label><input type="checkbox"><span>Erros e avisos foram separados e revisados.</span></label>
    <label><input type="checkbox"><span>Data e mensagem de eventual falha foram anotadas.</span></label>
    <label><input type="checkbox"><span>Resultados foram complementados com outros métodos e revisão humana.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

## Princípios para revisar

- Percurso completo por teclado, com foco visível e ordem previsível.
- Contraste, zoom e redimensionamento sem perda de conteúdo.
- Rótulos, instruções e mensagens de erro compreensíveis.
- Alternativas em texto para conteúdo visual informativo.
- Estrutura semântica de títulos, controles e tabelas.
- Ação importante com confirmação apropriada e saída clara.

Veja também as [normas WCAG e ABNT NBR 17225:2025](normas-acessibilidade.md), os [fundamentos de acessibilidade](fundamentos.md#acessibilidade-e-normas) e as [referências bibliográficas](referencias.md#referencias-bibliograficas).
