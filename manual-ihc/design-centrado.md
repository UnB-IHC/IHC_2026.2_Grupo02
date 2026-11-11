# Capítulo 3 — UCD e design empático

## Investigue antes de projetar

O Design Centrado no Usuário (DCU/UCD), associado à ISO 9241-210, parte de tarefas, necessidades e contextos reais. Esse trabalho pode ser organizado em quatro artefatos: personas, mapa de empatia, jornada do usuário e cenários com HTA (Análise Hierárquica de Tarefas).

!!! warning "Use dados, não estereótipos"
    Personas e mapas são sínteses de pesquisa. Não invente limitações, hábitos ou objetivos para preencher um modelo; confirme-os com pessoas e evidências.

## Persona

Uma persona resume um perfil relevante para decisões de design. O modelo da fonte sugere registrar:

- metas humanas e critérios de sucesso;
- vocabulário, expectativas de uso e conhecimentos do domínio;
- frustrações, barreiras e possíveis gatilhos de abandono;
- contexto, frequência, dispositivo e letramento digital;
- características que realmente mudam decisões de interface.

Evite transformar a persona em uma lista de funções técnicas ou presumir que toda pessoa do mesmo perfil se comporte igual.

### Modelo preenchível: persona

Os campos são um rascunho local deste navegador, não um formulário enviado à equipe.

<form class="ihc-worksheet" data-worksheet="persona">
  <div class="worksheet-grid">
    <label>Nome fictício, faixa etária e ocupação
      <textarea name="perfil" rows="2" placeholder="Registre apenas características relevantes para decisões de design."></textarea>
    </label>
    <label>Frase-síntese e contexto de uso
      <textarea name="contexto" rows="2" placeholder="Resuma uma necessidade ou frustração com evidências da pesquisa."></textarea>
    </label>
    <label>Objetivo principal e critério de sucesso
      <textarea name="objetivo" rows="2" placeholder="O que a pessoa precisa realizar e como saberá que conseguiu?"></textarea>
    </label>
    <label>Objetivos secundários
      <textarea name="objetivos-secundarios" rows="2" placeholder="Quais informações ou resultados adicionais procura?"></textarea>
    </label>
    <label>Vocabulário cotidiano e modelo mental
      <textarea name="modelo-mental" rows="2" placeholder="Quais palavras usa e o que espera que a interface faça?"></textarea>
    </label>
    <label>Conhecimentos e limites do domínio
      <textarea name="dominio" rows="2" placeholder="O que conhece e quais jargões ou conceitos não devem ser presumidos?"></textarea>
    </label>
    <label>Dores e pontos de travamento
      <textarea name="barreiras" rows="2" placeholder="Onde hesita, erra ou precisa de ajuda? Registre a evidência."></textarea>
    </label>
    <label>Gatilhos de abandono e custo cognitivo ou emocional
      <textarea name="abandono" rows="2" placeholder="O que pode levar a desistir ou gerar insegurança e esforço?"></textarea>
    </label>
    <label>Dispositivo e frequência de uso
      <textarea name="contexto-uso" rows="2" placeholder="Em qual dispositivo e com que frequência realiza a tarefa?"></textarea>
    </label>
    <label>Letramento digital
      <textarea name="letramento" rows="2" placeholder="Básico, médio ou alto? Baseie a descrição em evidências."></textarea>
    </label>
    <label>Evidências e hipóteses ainda não confirmadas
      <textarea name="validar" rows="2" placeholder="De onde vêm essas informações e o que a pesquisa ainda precisa verificar?"></textarea>
    </label>
  </div>
  <div class="worksheet-actions">
    <p data-worksheet-status role="status" aria-live="polite">Rascunho salvo apenas neste navegador.</p>
    <button type="button" class="md-button" data-clear-worksheet>Limpar este modelo</button>
  </div>
</form>

## Mapa de empatia

Organize evidências em seis perspectivas. Diferenciar o que a pessoa **pensa/sente** do que **diz/faz** ajuda a não confundir observação com interpretação.

