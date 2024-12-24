var msg = 'hello world';
console.log(msg);
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
