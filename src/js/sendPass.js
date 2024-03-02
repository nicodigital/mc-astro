function sendPass(){

    const passForm = document.querySelector("#passForm");
    const result = document.getElementById('result');
  
    if ( passForm ) {

      // const case_id   = passForm.querySelector('[name=case_id]').value;
      const case_slug = passForm.querySelector('[name=case_slug]').value;
      const ajax_url = 'https://martincorbo.com/api/wp-json/wp/v2/cases?slug=' + case_slug;
      let pass = '';
      // console.log(ajax_url)

      passForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        fetch( ajax_url , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        }).then(async (response) => {

            let json = await response.json();

            if (response.status == 200) {

              const user_pass = passForm.querySelector('[name=user_pass]').value;
              pass = json[0].acf.pass;

              if( user_pass === pass ){
                window.location.href ="/case/"+ case_slug;
              }else{
                result.innerHTML = "😭 Wrong password. Try again.";
              }

            } else {
              console.log(response);
              // result.innerHTML = json.message;
            }

          }).catch(error => {

            console.log(error);
            result.innerHTML = "😭 Wrong password. Try again.";

          }).then(function () {

            // passForm.reset();
            // setTimeout(() => {
            //   result.style.display = "none";
            // }, 3000);

          });

      })

    }


}

export default sendPass