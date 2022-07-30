
let sumarValor=document.getElementById("sumarValor");
let restaValores=document.getElementById("restaValores");
let  multiplicarValore=document.getElementById("multiplicarValore");
let dividirValores=document.getElementById("dividirValores");
// //----------------Sumar:

sumarValor.addEventListener("click", (e)=> {
    e.preventDefault()
 let n1= document.getElementById("input1").value;
 let n2= document.getElementById("input2").value;
   
    if (n1 >0 && n2>0){

     resultado=n1-(-n2);
     document.getElementById("modal").style.display = "block".display="flex";
    document.getElementById("h2").innerHTML = `La suma de ${n1} y ${n2} = ${resultado}`;
    }
    else {
        alert(`Valide N1 y N2 deben ser valores ENTEROS POSITIVOS `)
     }
  })
//resta de datos ingresados por usuario
  restaValores.addEventListener("click",(e)=>{
   e.preventDefault()
  
   let n1= document.getElementById("input1").value;
   let n2= document.getElementById("input2").value;
   console.log(n1)
   console.log(n2);
   if (n1 >0 && n2>0){
      resultado=n1-n2;
      document.getElementById("modal").style.display = "block".display="flex";
    document.getElementById("h2").innerHTML = `La resta de ${n1} y ${n2} = ${resultado}`;
   }
   else {
      alert(`Valide N1 y N2 deben ser valores ENTEROS POSITIVOS `)
   }

  })
//multiplica  dos valores 
  multiplicarValore.addEventListener("click",(e)=>{
   let n1= document.getElementById("input1").value;
   let n2= document.getElementById("input2").value;

   if (n1 >0 && n2>0){
      resultado=n1*n2;
      document.getElementById("modal").style.display = "block".display="flex";
    document.getElementById("h2").innerHTML = `La multiplicación de ${n1} y ${n2} = ${resultado}`;
   }
   else {
      alert(`Valide N1 y N2 deben ser valores ENTEROS POSITIVOS `)
   }


  })
  //divide dos valores 
  dividirValores.addEventListener("click",(e)=>{
   let n1= document.getElementById("input1").value;
   let n2= document.getElementById("input2").value;

   if (n1 >0 && n2>0){
      resultado=n1/n2;
      document.getElementById("modal").style.display = "block".display="flex";
    document.getElementById("h2").innerHTML = `La división de ${n1} y ${n2} = ${resultado}`;
   }
   else {
      alert(`Valide N1 y N2 deben ser valores ENTEROS POSITIVOS `)
   }

  })

  

