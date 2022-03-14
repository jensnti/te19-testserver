window.addEventListener('load', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            console.log(e.target.checked, e.target.id);
            // Vi behöver elementets id
            // sedan behöver vi prata med servern och uppdatera databasen
            const id = e.target.id.split("-")[1];

            const url = `/tasks/${id}/complete`;

            fetch(url, {
                method: 'POST'
            });
        });
    });
});

// https://developer.mozilla.org/en-US/docs/Web/API/fetch
// https://www.w3schools.com/jsref/jsref_split.asp