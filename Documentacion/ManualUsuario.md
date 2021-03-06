# Manual de Usuario

_Proyecto de Organizaci贸n de lenguajes y Compiladores 2_

## Quetzal - Proyecto 1馃殌
### Grupo #40
## Integrantes馃拋

| Nombre:                     | Carn茅     |
| --------------------------- | --------- |
| Jorge David Espina Molina   | 201403632 |
| Josu茅 David Zea Herrera     | 201807159 |

_Quetzal es un lenguaje de programaci贸n inspirado en C, su caracter铆stica principal es la inclusi贸n de tipos impl铆citos. El sistema de tipos de Quetzal realiza una formalizaci贸n de los tipos de C y Java. Esto permite a los desarrolladores definir variables y funciones tipadas sin perder la esencia. Otra inclusi贸n importante de Quetzal es la simplificaci贸n de los lenguajes C y Java para poder realizar diferentes instrucciones en menos pasos._

_Adicional Quetzal tendr谩 2 flujos, se podr谩 interpretar el c贸digo fuente ingresado y efectuar todas sus instrucciones, o bien se puede traducir este lenguaje a un lenguaje intermedio basado en un lenguaje de 3 direcciones, este se podr谩 ejectuar posteriormente en cualquier compilador de C, tomando en cuenta las reglas especificas de un lenguaje de 3 direcciones_

### Herramientas Utilizadas 馃搵

- CodeMirror Archivos js.
- HTML: estructura del contenido web
- Java Script: es un lenguaje de programaci贸n interpretado, Se define como orientado a objetos, basado en prototipos, imperativo, d茅bilmente tipado y din谩mico.
- Windows 10 Home: Sistema operativo
- Jison: Generador de analizadores l茅xicos y sint谩cticos.
- GitHub - GithubPage: Para el control de versiones y para publicar la pagina estatica con GithubPage. 
- Chart.js: Librer铆a para la generaci贸n del 谩rbol interactivo.
- jsPDF: Generaci贸n de tabla de simbolos si se dispara con graficar_ts 
  
### 馃搵Generaci贸n de Archivos de Analizadores
    jison gramatica.jison

## Quetzal 馃殌
![This is a alt text.](../Documentacion/img/1.PNG "Pagina Web- Funcionamiento.")
![This is a alt text.](../Documentacion/img/2.PNG "Pagina Web- Funcionamiento.")
![This is a alt text.](../Documentacion/img/8.PNG "Pagina Web- Funcionamiento.")


### 馃搵 Detalle del Flujo de Quetzal
- 1. Seleccionar un archivo este bot贸n nos abrir谩 un navegador de windows en el cual podemos buscar el archivo de entrada que deseamos cargar.
- 2. Compilar el Archivo de Entrada previamente cargado para su ejecucion.
- 3. Limpiar nos sirve para limpiar la caja del Editor.
- 4. C3D Compiler hace la traducci贸n para c贸digo C3D del archivo de entrada previamente cargado.
- 5. Editor en esta caja de texto se cargara los archivos de entrada que desea cargar o para modificarlos desde Quetzal.
- 6. Salida en esta caja podremos observar la traducci贸n del archivo de entrada a C3D.
- 7. Consola de los resultados de la ejecuci贸n.
- 8. Reporte de errores genera una tabla con todos los errores sint谩cticos,l茅xicos y sem谩nticos.
- 9. Reporte de Tabla de simbolos.
- 10. Reporte Gramatical se genera un reporte donde se muestra todas las producciones que se van generando.

# 馃搵 Detalle de cada Seccion

#### Editor al cargar un archivo de Entrada
![This is a alt text.](../Documentacion/img/3.PNG "Pagina Web- Funcionamiento.")
#### Salida de Codigo C3D 
![This is a alt text.](../Documentacion/img/6.PNG "Pagina Web- Funcionamiento.")
#### Consola con su Salida respectiva de la ejecuci贸n
![This is a alt text.](../Documentacion/img/4.PNG "Pagina Web- Funcionamiento.")

