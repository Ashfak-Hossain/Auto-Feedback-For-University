(function () {
  const checkRadiosAndSubmit = () => {
    [...document.querySelectorAll('input[type="radio"][value="5"]')].forEach((r) => (r.checked = true));

    document.getElementById("Comment").value = "awesome";
    document.forms[0].submit();
  };

  checkRadiosAndSubmit();
})();
