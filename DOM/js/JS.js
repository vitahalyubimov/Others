(function(){
    let elements = document.getElementsByTagName("p");
    document.write("Вывод всех тегов \'p\' <br />");
    for (let i of elements)
        document.write(i.tagName + "<br />");
    document.write("<hr/>");
    let div = document.querySelector("div");
    let elements_in_div = div.children; //получение узлов без текстовых узлов
    document.write("Тег имя 1-го элемента div без учёта текстовых узлов: " + elements_in_div[0].tagName + "<br />");
    //установка стиля 6-ому параграфу
    let lastChild = div.lastChild;  //последний элемент (текстовый узел)
    lastChild.previousSibling.style.color = "red";  //переход к предыдущему узлу, т.е. к последнему параграфу
    //либо так
    let paragraph_6th = div.children[div.children.length - 1];
    //применение стилю к 6ому параграфу
    paragraph_6th.style.color = "purple";
    paragraph_6th.style.fontSize = "20px";
    paragraph_6th.textContent = "Параграф 6 был изменен";
    paragraph_6th.style.textShadow = "2px 2px 5px gray";
    //вывод родителя div
    document.write("Родитель блока div: " + div.parentNode.tagName + "<br />");
    //вывод родителя "р"
    document.write("Вывод родителя \'p\': " + elements_in_div[0].parentNode.tagName + "<br />");
    document.write("<hr />");
    //динамическое создание элемента 
    let elmt_p = document.createElement("p");
    elmt_p.textContent = "Этот параграф был создан динамически";
    //добавление нового элемента в конец div
    div.appendChild(elmt_p);
    //получение элементов с добавленным
    elements_in_div = div.children;
    //вывод
    for (let i of elements){
        document.write("tag " + i.tagName + " - ");
        document.write(i.textContent + " <br />");
    }
    //вставка элемента в nodeList
    //новый элемент pre
    let elmt_pre = document.createElement("pre");
    elmt_pre.textContent = "Новый элемент \'pre\'";
}());