1. **Pensa e sente:** o que importa, preocupa ou gera confiança?
2. **Ouve:** que opiniões, mensagens e influências recebe?
3. **Vê:** o que aparece no ambiente e na interface?
4. **Diz e faz:** o que expressa e como age durante a tarefa?
5. **Dores:** quais obstáculos, riscos ou esforços percebe?
6. **Ganhos:** o que considera uma experiência bem-sucedida?

### Modelo preenchível: mapa de empatia

<form class="ihc-worksheet" data-worksheet="mapa-de-empatia">
  <div class="worksheet-grid">
    <label>O que pensa e sente<textarea name="pensa-sente" rows="3" placeholder="O que importa, preocupa ou gera confiança? Que expectativas tem?"></textarea></label>
    <label>O que ouve<textarea name="ouve" rows="3" placeholder="Que opiniões, alertas ou recomendações de outras pessoas escuta?"></textarea></label>
    <label>O que vê<textarea name="ve" rows="3" placeholder="O que encontra no ambiente, na interface e em outros serviços?"></textarea></label>
    <label>O que fala e faz<textarea name="diz-faz" rows="3" placeholder="O que expressa e como age ao realizar a tarefa?"></textarea></label>
    <label>Dores e barreiras<textarea name="dores" rows="3" placeholder="Quais obstáculos causam esforço, dúvida, abandono ou risco de erro?"></textarea></label>
    <label>Necessidades e ganhos esperados<textarea name="ganhos" rows="3" placeholder="Que mudança ou resultado tornaria a experiência melhor?"></textarea></label>
  </div>
  <div class="worksheet-actions">
    <p data-worksheet-status role="status" aria-live="polite">Rascunho salvo apenas neste navegador.</p>
    <button type="button" class="md-button" data-clear-worksheet>Limpar este modelo</button>
  </div>
</form>

## Jornada do usuário

Mapeie o percurso de ponta a ponta: motivação, etapas, pontos de contato, sentimentos, barreiras e oportunidades. A fonte exemplifica fases de acesso, navegação, filtragem e conclusão; adapte as etapas ao serviço que está avaliando.

| Etapa | Ação da pessoa | Ponto de contato | Dúvida ou sentimento | Barreira observada | Oportunidade |
|---|---|---|---|---|---|
| Início | O que inicia a tarefa? | Onde começa? | O que espera encontrar? | O que impede o início? | Como facilitar a entrada? |
| Exploração | O que procura ou compara? | Menu, busca ou conteúdo | Consegue entender as opções? | Há excesso ou falta de contexto? | Como orientar a escolha? |
| Execução | O que precisa preencher ou confirmar? | Formulário ou controle | Tem segurança para prosseguir? | O que provoca erro ou abandono? | Como prevenir e dar retorno? |
| Conclusão | Como confirma o resultado? | Confirmação ou saída | Sabe que concluiu? | O estado final é ambíguo? | Como comunicar o resultado? |

### Modelo preenchível: jornada resumida

<form class="ihc-worksheet" data-worksheet="jornada">
  <div class="worksheet-grid">
    <label>Objetivo e contexto<textarea name="objetivo" rows="2" placeholder="Quem realiza qual tarefa, onde e por quê?"></textarea></label>
    <label>Fase 1 — Acesso<textarea name="inicio" rows="2" placeholder="Como a pessoa chega ao serviço? O que faz e como se sente?"></textarea></label>
    <label>Fase 2 — Navegação<textarea name="exploracao" rows="2" placeholder="Como encontra e compara opções? Registre ações e pontos de contato."></textarea></label>
    <label>Fase 3 — Filtragem ou seleção<textarea name="execucao" rows="2" placeholder="Como ajusta critérios ou seleciona opções? Quais dúvidas surgem?"></textarea></label>
    <label>Fase 4 — Conclusão<textarea name="conclusao" rows="2" placeholder="Como confirma o resultado e encerra a tarefa?"></textarea></label>
    <label>Sentimentos e curva emocional<textarea name="emocional" rows="2" placeholder="Em que momento há confiança, hesitação, frustração ou alívio?"></textarea></label>
    <label>Pontos de contato<textarea name="pontos-contato" rows="2" placeholder="Quais telas, botões, menus, mensagens ou modais são usados?"></textarea></label>
    <label>Atritos e oportunidades de melhoria<textarea name="melhorias" rows="2" placeholder="Ligue cada barreira observada a uma oportunidade de redesign."></textarea></label>
  </div>
  <div class="worksheet-actions">
    <p data-worksheet-status role="status" aria-live="polite">Rascunho salvo apenas neste navegador.</p>
    <button type="button" class="md-button" data-clear-worksheet>Limpar este modelo</button>
  </div>
