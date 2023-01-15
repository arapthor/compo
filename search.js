const display = document.querySelector('#display');

var copia = [];

const search = (valued) => {
    const search = document.getElementById('search').value.toUpperCase();
    //console.log(search);
    //const List = document.getElementById('display');
    //console.log(List)
    const items = document.querySelectorAll('.card');
    //console.log(items);
    //const pname = List.getElementsByTagName('h5');
    //console.log(pname);
    var top = true;
    var value;



    if (valued) {
        value = valued.toUpperCase();
        document.getElementById('search').value = valued;
    } else {
        value = search;
    }

    for (let index = 0; index < data.length; index++) {
        let match = data[index].title;

        if (match.toUpperCase().indexOf(value) !== -1 && value !== ' ' && value !== '') {
            copia.push(data[index]);

        }
    }
    /*for (let index = 0; index < items.length; index++) {
        let match = items[index].getElementsByTagName('h5')[0];
        let text = match.textContent || match.innerHTML;

        if (text.toUpperCase().indexOf(value) == -1 || value == '') {
            items[index].style.display = "none";

        } else {
            items[index].style.display = "";
            window.scrollTo(0, screen.height / 2.4);
            top = false;
        }

    }*/

    if (copia.length > 0) {
        window.scrollTo(0, screen.height / 2.4);
    } else {
        window.scrollTo(0, 0);
    }

    results();
    copia = [];
}

window.onload = () => {
    if (document.getElementById('search')) { search(); };
}

exports = copia;