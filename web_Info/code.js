

//Fahrzeug CO2 Austoß (in Gramm / por Km)
var Auto_C = 110;
var Fahrad_C = 0;
var Bahn_C = 60;
var Flugzeug_C = 200;

var Colebstof = [Auto_C,Bahn_C,Flugzeug_C,Fahrad_C];


var Austoß_Woche = (11 * 1000000) / 52;//3.650
var Austoß_Woche_Sol = (2.7 * 1000000) / 52;


var Hanauer_Landstr_bis_Riedberg =   [13,13,13];
var Frankfurt_bis_Berlin =          [560,560,560];
var Frankfurt_bis_Lisabon =         [1983,1983,1983];
var Frankfurt_bis_Kapstadt =        [11282,11282,11282];

function onBottumClickA() {
    var Strecke = Hanauer_Landstr_bis_Riedberg;
    document.getElementById("Auswahl").innerText = "Hanauer Landstr. bis Riedberg";
    document.getElementById("km").innerText = Strecke;
    
    var a_Auto = document.getElementById("austoß_Auto");
    var a_Flugzeug = document.getElementById("austoß_Flugzeug");
    var a_Bahn = document.getElementById("austoß_Bahn");
   
    var p_Auto = document.getElementById("proßent_Auto");
    var p_Bahn = document.getElementById("proßent_Bahn");
    var p_Flugzeug = document.getElementById("proßent_Flugzeug");
    
    var po_Auto = document.getElementById("proßent_Soll_Auto");
    var po_Bahn = document.getElementById("proßent_Soll_Bahn");
    var po_Flugzeug = document.getElementById("proßent_Soll_Flugzeug");

    a_Auto.innerText    = (Strecke[0] * Auto_C);
    a_Bahn.innerText    = (Strecke[1] * Bahn_C);
    a_Flugzeug.innerText= "/";
   
    p_Auto.innerText    = round(((Strecke[0] * Auto_C)    / Austoß_Woche) * 100);
    p_Bahn.innerText    = round(((Strecke[1] * Bahn_C)    / Austoß_Woche) * 100);
    p_Flugzeug.innerText= "/";
    

    po_Auto.innerText   = round(((Strecke[0] * Auto_C)    / Austoß_Woche_Sol) * 100);
    po_Bahn.innerText    = round(((Strecke[1] * Bahn_C)    / Austoß_Woche_Sol) * 100);
    po_Flugzeug.innerText= "/";

    
    

   
    document.getElementById("austoß_Fahrad").innerText  = "0";
    document.getElementById("proßent_Fahrad").innerText  = "0";
    document.getElementById("proßent_Soll_Fahrad").innerText  = "0";
}

function onBottumClickB() {
    //console.log("onBottumClick");
    var Strecke = Frankfurt_bis_Berlin;
    document.getElementById("Auswahl").innerText = "Frankfurt bis Berlin";
    document.getElementById("km").innerText = Strecke;
    
    var a_Auto = document.getElementById("austoß_Auto");
    var a_Flugzeug = document.getElementById("austoß_Flugzeug");
    var a_Bahn = document.getElementById("austoß_Bahn");
    

    var p_Auto = document.getElementById("proßent_Auto");
    var p_Bahn = document.getElementById("proßent_Bahn");
    var p_Flugzeug = document.getElementById("proßent_Flugzeug");
    
    var po_Auto = document.getElementById("proßent_Soll_Auto");
    var po_Bahn = document.getElementById("proßent_Soll_Bahn");
    var po_Flugzeug = document.getElementById("proßent_Soll_Flugzeug");

    a_Auto.innerText    = (Strecke[0] * Auto_C);
    a_Bahn.innerText    = (Strecke[1] * Bahn_C);
    a_Flugzeug.innerText= (Strecke[2] * Flugzeug_C);
   
    p_Auto.innerText    = round(((Strecke[0] * Auto_C)    / Austoß_Woche) * 100);
    p_Bahn.innerText    = round(((Strecke[1] * Bahn_C)    / Austoß_Woche) * 100);
    p_Flugzeug.innerText= round(((Strecke[2] * Flugzeug_C)/ Austoß_Woche) * 100);
    

    po_Auto.innerText   = round(((Strecke[0] * Auto_C)    / Austoß_Woche_Sol) * 100);
    po_Bahn.innerText    = round(((Strecke[1] * Bahn_C)    / Austoß_Woche_Sol) * 100);
    po_Flugzeug.innerText= round(((Strecke[2] * Flugzeug_C)/ Austoß_Woche_Sol) * 100);
   

    document.getElementById("austoß_Fahrad").innerText  = "/";
    document.getElementById("proßent_Fahrad").innerText  = "/";
    document.getElementById("proßent_Soll_Fahrad").innerText  = "/";

}

