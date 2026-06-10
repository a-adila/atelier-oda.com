/////////////////////////////////////
// DOWNLOAD BUTTON HOVER ON MOBILE //
/////////////////////////////////////
const downloadButton = document.querySelector(".btn-portfolio");
if (downloadButton) {
  if (window.innerWidth < 768) {
    let isVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
        } else {
          isVisible = false;
        }
      },
      { threshold: 0 },
    );

    observer.observe(downloadButton);

    window.addEventListener("scroll", () => {
      if (isVisible) {
        const rect = downloadButton.getBoundingClientRect();
        const buttonCenter = (rect.top + rect.bottom) / 2;
        const screenCenter = window.innerHeight / 2;
        const isNearCenter = Math.abs(buttonCenter - screenCenter) < 60;

        if (isNearCenter) {
          downloadButton.classList.add("active");
        } else {
          downloadButton.classList.remove("active");
        }
      }
    });
  }
}