#### Reporte de Errores 
![This is a alt text.](../Documentacion/img/5.PNG "Pagina Web- Funcionamiento.")
#### Tabla de Simbolos 
![This is a alt text.](../Documentacion/img/7.PNG "Pagina Web- Funcionamiento.")
#### Reporte Gramatical 
![This is a alt text.](../Documentacion/img/9.PNG "Pagina Web- Funcionamiento.")

#### AST 
El arbol siempre se generara despues de la ejecucion haya salido exitosamente.
![This is a alt text.](../Documentacion/img/10.PNG "Pagina Web- Funcionamiento.")

# Descripcion basica del lenguaje Quetzal
#### Tipos de datos primitivos

| Tipo:                     | token     | Ejemplo | Env铆o por parametro |
| --------------------------- | --------- | ------ | - |
| Cadena   | String | "Hola mundo" | Valor |
| Caracter     | Char | 'a' | Valor |
| Entero     | int | 5 | Valor |
| Decimal     | double | 1.5 | Valor |
| Booleano     | boolean | true | Valor |
| Arreglo      | [ ]      | [1,2,3] | Referencia |
| Struct      | struct   | Obj(dato:5) | Referencia |

#### Sintaxis del lenguaje

## 馃搵 Comentarios
    //Este es un  comentario de una linea
    /*Este es
    un comentario
    multilinea*/
### Descripci贸n:
Estos son tramos de c贸digo que son obviados por el compilador y que por ende no influyen en la ejecuci贸n final del programa.

## 馃搵 Print y Println
    println("Hola mundo");
    print("OLC2");
### Descripci贸n:
Esta funci贸n nativa de Quetzal permite escribir en consola el resultado de ejecutar una expresion, si se usa println se escribir谩 un salto de linea al final de la instrucci贸n

## 馃搵 Declaraciones y asignaciones
    int variable = 10;
    variable = 15;
    String variable2, variable3, variable4;
    variable4 = "Hola";
### Descripci贸n:
Creaci贸n y asignaci贸n de variables, se les asigna un tipo de dato el cual no cambia durante la ejecuci贸n.

## 馃搵 Condicional if
    if ( a==b ) {
        println("Instrucciones");
    }
    if ( false )
        println("Instrucciones");
    if ( a==b && 5<4 ) {
        println("Instrucciones");
    } else if ( !true ) {
        println("Instrucciones");
    } else {
        println("Instrucciones");
    }

### Descripci贸n:
Sentencia de control que ejecuta ciertas instrucciones deppendiendo la resoluci贸n de una condici贸n en espec铆fico.
  
  
  ## 馃搵 Condicional switch
    int day = 4;
    switch (day) {
    case 1:
        println("Monday");
      break;
    case 2:
        println("Tuesday");
        break;
    case 3:
        println("Wednesday");
        break;
    }
- ### Descripci贸n:
  Sentencia de control que ejecuta ciertas instrucciones deppendiendo el valor que se le envie.
  
## 馃搵 Operador ternario
    respuesta = edad >= 50 ? "Puede vacunarse" : "No puede vacunarse";
    println(animal == "Perro" ? 15 : 10);
### Descripci贸n:
Sentencia de control que ejecuta ciertas instrucciones deppendiendo la ejecuci贸no de una condici贸n.

## 馃搵 Bucle while
    int i = 0;
    while (i < 5) {
        println(i);
        i++;
    }
### Descripci贸n:
Bucle que ejecuta las instrucciones si una condici贸n espec铆fica se cumple.

## 馃搵 Bucle do-while
    int i = 0;
    do {
        println(i);
        i++;
    }while (i < 5);
### Descripci贸n:
Bucle que ejecuta las instrucciones, evalua si la condici贸n se cumple, si la condici贸n se cumple repite las instrucciones.
## 馃搵 Bucle for
    for (int i = 0; i < 5; i++) {
        println(i);
    }
    for letra in "Hola Mundo!"{
            print(letra, "-");
    }
    String cadena = "OLC2";
    for letra in cadena{
        print(letra, "-");
    }
    for animal in ["perro", "gato", "tortuga"]{
        println("$animal es mi favorito");
    }
   
