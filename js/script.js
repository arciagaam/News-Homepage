window.onload = (() => {
    let visible = false;
    let burger = document.querySelectorAll('.burger');
    let nav = document.querySelector('#mobile-nav');
    let dim = document.querySelector('#dim');

    burger.forEach(item => {
        item.onclick = (() => {
            visible = !visible;
            nav.style.transform = visible ? "translateX(100%)" : "translateX(0%)";
            dim.style.display = visible ? "none" : "block";
        })
    })

})