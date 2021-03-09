var saludo_auto = "<p>Hola, este es el menú interactivo Bottega Dinner, ¿Qué es lo que vas a pedir?</p>";
var btn_comida ="<button onclick='elegir_comida()' id='desayuno'>desayuno</button><button onclick='elegir_comida()' id='comida'>comida</button><button onclick='elegir_comida()' id='cena'>cena</button>"
var pedido = 0;
var pago = 0;
var sin_esp = "";
var costo_ind = 0;
var costo_ext = 15;
var guarnicion = "";
var cuenta ="Cuenta: <br>";
var salir = 1;
function saludo(){
    document.getElementById('saludo').innerHTML = saludo_auto;
    document.getElementById('btn_comida').innerHTML = btn_comida;
}

function elegir_comida(){
    document.getElementById('saludo').innerHTML = "Por favor vuelve a dar un clic en tu decisión para ver el menú";
    document.getElementById('desayuno').addEventListener("click", function desayuno() {
        document.getElementById('saludo').innerHTML = "";
        document.getElementById('btn_comida').innerHTML = "";
        document.getElementById('menu_bottega').innerHTML = `
        <div class="menús">
        <div class=”menú_principal”>Desayuno:
        <p>1)Hotcakes</p>
        <p>2)Chilaquiles</p>
        <p>3)Huevo</p>
        <p>4)Arroz</p>
        <p>5)Burritos</p>
        <p>6)Molletes</p>
        </div>
        <div class=“Guarniciones”>Guarnición para el Desayuno:
        <p>a)Bolitas de arroz integral</p>
        <p>b)Rollo de col con verduras</p>
        <p>c)Puré</p>
        <p>d)Revuelto de setas</p>
        <p>e)Coctel de frutas</p>
        </div>
        </div>
        <br>`;
        if(salir = 1){
            document.getElementById('Pedido').innerHTML = `
            <p>Elige un plato fuerte (Escribe su numero aquí debajo)</p>
            <input type="number" id="Plato_fuerte">
            <button onclick='menu_desayuno()' id='menu_desayuno'>confirmar</button>`;
            document.getElementById('menu_desayuno').addEventListener("click", function menu_desayuno() {
                pedido=document.getElementById("Plato_fuerte").value;
                pedido=Number(pedido);
                switch(pedido){
                    case 1:
                        function costo_inicial(){
                            costo_ind = 0;
                            cuenta = cuenta + "Hotcakes ";
                            costo_ind = 45;
                            let costo_inicial_promise = new Promise(resolve => {
                                setTimeout(() => {
                                    resolve('Listo');
                                }, 2000);
                            });
                            costo_inicial_promise.then((Funciona) => {
                                document.getElementById('Pedido').innerHTML = cuenta+"---Costo: "+costo_ind+
                                `<p>¿Desea agregarle algo por $15 extra? (Si no, dejelo vacío y de clic en confirmar)</p>
                                <input type="Text" id="Especificaciones">
                                <button onclick='Guarniciones()' id='guarniciones'>confirmar</button>`;
                                document.getElementById('desayuno').addEventListener("click", function desayuno() {

                                    sin_esp = document.getElementById('Especificaciones').innerHTML;
                                    let switch_sin_esp = ""
                                    if (sin_esp !== ""){
                                        switch_sin_esp = "a";
                                    }
                                    else {
                                        switch_sin_esp = "b";
                                    }        
                                    switch(switch_sin_esp){
                                        case "a":
                                            costo_ind = costo_ind + costo_ext;
                                            pago = costo_ind;
                                            cuenta = cuenta + sin_esp + "----$"+costo_ind +"<br>";
                                            alert(cuenta);
                                            break;
                                        case "b":
                                            pago = costo_ind;
                                            cuenta = cuenta + sin_esp + "----$"+costo_ind +"<br>";
                                            alert(cuenta);
                                            break;
                                        default:
                                            break;
                                    }
                                });
                            });
                        }
                        costo_inicial();
                        
                        /*for (var i = 0; i < 2; i++) {
                            document.getElementById('Pedido').innerHTML =
                            `<button onclick='Siguiente()' id='siguiente'>siguiente</button>`;
                            costo_ind = 0;
                            guarnicion ="";
                            document.getElementById('siguiente').addEventListener("click", function Siguiente(){
                                document.getElementById('Pedido').innerHTML = cuenta+
                                `<p>Elija una guarnición (Escriba su letra)</p>
                                <p>Si quiere puede escoger la guarnición recomendada por la casa dejando el espacio vacío</p>
                                <input type="Text" id="guarnicion">
                                <button onclick='Guarniciones()' id='guarniciones'>confirmar</button>`;
                                guarnicion = document.getElementById('guarnicion').value;
                                if(guarnicion == ""){
                                    var aleatorio = 0
                                    aleatorio = Math.floor(Math.random() * 4)+1;
                                    switch(aleatorio){
                                        case 1:
                                            guarnicion = "A"
                                            break;
                                        case 2:
                                            guarnicion = "B"
                                            break;
                                        case 3:
                                            guarnicion = "C"
                                            break;
                                        case 4:
                                            guarnicion = "D"
                                            break;
                                        case 5:
                                            guarnicion = "E"
                                            break;
                                    }
                                }
                                guarnicion = guarnicion.toUpperCase;
                                switch(guarnicion){
                                    case "A":
                                        cuenta = cuenta +"Bolitas de arroz integral "
                                        costo_ind = 25;
                                        document.getElementById('Pedido').innerHTML = cuenta+"---Costo: "+costo_ind+
                                        `<p>¿Desea agregarle algo por $15 extra? (Si no, dejelo vacío y de clic en confirmar)</p>
                                        <input type="Text" id="Especificaciones">
                                        <button onclick='Guarniciones()' id='guarniciones'>confirmar</button>`;
                                        if ((document.getElementById('Especificaciones').innerHTML !== "")||(document.getElementById('Especificaciones').innerHTML !== " ")){
                                            costo_ind = costo_ind + costo_ext;
                                        }
                                        pago = costo_ind;
                                        cuenta = cuenta + document.getElementById('Especificaciones').innerHTML + "----$"+costo_ind +"<br>";
                                        break;
                                    case "B":
                                        cuenta = cuenta +"Rollo de col con verduras "
                                        costo_ind = 25;
                                        document.getElementById('Pedido').innerHTML = cuenta+"---Costo: "+costo_ind+
                                        `<p>¿Desea agregarle algo por $15 extra? (Si no, dejelo vacío y de clic en confirmar)</p>
                                        <input type="Text" id="Especificaciones">
                                        <button onclick='Guarniciones()' id='guarniciones'>confirmar</button>`;
                                        if ((document.getElementById('Especificaciones').innerHTML !== "")||(document.getElementById('Especificaciones').innerHTML !== " ")){
                                            costo_ind = costo_ind + costo_ext;
                                        }
                                        pago = costo_ind;
                                        cuenta = cuenta + document.getElementById('Especificaciones').innerHTML + "----$"+costo_ind +"<br>";
                                        break;
                                    case "C":
                                        cuenta = cuenta +"Puré "
                                        costo_ind = 25;
                                        document.getElementById('Pedido').innerHTML = cuenta+"---Costo: "+costo_ind+
                                        `<p>¿Desea agregarle algo por $15 extra? (Si no, dejelo vacío y de clic en confirmar)</p>
                                        <input type="Text" id="Especificaciones">
                                        <button onclick='Guarniciones()' id='guarniciones'>confirmar</button>`;
                                        if ((document.getElementById('Especificaciones').innerHTML !== "")||(document.getElementById('Especificaciones').innerHTML !== " ")){
                                            costo_ind = costo_ind + costo_ext;
                                        }
                                        pago = costo_ind;
                                        cuenta = cuenta + document.getElementById('Especificaciones').innerHTML + "----$"+costo_ind +"<br>";
                                        break;
                                    case "D":
                                        cuenta = cuenta +"Revuelto de setas "
                                        costo_ind = 25;
                                        document.getElementById('Pedido').innerHTML = cuenta+"---Costo: "+costo_ind+
                                        `<p>¿Desea agregarle algo por $15 extra? (Si no, dejelo vacío y de clic en confirmar)</p>
                                        <input type="Text" id="Especificaciones">
                                        <button onclick='Guarniciones()' id='guarniciones'>confirmar</button>`;
                                        if ((document.getElementById('Especificaciones').innerHTML !== "")||(document.getElementById('Especificaciones').innerHTML !== " ")){
                                            costo_ind = costo_ind + costo_ext;
                                        }
                                        pago = costo_ind;
                                        cuenta = cuenta + document.getElementById('Especificaciones').innerHTML + "----$"+costo_ind +"<br>";
                                        break;
                                    case "E":
                                        cuenta = cuenta +"Coctel de frutas "
                                        costo_ind = 25;
                                        document.getElementById('Pedido').innerHTML = cuenta+"---Costo: "+costo_ind+
                                        `<p>¿Desea agregarle algo por $15 extra? (Si no, dejelo vacío y de clic en confirmar)</p>
                                        <input type="Text" id="Especificaciones">
                                        <button onclick='Guarniciones()' id='guarniciones'>confirmar</button>`;
                                        if ((document.getElementById('Especificaciones').innerHTML !== "")||(document.getElementById('Especificaciones').innerHTML !== " ")){
                                            costo_ind = costo_ind + costo_ext;
                                        }
                                        pago = costo_ind;
                                        cuenta = cuenta + document.getElementById('Especificaciones').innerHTML + "----$"+costo_ind +"<br>";
                                        break;
                                    default:
                                        alert("Debes escoger una letra válida, intentalo de nuevo");
                                        break;
                                }
                            });
                            alert("Saliste del for");
                        }*/
                        break;
                    case 2:
                        document.getElementById('Pedido').innerHTML = "Elegiste Chilaquiles";
                        salir = 0;
                        break;
                    case 3:
                        document.getElementById('Pedido').innerHTML = "Elegiste Huevo";
                        salir = 0;
                        break;
                    case 4:
                        document.getElementById('Pedido').innerHTML = "Elegiste Arroz";
                        salir = 0;
                        break;
                    case 5:
                        document.getElementById('Pedido').innerHTML = "Elegiste Burritos";
                        salir = 0;
                        break;
                    case 6:
                        document.getElementById('Pedido').innerHTML = "Elegiste Molletes";
                        salir = 0;
                        break;
                    default:
                        alert("Debes escoger un número válido, intentalo de nuevo");
                        salir = 777;
                        break;
                }
            });
             
        }

    });
    document.getElementById('comida').addEventListener("click", function comida() {
        document.getElementById('saludo').innerHTML = "";
        document.getElementById('btn_comida').innerHTML = "";
        document.getElementById('menu_bottega').innerHTML = `
        <div class="menús">
        <div class=”menú_principal”>Comida:
        <p>1)Ensalada de pasta</p>
        <p>2)Tacos de Arrachera</p>
        <p>3)Hamburguesa tradicional</p>
        <p>4)lasagna de verduras</p>
        <p>5)Spaghetti a la bolognesa</p>
        <p>6)Biztec con verduras</p>
        <p>7)Pierna adobada</p>
        <p>8)Pollo a la naranja</p>
        </div>
        <div class=“Guarniciones”>Guarnición para la Comida:
        <p>a)Tomates al horno con parmesano</p>
        <p>b)Judias verdes con granada y ajo negro</p>
        <p>c)Puré</p>
        <p>d)Verduras al vapor</p>
        <p>e)Zanahorias a la parrilla</p>
        <p>f)Papas a la francesa</p>
        </div>
        </div>
        <p>Elige un plato fuerte (Escribe su numero aquí debajo)
        <input name="Plato fuerte" type="number" id="Plato_fuerte" />`;
        
    });
    document.getElementById('cena').addEventListener("click", function cena() {
        document.getElementById('saludo').innerHTML = "";
        document.getElementById('btn_comida').innerHTML = "";
        document.getElementById('menu_bottega').innerHTML = `
        <div class="menús">
        <div class=”menú_principal”>Cena:
        <p>1)Biztec con verduras</p>
        <p>2)Ensalada César con pollo</p>
        <p>3)Croquetas de jamón serrano</p>
        <p>4)Tortilla española con patatas</p>
        <p>5)Sopa Poblana</p>
        <p>6)Arroz</p>
        <p>7)Hamburguesa tradicional</p>
        <p>8)Tacos de Arrachera</p>
        </div>
        <div class=“Guarniciones”>Guarnición para la Cena:
        <p>a)Tomates al horno con parmesano</p>
        <p>b)Judias verdes con granada y ajo negro</p>
        <p>c)Puré</p>
        <p>d)Verduras al vapor</p>
        <p>e)Zanahorias a la parrilla</p>
        <p>f)Papas a la francesa</p>
        </div>
        </div>
        <p>Elige un plato fuerte (Escribe su numero aquí debajo)
        <input name="Plato fuerte" type="number" id="Plato_fuerte" />`;
        
    });
}


