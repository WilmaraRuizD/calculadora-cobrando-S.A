
let sumarValor=document.getElementById("sumarValor");
let restaValores=document.getElementById("restaValores");
let  multiplicarValore=document.getElementById("multiplicarValore");
let dividirValores=document.getElementById("dividirValores");
let primoValores=document.getElementById("primoValores");
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

 primoValores.addEventListener("click",(e)=>{
   let n1= document.getElementById("input1").value;
   let n2= document.getElementById("input2").value;
 

   if(n1>1 && n1<n2){
     
      let primos=[];
      let hayprimo=[];

      for(let i= 1;i<=n2 + 1 ;i++){
         hayprimo.push(true);
      }

      console.log(hayprimo.length);

      for(let i=n1;i<=n2;++i){
         if (hayprimo[i]){
               primos.push(i);

               //criba de eratóstenes:
               //2 3 4 5 6 7 8 9 ...n2
               //2 3 5 7 9 ... n2
               //2 3 5 7 .. n2
               for (let j=1; j*i <= n2 ; ++j){
                  hayprimo[i*j]=false;
               }
             }
            }
           
            document.getElementById("modal").style.display = "block".display="flex";
            document.getElementById("h2").innerHTML = `Los de numeros primos de ${n1} al ${n2} = ${primos}`;
            console.log(primos)
            return primos
         

         } else {
            console.log(`${n1} y ${n2} `)
   alert("numero N1 debe ser mayor que 1 y N2 debe ser mayor que  N1  ")
}
})

   