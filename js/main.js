window.onload = () => {
    let isShowControl = false;
    $('power').onclick = (e) =>{
        if (!isShowControl){
            ExamClass.start($('control_item'), $('result_item'));
            e.target.innerText = "Hide mode"
            isShowControl = true;
        } else {
            ExamClass.stop($('control_item'));
            e.target.innerText = "Show mode"
            isShowControl = false;
        }
    }
}