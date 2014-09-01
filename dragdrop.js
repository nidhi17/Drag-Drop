function allowDropEle(ele) {
    ele.preventDefault();
}

function dragEle(ele) {
    ele.dataTransfer.setData("Text", ele.target.id);
}

function dropEle(ele) {
    ele.preventDefault();
    var apple = ele.dataTransfer.getData("Text");
    ele.target.appendChild(document.getElementById(apple));
}
