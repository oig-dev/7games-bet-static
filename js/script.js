var isMobile = false;

var iconOpen = `<svg id="iconOn" class="active" xmlns="http://www.w3.org/2000/svg" width="38.694" height="24.544" viewBox="0 0 38.694 24.544"><path d="M28.42,55.434l26.91.331V52.79l-26.91.331v2.313Z" transform="translate(-28.42 -31.22)" fill="#2fc473"/><path d="M0,16.747H24.994l-1.2,2.366-3.579-6.93.466-.343,5.516,5.516,2.366,2.366H0V16.747Z" transform="translate(10.133 -7.002)" fill="#2fc473"/><path d="M28.42,2.513l26.91.462V0L28.42.466V2.513Z" transform="translate(-28.42)" fill="#2fc473"/><rect width="5.414" height="2.975" transform="translate(0.319 10.766)" fill="#2fc473"/><path d="M9.221,36.08,7.37,39.659,7.836,40l3.927-3.922Z" transform="translate(23.92 -21.338)" fill="#2fc473"/></svg>`;
var iconClose = `<div style="width: 40px;" id="iconOff"><img src="https://7games.bet/fs/userFiles-v2/7games-18751367/media/menu-desktop-close.svg?1668203149036" style="width: 100%;" /></div>`;
var iconChat = `<svg xmlns="http://www.w3.org/2000/svg" width="34.636" height="33.72" viewBox="0 0 34.636 33.72"><g opacity="0.7"><path d="M25.6,12.793H1.531A1.532,1.532,0,0,0,0,14.324V39.586l5.434-5.434H25.6a1.533,1.533,0,0,0,1.531-1.531v-18.3A1.532,1.532,0,0,0,25.6,12.793ZM5.773,26.061a2.309,2.309,0,1,1,2.309-2.309A2.311,2.311,0,0,1,5.773,26.061Zm7.5,0a2.309,2.309,0,1,1,2.309-2.309A2.311,2.311,0,0,1,13.277,26.061Zm7.5,0a2.309,2.309,0,1,1,2.309-2.309A2.311,2.311,0,0,1,20.782,26.061Z" transform="translate(0 -5.866)" fill="#2fc473"/><path d="M37.332.793h-25.8A1.532,1.532,0,0,0,10,2.324V6.566H29.828a2.689,2.689,0,0,1,2.685,2.685V23.874h6.35V2.324A1.532,1.532,0,0,0,37.332.793Z" transform="translate(-4.227 -0.793)" fill="#2fc473"/></g></svg>`;

// Checando se estamos no mobile ou desktop
if (
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  )
) {
  isMobile = true;
}

window.addEventListener("load", (event) => {
  lateralCustomMenu();
});

if (isMobile) {
  setInterval("trocaImagemCupomMenuMobile()", 500);
  setInterval("trocaBotaoMobile()", 600);
  setInterval("loadAlertaCupom()", 1000);
}

setInterval("insereCabecalhoW1()", 500);

function moveElementTo(selected_element, direction) {
  var element_to_move = selected_element,
      td = element_to_move.parentNode;

  if (direction === -1 && element_to_move.previousElementSibling) {
      td.insertBefore(element_to_move, element_to_move.previousElementSibling);
  } else if (direction === 1 && element_to_move.nextElementSibling) {
      td.insertBefore(element_to_move, element_to_move.nextElementSibling.nextElementSibling)
  }
}

// [Bottom Nav] TROCA ICON BETSLIP MOBILE
function trocaImagemCupomMenuMobile() {
  const ORDER = 4;
  const fifthMenuIcon = document.querySelector(
    `#bottom-navigation > div:nth-child(${ORDER}) > span > svg`
  );
  
  if (fifthMenuIcon) {
    fifthMenuIcon.querySelector(":scope > defs > style").innerHTML = ".cls-17777{fill:#65C673;}";
    moveElementTo(document.querySelector(`#bottom-navigation > div:nth-child(${ORDER})`), 1);
  }
}

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        document.querySelector("#bottom-navigation > div:last-child").parentNode
      );
    }, 400);
  });
}

async function trocaBotaoMobile() {
  if (document.querySelector("#bottom-navigation > div:last-child") === null)
    return;
  if (document.querySelector("#bottom-navigation #button-menu") !== null)
    return;

  const menuMobile = document.querySelector(
    "#bottom-navigation > div:last-child"
  );

  if (!menuMobile) return;

  const bodyParent = await resolveAfter2Seconds();
  const body = document.querySelector("#bottom-navigation > div:nth-child(6)");
  var documentFragment = document.createDocumentFragment();

  const openMenu = document.createElement("div");

  openMenu.setAttribute("id", "button-menu");
  openMenu.innerHTML = `<div class="bg-navigation"><div role="button" class="menu-trigger" onclick="toggleMenu()">${iconOpen} ${iconClose}</div></div>`;

  documentFragment.appendChild(openMenu);

  const btnMenuExiste = document.querySelector(
    "#bottom-navigation #button-menu"
  );

  btnMenuExiste?.remove();

  bodyParent.insertBefore(documentFragment, body);
}

function cupomAnima1() {
  $("#bottom-navigation > div:nth-child(5)").animate({
    bottom: "15",
  });
}
function cupomAnima2() {
  $("#bottom-navigation > div:nth-child(5)").animate({
    bottom: "0",
  });
}
function loadAlertaCupom() {
  $(".style__RadioButton-sc-3ucvic-2, .style__MarketButton-sc-3h3jba-6").off(
    "click"
  );
  $(".style__RadioButton-sc-3ucvic-2, .style__MarketButton-sc-3h3jba-6").click(
    function () {
      cupomAnima1();
      setTimeout("cupomAnima2()", 500);
      setTimeout("cupomAnima1()", 1000);
      setTimeout("cupomAnima2()", 1500);
    }
  );
}

