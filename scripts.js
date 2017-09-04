if (window.location.href.includes("dacc.blackboard.com") && window.location.href.includes("uploadAssignment")) {
    var counter = 0;
    var runCode = setInterval(function() {
        if (counter < 5) {
            counter++;
        } else {
            document.getElementsByClassName("submitStepBottom submitStepFixed")[0].style.width = document.getElementsByClassName("submitStepTop")[0].offsetWidth + "px";
        }
    }, 5)
}