### Descripci贸n:
Bucle que ejecuta las instrucciones dependiendo la variable que se le asigne, si posee condici贸n se eval煤a y si no se recorre la variable ingresada.
## 馃搵 Funciones
    int sumar(int num1, double num2){
        return num1 + toInt(num2);
    }
    void Agregar(int[] arr, boolean prueba){
        println("Instrucciones");
    }
### Descripci贸n:
Es una serie de instrucciones que se ejecuta en cuando el programador desee, se le asigna un nombre, un tipo de dato a retornar y una lista de parametros que se le debe enviar.
## 馃搵 Funciones nativas
    println(log10(100));            // Logaritmo de base 10
    println(sin(134));              // Seno del angulo
    println(cos(var1));             // Coseno del angulo
    println(tan(12));               // Tangente del angulo
    println(sqrt(16));              // Raiz cuadrada
    println(pow(2,4));              // Potencia
    println(toInt("15"));           // Casteo a entero
    println(toDouble("1.5152"));    // Casteo a decimal
    println(string(1.5));           // Casteo a cadena
    println(typeof(1.5));           // Saber el tipo de dato del objeto
### Descripci贸n:
Son funciones que retornan un tipo de dato, mismo que corresponde a la operaci贸n que sea realizar, existen operaciones trigonometricas y matem谩ticas.
#### Nota
Para las funciones trigonom茅tricas, seno, coseno y tangente, el par谩metro que se les env铆a debe estar en grados.

## 馃搵 M茅todos nativos
    println(int.parse("8200"));             // Parseo a entero
    println(double.parse("3.13159"));       // Parseo a decimal
    println(boolean.parse("1"));            // Parseo a booleano
    println(arreglo.length());              // Tama帽o del arreglo o cadena
    println(animal.toUppercase());          // May煤sculas a cadena
    println(animal.toLowercase());          // Min煤sculas a cadena
    println(animal.subString(2,4));         // Substraer una cadena de otra
    println(animal.caracterOfPosition(2));  // Letra en la posisci贸n enviada
### Descripci贸n:
Son m茅todos propios de alg煤n tipo de objeto, estos permiten obtener cierta informaci贸n o realizar alguna acci贸n dependiendo lo solicitado.

## 馃搵 Llamada a funciones
    ordenamiento(arr1,arr2);
    imprimirLista(lista);
    nuevaLinea();
### Descripci贸n:
Es una sentencia que invoca a una funci贸n previamente guardada para ejecutar las acciones que 茅ste contenga, puede o no contener una lista de par谩metros.

## 馃搵 Arreglos
    int[] arr = [1,2,3,4,5,6];
    boolean[] arr2 = [true, false, true, true];
    String[] arr = ["H","O","L","A"];
    print(arr[1]);                          // Acceso a la posici贸n 1 del arreglo
    print(arr[2:4]);                        // Acceso al rango de posiciones 2,4
    int[] arr2 = #arr;                      // Copia exacta de un arreglo
### Descripci贸n:
Es una lista que contiene varios elementos de un mismo tipo de dato.

## 馃搵 M茅todos nativos y operaciones de arreglos
    int[] arr = [1,2,3,4,5,6];
    arr.push(7);               // Se agrega el elemento al final del arreglo
    arr.pop();                 // Se elimina el elemento que se encuentre al final
    print(arr#*2);             // Se multiplican x2 todos los elementos del arreglo
### Descripci贸n:
Es una lista que contiene varios elementos de un mismo tipo de dato.

## 馃搵 Structs
    struct Estructura{
        int x
    };
    struct Persona{
        String nombre,
        int edad,
        Persona padre
    };
    Estructura strct = Estructura(0);
    Persona persona1 = Persona("Tony", 25, null);
    println(persona1.nombre);
### Descripci贸n:
Es una estructura que contiene en su interior una lista de variables, mismas que pueden ser cada una de cualquier tipo de dato que contenga Quetzal.