</form>

## Cenários e HTA

Um **cenário** descreve uma situação realista: quem executa a tarefa, qual objetivo busca, em que contexto atua, que passos percorre e o que acontece quando surge uma dificuldade.

A **HTA** decompõe um objetivo em tarefas e subtarefas. Para cada etapa crítica, identifique:

- **entrada:** informação ou condição necessária;
- **ação:** o que a pessoa faz;
- **feedback:** como o sistema mostra o resultado;
- **plano:** em que ordem as subtarefas ocorrem e qual alternativa existe se uma falhar;
- **pistas:** sinais que ajudam a escolher o próximo passo.

Decomponha com mais detalhe tarefas com risco elevado ou propensas a erro. Não transforme cada clique simples em uma etapa: o nível de detalhe deve ajudar a revelar riscos ou orientar uma decisão de design.

### Modelo preenchível: cenário e HTA

<form class="ihc-worksheet" data-worksheet="hta">
  <div class="worksheet-grid">
    <label>Contexto e pessoa<textarea name="contexto" rows="2" placeholder="Quem realiza a tarefa, em qual ambiente e dispositivo?"></textarea></label>
    <label>Objetivo e critério de sucesso<textarea name="objetivo" rows="2" placeholder="Qual resultado prático caracteriza a conclusão?"></textarea></label>
    <label>Cenário: contexto, objetivo, plano e resultado<textarea name="cenario" rows="3" placeholder="Quem age, o que deseja realizar, em que ambiente e como avalia o resultado?"></textarea></label>
    <label>HTA: subtarefas, entradas, ações e feedback<textarea name="subtarefas" rows="3" placeholder="Decomponha as etapas e indique para cada uma o que entra, o que a pessoa faz e como o sistema responde."></textarea></label>
    <label>Etapas críticas e regra de parada<textarea name="risco" rows="3" placeholder="Quais etapas têm alto risco de erro para uma pessoa sem treino e exigem mais detalhe?"></textarea></label>
    <label>Pistas visuais e prevenção de erros<textarea name="pistas" rows="2" placeholder="Que pistas orientam o próximo passo e previnem erros?"></textarea></label>
    <label>Plano alternativo e recuperação<textarea name="recuperacao" rows="2" placeholder="O que acontece se a ação falhar ou a pessoa mudar de ideia?"></textarea></label>
  </div>
  <div class="worksheet-actions">
    <p data-worksheet-status role="status" aria-live="polite">Rascunho salvo apenas neste navegador.</p>
    <button type="button" class="md-button" data-clear-worksheet>Limpar este modelo</button>
  </div>
</form>

## Checklists do PDF
Marque os itens depois de revisar o artefato e a pesquisa que o fundamenta; marcar registra a revisão, **não uma aprovação automática**. O progresso é salvo localmente neste navegador.

### Avaliação de personas

<div class="ihc-checklist" data-checklist="personas-pdf">
  <div class="checklist-heading">
    <strong>Checklist: avaliação de personas</strong>
    <span data-progress-label>0 de 5 itens concluídos</span>
  </div>
  <progress max="5" value="0" aria-label="Progresso da avaliação de personas"></progress>
  <fieldset>
    <legend>Revise a persona e suas evidências</legend>
    <label><input type="checkbox"><span><strong>Base em dados reais:</strong> a persona resulta de pesquisa empírica, e não apenas de suposições da equipe?</span></label>
    <label><input type="checkbox"><span><strong>Objetivos claros:</strong> as metas descrevem o que a pessoa deseja alcançar, não funções técnicas?</span></label>
    <label><input type="checkbox"><span><strong>Dores e limitações:</strong> o perfil registra frustrações reais e limites do conhecimento sobre o domínio?</span></label>
    <label><input type="checkbox"><span><strong>Combate ao usuário elástico:</strong> as habilidades descritas evitam exigir conhecimento de especialista sem evidência?</span></label>
    <label><input type="checkbox"><span><strong>Relevância para o escopo:</strong> os atributos registrados influenciam decisões de design da interface avaliada?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Avaliação do mapa de empatia

