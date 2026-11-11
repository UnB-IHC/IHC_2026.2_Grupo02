# Capítulo 2 — Usabilidade, carga mental e cognição

## Metas de usabilidade

Metas associadas à ISO 9241-11:

| Meta | O que observar |
|---|---|
| **Eficácia** | A pessoa conclui a tarefa e obtém o resultado correto? |
| **Eficiência** | O percurso evita esforço, etapas e cliques sem valor? |
| **Segurança de uso** | A interface previne enganos e oferece cancelar, desfazer ou confirmar ações importantes? |
| **Aprendizado** | Uma pessoa iniciante consegue começar sem depender de um manual externo? |

Avalie as metas em relação a pessoas, objetivos e contextos de uso específicos.

## 10 heurísticas de usabilidade

As heurísticas de Nielsen são princípios para inspecionar interfaces, não uma certificação automática. Use cada item para levantar perguntas e evidências.

1. **Visibilidade do estado do sistema:** há retorno após uma ação, como confirmação, progresso ou erro?
2. **Correspondência com o mundo real:** a interface usa palavras e conceitos familiares ao público?
3. **Controle e liberdade:** é fácil cancelar, voltar ou sair de uma ação iniciada por engano?
4. **Consistência e padrões:** o mesmo rótulo ou controle mantém o significado e comportamento?
5. **Prevenção de erros:** o design evita enganos previsíveis antes que ocorram?
6. **Reconhecimento em vez de memorização:** a interface mostra opções e contexto em vez de exigir que a pessoa se lembre deles?
7. **Flexibilidade e eficiência:** há caminhos eficientes para pessoas experientes sem tornar o básico difícil de aprender?
8. **Design estético e minimalista:** a informação apresentada é necessária para a tarefa, sem competir com o que importa?
9. **Ajuda para reconhecer e recuperar erros:** mensagens dizem o que aconteceu e como resolver?
10. **Ajuda e documentação:** há orientação fácil de encontrar, focada nas tarefas reais?

## Carga mental e cognição

O material relaciona decisões de interface à psicologia cognitiva e à Teoria da Ação de Donald Norman:

- **Golfo de execução:** a pessoa entende como transformar seu objetivo em ações disponíveis na interface?
- **Golfo de avaliação:** depois da ação, consegue perceber o estado do sistema e interpretar o resultado?
- **Carga cognitiva:** menus, formulários e telas agrupam informações de modo compreensível, sem sobrecarregar a atenção?
- **Pistas (cues):** rótulos, hierarquia e estados visuais indicam o que pode ser feito em seguida?

Apesar da regra de Miller (7 ± 2) como orientação para limitar itens apresentados de uma vez. Trate essa referência como um alerta para organizar e agrupar informações, não como um limite universal rígido para qualquer interface ou pessoa.

## Checklists interativos

Percorra uma tarefa real e marque cada item depois de revisá-lo; **marcar não significa que o critério foi aprovado**. Registre os problemas encontrados separadamente. O progresso fica salvo localmente neste navegador.

### Metas de usabilidade — ISO 9241-11

<div class="ihc-checklist" data-checklist="metas-usabilidade">
  <div class="checklist-heading">
    <strong>Avaliação das metas de usabilidade</strong>
    <span data-progress-label>0 de 4 itens concluídos</span>
  </div>
  <progress max="4" value="0" aria-label="Progresso da avaliação das metas de usabilidade"></progress>
  <fieldset>
    <legend>Observe a execução da tarefa</legend>
    <label><input type="checkbox"><span><strong>Eficácia:</strong> a pessoa encontra a informação ou conclui a tarefa sem erros irrecuperáveis?</span></label>
    <label><input type="checkbox"><span><strong>Eficiência:</strong> o percurso evita etapas burocráticas e cliques redundantes?</span></label>
    <label><input type="checkbox"><span><strong>Segurança:</strong> há prevenção contra ações acidentais e opções como Desfazer ou Cancelar?</span></label>
    <label><input type="checkbox"><span><strong>Aprendizado:</strong> uma pessoa iniciante consegue realizar funções básicas sem ajuda externa?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Heurísticas de Nielsen

