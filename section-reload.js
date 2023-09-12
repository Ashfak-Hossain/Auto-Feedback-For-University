(function () {
  const reload = () => {
    [...document.querySelectorAll("label > a")].forEach((link) => link.click());
  };
  reload();
})();