function toggleMenu() {
  /* Alternando a exibicao do botao */
  if (document.querySelector("#iconOn").classList.contains("active")) {
    document.querySelector("#iconOn").classList.remove("active");
    document.querySelector("#iconOff").classList.add("active");
    if (!isMobile) {
      $("#lateral-menu #social-media-menu").css("visibility", "visible");
    }
  } else {
    document.querySelector("#iconOff").classList.remove("active");
    document.querySelector("#iconOn").classList.add("active");
    if (!isMobile) {
      $("#lateral-menu #social-media-menu").css("visibility", "hidden");
    }
  }

  const element = document.getElementById("lateral-menu");
  const links = element.querySelectorAll("a > span");

  if (!isMobile) {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");

      links.forEach((element) => {
        element.classList.add("animate__animated");
        element.classList.add("animate__fadeInLeft");
      });
    }
  } else {
    if (element.classList.contains("customMenu--open")) {
      element.classList.add("customMenu--close");
      element.classList.remove("customMenu--open");

      links.forEach((element) => {
        element.classList.remove("animate__animated");
        element.classList.remove("animate__fadeInLeft");
      });
    } else {
      element.classList.add("customMenu--open");
      element.classList.add("active");
      element.classList.remove("customMenu--close");

      links.forEach((element) => {
        element.classList.add("animate__animated");
        element.classList.add("animate__fadeInLeft");
      });
    }
  }
}

