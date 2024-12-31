
box.onclick = function () {
    if (!box.classList.contains('change')) {
        this.innerText = '中国人民共和国万岁！！！';
        this.className = 'change';
    }
    else {
        this.innerText = '默认文本';
        this.className = null;
    }
}

var to = getNum(1, 66, function (n) {
    if (n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
});
console.log(to);

function getNum(start, end, fn) {
    var totle = 0;
    for (let i = start; i <= end; i++) {
        if (fn(i)) {
            totle += i;
        }
    }
    return totle;
}

