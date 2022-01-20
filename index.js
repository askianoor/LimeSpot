(function () {
  document
    .getElementById("open-dialog-button")
    .addEventListener("click", () => {
      document.getElementById("dlg").dialog("open");
    });

  document
    .getElementById("close-dialog-button")
    .addEventListener("click", (event) => {
      document.getElementById("dlg").dialog("close");
    });

  document
    .getElementById("popover-button")
    .addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("popover").popover("open");
    });

  document.getElementById("successButton").addEventListener("click", () => {
    document.getElementById("dlgResult").dialog("open");
  });

  document.getElementById("cancelButton").addEventListener("click", () => {
    document.getElementById("popover").popover("close");
  });

  document.getElementById("input").addEventListener("change", (event) => {
    const value = event.target.value;
    document.getElementById("selectedName").innerText = value;
  });
})();
