// Variables 1️⃣

/* ¿Qué es una variable y para qué sirve?
    Una variable es un espacio dedicado en memoria, que sirve para guardar un dato o valor sin importar el tipo de este. */

/* ¿Cuál es la diferencia entre declarar e inicializar una variable?
    Declarar una variable se podria decir como crear este espacio dedicado en memoria (crear y dar nombre a esta variable) e inicializar una variable digamos que darle un valor a la variable. */

/* ¿Cuál es la diferencia entre sumar números y concatenar strings?
    Sumar numeros es hacer una operacion matemática con cifras numericas (es sumar dos tipos de datos númericos) y concatenar strings es juntar cadenas de textos (es sumar dos tipos de datos cadenas de texto, pero como no se suman, lo que hacen es juntarse; es decir, pasan de ser dos cadenas de texto a una, por eso se usa el verbo concatenar). */

/* ¿Cuál operador me permite sumar o concatenar?
    El operador que te permite sumar o concatenar es el simbolo matematica de suma "+". */

// Variables 2️⃣

/* 

Nombre --> string
Apellido --> string
Nombre de usuario en Platzi --> string
Edad --> number
Correo electrónico --> string
Mayor de edad --> boolean
Dinero ahorrado --> number
Deudas --> number

*/

// Variables 3️⃣

var name = "Gonzalo"

var lastName = "Pozo"

var platziUser = "GonzaloPozo"

var age = "17"

var email = "gonzalopozo2005@gmail.com"

var adult = false

var savedMoney = 50

var debts = 240

// Variables 4️⃣

var fullName = name + lastName

console.log(fullName);


var realMoney = savedMoney - debts

console.log(realMoney);

// Funciones 1️⃣

/* ¿Qué es una función?
    Es un conjunto de acciones que nos permitirá reutilizar en nuestro código y siempre deben devolver un resultado. */

/* ¿Cuándo me sirve usar una función en mi código?
    Cuando una parte del codigo se repite varias veces. */

/* ¿Cuál es la diferencia entre parámetros y argumentos de una función?
    Basicamente los parametros son las variables internas entre comillas, que podemos decalar y usar en una función; mientras que los argumentos son estos mismo parámetros pero llamados de otra forma, porque los argumentos se usan al invocar una función (los parametros son las variables internas que creamos en los parentesis "()" de las funciones y los argumentos son los valores que les damos a estas variables cuando las invocamos). */

// Funciones 2️⃣

/* Forma antigua usando la concatenación */
function nameNickName(name2, lastName2, nickName) {
    console.log("Mi nombre es " + name2 + " " + lastName2 +", pero prefiero que me digas " + nickName + ".");
}

/* Forma nueva usando las template literals (template strings) */
function nameNickName3(name2, lastName2, nickName) {
    return console.log(`Mi nombre es ${name2} ${lastName2}, pero prefiero que me digas ${nickName}.`);
}

/* Forma antigua usando la concatenación */
function nameNickName2(fullName2, nickName) {
    console.log("Mi nombre es " + fullName2 +", pero prefiero que me digas " + nickName + ".")
}

/* Forma nueva usando las template literals (template strings) */
function nameNickName4(fullName2, nickName) {
    console.log(`Mi nombre es ${fullName2}, pero prefiero que me digas ${nickName}.`)
}

nameNickName("Gonzalo", "Pozo", "ganster")

nameNickName3("Gonzalo", "Pozo", "ganster")

nameNickName2("Gonzalo Pozo", "ganster")

nameNickName4("Gonzalo Pozo", "ganster")

// Condicionales 1️⃣

/* ¿Qué es un condicional?
    Una estructura que nos sirve para evaluar si es True o False. */

/* ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    Existen el "if" y el switch. Con "if" podemos evaluar diferebtes casos independientemente, mientras que con "switch" se evaulua una exprension a traves de varios casos. */

/*¿Puedo combinar funciones y condicionales?
    Si y debes hacerlo. */

// Condicionales 2️⃣

var tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion = "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion = "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion = "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Condicionales 3️⃣

var typeSuscripción = ["Free", "Basic", "Expert", "ExpertPlus"];

var infoSuscripción = ["solo puedes tomar los cursos gratis", "puedes tomar casi todos los cursos de Platzi durante un mes", "puedes tomar casi todos los cursos de Platzi durante un año", "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

var userSuscription = "Basic";

for (var i=0; i < typeSuscripción.length; i++) {
    if (userSuscription == typeSuscripción[i]) {
        console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
    }
}

// Ciclos 1️⃣

/* ¿Qué es un ciclo?
    Una estructura que nos sirve para repetir una o varias instrucciones mientras una condición sea verdadera. */

/* ¿Qué tipos de ciclos existen en JavaScript?
    Existen for y while en JavaScript. */

/* ¿Qué es un ciclo infinito y por qué es un problema?
    Es un ciclo mal creado en el que la condición es infinita y nunca se cumple nunca termina. Es un problema porque al no terminar el ciclo el requerimiento de memoria va a aumentar progresivamente hasta que el sistema colapse. */

/* ¿Puedo mezclar ciclos y condicionales?
    Sí, si puedes. */

// Ciclos 2️⃣

var i = 0

while (i < 5) {
    console.log(`El valor de i es ${i}`);
    i++
}

var i2 = 10

while (i2 >= 2) {
    console.log(`El valor de i es ${i2}`);
    i--
}


// Ciclos 3️⃣

var resultadoSuma = Number(prompt("¿Cuanto es 2 + 2?"))

while (resultadoSuma != 4) {
    resultadoSuma = Number(prompt("¿Cuanto es 2 + 2?"))
}

console.log("Felicidades!!!!")

// Listas 1️⃣

/* ¿Qué es un array?
    Una variable que puede almacenar varios datos en su interior sin importar el tipo de dato de cada uno. */

/* ¿Qué es un objeto?
    Un objeto es una estructura de datos que permite almacenar valores mediante propiedad - valor a través de la sintaxis de llaves “{ }” y separados por comas. */

/* ¿Cuándo es mejor usar objetos o arrays?
    La elección entre objetos y arrays en JavaScript se basa en cómo planeas acceder, organizar y manipular tus datos(depende del contexto). */

/* ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    Sí, si puedes. */

// Listas 2️⃣

var array1 = []

var push1 = String(prompt("Añade el primer elemento del array"))

var push2 = String(prompt("Añade el segundo elemento del array"))

var push3 = String(prompt("Añade el tercero elemento del array"))

var push4 = String(prompt("Añade el cuarto elemento del array"))

array1.push(push1, push2, push3, push4)

function probandoListas1() {
    alert(`El primer elemento del array es ${array1[0]}`)
}

probandoListas1()

// Listas 3️⃣

var array2 = []

var push5 = String(prompt("Añade el primer elemento del array"))

var push6 = String(prompt("Añade el segundo elemento del array"))

var push7 = String(prompt("Añade el tercero elemento del array"))

var push8 = String(prompt("Añade el cuarto elemento del array"))

array2.push(push5, push6, push7, push8)

function prueba1(array) {
    array.forEach(function (elementosArray) {
        alert(elementosArray)
    })
}

prueba1(array2)

// Listas 4️⃣

/* Este ejercicio se hace con un "for...in". */