function lateralCustomMenu() {
  // Config
  const MENUS = [
    {
      label: "Salão de jogos",
      link: "/casino",
      svgIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" height="26.365" viewBox="0 0 27.314 26.365"><g opacity="0.7"><g transform="translate(0 0)"><g transform="translate(17.46 15.295)"><ellipse cx="1.361" cy="2.041" rx="1.361" ry="2.041" fill="#2fc473"/></g><g transform="translate(20.31 8.982)"><ellipse cx="1.21" cy="1.824" rx="1.21" ry="1.824" transform="translate(0 0)" fill="#2fc473"/></g><path d="M26.355,12.27l-12.313-3.7-.072-.017L13.9,8.534a1.417,1.417,0,0,0-.485,0l-.072.017-.072.017-2.749.825L8.3,10.062,2.08,11.93h0l-1.121.335A1.35,1.35,0,0,0,0,13.553V29.82a1.345,1.345,0,0,0,.959,1.288l12.307,3.714a1.322,1.322,0,0,0,.39.056,1.348,1.348,0,0,0,.39-.056l12.307-3.7a1.35,1.35,0,0,0,.959-1.288V13.558A1.35,1.35,0,0,0,26.355,12.27ZM3.915,28.37c-.652,0-1.188-.8-1.188-1.779s.53-1.779,1.188-1.779,1.188.8,1.188,1.779S4.567,28.37,3.915,28.37ZM6.72,23.3c-.719,0-1.3-.881-1.3-1.963S6,19.375,6.72,19.375s1.3.881,1.3,1.963S7.445,23.3,6.72,23.3Zm3.2-5.03c-.753,0-1.361-.915-1.361-2.041s.608-2.041,1.361-2.041,1.361.915,1.361,2.041S10.674,18.271,9.921,18.271Zm14.7,10.556L15,31.721V11.668l9.62,2.894Z" transform="translate(0 -8.513)" fill="#2fc473"/></g></g></svg>',
    },
    {
      label: "Esportes",
      link: "/sports",
      svgIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" height="29.071" viewBox="0 0 29.068 29.071"><g opacity="0.7"><g transform="translate(0)"><path d="M24.859,4.256a14.488,14.488,0,1,0,3.118,4.623A14.494,14.494,0,0,0,24.859,4.256ZM6.538,3.282c.131-.1.26-.208.394-.3A12.158,12.158,0,0,1,9.213,1.753a13.906,13.906,0,0,1,9.029-.592,7.7,7.7,0,0,0-2,1.368,12.011,12.011,0,0,0-2.412-.012A13.541,13.541,0,0,0,8.5,4.211c-.766-.275-1.756-.6-2.244-.757C6.328,3.478,6.487,3.322,6.538,3.282ZM19.778,6.916,17.292,13.7l-5.963,1.145L6.4,9.756A10.711,10.711,0,0,1,8.316,5.4a11.452,11.452,0,0,1,2.7-1.328,12.291,12.291,0,0,1,2.928-.647,11.311,11.311,0,0,1,2.385.034ZM1.25,14.052a13.24,13.24,0,0,0-.107,3.038c-.119-.238-.214-.44-.284-.6a13.934,13.934,0,0,1,1.1-7.7,14.456,14.456,0,0,0,.018,2.586A12.336,12.336,0,0,0,1.25,14.052Zm1.206,5.285a12.77,12.77,0,0,1-.388-2.168,12.233,12.233,0,0,1,.089-3,11.181,11.181,0,0,1,.559-2.156,9.226,9.226,0,0,1,3.072-1.576l4.837,5-.507,5.475L5.39,22.491A13.061,13.061,0,0,1,2.456,19.337Zm14.363,7.927c-1.053.69-3.716.855-4.8.895A13.868,13.868,0,0,1,5.9,25.337c.015-.027-.128-1.484-.122-2.015l4.775-1.594,5.511,2.385.76,3.142Zm9.157-4.834a12.52,12.52,0,0,1-2.986,3.124,9.468,9.468,0,0,1-3.911,1.267c-.1.015-1.362.223-1.371.18l-.76-3.145,3.881-4.04,5.139-.473c.079.818.183,2.012.244,2.742C26.132,22.2,26.056,22.317,25.976,22.43Zm.079-4.11q-.027.046-.055.1l-5.117.47-2.754-4.818,2.492-6.8,3.518.223a12.379,12.379,0,0,1,1.972,2.073,11.167,11.167,0,0,1,1.621,3.075A13.264,13.264,0,0,1,26.056,18.32Zm1.835-7.64A12.087,12.087,0,0,0,26.834,9,13.126,13.126,0,0,0,24.6,6.684,6.99,6.99,0,0,0,22.868,3.42c.021.015.043.034.064.049.07.052.137.107.208.159a13.934,13.934,0,0,1,4.754,7.023A.114.114,0,0,0,27.891,10.681Z" transform="translate(-0.05)" fill="#2fc473"/></g></g></svg>',
    },
    {
      label: "Favoritos da Galera",
      link: "/casino/slots/95?provider=all",
      svgIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" height="31.794" viewBox="0 0 31.794 31.794"><g opacity="0.7"><path d="M14.436,29.982A9.936,9.936,0,0,1,7.629,12.809C9.407,11.136,13.773,8.124,13.111,1.5c7.949,5.3,11.923,10.6,3.974,18.547,1.325,0,3.312,0,6.624-3.272a9.976,9.976,0,0,1,.662,3.272,9.936,9.936,0,0,1-9.936,9.936Z" transform="translate(1.462 0.487)" fill="#2fc473"/></g></svg>',
    },
    {
      label: "Meus Favoritos",
      link: "/casino/slots/favorite?provider=all",
      svgIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" height="31.377" viewBox="0 0 32.837 31.377"><path d="M32.766,19.212A1.493,1.493,0,0,0,31.561,18.2l-9.537-1.386L17.759,8.168a1.493,1.493,0,0,0-2.677,0l-4.265,8.642L1.28,18.2a1.493,1.493,0,0,0-.827,2.546l6.9,6.726-1.63,9.5A1.493,1.493,0,0,0,7.89,38.542l8.53-4.484,8.53,4.484a1.512,1.512,0,0,0,.7.171A1.494,1.494,0,0,0,27.1,36.887l-1.616-9.418,6.9-6.726A1.493,1.493,0,0,0,32.766,19.212Z" transform="translate(-0.002 -7.336)" fill="#2fc473" opacity="0.7"/></svg>',
    },
    {
      label: "Jogos Novos",
      link: "/casino/slots/65?provider=all",
      svgIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" width="34.516" height="36.819" viewBox="0 0 34.516 36.819"><path d="M34.922,23.3,31.61,20.355a2.035,2.035,0,0,1,0-3.1L34.922,14.3c.959-.853.7-1.647-.568-1.772l-4.391-.416a1.727,1.727,0,0,1-1.517-2.428L30.776,3.2c.437-1.218-.1-1.659-1.187-.986l-5.179,3.2A2.221,2.221,0,0,1,21.282,4.6L19.407,1.248a1.217,1.217,0,0,0-2.315-.015l-1.743,3.03a2.621,2.621,0,0,1-3.285,1.066L9,3.921C7.83,3.384,6.939,4,7.008,5.294l.165,3.1a3.025,3.025,0,0,1-2.117,2.955l-2.963.794c-1.231.334-1.457,1.3-.5,2.157l3.312,2.951a2.035,2.035,0,0,1,0,3.1L1.594,23.3c-.959.853-.706,1.682.562,1.835l4.017.487A1.845,1.845,0,0,1,7.742,28.14L5.683,34.388c-.4,1.229.173,1.7,1.281,1.064l4.723-2.734A2.533,2.533,0,0,1,15,33.5l1.96,2.951a1.268,1.268,0,0,0,2.378-.13L21.064,33a2.384,2.384,0,0,1,3.16-1.041l3.325,1.663c1.147.57,2.027-.019,1.958-1.308l-.167-3.1a3.024,3.024,0,0,1,2.121-2.951l2.959-.8c1.235-.334,1.461-1.3.5-2.157ZM20.176,26.48H16.341V22.645h3.835Zm0-5.753H16.341V11.139h3.835Z" transform="translate(-1 -0.399)" fill="#2fc473" opacity="0.7"/></svg>',
    },
    {
      label: "Live Casino",
      link: "/live-casino?provider=all",
      svgIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" height="29.201" viewBox="0 0 24.708 29.201"><path d="M16.6,21.216a5.606,5.606,0,1,0,8.965-6.733l.02-.006L14.354,1,3.123,14.477l.02.006a5.606,5.606,0,1,0,8.965,6.733l1.123-1.5v4.866c0,3.369-5.616,3.369-5.616,3.369a1.123,1.123,0,0,0,0,2.246H21.093a1.123,1.123,0,0,0,0-2.246s-5.616,0-5.616-3.369V19.719Z" transform="translate(-2 -1)" fill="#2fc473" opacity="0.7"/></svg>',
    },
    {
      label: "Suporte",
      link: "/",
      svgIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" height="33.72" viewBox="0 0 34.636 33.72"><g opacity="0.7"><path d="M25.6,12.793H1.531A1.532,1.532,0,0,0,0,14.324V39.586l5.434-5.434H25.6a1.533,1.533,0,0,0,1.531-1.531v-18.3A1.532,1.532,0,0,0,25.6,12.793ZM5.773,26.061a2.309,2.309,0,1,1,2.309-2.309A2.311,2.311,0,0,1,5.773,26.061Zm7.5,0a2.309,2.309,0,1,1,2.309-2.309A2.311,2.311,0,0,1,13.277,26.061Zm7.5,0a2.309,2.309,0,1,1,2.309-2.309A2.311,2.311,0,0,1,20.782,26.061Z" transform="translate(0 -5.866)" fill="#2fc473"/><path d="M37.332.793h-25.8A1.532,1.532,0,0,0,10,2.324V6.566H29.828a2.689,2.689,0,0,1,2.685,2.685V23.874h6.35V2.324A1.532,1.532,0,0,0,37.332.793Z" transform="translate(-4.227 -0.793)" fill="#2fc473"/></g></svg>',
    },
  ];

  // HTML Structure
  const html_trigger = `<div role="button" class="menu-trigger" onclick="toggleMenu()">${iconOpen} ${iconClose}</div>`; // ! TODO: Adicionar custom icon
  var html = `
  <div> 
  ${
    isMobile
      ? `<div class="bg-navigation"><div class="position-button">${html_trigger}</div></div>`
      : html_trigger
  }
  `;
  for (var i = 0; i < MENUS.length; i++) {
    html += `<a class="menu-item" id="${i}" onClick="clickMenuSelect(${i})" href="${MENUS[i].link}">
      <div>${MENUS[i].svgIcon}</div>
      <span>${MENUS[i].label}</span>  
    </a>`;
  }

  if (isMobile) {
    html += `<div id="language-switcher-container"></div>`;
  }
  html += `
  <div id="social-media-menu">
    <div class="social-media-menu-container">
      <span>
        <img src="https://7games.bet/fs/userFiles-v2/7games-18751367/media/plus-18.svg?1668800027693" /> 
      </span>
      <a target="_blank" href="https://www.tiktok.com/@7games.bet">
        <img src="https://7games.bet/fs/userFiles-v2/7games-18751367/media/icone-tiktok.svg?1668622904886" /> 
      </a>
      <a target="_blank" href="https://www.instagram.com/7games.bet/">
        <img src="https://7games.bet/fs/userFiles-v2/7games-18751367/media/icone-instagram.svg?1668622940260" /> 
      </a>
      <a target="_blank" href="https://www.facebook.com/7Games.bet/">
        <img src="https://7games.bet/fs/userFiles-v2/7games-18751367/media/icone-facebook.svg?1668622936292" />
      </a>
    </div>
  </div>`;

  html += `</div>`;

  const body = document.getElementsByTagName("body")[0];
  const container = document.createElement("div");

  //html = html.replace('</a>,', '</a>');

  container.setAttribute("id", "lateral-menu");
  container.setAttribute("class", "customMenu");
  container.innerHTML = html;

  body.appendChild(container);
}

