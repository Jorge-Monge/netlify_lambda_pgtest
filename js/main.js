const getMessage = async () =>
await (await fetch('/.netlify/functions/pg_connect')).json();

getMessage().then(data => {
    parag = document.querySelector("#content");
    parag.textContent = data.msg;
});
