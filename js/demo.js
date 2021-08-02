// --------- Handlers for 'Dragged Element' ------------------
function dragstartHandler(evt) {
    evt.dataTransfer.setData("MyDraggedElementId", evt.target.id);
}

// dragging ...
function dragHandler(evt) {
    showLog("The p element is being dragged");
}


// --------- Handlers for 'Drop Target' ------------------

function ondragenterHandler() {
    showLog("The p element enter drop-target");
}

// When 'over' you can 'release mouse' to 'drop'.
function dragoverHandler(evt) {
    evt.preventDefault(); // Important!!
}

function dropHandler(evt) {
    evt.preventDefault(); // Important!!

    var elementId = evt.dataTransfer.getData("MyDraggedElementId");
    evt.target.appendChild(document.getElementById(elementId));
    showLog("The p element was dropped");
}

// -------------------------------------------------------

function showLog(text) {
    document.getElementById("log-div").innerHTML = text;
}


window.onload = () => {
    let x, y, mX, mY;
    let lX, lY;
    $('child').draggable = true;

    $('wrap').ondragover = (e) => {
        e.preventDefault();
    }
    $('wrap').ondragenter = (e) => {
        // console.log(e)
    }
    $('wrap').ondrop = (e) => {
        e.preventDefault();
        let mX = e.clientX;
        let mY = e.clientY;


        $('child').style.left = `${mX - lX}px`;
        $('child').style.top = `${mY - lY}px`;


    }
    $('child').ondragstart = (e) => {
        x = e.target.offsetLeft;
        y = e.target.offsetTop;

        mX = e.clientX;
        mY = e.clientY;

        lX = mX - x;
        lY = mY - y;
    }
    $('child').ondrag = (e) => {
    }
}