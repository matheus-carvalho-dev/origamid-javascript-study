const activeClass = "ativo"
function initTabNav(){
const tabMenu = document.querySelectorAll(".js-tabMenu li");
const tabContent = document.querySelectorAll(".js-tabContent section");
tabContent[0].classList.add(activeClass);
if (tabMenu.length && tabContent.length) {
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });
    tabContent[index].classList.add(activeClass);
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
}
initTabNav()

function initAccordion(){
    const accordionList = document.querySelectorAll(".js-accordion dt")
    if(accordionList.length){
function activeAccordion(){
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
    
}
const accordionList = document.querySelectorAll(".js-accordion dt")
accordionList.forEach(item => {
    item.addEventListener('click' ,activeAccordion)
})
}}
initAccordion()