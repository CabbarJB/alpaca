function handleLanguageSelect() {
    let btn = document.querySelector('.language-name');
    let menu = document.querySelector('.language-select-menu');

    btn.addEventListener('click' , (event)=>{
        event.preventDefault()
        if (btn.classList.contains('lang-arrow-rotated')){
            menu.style.display = 'none'
            btn.classList.remove('lang-arrow-rotated');

        }
        else {

            menu.style.display = 'block'
            btn.classList.add('lang-arrow-rotated');

        }
    })
    document.addEventListener('click', event=>{
if (document.querySelector('.language-select-menu').style.display === 'block'){
    if (event.target.closest('.language-select-menu') || event.target.closest('.language-name')){
return;
    }
    else {
        menu.style.display = 'none'
        btn.classList.remove('lang-arrow-rotated');
    }
}
    })

}
document.addEventListener('click' , event=>{
    let isClickInside = document.querySelector('.language-select-menu').contains(event.currentTarget) || document.querySelector('.language-name');
    if (!isClickInside && document.querySelector('.language-name').classList.contains('lang-arrow-rotated')){
        console.log('a')
        document.querySelector('.language-select-menu').style.display = 'none'
        document.querySelector('.language-name').classList.remove('lang-arrow-rotated');
    }
})

handleLanguageSelect();


function handleSearchBarClick() {
    let wrapper = document.querySelector('.search-btn-wrapper')
    let btn = document.querySelector('.search-btn');
    let bar = document.querySelector('.hidden-search-bar');
    let input = document.querySelector('.searchbar-input');
    let icon  =document.querySelector('.searchbar-icon-wrapper');
    let lang = document.querySelector('.language-select')
    btn.addEventListener('click' , ()=>{

            bar.classList.add('searchbar-visible');
            input.style.display = 'block';
            icon.style.display = 'block';
            btn.style.display = 'none';
            wrapper.classList.remove('search-btn-wrapper-width')
            input.focus()
        lang.style.display = 'none'
    })

    input.addEventListener('blur' , ()=>{
        bar.classList.remove('searchbar-visible');
        input.style.display = 'none';
        icon.style.display = 'none';
        btn.style.display = 'block';
        wrapper.classList.add('search-btn-wrapper-width')
        lang.style.display = 'block'

    })

}

handleSearchBarClick()

function handleRightMenu() {
    let btn = document.querySelector('.burger-btn');
    let menu = document.querySelector('.hidden-right-menu');
    let closeBtn = document.querySelector('.right-menu-close-btn');
    let lang = document.querySelector('.language-select');
    let search = document.querySelector('.search-btn-wrapper')
    btn.addEventListener('click' , ()=>{
            menu.classList.add('right-menu-visible');
            btn.style.display = 'none';
            lang.style.display = 'none';
            search.style.display = 'none'


    })
    closeBtn.addEventListener('click' , ()=>{
        menu.classList.remove('right-menu-visible');
        btn.style.display = 'flex';
        lang.style.display = 'block';
        search.style.display = 'flex'
    })
}

handleRightMenu()