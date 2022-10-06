/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//

//
// obteniendo el input
let number_user_input = document.getElementById("number_user_cards");
// numero maximo y minimo de cartas que se aceptara en el input
let number_Cards_max = 12;
let number_Cards_min = 0;
number_user_input.addEventListener("input", () => {
  let num = number_user_input.value;
  if (num > number_Cards_max) {
    number_user_input.value = number_Cards_max;
    let num_cards = number_user_input.value;
  }
  if (num < number_Cards_min) {
    number_user_input.value = number_Cards_min;
  }
});

//
// funcion para crear UNA carta random
function card_random_content() {
  //codigo viejo a cambiar y adaptar !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // arrays que contienen los elementos que se usaran para la carta.

  let icons = ["♦", "♥", "♠", "♣"];
  let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  // obteniendo los elementos
  let top_div = document.getElementsByClassName("top_div");
  let center_div = document.getElementsByClassName("center_div");
  let down_div = document.getElementsByClassName("down_div");

  // funcion para ELEGIR e INTEGRAR un icono random para la carta
  function random_icon() {
    // obteniendo un numero random del array para conseguir el icono

    for (let i = 0; i < center_div.length; i++) {
      let random_icon = Math.floor(
        Math.random(icons.length - 1) * icons.length
      );
      let result_icon = icons[random_icon];
      center_div[i].innerHTML = result_icon;
    }
  }
  // funcion para ELEGIR e INTEGRAR el numero de la carta
  function random_num() {
    // elegir
    for (let i = 0; i < top_div.length && i < down_div.length; i++) {
      let random_num = Math.floor(Math.random(nums.length - 1) * nums.length);
      let result_num = nums[random_num];
      top_div[i].innerHTML = result_num;
      down_div[i].innerHTML = result_num;
    }
  }

  random_icon();
  random_num();
}

// funcion para CREAR el contorno en html de la carta dependiendo la cantidad especificada
function create_body_cards() {
  // obtener el numero ingresado
  let input_value = number_user_input.value;
  let start_text = document.getElementById("start_text");

  // condicionales para el texto inicial de la pagina
  if (input_value === "0" || input_value === "") {
    //
    start_text.style.cssText = "display: flex !important;";
    box_cards_1.innerHTML = "";
    //
  } else {
    //
    start_text.style.cssText = "display: none !important;";
    //
    // obtenemos el cuarpo donde iran las cartas
    let box_cards_1 = document.getElementById("box_cards_1");
    // eliminamos el contenido que este en el cuerpo
    box_cards_1.innerHTML = "";
    //
    // condicionales para los valores del 1 al 3
    if (input_value < 4) {
      // FOR para condicionar cada carta
      for (let i = 0; i < input_value; i++) {
        // se CREA el div
        let div = document.createElement("div");
        box_cards_1.appendChild(div);
        //
        // se AÑADIMOS la clase prefijada correspondiente
        div.classList.add("cart_overall_height");
        // divs secundarios de la carta
        let _1div = document.createElement("div");
        let _2div = document.createElement("div");
        let _3div = document.createElement("div");
        div.appendChild(_1div);
        div.appendChild(_2div);
        div.appendChild(_3div);

        _1div.classList.add("top_div");
        _2div.classList.add("center_div");
        _3div.classList.add("down_div");
        card_random_content();
      }
      //
      //
      // condicionales para los valores del 4 al 6
    } else if (input_value < 7 && input_value > 3) {
      // FOR para condicionar cada carta
      for (let i = 0; i < input_value; i++) {
        // se CREA el div
        let div = document.createElement("div");
        box_cards_1.appendChild(div);
        // se AÑADIMOS la clase prefijada correspondiente
        div.classList.add("half_height");
        // divs secundarios de la carta
        let _1div = document.createElement("div");
        let _2div = document.createElement("div");
        let _3div = document.createElement("div");
        div.appendChild(_1div);
        div.appendChild(_2div);
        div.appendChild(_3div);

        _1div.classList.add("top_div");
        _2div.classList.add("center_div");
        _3div.classList.add("down_div");
        card_random_content();
      }
      //
      // else para los valores del 7 al 12
    } else {
      // alterando las clases para ubicar perfectamente los elementos
      //
      box_cards_1.style.flexDirection = "column";
      //
      // doble FOR para UBICAR y CONDICIONAR las cartas
      let index = 0;
      while (index < 2) {
        let div = document.createElement("div");
        box_cards_1.appendChild(div);
        div.setAttribute("id", "pantalla" + index);
        div.classList.add("situation_two");
        //
        index++;
      }
      let pantalla0 = document.getElementById("pantalla0");
      let pantalla1 = document.getElementById("pantalla1");

      for (let i = 0; i < input_value; i++) {
        // se CREA el div
        if (i < 6) {
          let div = document.createElement("div");
          pantalla0.appendChild(div);
          // se AÑADIMOS la clase prefijada correspondiente
          div.classList.add("half_height");

          // divs secundarios de la carta
          let _1div = document.createElement("div");
          let _2div = document.createElement("div");
          let _3div = document.createElement("div");
          div.appendChild(_1div);
          div.appendChild(_2div);
          div.appendChild(_3div);

          _1div.classList.add("top_div");
          _2div.classList.add("center_div");
          _3div.classList.add("down_div");
          card_random_content();
        } else {
          let div = document.createElement("div");
          pantalla1.appendChild(div);
          // se AÑADIMOS la clase prefijada correspondiente
          div.classList.add("half_height");

          // divs secundarios de la carta
          let _1div = document.createElement("div");
          let _2div = document.createElement("div");
          let _3div = document.createElement("div");
          div.appendChild(_1div);
          div.appendChild(_2div);
          div.appendChild(_3div);

          _1div.classList.add("top_div");
          _2div.classList.add("center_div");
          _3div.classList.add("down_div");
          card_random_content();
        }
      }
    }
  }
}

//
// los botones - primero los obtenemos
let create_cards = document.getElementById("create_cards");
let order_cards = document.getElementById("order_cards");

// funciones de los botones
create_cards.addEventListener("click", () => {
  create_body_cards();
});

const bubbleSort = arr => {
  let wall = arr.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (arr[index].top_div_o > arr[index + 1].top_div_o) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--;
  }
  return arr;
};

order_cards.addEventListener("click", () => {
  let cards_screen = [];

  for (let index = 0; index < number_user_input.value; index++) {
    let cards_screen_o = new Object(); // numero de cartas en pantalla
    let top_div_screen = parseInt(
      document.getElementsByClassName("top_div")[index].textContent
    );
    let center_div_screen = document.getElementsByClassName("center_div")[index]
      .textContent;
    let down_div_screen = parseInt(
      document.getElementsByClassName("down_div")[index].textContent
    );
    cards_screen_o.top_div_o = top_div_screen;
    cards_screen_o.center_div_o = center_div_screen;
    cards_screen_o.down_div_o = down_div_screen;
    cards_screen.push(cards_screen_o);
  }

  let newArr = bubbleSort(cards_screen);

  for (let i = 0; i < newArr.length; i++) {
    let top_div = document.getElementsByClassName("top_div");
    let center_div = document.getElementsByClassName("center_div");
    let down_div = document.getElementsByClassName("down_div");

    top_div[i].innerHTML = newArr[i].top_div_o;
    center_div[i].innerHTML = newArr[i].center_div_o;
    down_div[i].innerHTML = newArr[i].down_div_o;
  }
});
