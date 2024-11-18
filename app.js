window.addEventListener('load', ()=>{

    let heading = document.querySelector("header h1");
    heading.style.color = "#fff";
    heading.style.transition = "all 2s ease-in-out";

    document.querySelector("button#btn").addEventListener("click", (event)=>{
        event.preventDefault();
        const searchVal = document.querySelector("input#searchField").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        const resultDiv = document.querySelector("div#result");

        let cleanUrl = `superheroes.php?query= ${searchVal}`.replace( /"[^-0-9+&@#/%?=~_|!:,.;\(\)]"/g,'');

        fetch(cleanUrl, {method : 'GET'})
        .then(resp => resp.text())
        .then(elements => {
            let h3El = document.createElement("h3");
            let h3Text = document.createTextNode("RESULT");
            h3El.appendChild(h3Text);
            let hrEl= document.createElement("hr");
            resultDiv.innerHTML = '';
            resultDiv.innerHTML = elements;
            resultDiv.prepend(h3El, hrEl);
            
        })

      
    });

    document.querySelector("input#searchField").onblur = ()=>{
        document.querySelector("input#searchField").style.borderColor = "#FF3232";
    }

});