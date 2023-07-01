export function accordion() {
    const accordionItems = document.getElementsByClassName('accordion-item');
    let leng = accordionItems.length;

    for (let i = 0; i < leng; i++) {
        accordionItems[i].addEventListener('click', function () {
            this.classList.toggle('a-open');
            let acordionContent = this.nextElementSibling;
            if (acordionContent.style.maxHeight) {
                acordionContent.style.maxHeight = null;
            } else {
                acordionContent.style.maxHeight = acordionContent.scrollHeight + 'px';
            }
        })
    }
}