<div class="ihc-checklist" data-checklist="mapa-empatia-pdf">
  <div class="checklist-heading">
    <strong>Checklist: mapa de empatia</strong>
    <span data-progress-label>0 de 4 itens concluídos</span>
  </div>
  <progress max="4" value="0" aria-label="Progresso da avaliação do mapa de empatia"></progress>
  <fieldset>
    <legend>Revise o que o mapa representa</legend>
    <label><input type="checkbox"><span><strong>Foco na experiência real:</strong> os quadrantes refletem a perspectiva da pessoa, sem substituir sua experiência por termos internos da organização?</span></label>
    <label><input type="checkbox"><span><strong>Diferenciação clara:</strong> o mapa distingue o que a pessoa expressa e faz do que pensa e sente?</span></label>
    <label><input type="checkbox"><span><strong>Identificação de atritos:</strong> as dores ajudam a reconhecer causas de abandono, desconfiança ou lentidão?</span></label>
    <label><input type="checkbox"><span><strong>Orientação a oportunidades:</strong> as necessidades apontam caminhos para simplificar a interface e a linguagem?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Avaliação da jornada do usuário

<div class="ihc-checklist" data-checklist="jornada-pdf">
  <div class="checklist-heading">
    <strong>Checklist: jornada do usuário</strong>
    <span data-progress-label>0 de 5 itens concluídos</span>
  </div>
  <progress max="5" value="0" aria-label="Progresso da avaliação da jornada do usuário"></progress>
  <fieldset>
    <legend>Revise o percurso de ponta a ponta</legend>
    <label><input type="checkbox"><span><strong>Visão de ponta a ponta:</strong> a jornada cobre desde a motivação inicial até o resultado após o uso?</span></label>
    <label><input type="checkbox"><span><strong>Curva emocional realista:</strong> estão representados momentos de dúvida, frustração e atrito?</span></label>
    <label><input type="checkbox"><span><strong>Pontos de contato identificados:</strong> telas, botões, modais e mensagens estão nomeados?</span></label>
    <label><input type="checkbox"><span><strong>Oportunidades conectadas:</strong> os pontos de atrito têm recomendações associadas?</span></label>
    <label><input type="checkbox"><span><strong>Lógica contínua:</strong> as transições seguem a ordem natural em que a pessoa executa a tarefa?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Avaliação de cenários e HTA

<div class="ihc-checklist" data-checklist="hta-pdf">
  <div class="checklist-heading">
    <strong>Checklist: cenário e diagrama HTA</strong>
    <span data-progress-label>0 de 5 itens concluídos</span>
  </div>
  <progress max="5" value="0" aria-label="Progresso da avaliação de cenário e HTA"></progress>
  <fieldset>
    <legend>Revise a narrativa e a decomposição das tarefas</legend>
    <label><input type="checkbox"><span><strong>Narrativa do cenário:</strong> descreve objetivo, planejamento, ações, eventos inesperados e avaliação do resultado?</span></label>
    <label><input type="checkbox"><span><strong>Decomposição em operações:</strong> cada subtarefa define entrada, ação física e feedback?</span></label>
    <label><input type="checkbox"><span><strong>Regra de parada:</strong> etapas com risco de erro para uma pessoa sem treino foram detalhadas?</span></label>
    <label><input type="checkbox"><span><strong>Avaliação de pistas:</strong> há pistas visuais claras que orientam a próxima ação sem gerar dúvida?</span></label>
    <label><input type="checkbox"><span><strong>Prevenção ativa de erro:</strong> a modelagem prevê como evitar um erro e se recuperar dele?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>
