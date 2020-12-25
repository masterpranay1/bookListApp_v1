document.querySelector('button').addEventListener('click',fun);
function fun(e)
{
    e.preventDefault();
    var x = document.querySelectorAll('input');
    var y = 0;
    x.forEach(function(a){
        if(a.value == "")
        {
            y = 1;
        }
    });
    if(y == 1)
    {
        document.querySelector('div.error').style.opacity = '1';
        document.querySelector('div.error').style.height = '5vh';
        setTimeout(function(){
            document.querySelector('div.error').style.opacity = '0';
            document.querySelector('div.error').style.height = '0';
        },2000);
    }
    else
    {
        document.querySelector('div.ok').style.opacity = '1';
        document.querySelector('div.ok').style.height = '5vh';
        var sno = document.createTextNode(2),
            name = document.createTextNode(x[0].value),
            author = document.createTextNode(x[1].value),
            isbn = document.createTextNode(x[2].value);

        addBook(sno, name, author, isbn);
        setTimeout(function(){
            document.querySelector('div.ok').style.opacity = '0';
            document.querySelector('div.ok').style.height = '0';
        },2000);
    }
    x.forEach(function(a){
        a.value = "";
    });
}
function addBook(sno, name, author, isbn)
{
    var table = document.querySelector('table tbody');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    td5.className = 'delete';
    td1.appendChild(sno);
    td2.appendChild(name);
    td3.appendChild(author);
    td4.appendChild(isbn);
    td5.appendChild(document.createTextNode('X'));
    td5.addEventListener('click',del);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    table.appendChild(tr);
}
function del(e)
{
    console.log(e.path[1]);
    e.path[1].remove();
}