document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".questions-items-item_header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      document.querySelectorAll(".questions-items_item").forEach(el => {
        if (el !== item) el.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });
});
