var target = document.getElementById('myfile');
target.addEventListener('change', function () {
    var
        files = target.files,
        elements = document.querySelectorAll('ol'),
        li = document.createElement('li'),
        name = document.createElement('div'),
        type = document.createElement('div'),
        size = document.createElement('div'),
        del = document.createElement('input');
    del.type = 'submit';
    del.value = 'X';
    del.className += 'del';

    for (var i = 0; i < files.length; i++){
        name.innerHTML = files[i].name.split('.')[0];
        type.innerHTML = files[i].type;
        size.innerHTML = Math.round(files[i].size / 1024 * 10) / 10 + ' Kbyte';
        li.appendChild(name);
        li.appendChild(type);
        li.appendChild(size);
        li.appendChild(del);
        console.log(li);
        if(files[i].type.split('/')[0] === "image") {
            elements[0].appendChild(li);
        } else {
            elements[1].appendChild(li);
        }
    }

    del.addEventListener('click', function () {
        li.remove();
    })
});