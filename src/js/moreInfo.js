function moreInfo(){

  const body = document.querySelector('body');
  const btn_more_info = document.querySelectorAll(".more-info");
  const information = document.querySelector(".information");

    btn_more_info.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // e.preventDefault();

        let btn_info_style = window.getComputedStyle(information);

        if (btn_info_style.display === "none") {

          window.scrollTo({ top: 0 });
          information.style.display = "grid";
          body.dataset.info = "on";

        } else {
          information.style.display = "none";
          body.dataset.info = "off";
        }
        
      });
    });
    
}

export default moreInfo;