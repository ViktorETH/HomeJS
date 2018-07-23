//1.
window.onload = function () {
    function counter() {
        var count = 1;
        return function () {
            return count++;
        };
    }
    var count = counter();
    var btn = document.getElementById('counter');
    btn.addEventListener('click', function () {
        btn.value = count();
    })
};

//2.
function showMe(box) {
    var hid = (box.checked) ? "block" : "none";
    document.getElementById('educ').style.display = hid;
}

//3.
// window.onload = function() {
//Для одного селектора
if (localStorage.getItem('fruit') !== null) {
    document.getElementById('selectName').value = localStorage.getItem('fruit');
}
(function () {
    document.getElementById("selectName").addEventListener('change', function () {
        localStorage.setItem('fruit', document.getElementById("selectName").value);
    });
}());

// Для мультиселектора
(function () {
    var selects = document.querySelectorAll('select');
    for (var i = 0; i < selects.length; i++) {
        var select = selects[i];
        if (localStorage[select.name] !== null) {
            select.selectedIndex = localStorage[select.name];
        }
        select.addEventListener('change', function () {
            localStorage[this.name] = this.selectedIndex;
        });
    }
})();
// };

//4.
function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve();
            reject();
        }, ms);
    });
}
function doStuff() {
    console.log("Я появлюсь через 2 секунды")
}
delay(2000)
    .then(doStuff);