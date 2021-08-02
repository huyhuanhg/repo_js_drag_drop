// Element.prototype.addElement = Element.prototype.addElement ||
//     function (htmlString) {
//         this.innerHTML += htmlString;
//         return this;
//     }
Element.prototype.addNode = Element.prototype.addNode ||
    function (tagName) {
        let newTag = document.createElement(tagName);
        this.append(newTag);
        return newTag;
    }
Element.prototype.addClass = Element.prototype.addClass ||
    function (className) {
        this.classList.add(className)
        return this;
    }

Element.prototype.addId = Element.prototype.addId ||
    function (id) {
        this.id = id;
        return this;
    }
Element.prototype.addDraggable = Element.prototype.addDraggable ||
function () {
    this.setAttribute('draggable', true);
    return this;
}