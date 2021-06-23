document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main");
    const startButton = document.getElementById("start-button");
    const residue = document.getElementById("residue");
    let residueNum = 0
    residue.textContent = residueNum

    startButton.addEventListener("click", () => {
        start()
    }, false);

    function start() {
        if (mainContent.hasChildNodes()){
            while(mainContent.firstChild){
                mainContent.removeChild(mainContent.firstChild);
            }
        }
        residueNum = 9;
        residue.textContent = residueNum;

        for (let num = 9; num > 0; num--) {
            let elm = document.createElement("button");
            let elmSize = Math.floor(Math.random() * 100 + 30);
            let elmColor = Math.floor(Math.random() * 16777215).toString(16);

            elm.textContent = num;
            elm.setAttribute("id", num);
            elm.setAttribute("class", "circle");
            var function_name = "remove("+ num +")";
            elm.setAttribute("onclick", function_name);
            elm.style.height = elmSize + "px";
            elm.style.width = elmSize + "px";
            elm.style.borderRadius = elmSize/2 + "px";
            elm.style.backgroundColor = "#" + elmColor;
            document.getElementById("main").appendChild(elm);

            let left_pos = 10;
            let top_pos = 100;

            left_pos = left_pos + Math.floor(Math.random() * 400);
            top_pos = top_pos + Math.floor(Math.random() * 600);

            document.getElementById(num).style.left = "" + left_pos + "px";
            document.getElementById(num).style.top = "" + top_pos + "px";
        }

        let next = 1
        document.remove = function(id) {
            if (id === next) {
                document.getElementById("main").removeChild(document.getElementById(id));
                next += 1;
                residueNum -= 1;
                residue.textContent = residueNum;
            }
        };
    }
}, false)