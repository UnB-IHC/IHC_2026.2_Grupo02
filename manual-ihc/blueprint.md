# Capítulo 6 — Service Blueprint

O Service Blueprint amplia a visão da jornada para relacionar a experiência visível da pessoa (**frontstage**) aos processos, sistemas e equipes que a sustentam (**backstage**).

## O que mapear

1. **Etapas da jornada:** os momentos em que a pessoa tenta alcançar seu objetivo.
2. **Ações da pessoa:** o que faz e o que espera receber.
3. **Pontos de contato visíveis:** telas, mensagens, formulários, confirmações ou atendimento.
4. **Ações de bastidores:** processos e decisões que viabilizam cada interação.
5. **Sistemas e suporte:** serviços, dados, integrações e equipes envolvidos.
6. **Falhas e oportunidades:** riscos internos que podem aparecer como atrito para a pessoa.

## Perguntas para avaliar o serviço

- As telas e os fluxos correspondem à ordem natural da jornada?
- A interface continua responsiva enquanto o sistema processa uma solicitação?
- Dados já informados são reutilizados quando apropriado, sem pedir preenchimento repetido?
- Uma falha de servidor ou conexão gera uma mensagem compreensível e uma forma de continuar?
- Os processos de bastidores evitam que erros internos apareçam como telas vazias ou mensagens técnicas?

## Checklist interativo do PDF

Marque cada pergunta depois de revisá-la com evidências; marcar registra a revisão, não a aprovação do serviço.

<div class="ihc-checklist" data-checklist="blueprint-pdf">
  <div class="checklist-heading">
    <strong>Avaliação do Service Blueprint</strong>
    <span data-progress-label>0 de 4 itens concluídos</span>
  </div>
  <progress max="4" value="0" aria-label="Progresso da avaliação do Service Blueprint"></progress>
  <fieldset>
    <legend>Verifique as perguntas apresentadas no material</legend>
    <label><input type="checkbox"><span>As telas e os fluxos correspondem com precisão à sequência da jornada?</span></label>
    <label><input type="checkbox"><span>Erros nos bastidores são tratados sem congelar a tela da pessoa?</span></label>
    <label><input type="checkbox"><span>O serviço evita solicitar novamente dados já coletados em etapas anteriores?</span></label>
    <label><input type="checkbox"><span>Falhas de servidor ou conexão são identificadas no backstage e explicadas claramente na interface, sem tela em branco ou erro HTTP genérico?</span></label>
  </fieldset>
  <div class="checklist-actions">
    <p data-checklist-status role="status" aria-live="polite"></p>
    <button type="button" class="md-button" data-reset-checklist>Limpar marcações</button>
  </div>
</div>

## Exemplo de tabela para planejamento

| Etapa | Ação da pessoa | Frontstage | Backstage / suporte | Risco | Resposta proposta |
|---|---|---|---|---|---|
| Início | Começa a tarefa | Página inicial e chamada principal | Carregamento de opções disponíveis | Página demora ou não informa o estado | Mostrar progresso e permitir tentar novamente |
| Execução | Envia dados | Formulário e confirmação | Validação e processamento | Erro técnico sem contexto | Preservar dados e explicar próximos passos |
| Conclusão | Confere o resultado | Resumo ou comprovante | Registro e notificação | Sucesso não é confirmado | Exibir confirmação acessível e persistente |

O exemplo é um ponto de partida: substitua etapas genéricas por observações do serviço real.