<div class="ihc-checklist" data-checklist="heuristicas-nielsen">
  <div class="checklist-heading">
    <strong>Inspeção pelas heurísticas de usabilidade</strong>
    <span data-progress-label>0 de 10 itens concluídos</span>
  </div>
  <progress max="10" value="0" aria-label="Progresso da inspeção pelas heurísticas de usabilidade"></progress>
  <fieldset>
    <legend>Procure evidências em cada heurística</legend>
    <label><input type="checkbox"><span><strong>H1 — Visibilidade do estado:</strong> a interface dá feedback após uma ação, por exemplo, com progresso ou mensagens de erro e sucesso?</span></label>
    <label><input type="checkbox"><span><strong>H2 — Correspondência com o mundo real:</strong> textos e rótulos usam a linguagem da pessoa em vez de jargões ou siglas internas?</span></label>
    <label><input type="checkbox"><span><strong>H3 — Controle e liberdade:</strong> há uma saída de emergência clara para cancelar ou sair de uma tela aberta por engano?</span></label>
    <label><input type="checkbox"><span><strong>H4 — Consistência e padrões:</strong> o mesmo botão, cor ou palavra mantém o significado nas telas do sistema?</span></label>
    <label><input type="checkbox"><span><strong>H5 — Prevenção de erros:</strong> a interface bloqueia ou previne ações inválidas antes que causem problemas?</span></label>
    <label><input type="checkbox"><span><strong>H6 — Reconhecimento em vez de memorização:</strong> opções, histórico ou seletores ajudam a pessoa sem exigir que memorize nomes e códigos?</span></label>
    <label><input type="checkbox"><span><strong>H7 — Flexibilidade e eficiência:</strong> há atalhos úteis para pessoas experientes sem atrapalhar quem está aprendendo?</span></label>
    <label><input type="checkbox"><span><strong>H8 — Estética e design minimalista:</strong> as informações na tela são relevantes à tarefa e livres de excesso? <em>Complemento editorial: a H8 não aparece no trecho do PDF.</em></span></label>
    <label><input type="checkbox"><span><strong>H9 — Recuperação de erros:</strong> quando ocorre um erro, a interface explica o problema e como resolvê-lo?</span></label>
    <label><input type="checkbox"><span><strong>H10 — Ajuda e documentação:</strong> é fácil encontrar orientação e passos relacionados à tarefa, como Como funciona, FAQ ou glossário?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Carga mental e cognição

<div class="ihc-checklist" data-checklist="cognicao">
  <div class="checklist-heading">
    <strong>Inspeção da carga mental e dos golfs de execução e avaliação</strong>
    <span data-progress-label>0 de 3 itens concluídos</span>
  </div>
  <progress max="3" value="0" aria-label="Progresso da inspeção de carga mental e cognição"></progress>
  <fieldset>
    <legend>Use as perguntas do material durante a inspeção</legend>
    <label><input type="checkbox"><span><strong>Itens e memória:</strong> menus, formulários e painéis organizam grupos de cerca de 5–9 itens lógicos, conforme a pergunta do PDF, sem exigir memorização excessiva? A regra 7 ± 2 é uma referência, não um limite universal.</span></label>
    <label><input type="checkbox"><span><strong>Golfo de execução:</strong> as pistas e affordances deixam claro o que pode ser clicado e quais ações estão disponíveis para atingir o objetivo?</span></label>
    <label><input type="checkbox"><span><strong>Golfo de avaliação:</strong> depois de uma ação, a pessoa percebe o que mudou e entende o estado resultante? O tempo de resposta inferior a 0,1 s é a pergunta de avaliação indicada pelo PDF.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

!!! note "Como interpretar a regra de Miller e o tempo de resposta"
    Os valores e referências numéricas reproduzem perguntas do PDF para orientar a inspeção; não são limites universais de capacidade ou uma garantia de qualidade da interface. Considere a tarefa, o contexto e o comportamento observado.