// INI - render do plugin de troca de idiomas no menu
// if(!isMobile){
waitForElm("#lateral-menu").then((elm) => {
  // // if (typeof(elm) != 'undefined' && elm != null){
  // //   $(".betslipWrapper").attr("style", "min-height: unset!important;")
  if (isMobile) {
    document
      .querySelector("#language-switcher-container")
      .insertAdjacentHTML(
        "afterend",
        document.querySelector(".blank-tradutor .ModuleLanguageSwitcher")
          .innerHTML
      );
  }
  //   document.querySelector( '#language-switcher-container' ).insertAdjacentHTML("afterbegin", '<span id="tituloPromocoes">Promoções</span>');
  //   $(".blank-tradutor").remove();
  // // }
  colorMenu();
  AdicionaChat();

  document.getElementById("6").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#crisp-chatbox .cc-dc5e").click();
  });
});
// }
// FIM - render do plugin de troca de idiomas no menu

/* 
Função que aguarda um elemento existir para executar 
(Fonte: https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists)
*/
function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

/* Codigo para quando clica fora do menu aberto, fecha ele */
if (!isMobile) {
  document.addEventListener("DOMContentLoaded", function () {
    $(".main-rows, header").click(function (event) {
      // var text = $(event.target).text();
      // console.log("Clicou nas linhas", document.querySelector("#lateral-menu").classList.contains('active'))
      if (
        document.querySelector("#lateral-menu").classList.contains("active")
      ) {
        document.getElementById("iconOff").click();
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  $(".module.ModuleLogo").click(function (event) {
    localStorage.removeItem("menuSelect");
  });
});

function clickMenuSelect(option) {
  localStorage.setItem("menuSelect", option);
}

function colorMenu() {
  const hasSelect = localStorage.getItem("menuSelect");
  if (hasSelect) {
    const itemMenus = document.querySelectorAll(".menu-item");
    const menuSelect = itemMenus.forEach((itemMenu) => {
      if (itemMenu.id === 6) return;
      if (itemMenu.id === hasSelect) {
        itemMenu.classList.add("select");
        return itemMenu;
      }
    });
  }
}

function AdicionaChat() {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "c62d1f72-9157-4144-82d6-d52f29e03c38";
  (function () {
    d = document;
    s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
}

function insereCabecalhoW1() {
  let arrSeletores = ["#m239", "#m251", "#m241"];

  arrSeletores.forEach(function (currentValue, index, arr) {
    if (
      document.querySelector(
        currentValue + ' .match-card__container div[class^="style__Header-sc-"]'
      ) == null
    ) {
      return;
    }
    if (
      document.querySelectorAll(currentValue + " .match-card__container #w1w2")
        .length > 0
    ) {
      return;
    }

    document
      .querySelector(
        currentValue + ' .match-card__container div[class^="style__Header-sc-"]'
      )
      .insertAdjacentHTML(
        "afterend",
        `

                    <div id="w1w2" style="width: 100%;padding-left: 50%;display: inline-flex;height: 25px;margin: auto;/* border: solid 1px red; */ margin-top: -24px; float:right; padding-right: 7px;">
                      <div style="width: 33.33%;text-align:center;color: #fff;margin: auto;">1</div>
                      <div style="width: 33.33;text-align:center;color: #fff;margin: auto; /*margin-left:-12px;*/ ">X</div>
                      <div style="width: 33.33%;text-align:center;color: #fff;margin: auto;">2</div>
                    </div>`
      );
  });

  if (
    document.querySelector(
      "#prematch-left-sidebar-wrapper > div > div.lazyLoad__wrapper"
    ) != null
  ) {
    if (
      document.querySelectorAll(
        "#prematch-left-sidebar-wrapper > div > div.lazyLoad__wrapper #w1w2slider"
      ).length <= 0 &&
      document.querySelector(
        "#prematch-left-sidebar-wrapper > div > div.lazyLoad__wrapper #w1w2slider"
      ) == null
    ) {
      document
        .querySelector(
          '#prematch-left-sidebar-wrapper > div > div.lazyLoad__wrapper > div:nth-child(1) > div.liveGame__wrapper > a > div  div[class^="style__Header-sc-"]'
        )
        .insertAdjacentHTML(
          "afterend",
          `<div id="w1w2slider" style="width: 100%;padding-left: 57%;display: inline-flex;height: 25px;margin: auto;/* border: solid 1px red; */ margin-top: -24px; float:right; padding-right: 7px;">
                    <div style="width: 33.33%;text-align:center;color: #fff;margin: auto;">1</div>
                    <div style="width: 33.33;text-align:center;color: #fff;margin: auto; /*margin-left:-12px;*/ ">X</div>
                    <div style="width: 33.33%;text-align:center;color: #fff;margin: auto;">2</div>
                  </div>`
        );
    }
  }
}

waitForElm(".x-casinoGameCardImageWrapper__image").then((elm) => {
  if (
    document.querySelectorAll(
      "#m753 .x-casinoGamesByCategories__categoryName svg"
    ).length > 0 ||
    document.querySelectorAll(
      "#m875 .x-casinoGamesByCategories__categoryName svg"
    ).length > 0
  )
    return;
  setTimeout("addIconeComponents()", 500);
});

waitForElm(".x-casinoGameCardImageWrapper__image").then((elm) => {
  if (
    document.querySelectorAll("#m871 .uc-content span svg").length > 0 ||
    document.querySelectorAll("#m848 .uc-content span svg").length > 0
  )
    return;
  setTimeout("addIconeComponentMaisJogados()", 500);
});

function addIconeComponentMaisJogados() {
  const component = isMobile
    ? document.querySelector("#m871 .uc-content span")
    : document.querySelector("#m848 .uc-content span");
  if (!component) return;
  const text = component.textContent.toLowerCase();
  if (text.includes("mais jogados")) {
    const svg = {
      viewBox: "0 0 28.96 24.916",
      height: "24.916",
      width: "28.96",
      opacity: "0.7",
      d: "M9.016,6.325H0L3.272,4.58.654.145,21.084,0l-2.69,2.69L18.03,5.308,8.942,22.029l1.712,1.381L1.963,24.719h0L8.942,11.705l3.272.8L9.888,10.178,13.3,3.926,6.834,4Z",
      d2: "M124.4,88.785l2.525,1.168-1.3,3.909a3.427,3.427,0,0,1-1.377.248,2.826,2.826,0,0,1-3.068-2.933,4.478,4.478,0,0,1,4.782-4.6A5.525,5.525,0,0,1,129.626,88l3.3-3.382A8.962,8.962,0,0,0,126.3,82a11.772,11.772,0,0,0-5.256,1.158L115.91,92.1c.338,4.477,4.036,6.365,7.777,6.365a12.363,12.363,0,0,0,6.069-1.623l2.256-8.054h-7.6Z",
      transform: "translate(-103.964 -73.549)",
      fill: "#2fc473",
    };
    const img = createSvgIcon(svg, "maisJogados");
    component.appendChild(img);
  }
}

function addIconeComponents() {
  const component = isMobile
    ? document.querySelectorAll(
        "#m875 .x-casinoGamesByCategories__categoryName"
      )
    : document.querySelectorAll(
        "#m753 .x-casinoGamesByCategories__categoryName"
      );
  component.forEach((im) => {
    const text = im.textContent.toLowerCase();
    if (text.includes("jogos populares")) {
      const svg = {
        viewBox: "0 0 31.794 31.794",
        height: "31.794",
        opacity: "0.7",
        d: "M14.436,29.982A9.936,9.936,0,0,1,7.629,12.809C9.407,11.136,13.773,8.124,13.111,1.5c7.949,5.3,11.923,10.6,3.974,18.547,1.325,0,3.312,0,6.624-3.272a9.976,9.976,0,0,1,.662,3.272,9.936,9.936,0,0,1-9.936,9.936Z",
        transform: "translate(1.462 0.487)",
        fill: "#2fc473",
      };
      const img = createSvgIcon(svg, "jogosPopulares");
      im.appendChild(img);
    }
    if (text.includes("novos")) {
      const svg = {
        viewBox: "0 0 34.516 36.819",
        height: "36.819",
        width: "34.516",
        opacity: "0.7",
        d: "M34.922,23.3,31.61,20.355a2.035,2.035,0,0,1,0-3.1L34.922,14.3c.959-.853.7-1.647-.568-1.772l-4.391-.416a1.727,1.727,0,0,1-1.517-2.428L30.776,3.2c.437-1.218-.1-1.659-1.187-.986l-5.179,3.2A2.221,2.221,0,0,1,21.282,4.6L19.407,1.248a1.217,1.217,0,0,0-2.315-.015l-1.743,3.03a2.621,2.621,0,0,1-3.285,1.066L9,3.921C7.83,3.384,6.939,4,7.008,5.294l.165,3.1a3.025,3.025,0,0,1-2.117,2.955l-2.963.794c-1.231.334-1.457,1.3-.5,2.157l3.312,2.951a2.035,2.035,0,0,1,0,3.1L1.594,23.3c-.959.853-.706,1.682.562,1.835l4.017.487A1.845,1.845,0,0,1,7.742,28.14L5.683,34.388c-.4,1.229.173,1.7,1.281,1.064l4.723-2.734A2.533,2.533,0,0,1,15,33.5l1.96,2.951a1.268,1.268,0,0,0,2.378-.13L21.064,33a2.384,2.384,0,0,1,3.16-1.041l3.325,1.663c1.147.57,2.027-.019,1.958-1.308l-.167-3.1a3.024,3.024,0,0,1,2.121-2.951l2.959-.8c1.235-.334,1.461-1.3.5-2.157ZM20.176,26.48H16.341V22.645h3.835Zm0-5.753H16.341V11.139h3.835Z",
        transform: "translate(-1 -0.399)",
        fill: "#2fc473",
      };
      const img = createSvgIcon(svg, "Novos");
      im.appendChild(img);
    }
    if (text.includes("cassino ao vivo")) {
      const svg = {
        viewBox: "0 0 24.708 29.201",
        height: "29.201",
        opacity: "0.7",
        d: "M16.6,21.216a5.606,5.606,0,1,0,8.965-6.733l.02-.006L14.354,1,3.123,14.477l.02.006a5.606,5.606,0,1,0,8.965,6.733l1.123-1.5v4.866c0,3.369-5.616,3.369-5.616,3.369a1.123,1.123,0,0,0,0,2.246H21.093a1.123,1.123,0,0,0,0-2.246s-5.616,0-5.616-3.369V19.719Z",
        transform: "translate(-2 -1)",
        fill: "#2fc473",
      };
      const img = createSvgIcon(svg, "CassinoVivo");
      im.appendChild(img);
    }
  });
}

function createSvgIcon(element, name) {
  if (name === "maisJogados") {
    const iconSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconG = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    const iconPath2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    iconSvg.setAttribute("viewBox", element.viewBox);
    iconSvg.setAttribute("height", element.height);
    iconSvg.setAttribute("width", element.width);

    iconG.setAttribute("opacity", element.opacity);

    iconPath.setAttribute("d", element.d);
    iconPath.setAttribute("fill", element.fill);

    iconPath2.setAttribute("d", element.d2);
    iconPath2.setAttribute("transform", element.transform);
    iconPath2.setAttribute("fill", element.fill);

    iconSvg.appendChild(iconPath);
    iconSvg.appendChild(iconPath2);

    return iconSvg;
  }
  if (name === "jogosPopulares") {
    const iconSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconG = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    iconSvg.setAttribute("viewBox", element.viewBox);
    iconSvg.setAttribute("height", element.height);

    iconG.setAttribute("opacity", element.opacity);

    iconPath.setAttribute("d", element.d);
    iconPath.setAttribute("transform", element.transform);
    iconPath.setAttribute("fill", element.fill);

    iconSvg.appendChild(iconPath);

    return iconSvg;
  }
  if (name === "Novos") {
    const iconSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    iconSvg.setAttribute("viewBox", element.viewBox);
    iconSvg.setAttribute("height", element.height);
    iconSvg.setAttribute("width", element.width);

    iconPath.setAttribute("d", element.d);
    iconPath.setAttribute("transform", element.transform);
    iconPath.setAttribute("fill", element.fill);
    iconPath.setAttribute("opacity", element.opacity);

    iconSvg.appendChild(iconPath);

    return iconSvg;
  }
  if (name === "CassinoVivo") {
    const iconSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    iconSvg.setAttribute("viewBox", element.viewBox);
    iconSvg.setAttribute("height", element.height);

    iconPath.setAttribute("d", element.d);
    iconPath.setAttribute("transform", element.transform);
    iconPath.setAttribute("fill", element.fill);
    iconPath.setAttribute("opacity", element.opacity);

    iconSvg.appendChild(iconPath);

    return iconSvg;
  }
}

// [mega pixel] Rastrea visualização da home
fbq("track", "ViewContent");

// Overwrite do icone de carteira
waitForElm(".v3-icon.style__PlusIcon-sc-1nhmslw-4.dzhtzK").then((elm) => {
  elm.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
      <defs>
          <style>.cls-1{fill:#fcd249;}.cls-2{fill:#f9b938;}.cls-3{fill:#e59c1c;}.cls-4{fill:#91ce91;}.cls-5{fill:#5eaa5e;}.cls-6{fill:#4d964d;}.cls-7{fill:#1e804d;}.cls-8{fill:#1a653c;}.cls-9{fill:#269f5c;}.cls-10{fill:#dadada;}.cls-11{fill:silver;}.cls-12{fill:#32b16a;}.cls-13{fill:#ffd148;}</style>
      </defs>
      <g id="Camada_2" data-name="Camada 2">
          <g id="Capa_1" data-name="Capa 1">
              <circle class="cls-1" cx="410.6" cy="83.6" r="83.6" />
              <path class="cls-2" d="M362.9,111.2a83.4,83.4,0,0,1,18.9-106,84.5,84.5,0,0,0-13,6A83.6,83.6,0,0,0,452.4,156a81.6,81.6,0,0,0,11.7-8.2A83.6,83.6,0,0,1,362.9,111.2Z" />
              <circle class="cls-2" cx="410.6" cy="83.6" r="55.1" />
              <path class="cls-3" d="M385.2,98.3A55.1,55.1,0,0,1,395,30.8a54.1,54.1,0,0,0-11.9,5.1,55.1,55.1,0,1,0,55.1,95.4,57.2,57.2,0,0,0,10.4-7.7A55.2,55.2,0,0,1,385.2,98.3Z" />
              <circle class="cls-1" cx="330.5" cy="83.6" r="83.6" />
              <path class="cls-2" d="M282.7,111.2a83.7,83.7,0,0,1,18.9-106A83.6,83.6,0,1,0,372.3,156a81.6,81.6,0,0,0,11.7-8.2A83.8,83.8,0,0,1,282.7,111.2Z" />
              <circle class="cls-2" cx="330.5" cy="83.6" r="55.1" />
              <path class="cls-3" d="M305,98.3a55.1,55.1,0,0,1,9.8-67.5,54.1,54.1,0,0,0-11.9,5.1A55.1,55.1,0,1,0,358,131.3a53.9,53.9,0,0,0,10.4-7.7A55.2,55.2,0,0,1,305,98.3Z" />
              <path class="cls-4" d="M337.5,140.1,202.8,4.4a15.1,15.1,0,0,0-21.2,0L46.9,140.1Z" />
              <path class="cls-5" d="M202.8,4.4a15.1,15.1,0,0,0-21.2,0L46.9,140.1H87.1L212.3,14Z" />
              <path class="cls-5" d="M181.6,44.7,87.2,140.1h210L202.8,44.7A15.1,15.1,0,0,0,181.6,44.7Z" />
              <path class="cls-6" d="M202.8,44.7a15.1,15.1,0,0,0-21.2,0L87.2,140.1H114l91.6-92.6Z" />
              <path class="cls-7" d="M512,393.7v71.6A46.8,46.8,0,0,1,465.3,512H46.7A46.7,46.7,0,0,1,0,465.3V185.7a46.7,46.7,0,0,1,46.7-46.6H465.3A46.7,46.7,0,0,1,512,185.7v71.4" />
              <path class="cls-8" d="M28.8,465.3V185.7a46.7,46.7,0,0,1,46.7-46.6H46.7A46.7,46.7,0,0,0,0,185.7V465.3A46.7,46.7,0,0,0,46.7,512H75.5A46.8,46.8,0,0,1,28.8,465.3Z" />
              <path class="cls-9" d="M512,259.6H392.9A66.1,66.1,0,0,0,327,325.5h0a66.1,66.1,0,0,0,65.9,66H512Z" />
              <path class="cls-8" d="M328.5,311.4a65.5,65.5,0,0,0-1.5,14.1h0a66.1,66.1,0,0,0,65.9,66H512V363.1H392.9A66.2,66.2,0,0,1,328.5,311.4Z" />
              <circle class="cls-10" cx="394.7" cy="325.2" r="37.1" />
              <path class="cls-11" d="M417.2,342.5A37,37,0,0,1,391,297.1a39.6,39.6,0,0,1,3.7-9,37.1,37.1,0,1,0,32.1,55.7A35.8,35.8,0,0,1,417.2,342.5Z" />
              <path class="cls-12" d="M37.7,483.2A7.9,7.9,0,0,1,46,476h.6a7.7,7.7,0,0,1,7.6,7.8C54.1,494.6,37,493.6,37.7,483.2Zm419.4,8.3h-1a7.7,7.7,0,1,1,0-15.4h1a7.7,7.7,0,1,1,0,15.4Zm-37.3,0h-1.1a7.7,7.7,0,0,1,0-15.4h1.1a7.7,7.7,0,0,1,0,15.4Zm-37.4,0h-1a7.7,7.7,0,1,1,0-15.4h1a7.7,7.7,0,1,1,0,15.4Zm-37.3,0h-1a7.7,7.7,0,1,1,0-15.4h1a7.7,7.7,0,1,1,0,15.4Zm-37.3,0h-1.1a7.7,7.7,0,0,1,0-15.4h1.1a7.7,7.7,0,0,1,0,15.4Zm-37.4,0h-1a7.7,7.7,0,1,1,0-15.4h1a7.7,7.7,0,1,1,0,15.4Zm-37.3,0h-1a7.7,7.7,0,1,1,0-15.4h1a7.7,7.7,0,1,1,0,15.4Zm-37.3,0h-1.1a7.7,7.7,0,0,1,0-15.4h1.1a7.7,7.7,0,0,1,0,15.4Zm-37.3,0h-1.1a7.7,7.7,0,0,1-7.7-7.7c0-10.3,16.5-10.4,16.5,0A7.7,7.7,0,0,1,158.5,491.5Zm-37.4,0h-1a7.6,7.6,0,0,1-7.7-7.7c0-10.3,16.5-10.4,16.5,0A7.7,7.7,0,0,1,121.1,491.5Zm-37.3,0h-1a7.7,7.7,0,1,1,0-15.4h1a7.7,7.7,0,1,1,0,15.4ZM483.7,474h-.3a7.7,7.7,0,0,1-7.4-8v-.6h0a7.8,7.8,0,0,1,15.5,0h0a5.3,5.3,0,0,1-.1,1.3A7.8,7.8,0,0,1,483.7,474ZM28.2,464.5a7.6,7.6,0,0,1-7.7-7.7v-1a7.7,7.7,0,1,1,15.4,0v1A7.6,7.6,0,0,1,28.2,464.5Zm455.5-27.9a7.7,7.7,0,0,1-7.7-7.7v-1a7.8,7.8,0,1,1,15.5,0v1A7.7,7.7,0,0,1,483.7,436.6ZM28.2,427.2a7.7,7.7,0,0,1-7.7-7.7v-1.1a7.7,7.7,0,0,1,15.4,0v1.1A7.7,7.7,0,0,1,28.2,427.2Zm0-37.3a7.7,7.7,0,0,1-7.7-7.8v-1a7.7,7.7,0,1,1,15.4,0v1A7.7,7.7,0,0,1,28.2,389.9Zm0-37.4a7.6,7.6,0,0,1-7.7-7.7v-1a7.6,7.6,0,0,1,7.7-7.7C38.5,336.1,38.5,352.5,28.2,352.5Zm0-37.3a7.6,7.6,0,0,1-7.7-7.7v-1a7.7,7.7,0,1,1,15.4,0v1A7.6,7.6,0,0,1,28.2,315.2Zm0-37.3a7.7,7.7,0,0,1-7.7-7.7v-1.1a7.7,7.7,0,1,1,15.4,0v1.1A7.7,7.7,0,0,1,28.2,277.9Zm0-37.3a7.7,7.7,0,0,1-7.7-7.8v-1a7.7,7.7,0,1,1,15.4,0v1A7.7,7.7,0,0,1,28.2,240.6Zm455.5-9.9A7.7,7.7,0,0,1,476,223v-1a7.8,7.8,0,1,1,15.5,0v1A7.7,7.7,0,0,1,483.7,230.7ZM28.2,203.2a7.6,7.6,0,0,1-7.7-7.7v-1a7.7,7.7,0,1,1,15.4,0v1A7.6,7.6,0,0,1,28.2,203.2ZM476,185.7v-.6c-.6-10.3,15.4-11.7,15.5.5a7.8,7.8,0,1,1-15.5.1ZM45.2,175.1c-9.8,0-11-15.3.9-15.5C56.1,159.3,57.4,175.1,45.2,175.1Zm411.7-.1h-1a7.7,7.7,0,1,1,0-15.4h1a7.7,7.7,0,1,1,0,15.4Zm-37.3,0h-1.1a7.7,7.7,0,1,1,0-15.4h1.1a7.7,7.7,0,0,1,0,15.4Zm-37.4,0h-1a7.7,7.7,0,1,1,0-15.4h1a7.7,7.7,0,1,1,0,15.4Zm-37.3,0h-1a7.7,7.7,0,1,1,0-15.4h1a7.7,7.7,0,1,1,0,15.4Zm-37.3,0h-1.1a7.7,7.7,0,1,1,0-15.4h1.1a7.7,7.7,0,0,1,0,15.4Zm-37.4,0h-1a7.7,7.7,0,1,1,0-15.4h1a7.7,7.7,0,1,1,0,15.4Zm-37.3,0h-1a7.7,7.7,0,0,1,0-15.4h1a7.7,7.7,0,0,1,0,15.4Zm-37.3,0h-1a7.7,7.7,0,0,1-7.8-7.7c0-10.3,16.5-10.4,16.5,0A7.6,7.6,0,0,1,195.6,175Zm-37.3,0h-1.1a7.7,7.7,0,0,1,0-15.4h1.1a7.7,7.7,0,0,1,0,15.4Zm-37.4,0h-1a7.7,7.7,0,0,1,0-15.4h1a7.7,7.7,0,1,1,0,15.4Zm-37.3,0h-1a7.7,7.7,0,1,1,0-15.4h1a7.7,7.7,0,0,1,0,15.4Z" />
              <path class="cls-13" d="M261.5,321.1a19.2,19.2,0,0,1-19.1,19.1h-46v54.9a19.1,19.1,0,0,1-38.2,0V340.2h-46a19.2,19.2,0,0,1,0-38.3h46V256a19.1,19.1,0,1,1,38.2,0v45.9h46A19.2,19.2,0,0,1,261.5,321.1Z" />
          </g>
      </g>
    </svg>
  `;
});

// Troca ordem das opções de pagamento no deposito
if (isMobile) {
  waitForElm(".paymentMethods__listLayout__item").then((elm) => {
    moveElementTo(elm, 1)
  });
} else {
  waitForElm(".payment__item-box").then((elm) => {
    moveElementTo(elm, 1)
  });
}