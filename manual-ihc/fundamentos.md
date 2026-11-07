# Fundamentos de IHC, UX e UI

## Interação Humano-Computador

Interação Humano-Computador (IHC) estuda como as pessoas interagem com sistemas tecnológicos. Avaliar uma interface significa observar se ela ajuda alguém a realizar tarefas reais, levando em conta seu contexto e suas capacidades.

Ao percorrer uma interface, pergunte:

- **Facilidade:** é simples navegar, clicar, preencher e buscar?
- **Adaptação:** a experiência funciona em diferentes telas e contextos cotidianos?
- **Respeito às capacidades:** há alternativas para limitações visuais, motoras ou cognitivas?
- **Utilidade:** a tecnologia resolve a necessidade sem etapas desnecessárias?
- **Linguagem:** os textos são claros para o público a que se destinam?

## UX e UI: objetivos que se complementam

**User Experience (UX)** considera a experiência ao longo da jornada: utilidade, esforço, segurança e conclusão da tarefa. **User Interface (UI)** é a camada com que a pessoa interage: elementos visuais, controles, conteúdo e feedback.

| Aspecto | Pergunta de avaliação |
|---|---|
| Conclusão da tarefa (UX) | A pessoa chega ao resultado sem obstáculos desnecessários? |
| Feedback (UI) | A interface responde ao enviar, carregar ou concluir uma ação? |
| Conforto visual (UI) | Cores, tipografia e espaçamento facilitam a leitura? |
| Hierarquia (UI) | A ação principal se destaca sem competir com elementos secundários? |
| Recuperação de erros (UX) | A mensagem explica o que aconteceu e como continuar? |

Uma aparência atraente, por si só, não garante uma experiência útil; da mesma forma, um fluxo eficiente não compensa uma interface ilegível.

## Engenharia Semiótica

Na Engenharia Semiótica, a interface funciona como porta-voz da equipe de design: comunica para que serve o sistema e como deve ser usado. Avalie se:

- o propósito da página fica claro à primeira vista;
- os rótulos do menu indicam para onde levam;
- a resposta a cada ação é coerente e compreensível;
- instruções suficientes estão disponíveis para tarefas comuns.

## Design Centrado no Usuário (DCU)

O DCU parte das necessidades, tarefas, capacidades e contexto das pessoas. Em vez de presumir o que elas precisam, a equipe investiga, projeta, testa e revisa a solução.

- Solicite apenas os dados necessários para a tarefa.
- Ofereça ajuda fácil de localizar.
- Evite perder dados quando a pessoa volta ou comete um erro.
- Prefira linguagem compreensível e inclusiva.
- Baseie decisões em observações e testes, não apenas em perfis imaginados.

Na página de [design centrado em pessoas](design-centrado.md) há modelos preenchíveis para apoiar essa investigação.

## Acessibilidade e normas

O material relaciona acessibilidade a WCAG e à Lei Brasileira de Inclusão (LBI), ergonomia à ISO 9241 e recomenda atenção a:

- textos alternativos que transmitam o propósito das imagens informativas;
- contraste suficiente entre texto, controles e fundo;
- operação completa por teclado e foco previsível;
- zoom sem perda de conteúdo nem rolagem horizontal desnecessária;
- estrutura semântica compreensível por tecnologias assistivas;
- controles com área adequada e saída clara de diálogos.

As perguntas deste guia são uma introdução, não uma reprodução integral dos critérios normativos. Veja também as [ferramentas e limites da avaliação](acessibilidade.md).

## Consistência e sistemas de design

Guias de estilo e sistemas de design compartilham regras e componentes entre design e desenvolvimento. Eles ajudam a manter botões, links, cores, padrões de navegação e identidade consistentes entre as telas. Use convenções conhecidas quando forem apropriadas ao contexto e não comprometerem a acessibilidade.

## Regras visuais e sensoriais

O PDF recomenda atenção à legibilidade, aos alvos de interação, à hierarquia de títulos e à redução de ruído visual. Na prática:

- dê espaço e tamanho adequados a botões e links;
- destaque títulos e ações sem depender apenas de cor;
- evite animação, pop-ups e elementos que interrompam a tarefa sem necessidade;
- mantenha controles e padrões consistentes;
- permita cancelar e sair de fluxos sem becos sem saída.

## Checklists interativos: como aplicar e avaliar

