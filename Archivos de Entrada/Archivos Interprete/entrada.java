void main() {
  int val1 = 1;
  int val2 = 10;
  double val3 = 2021.2020;
  println("Probando declaracion de variables");
  println(val1 & " " & val2 & " " & val3);
  println("---------------------------------");
  // COMENTARIO DE UNA LINEA
  val1 = val1 + 41 - 123 * 4 / (2 + 2 * 2) - (10 + (125 % 5)) * 2 ^ 2;
  val2 = 11 * (11 % (12 + -10)) + 22 / 2;
  val3 = 2 ^ (2 * 12 / 6) + 25 / 5/* COMENTARIO
  MULTILINEA */;
  println("Probando asignación de variables y aritmeticas");
  println(val1 & " " & val2 & " " & val3);
  println("---------------------------------");

  boolean rel1 = (((val1 - val2) == 24) && (true && (false || 5 >= 5))) || ((7*7) != (15+555) || -61 > 51);
  boolean rel2 = (7*7) <= (15+555) && 1 < 2;
  boolean rel3 = ((0 == 0) != ((532 > 532)) == ("Hola" == "Hola")) && (false || (false == true));
  println("Probando relacionales y logicas");
  println(rel1 & " " & rel2 & " " & rel3);
  println("---------------------------------");

  println("OPERACIONES " & "CON " & "Cadenas"^3);
  String hola = "Hola Mundo! ";
  String despedida = "Adios mundo :c";
  /*println(hola.uppercase() * despedida.lowercase());
  println(hola.length());
  println(hola.subString(2,4));*/
  println("Probando funciones nativas de JOLC");
  println("Funciones de operaciones aritmeticas");
  val3 = log10(1000) /** log(2, 4)*/;
  print("log10(1000) * log(2, 4): ");
  println(val3);
  println(sin(134) & " " & cos(val1) & " " & tan(12) & " " & sqrt(100));
  println("Funciones relacionadas a conversiones");
  println(toDouble("3.141516") & " " & toInt("45"));
  /*println(boolean.parse("1"));*/
  String carnet = "201807394";
  println("Hola " & string(carnet));
  println(typeof(val1) & " " & typeof(rel1));
  println("---------------------------------");

  if(true){
    println("If 1");
  }

  if(true)
      println("If 2");

  if(true){
      println("If 2");
  }else{
      println("Else If 2");
  }

  if(true)
      println("If 3");
  else{
      println("Else If 3.1");
      println("Else If 3.2");
  }

  if(true)
      println("If 4");
  else
      println("Else If 4");

  if(true){
      println("If 5.1");
      println("If 5.2");
  }else
      println("Else If 5");

  if(true){
      print("If 3");
  }else if(false){
      print("Else If 3.1");
  }
  int valor = 3;
  if(valor == 0){
    print(valor);
  }else if(valor == 1){
    print(valor);
  }else if(valor == 2){
    print(valor);
  }else{
    print("Diferente");
  }
  int valor52 = 2;
  switch(valor52){
    case 1:
      print("Es uno");
      break;
    case 2:
      print("Es dos");
    case 3:
      print("Es tres");
    default:
      print("Default");
      break;
  }
  /*
  string valor = "El valor del area es: ";
  void area(int base, int altura, string val){
    print(valor);
    println(base*altura);
  }
  area(10, 5, valor);
  */
  int valor1 = 10;
  print("valor: $valor1 ");

  int v1 = 10;
  int v2 = 15;

  print("valor: $v1 " & "valor2: $v2");

}