function handleCategoryMenu() {
    let btn = document.querySelector('.category-menu-dropdown-btn');
    let menu = document.querySelector('.dropdown-menu');
    let txt = document.querySelector('.category-menu-dropdown-btn p');
    btn.addEventListener('click', ()=>{
        if (txt.classList.contains('dropdown-arrow-rotated')){
            menu.classList.add('dropdown-menu-invisible');
            txt.classList.remove('dropdown-arrow-rotated');
        }
        else {
            menu.classList.remove('dropdown-menu-invisible');
            txt.classList.add('dropdown-arrow-rotated');
        }
    })
}


handleCategoryMenu()