Percorra a interface usando a tarefa e o público a que ela se destina; marque um item depois de revisá-lo com evidências. **Marcar um item registra que foi verificado, não que passou.** Registre os problemas encontrados fora do checklist. As seleções são salvas localmente neste navegador.

### IHC: interação e contexto

<div class="ihc-checklist" data-checklist="ihc-fundamentos">
  <div class="checklist-heading">
    <strong>Avaliação prática de IHC</strong>
    <span data-progress-label>0 de 5 itens concluídos</span>
  </div>
  <progress max="5" value="0" aria-label="Progresso da avaliação prática de IHC"></progress>
  <fieldset>
    <legend>Observe a interação na tarefa real</legend>
    <label><input type="checkbox"><span>A pessoa consegue navegar, clicar, preencher e buscar sem confusão ou frustração desnecessária?</span></label>
    <label><input type="checkbox"><span>A interface se adapta às telas e aos contextos cotidianos do público?</span></label>
    <label><input type="checkbox"><span>Há caminhos simples que respeitam limitações visuais, motoras ou cognitivas?</span></label>
    <label><input type="checkbox"><span>A tecnologia resolve o problema sem criar etapas inúteis?</span></label>
    <label><input type="checkbox"><span>A linguagem é clara para quem usa o sistema?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### UX e UI: tarefa, feedback e recuperação

<div class="ihc-checklist" data-checklist="ux-ui">
  <div class="checklist-heading">
    <strong>Avaliação de UX e UI</strong>
    <span data-progress-label>0 de 5 itens concluídos</span>
  </div>
  <progress max="5" value="0" aria-label="Progresso da avaliação de UX e UI"></progress>
  <fieldset>
    <legend>Teste o percurso principal e suas respostas</legend>
    <label><input type="checkbox"><span>A pessoa conclui a tarefa principal em tempo razoável e sem barreiras evitáveis?</span></label>
    <label><input type="checkbox"><span>A interface dá feedback perceptível após ações, inclusive ao carregar ou concluir?</span></label>
    <label><input type="checkbox"><span>Cores, tipografia e espaçamento tornam a leitura confortável?</span></label>
    <label><input type="checkbox"><span>A ação principal se destaca em relação aos elementos secundários?</span></label>
    <label><input type="checkbox"><span>Quando ocorre uma falha, a interface explica como se recuperar?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Engenharia Semiótica: o diálogo da interface

<div class="ihc-checklist" data-checklist="semiotica">
  <div class="checklist-heading">
    <strong>Avaliação do diálogo da interface</strong>
    <span data-progress-label>0 de 4 itens concluídos</span>
  </div>
  <progress max="4" value="0" aria-label="Progresso da avaliação do diálogo da interface"></progress>
  <fieldset>
    <legend>Verifique o que a interface comunica</legend>
    <label><input type="checkbox"><span>Ao abrir a página, a pessoa entende seu propósito e o que pode fazer?</span></label>
    <label><input type="checkbox"><span>Os menus e rótulos explicam para onde levam sem exigir adivinhação?</span></label>
    <label><input type="checkbox"><span>O sistema responde às ações de forma coerente e compreensível?</span></label>
    <label><input type="checkbox"><span>As instruções na própria tela permitem realizar tarefas básicas?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### DCU: necessidades, formulários e suporte

<div class="ihc-checklist" data-checklist="dcu-fundamentos">
  <div class="checklist-heading">
    <strong>Avaliação de design centrado no usuário</strong>
    <span data-progress-label>0 de 5 itens concluídos</span>
  </div>
  <progress max="5" value="0" aria-label="Progresso da avaliação de design centrado no usuário"></progress>
  <fieldset>
    <legend>Compare a interface com as necessidades do público</legend>
    <label><input type="checkbox"><span>Os caminhos oferecidos ajudam a pessoa a alcançar seus objetivos?</span></label>
    <label><input type="checkbox"><span>Os formulários solicitam apenas os dados necessários à tarefa?</span></label>
    <label><input type="checkbox"><span>Ajuda, suporte ou FAQ são fáceis de localizar quando a pessoa fica em dúvida?</span></label>
    <label><input type="checkbox"><span>Voltar ou corrigir uma ação evita perder dados já preenchidos?</span></label>
    <label><input type="checkbox"><span>A linguagem é compreensível para diferentes perfis de público?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Acessibilidade: navegação, leitura e saída