function onBottumClickC() {
    //console.log("onBottumClick");

    var Strecke = Frankfurt_bis_Lisabon;
    document.getElementById("Auswahl").innerText = "Frankfurt bis Lisabon";
    document.getElementById("km").innerText = Strecke;
    
    var a_Auto = document.getElementById("austoß_Auto");
    var a_Flugzeug = document.getElementById("austoß_Flugzeug");
    var a_Bahn = document.getElementById("austoß_Bahn");
   

   
    var p_Auto = document.getElementById("proßent_Auto");
    var p_Bahn = document.getElementById("proßent_Bahn");
    var p_Flugzeug = document.getElementById("proßent_Flugzeug");
    
    var po_Auto = document.getElementById("proßent_Soll_Auto");
    var po_Bahn = document.getElementById("proßent_Soll_Bahn");
    var po_Flugzeug = document.getElementById("proßent_Soll_Flugzeug");

    a_Auto.innerText    = (Strecke[0] * Auto_C);
    a_Bahn.innerText    = (Strecke[1] * Bahn_C);
    a_Flugzeug.innerText= (Strecke[2] * Flugzeug_C);
    

    p_Auto.innerText    = round(((Strecke[0] * Auto_C)    / Austoß_Woche) * 100);
    p_Bahn.innerText    = round(((Strecke[1] * Bahn_C)    / Austoß_Woche) * 100);
    p_Flugzeug.innerText= round(((Strecke[2] * Flugzeug_C)/ Austoß_Woche) * 100);
    

    po_Auto.innerText   = round(((Strecke[0] * Auto_C)    / Austoß_Woche_Sol) * 100);
    po_Bahn.innerText    = round(((Strecke[1] * Bahn_C)    / Austoß_Woche_Sol) * 100);
    po_Flugzeug.innerText= round(((Strecke[2] * Flugzeug_C)/ Austoß_Woche_Sol) * 100);
    


    document.getElementById("austoß_Fahrad").innerText  = "/";
    document.getElementById("proßent_Fahrad").innerText  = "/";
    document.getElementById("proßent_Soll_Fahrad").innerText  = "/";


}

function onBottumClickD() {
    //console.log("onBottumClick");
    var Strecke = Frankfurt_bis_Kapstadt;
    document.getElementById("Auswahl").innerText = "Frankfurt bis Kapstadt";
    document.getElementById("km").innerText = Strecke;
    
    var a_Auto = document.getElementById("austoß_Auto");
    var a_Flugzeug = document.getElementById("austoß_Flugzeug");
    var a_Bahn = document.getElementById("austoß_Bahn");
   

    
    var p_Auto = document.getElementById("proßent_Auto");
    var p_Fahrad = document.getElementById("proßent_Fahrad");
    var p_Bahn = document.getElementById("proßent_Bahn");
    var p_Flugzeug = document.getElementById("proßent_Flugzeug");
    
   
    var po_Auto = document.getElementById("proßent_Soll_Auto");
    var po_Fahrad = document.getElementById("proßent_Soll_Fahrad");
    var po_Bahn = document.getElementById("proßent_Soll_Bahn");
    var po_Flugzeug = document.getElementById("proßent_Soll_Flugzeug");
    
    document.getElementById("austoß_Fahrad").innerText  = "/";
    document.getElementById("proßent_Fahrad").innerText  = "/";
    document.getElementById("proßent_Soll_Fahrad").innerText  = "/";

    a_Auto.innerText    = (Strecke[0] * Auto_C);
    a_Bahn.innerText    = (Strecke[1] * Bahn_C);
    a_Flugzeug.innerText= (Strecke[2] * Flugzeug_C);
    

    p_Auto.innerText    = round(((Strecke[0] * Auto_C)    / Austoß_Woche) * 100);
    p_Bahn.innerText    = round(((Strecke[1] * Bahn_C)    / Austoß_Woche) * 100);
    p_Flugzeug.innerText= round(((Strecke[2] * Flugzeug_C)/ Austoß_Woche) * 100);


    po_Auto.innerText   = round(((Strecke[0] * Auto_C)    / Austoß_Woche_Sol) * 100);
    po_Bahn.innerText    = round(((Strecke[1] * Bahn_C)    / Austoß_Woche_Sol) * 100);
    po_Flugzeug.innerText= round(((Strecke[2] * Flugzeug_C)/ Austoß_Woche_Sol) * 100);
    
}


function round(wert){
    return (Math.round(wert * 10)) / 10;
}
