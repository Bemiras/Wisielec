//Tablica haseł do odgadniecia
var haslo = new Array(10);

haslo[0]="Bez pracy nie ma kołaczy";
haslo[1]="Darowanemu koniowi w zęby się nie zagląda";
haslo[2]="Fortuna kołem się toczy";
haslo[3]="Nie chwal dnia przed zachodem słońca";
haslo[4]="Lepszy wróbel w garści niż gołąb na dachu";
haslo[5]="Apetyt rośnie w miarę jedzenia";
haslo[6]="Co ma wisieć nie utonie"
haslo[7]="Dzieci i ryby głosu nie mają";
haslo[8]="Grosz do grosza a będzie kokosza";
haslo[9]="Łaska pańska na pstrym koniu jeździ";

var nr_hasla = Math.floor(Math.random() * 10);

haslo = haslo[nr_hasla].toUpperCase();

var yes = new Audio("img/yes.wav");
var no = new Audio("img/no.wav");
var winner = new Audio("img/winner.wav");

var haslo1 = "";
var ile_skuch = 0;

//Sprawdzanie długości hasła
var dlugosc = haslo.length;
  for(i=0 ; i<dlugosc ; i++)
  {
    if(haslo.charAt(i)==" ")haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
  }

//Wyświetlenie zakrytego hasła
function wypisz_haslo()
{
  document.getElementById("plansza").innerHTML = haslo1;
}
window.onload = start;

//Tablica zawierająca Alfabet
var litery = new Array(35);

litery[0]="A";
litery[1]="Ą";
litery[2]="B";
litery[3]="C";
litery[4]="Ć";
litery[5]="D";
litery[6]="E";
litery[7]="Ę";
litery[8]="F";
litery[9]="G";
litery[10]="H";
litery[11]="I";
litery[12]="J";
litery[13]="K";
litery[14]="L";
litery[15]="Ł";
litery[16]="M";
litery[17]="N";
litery[18]="Ń";
litery[19]="O";
litery[20]="Ó";
litery[21]="P";
litery[22]="Q";
litery[23]="R";
litery[24]="S";
litery[25]="Ś";
litery[26]="T";
litery[27]="U";
litery[28]="V";
litery[29]="W";
litery[30]="X";
litery[31]="Y";
litery[32]="Z";
litery[33]="Ż";
litery[34]="Ź";

function start()
{
  var tresc_diva = "";

//Wyswietlenie przycisków zawieracjących litery alfabetu
  for(i=0 ; i<35 ; i++)
  {
    var element = "lit"+i;
    tresc_diva = tresc_diva  + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
    if((i+1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
  }

  document.getElementById("alfabet").innerHTML = tresc_diva;

  wypisz_haslo();
}

//Prototypowa funkcja do zamiany "-" na wybrana litere w haśle
String.prototype.ustawZnak = function (miejsce,znak)
{
  if(miejsce>this.length-1) return this.toString();
  else return this.substr(0, miejsce) + znak +  this.substr(miejsce + 1);

}
//Sprawdzenie czy wybrana litera wystepuje w haśle
function sprawdz(nr)
{
  var trafiona = false;

  for(i=0 ; i<dlugosc ; i++)
  {
    if(haslo.charAt(i) == litery[nr])
    {
      haslo1 = haslo1.ustawZnak(i,litery[nr]);
      trafiona = true;
    }

    if(trafiona == true)
    {
      yes.play();
      var element = "lit" + nr;
      document.getElementById(element).style.background = "#003300";
      document.getElementById(element).style.color = "#00C000";
      document.getElementById(element).style.border = "3px solid #00C000";
      document.getElementById(element).style.cursor = "default";
    }
    else
    {
      var element = "lit" + nr;
      document.getElementById(element).style.background = "#330000";
      document.getElementById(element).style.color = "#C00000";
      document.getElementById(element).style.border = "3px solid #C00000";
      document.getElementById(element).style.cursoru = "default";
      document.getElementById(element).setAttribute("onclick",",");
    }
  }
//Skucha
  if(trafiona == false)
  {
    no.play();
    ile_skuch++;
    var obraz = "img/s"+ ile_skuch + ".jpg";
    document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';

  }

//Wygrana
  if(haslo == haslo1)
  {
    document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidlowe hasło:"
      + haslo + '<br><br><span class="reset" onclick="location.reload()"> JESZCZE RAZ?</span>'
    winner.play();
  }

//Przegrana
  var liczba_obrazków = 13;  //Ile obrazków znajduje się w katalogu IMG
  if(ile_skuch > liczba_obrazków-2)
    document.getElementById("alfabet").innerHTML = "Niestety nie udało się"
      +'<br><br><span class="reset" onclick="location.reload()"> JESZCZE RAZ?</span>'

  wypisz_haslo()
}