Este checklist reúne as perguntas de acessibilidade das páginas 9–10 do PDF. Para uma análise prática, combine inspeção visual, teclado, zoom e tecnologia assistiva; veja também os [testes por ferramenta](acessibilidade.md#checklists-do-pdf).

<div class="ihc-checklist" data-checklist="acessibilidade-fundamentos">
  <div class="checklist-heading">
    <strong>Inspeção de acessibilidade da interface</strong>
    <span data-progress-label>0 de 9 itens concluídos</span>
    <span class="pdf-page-reference">PDF, pp. 9–10</span>
  </div>
  <progress max="9" value="0" aria-label="Progresso da inspeção de acessibilidade da interface"></progress>
  <fieldset>
    <legend>Inspecione a página com diferentes modos de uso</legend>
    <label><input type="checkbox"><span>Imagens informativas têm texto alternativo que comunica sua informação sem repetir o título.</span></label>
    <label><input type="checkbox"><span>Texto e controles têm contraste suficiente contra o fundo.</span></label>
    <label><input type="checkbox"><span>É possível navegar e operar menus e controles por teclado, sem mouse.</span></label>
    <label><input type="checkbox"><span>O foco do teclado pode entrar e sair de campos e menus sem ficar preso.</span></label>
    <label><input type="checkbox"><span>A ordem de foco ao usar Tab segue um percurso lógico e previsível.</span></label>
    <label><input type="checkbox"><span>Títulos e controles têm estrutura que permite a leitura e navegação por tecnologia assistiva.</span></label>
    <label><input type="checkbox"><span>Com zoom ampliado, o texto permanece disponível sem rolagem horizontal desnecessária.</span></label>
    <label><input type="checkbox"><span>Links e botões têm tamanho e espaçamento que ajudam a evitar cliques acidentais.</span></label>
    <label><input type="checkbox"><span>Diálogos e fluxos oferecem saída visível por Fechar ou Cancelar e, quando aplicável, pela tecla Esc.</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### Guias de estilo e Design System

<div class="ihc-checklist" data-checklist="design-system">
  <div class="checklist-heading">
    <strong>Avaliação de consistência visual</strong>
    <span data-progress-label>0 de 4 itens concluídos</span>
  </div>
  <progress max="4" value="0" aria-label="Progresso da avaliação de consistência visual"></progress>
  <fieldset>
    <legend>Compare componentes e páginas</legend>
    <label><input type="checkbox"><span>Botões com a mesma função mantêm cor, formato e comportamento consistentes?</span></label>
    <label><input type="checkbox"><span>Links têm um destaque visual consistente e fácil de reconhecer?</span></label>
    <label><input type="checkbox"><span>As páginas compartilham um padrão de identidade visual coerente?</span></label>
    <label><input type="checkbox"><span>Ícones e outros elementos comuns usam convenções conhecidas pelo público?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

### UI: conforto visual e áreas de interação

<div class="ihc-checklist" data-checklist="regras-ui">
  <div class="checklist-heading">
    <strong>Avaliação de elementos sensoriais e visuais</strong>
    <span data-progress-label>0 de 4 itens concluídos</span>
  </div>
  <progress max="4" value="0" aria-label="Progresso da avaliação de elementos sensoriais e visuais"></progress>
  <fieldset>
    <legend>Revise a leitura e a apresentação visual</legend>
    <label><input type="checkbox"><span>O texto principal tem tamanho confortável (12–14 pt ou mais, conforme a pergunta do PDF) e não depende de letras muito pequenas?</span></label>
    <label><input type="checkbox"><span>Links e botões têm espaço ao redor suficiente para reduzir toques e cliques acidentais?</span></label>
    <label><input type="checkbox"><span>A interface evita excesso de cores chamativas, elementos piscantes e pop-ups que bloqueiem o conteúdo?</span></label>
    <label><input type="checkbox"><span>Títulos principais, subtítulos e texto corrido têm hierarquia visual clara?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

!!! note "Referências e limites"
    As perguntas resumem a seção correspondente do PDF; elas apoiam a avaliação, mas não garantem conformidade com normas. O tamanho em pontos mencionado é uma recomendação do material, não substitui a avaliação de legibilidade em diferentes dispositivos e condições de uso.
