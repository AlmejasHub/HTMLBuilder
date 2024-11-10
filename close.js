window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "Are you sure you want to close HTMLBuilder? All changes you made will not be saved!";
    
    (e || window.event).returnValue = confirmationMessage; 
    return confirmationMessage; 
});
