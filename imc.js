// js para calcular triangulo
//call form
const formulario = document.querySelector("#formulario");

// activate button submit to execute program
formulario.addEventListener("submit", validarFormulario);

//create function validateForm
function validarFormulario(e)
{
    e.preventDefault();
    //must capture values on inputs
    //from each triangle
    const altura = document.querySelector("#heightuser").value
    const peso = document.querySelector("#weightuser").value

    
    //pass result into html using id on div msn
    const msn = document.getElementById("msn");
    const msnx = document.getElementById("msnx");

    //do the programming to know what type of triangle is
    var imclisto;
    const estaturacm = Number(altura)/100;
    imclisto = Number(peso) / (Number(altura)*Number(altura));
    msnx.innerHTML = imclisto;

    if(imclisto <= 18.5)
    {
        msn.innerHTML = "Su peso es menor al normal";
    }else{
        if(imclisto >= 18.5 && imclisto <=24.9)
        {
            msn.innerHTML = "Su peso es normal";
        }else{
            if(imclisto >= 25.0 && imclisto <= 29.9)
            {
                msn.innerHTML = "Su peso es superior al normal";
            }else{
                msn.innerHTML = "Usted tiene obesidad";
            }
        }
       
    }
    
    

}
