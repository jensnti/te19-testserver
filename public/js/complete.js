window.addEventListener('load', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (event) => {
            console.log(event.target.checked, event.target.id);
            // Vi behöver elementets id
            // sedan behöver vi prata med servern och uppdatera databasen
            const id = event.target.id.split("-")[1];

            const url = `/tasks/${id}/complete`;

            fetch(url, {
                method: 'POST'
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.error(error);
            });
        });
    });
});

// https://developer.mozilla.org/en-US/docs/Web/API/fetch
// https://www.w3schools.com/jsref/jsref_split.asp