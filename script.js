// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
// EL RESULTADO

function puntouno(x,z){
    x=parseInt(10)
    z=parseInt(20)
    let resultado;
    if (x<z){
      resultado = z/x
    } else {
       resultado = x*z
    }
	return resultado
}
console.log(puntouno())


// 2)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
// ES (SI ES STRING, NUMBER, BOOLEAN, ETC)

function puntodos(a){
    a=false;
    return typeof(a)
}
console.log(puntodos())

// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN

function puntotres(a,b,c,d,e,f){
    a=parseInt(10) ; b=parseInt(30) ;c=parseInt(15)
    d=parseInt(3) ; e=parseInt(4) ; f=parseInt(2)
    let ayb=a+b; let restac = ayb-c; let pord = restac*d; let divididoe = pord/e; let potencia= divididoe**f;
    console.log(`Resultado de a+b ${ayb}`); console.log(`Al resultado le restamos c y da: ${restac}`); console.log(`Que multiplicado por d nos da: ${pord}`); 
    console.log(`Y dividido e da como resultado: ${divididoe}`); console.log(`Y con la potencia ${d} da como resultado: ${potencia}`);
	return potencia
}
console.log(puntotres())
// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.

function puntocuatro(array1){
    array1=[22,34,"juancho","rafa","Monte",false,true,"Keila",1,19,"Pedro"]
	let nuevoarray=[]
    nuevoarray.push(array1[array1.length-3])
    nuevoarray.push(array1[array1.length-2])
    nuevoarray.push(array1[array1.length-1])
    return nuevoarray
}
console.log(puntocuatro())
// // 5)---------
// // IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// // Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO

function puntocinco(array2){
	array2 = ["Fernando", "Zoe", "Keila", "Adrián", "Franco", "Marcos", "Vanina", "Daniel", "Valeria"]
    console.log(`Arreglo sin ordenar: [${array2}]`)
    return `Arreglo ya ordenado: [${array2.sort()}]`
}
console.log(puntocinco())
// // 6)---------
// // IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// // LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// // RETORNAR EL ARRAY FILTRADO

function puntoseis(a,b){
    a = [1,2,3,2,4,2,5,2,6,2,7,2]
    b = 2  

    return a.filter(valor=>(valor !=b))  
}
console.log(puntoseis())
// // 7)---------
// // IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// // RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// // FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

function puntosiete(a){
    a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let suma = 0; let prom = 0;
    function sumado(a){
        for (let i=0;i<a.length;i++){
            suma+=a[i];
        }
        return suma;
    } console.log(sumado(a));
    function promedio(a){
        prom=(sumado(suma)/(a.length))
        return prom
    }    console.log(promedio(a))

}
console.log(puntosiete())
// // 8)---------
// // IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// // COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// // AL VALOR DEL STRING DEL ARGUMENTO

function puntoocho(objeto1, str){
    objeto1= {
        "tiene avión": "si",
        sobrenombre: "Chapo",
        trabajo: "dice que es granjero pero no le creo"
    }
    str = "dice que es granjero pero no le creo"
    for (str in objeto1) {
        console.log(objeto1)
    }
	return 
}
console.log(puntoocho())
// // Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
// // 	Retorna 'Rosa'

// // 9)---------
// // IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// // LA SUMA DE TODOS SUS VALORES.

// function puntonueve({}){

// 	return
// }
// console.log(puntonueve())
