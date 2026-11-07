(() => {
  const prefix = "guia-ihc:";

  function reportStatus(element, message, isError = false) {
    element.textContent = message;
    element.classList.toggle("storage-error", isError);
  }

  document.querySelectorAll("[data-checklist]").forEach((checklist) => {
    const id = checklist.dataset.checklist;
    const storageKey = `${prefix}checklist:${id}`;
    const checkboxes = [...checklist.querySelectorAll('input[type="checkbox"]')];
    const progress = checklist.querySelector("progress");
    const label = checklist.querySelector("[data-progress-label]");
    const status = checklist.querySelector("[data-checklist-status]");
    const reset = checklist.querySelector("[data-reset-checklist]");
    let storageAvailable = true;

    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved !== null) {
        const values = JSON.parse(saved);
        if (!Array.isArray(values)) {
          throw new Error("Formato de checklist salvo inválido.");
        }
        checkboxes.forEach((checkbox, index) => {
          checkbox.checked = values[index] === true;
        });
      }
    } catch (error) {
      storageAvailable = false;
      reportStatus(status, "Não foi possível restaurar este checklist. Ele continua utilizável nesta página.", true);
      console.error("Falha ao restaurar checklist local:", error);
    }

    function updateChecklist(save = true) {
      const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
      const progressUnit = checklist.dataset.progressUnit === "etapas" ? "etapas concluídas" : "itens concluídos";
      progress.value = completed;
      label.textContent = `${completed} de ${checkboxes.length} ${progressUnit}`;

      if (save && storageAvailable) {
        try {
          window.localStorage.setItem(storageKey, JSON.stringify(checkboxes.map((checkbox) => checkbox.checked)));
          reportStatus(status, "Progresso salvo apenas neste navegador.");
        } catch (error) {
          storageAvailable = false;
          reportStatus(status, "Não foi possível salvar neste navegador; as marcações permanecem enquanto esta página estiver aberta.", true);
          console.error("Falha ao salvar checklist local:", error);
        }
      }
    }

    checkboxes.forEach((checkbox) => checkbox.addEventListener("change", () => updateChecklist()));
    reset.addEventListener("click", () => {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      if (storageAvailable) {
        try {
          window.localStorage.removeItem(storageKey);
          reportStatus(status, "Marcações removidas.");
        } catch (error) {
          storageAvailable = false;
          reportStatus(status, "Não foi possível remover o progresso salvo; as marcações desta página foram limpas.", true);
          console.error("Falha ao limpar checklist local:", error);
        }
      }
      updateChecklist(false);
    });

    updateChecklist(false);
  });

  document.querySelectorAll("[data-worksheet]").forEach((form) => {
    const id = form.dataset.worksheet;
    const storageKey = `${prefix}worksheet:${id}`;
    const fields = [...form.querySelectorAll("textarea[name]")];
    const status = form.querySelector("[data-worksheet-status]");
    const clear = form.querySelector("[data-clear-worksheet]");
    let storageAvailable = true;

    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved !== null) {
        const values = JSON.parse(saved);
        if (typeof values !== "object" || values === null || Array.isArray(values)) {
          throw new Error("Formato de rascunho salvo inválido.");
        }
        fields.forEach((field) => {
          if (typeof values[field.name] === "string") {
            field.value = values[field.name];
          }
        });
      }
    } catch (error) {
      storageAvailable = false;
      reportStatus(status, "Não foi possível restaurar o rascunho. Os campos continuam disponíveis nesta página.", true);
      console.error("Falha ao restaurar rascunho local:", error);
    }

    function saveWorksheet() {
      if (!storageAvailable) return;
      try {
        const values = Object.fromEntries(fields.map((field) => [field.name, field.value]));
        window.localStorage.setItem(storageKey, JSON.stringify(values));
        reportStatus(status, "Rascunho salvo apenas neste navegador.");
      } catch (error) {
        storageAvailable = false;
        reportStatus(status, "Não foi possível salvar neste navegador; o rascunho permanece enquanto esta página estiver aberta.", true);
        console.error("Falha ao salvar rascunho local:", error);
      }
    }

    fields.forEach((field) => field.addEventListener("input", saveWorksheet));
    clear.addEventListener("click", () => {
      fields.forEach((field) => {
        field.value = "";
      });
      if (storageAvailable) {
        try {
          window.localStorage.removeItem(storageKey);
          reportStatus(status, "Rascunho removido.");
        } catch (error) {
          storageAvailable = false;
          reportStatus(status, "Não foi possível remover o rascunho salvo; os campos desta página foram limpos.", true);
          console.error("Falha ao limpar rascunho local:", error);
        }
      }
    });
  });
})();
