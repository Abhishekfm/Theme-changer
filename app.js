let btn_sbmt = document.querySelector(".sbmt-btn");
let btn_before = document.querySelector(".before_click_ham");
let btn_after = document.querySelector(".after_click_ham");
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
let theme_div = document.querySelector(".theme-div");
let card = document.querySelector(".card");

btn_before.addEventListener("click", ()=>{
    btn_before.classList.add("hidden");
    theme_div.classList.remove("hidden");
})
btn_after.addEventListener("click", ()=>{
    theme_div.classList.add("hidden");
    btn_before.classList.remove("hidden");
})


function changeTheme(color) {
    btn_sbmt.style.backgroundColor = color;
}


function change_to_dark(){
    let card_or_theme = '#242624';
    let back = '#303130';
    let sect = document.querySelector('.sect');
    let main_hero = document.querySelector('.main-hero');
    sect.style.backgroundColor = back;
    main_hero.style.backgroundColor = back;
    card.style.backgroundColor = card_or_theme;
    card.style.color = '#fff';
    theme_div.style.color = '#fff';
    theme_div.style.backgroundColor = card_or_theme;
    light.classList.add("hidden");
    dark.classList.remove("hidden");
}
function change_to_light(){
    let card_or_theme = '#fff';
    let back = '#EDEEEC';
    let sect = document.querySelector('.sect');
    let main_hero = document.querySelector('.main-hero');
    sect.style.backgroundColor = back;
    main_hero.style.backgroundColor = back;
    card.style.backgroundColor = card_or_theme;
    card.style.color = '#000';
    theme_div.style.color = '#000';
    theme_div.style.backgroundColor = card_or_theme;
    light.classList.remove("hidden");
    dark.classList.add("hidden");
}