const toc = {
  init() {
    const a = document.getElementsByClassName("toc-link");
    console.log(a);
    const content = document.getElementsByClassName("content");
    for (let i = 0; i < a.length; i++) {
      a[i].addEventListener("click", () => {
        a[i].style = "background-color:#66afef;color:#fff";
        content.style = { animation: ({ scrollTop: a[i].herf.offset().top }, 30000) };
        content.style = "transition: all 4s ease-in-out;";
      });
    }
  }
};
