var bodyDisplay = [];

function hideElement (element) {
    let oldDisplay = element.style.display;
    element.style.display = "none";
    return oldDisplay;
}

function startLoading () {
    let rawHtml = document.createElement("div");
    rawHtml.id = "loading-wrapper";
    rawHtml.innerHTML = `
    <img src="https://static.7games.bet/images/loading.gif"/>
    `;
    let children = document.body.children;
    for (let i = 0; i < children.length; i++) {
        bodyDisplay.push(hideElement(children[i]));
    }
    document.body.appendChild(rawHtml);
}


function stopLoading () {
    let loadingElm = document.getElementById("loading-wrapper");
    if (loadingElm) {
        document.body.removeChild(loadingElm);
        let children = document.body.children;
        for (let i = 0; i < children.length; i++) {
            children[i].style.display = bodyDisplay[i];
        }
    }
}

// startLoading();