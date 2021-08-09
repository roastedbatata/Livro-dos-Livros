// Para mudar o conteúdo pela navegação.
function changeView(elem_id) {
    let tabList = document.getElementsByClassName("hide");
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].className = "hide";
    }
    document.getElementById("tab-" + elem_id.slice(4)).className += " show";
}