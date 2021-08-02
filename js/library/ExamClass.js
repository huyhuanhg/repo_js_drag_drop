const MINWIDTH = 50;
const MINHEIGHT = 50;

class ExamClass {
    #wrapControl;
    #result;
    static isRun = false;
    static current = [];

    constructor(wrapControl, result) {
        this.#wrapControl = wrapControl;
        this.#result = result;
        this.#addBoxControl();
        this.#run();
    }

    static start(wrapControl, result) {
        this.isRun = true;
        this.current.push({
            wrapControl,
            result,
            payload: new this(wrapControl, result)
        });
        result.innerHTML = "<h2>Chua lam gi ca!!!</h2>"
    }

    #run() {
        let wrapCoordinates = this.#wrapControl.getBoundingClientRect();
        let boxDrag = this.#wrapControl.querySelector('#box_drag');
        this.#handleEventBoxDrag();
        this.#handleEventBorderTop(wrapCoordinates, boxDrag);
        this.#handleEventBorderBottom(wrapCoordinates, boxDrag);
        this.#handleEventBorderLeft(wrapCoordinates, boxDrag);
        this.#handleEventBorderRight(wrapCoordinates, boxDrag);
    }

    #handleEventBoxDrag() {
        // event chưa được xây dựng
    }

    #handleEventBorderRight(wrapCoordinates, boxDragShow) {
        let current;
        let borderRight = this.#wrapControl.querySelector('#border_right_drag');
        let borderTopShow = this.#wrapControl.querySelector('#border_top');
        let borderBottomShow = this.#wrapControl.querySelector('#border_bottom');
        let topRightPointShow = this.#wrapControl.querySelector('#top_right_point');
        let bottomRightPointShow = this.#wrapControl.querySelector('#bottom_right_point');
        let borderRightShow = borderRight.parentElement;
        borderRight.ondragstart = () => {
            current = boxDragShow.getBoundingClientRect();
        }
        borderRight.ondrag = (e) => {
            if (e.clientX < wrapCoordinates.right && e.clientX > current.left + MINWIDTH) {
                let rightCurrent = wrapCoordinates.right - current.right;
                let right = current.right - e.clientX + rightCurrent - 2;
                borderRightShow.style.right = `${right}px`;
                boxDragShow.style.width = `${current.width - right + rightCurrent}px`;
                boxDragShow.style.right = `${right}px`;
                borderTopShow.style.right = `${right}px`;
                borderBottomShow.style.right = `${right}px`;
                topRightPointShow.style.right = `${right - 2}px`;
                bottomRightPointShow.style.right = `${right - 2}px`;
                borderTopShow.style.width = `${current.width - right + rightCurrent}px`;
                borderBottomShow.style.width = `${current.width - right + rightCurrent}px`;
            }
        }
    };

    #handleEventBorderLeft(wrapCoordinates, boxDragShow) {
        let current;
        let borderLeft = this.#wrapControl.querySelector('#border_left_drag');
        let borderTopShow = this.#wrapControl.querySelector('#border_top');
        let borderBottomShow = this.#wrapControl.querySelector('#border_bottom');
        let topLeftPointShow = this.#wrapControl.querySelector('#top_left_point');
        let bottomLeftPointShow = this.#wrapControl.querySelector('#bottom_left_point');
        let borderLeftShow = borderLeft.parentElement;
        borderLeft.ondragstart = () => {
            current = boxDragShow.getBoundingClientRect();
        }
        borderLeft.ondrag = (e) => {
            if (e.clientX > wrapCoordinates.left && e.clientX < current.right - MINWIDTH) {
                let leftCurrent = current.left - wrapCoordinates.left;
                let left = e.clientX - current.left + leftCurrent - 2;
                borderLeftShow.style.left = `${left}px`;
                boxDragShow.style.width = `${current.width - left + leftCurrent}px`;
                boxDragShow.style.left = `${left}px`;
                borderTopShow.style.left = `${left}px`;
                borderBottomShow.style.left = `${left}px`;
                topLeftPointShow.style.left = `${left - 2}px`;
                bottomLeftPointShow.style.left = `${left - 2}px`;
                borderTopShow.style.width = `${current.width - left + leftCurrent}px`;
                borderBottomShow.style.width = `${current.width - left + leftCurrent}px`;
            }
        }
    }

    #handleEventBorderTop(wrapCoordinates, boxDragShow) {
        let current;
        let borderTop = this.#wrapControl.querySelector('#border_top_drag');
        let borderLeftShow = this.#wrapControl.querySelector('#border_left');
        let borderRightShow = this.#wrapControl.querySelector('#border_right');
        let topLeftPointShow = this.#wrapControl.querySelector('#top_left_point');
        let topRightPointShow = this.#wrapControl.querySelector('#top_right_point');
        let borderTopShow = borderTop.parentElement;
        borderTop.ondragstart = () => {
            current = boxDragShow.getBoundingClientRect();
        }
        borderTop.ondrag = (e) => {
            if (e.clientY > wrapCoordinates.top && e.clientY < current.bottom - MINHEIGHT) {
                let topCurrent = current.top - wrapCoordinates.top;
                let top = e.clientY - current.top + topCurrent - 2;
                borderTopShow.style.top = `${top}px`;
                boxDragShow.style.height = `${current.height - top + topCurrent}px`;
                boxDragShow.style.top = `${top}px`;
                borderLeftShow.style.top = `${top}px`;
                borderRightShow.style.top = `${top}px`;
                topLeftPointShow.style.top = `${top - 2}px`;
                topRightPointShow.style.top = `${top - 2}px`;
                borderLeftShow.style.height = `${current.height - top + topCurrent}px`;
                borderRightShow.style.height = `${current.height - top + topCurrent}px`;
            }
        }
    }

    #handleEventBorderBottom(wrapCoordinates, boxDragShow) {
        let current;
        let borderBottom = this.#wrapControl.querySelector('#border_bottom_drag');
        let borderLeftShow = this.#wrapControl.querySelector('#border_left');
        let borderRightShow = this.#wrapControl.querySelector('#border_right');
        let bottomLeftPointShow = this.#wrapControl.querySelector('#bottom_left_point');
        let bottomRightPointShow = this.#wrapControl.querySelector('#bottom_right_point');
        let borderBottomShow = borderBottom.parentElement;
        borderBottom.ondragstart = () => {
            current = boxDragShow.getBoundingClientRect();
        }
        borderBottom.ondrag = (e) => {
            if (e.clientY < wrapCoordinates.bottom && e.clientY > current.top + MINHEIGHT) {
                let bottomCurrent = wrapCoordinates.bottom - current.bottom;
                let bottom = current.bottom - e.clientY + bottomCurrent - 2;
                borderBottomShow.style.bottom = `${bottom}px`;
                boxDragShow.style.bottom = `${bottom}px`;
                boxDragShow.style.height = `${current.height - bottom + bottomCurrent}px`;
                borderLeftShow.style.bottom = `${bottom}px`;
                borderRightShow.style.bottom = `${bottom}px`;
                bottomLeftPointShow.style.bottom = `${bottom - 2}px`;
                bottomRightPointShow.style.bottom = `${bottom - 2}px`;
                borderLeftShow.style.height = `${current.height - bottom + bottomCurrent}px`;
                borderRightShow.style.height = `${current.height - bottom + bottomCurrent}px`;
            }
        }

    }

    static stop(current) {
        let {payload: obj} = this.current.find(elm => elm.wrapControl.id === current.id)
        obj.#remove();
    }

    #addBoxControl() {
        this.#wrapControl.addNode('div').addClass('absolute').addId("box_drag")
            .addNode('div').addClass('absolute').addId('box_drag_control').addDraggable();
        this.#wrapControl.addNode('div').addClass('absolute').addClass("border").addId("border_top")
            .addNode('div').addId('border_top_drag').addClass('absolute').addClass('border_drag').addDraggable();
        this.#wrapControl.addNode('div').addClass('absolute').addClass("border").addId("border_left")
            .addNode('div').addId('border_left_drag').addClass('absolute').addClass('border_drag').addDraggable();
        this.#wrapControl.addNode('div').addClass('absolute').addClass("border").addId("border_right")
            .addNode('div').addId('border_right_drag').addClass('absolute').addClass('border_drag').addDraggable();
        this.#wrapControl.addNode('div').addClass('absolute').addClass("border").addId("border_bottom")
            .addNode('div').addId('border_bottom_drag').addClass('absolute').addClass('border_drag').addDraggable();

        //các nút dưới hiện tại chỉ mang tính chất style, chưa áp dụng event drag.
        this.#wrapControl.addNode('div').addClass('absolute').addClass("point").addId("top_left_point").addDraggable();
        this.#wrapControl.addNode('div').addClass('absolute').addClass("point").addId("top_right_point").addDraggable();
        this.#wrapControl.addNode('div').addClass('absolute').addClass("point").addId("bottom_left_point").addDraggable();
        this.#wrapControl.addNode('div').addClass('absolute').addClass("point").addId("bottom_right_point").addDraggable();
    }

    #remove() {
        this.#wrapControl.innerHTML = '';
        this.#result.innerHTML = '';
    }
}
