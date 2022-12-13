function startLoading () {
    let rawHtml = document.createElement("div");
    rawHtml.id = "loading-wrapper";
    rawHtml.innerHTML = `
        <img src="https://static.7games.bet/images/loading.gif"/>
    `;
    document.body.appendChild(rawHtml);
    document.body.classList.add("loading-body");
}


function stopLoading () {
    document.getElementById("loading-wrapper")?.remove();
    document.body.classList.remove("loading-body");
}

startLoading();
setInterval(stopLoading, 1000);