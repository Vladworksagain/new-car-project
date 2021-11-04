window.onload = function () {
    globalValidation()
    mobileMenu()
    showMoreProduct()
}

AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    duration: 1000,
    easing: 'ease',
    once: true,
    mirror: false,
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    speed: 600,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


function globalValidation() {

    const element = document.querySelectorAll('.input-mask__js')
    const element2 = document.querySelectorAll('.double-input');
    const defaultFormBtn = document.querySelectorAll('.default-form__btn')

    element.forEach((element) => {
        var phoneMask = IMask(element, {
        mask: '+{3} 8(000) 000-00-00',
        lazy: false,
        placeholderChar: '_',
    });

    if(defaultFormBtn) {
        defaultFormBtn.forEach((formSubmit) => {
            formSubmit.addEventListener('click', (e) => {
                setTimeout(() => {
                    checkValid()
                }, 100)
            })
        })
    }

    function checkValid() {
        element2.forEach((doubleInput) => {
            if(doubleInput.classList.contains('js-validate-error-field')) {
                doubleInput.previousElementSibling.classList.add('active')
            }
        })
    }

    if(element) {
        element.addEventListener('keyup', (e) => {
            element2.forEach((element2, value) => {
                console.log(value)
                element2.value = e.target.value.split('_').join('')
                if(element2.value.length < 19) {
                    e.target.classList.add('active')
                } else {
                    e.target.classList.remove('active')
                }
            })
        })
    }

})

const rules = false

const formValidation = document.querySelectorAll('.just-validate')

if(formValidation) {
    formValidation.forEach((validation) => {
        new window.JustValidate('.just-validate', {
            rules: {
                myField: {
                    required: true,
                    maxLength: 20,
                    minLength: 19
                },
            },

            // submitHandler: () => {
            //     rules = true
            // },
            // invalidFormCallback: () => {
            //     rules = false
            // },
        });

        new window.JustValidate('.js-form', {
            rules: {
                myField: {
                    required: true,
                    maxLength: 20,
                    minLength: 19
                },
            },

            // submitHandler: () => {
            //     rules = true
            // },
            // invalidFormCallback: () => {
            //     rules = false
            // },
        });
    })
}
}

function mobileMenu() {
    const burgerBtnIsOpen = document.getElementById('burger-btn__js')
    const menuIsOpen = document.getElementById('mobile-menu__js')
    const menuBtnIsClose = document.getElementById('close-menu__js')
    const activeBody = document.body

    if(burgerBtnIsOpen) {
        burgerBtnIsOpen.addEventListener('click', () => {
            burgerBtnIsOpen.classList.add('open')
            menuIsOpen.classList.add('menu-is__open')
            activeBody.classList.add('__active')
        })
    }

    if(menuBtnIsClose) {
        menuBtnIsClose.addEventListener('click', () => {
            burgerBtnIsOpen.classList.remove('open')
            menuIsOpen.classList.remove('menu-is__open')
            activeBody.classList.remove('__active')
        })
    }
}

//modalMobileMenuCatalog//

function showMoreProduct() {
    // const openCatalogProductBtn = document.getElementById('open-catalog__js')
    // const closeCatalogProductBtn = document.querySelectorAll('.close-catalog__js')
    // const mobileCatalogProduct = document.querySelectorAll('.mobile-catalog__js')
    //
    // openCatalogProductBtn.addEventListener('click', (e) => {
    //     console.log(e.target)
    // })

    const buttons = document.querySelectorAll('.modal-open__btn')

    const modals = document.querySelectorAll('.default-modals')

    const closeButtons = document.querySelectorAll('.modal-close__js')

    const previousButton = document.querySelectorAll('.modal-previous__step')

    closeButtons.forEach(buttonClose => {
        buttonClose.addEventListener('click', closeModal, false)
    })

    previousButton.forEach(buttonPrev => {
        buttonPrev.addEventListener('click', previousStep, false)
    })

    buttons.forEach(button => {
        button.addEventListener('click', openModal, false)
    })

    function openModal(event) {
        modals.forEach(item => {
            if (event.target.dataset.button === item.dataset.modal) {
                item.classList.add('active-catalog')
            }
            // else {
            //     item.classList.remove('active-catalog')
            // }
        })
    }

    function closeModal(event) {
        modals.forEach((catalogModals) => {
            if(catalogModals.classList.contains('active-catalog')) {
                catalogModals.classList.remove('active-catalog')
            }
        })
    }

    function previousStep(event) {
        this.closest('.default-modals').classList.remove('active-catalog')
    }
}

//modalMobileMenuCatalog//

//buttonUp JS//
const buttonUp = document.getElementById("btn-up-scroll");
const buttonUpArrow = document.getElementById('arrow-up')
let path = document.getElementById('button-up__progress')

if(buttonUp && buttonUpArrow ) {
    window.onscroll = function() {
        toggleScrollUpBtn()
        animationProgressLine()
    };
}

if(buttonUp) {
    buttonUp.addEventListener('click', scrollUp)
}

function toggleScrollUpBtn() {
    if (document.body.scrollTop > 134 || document.documentElement.scrollTop > 134) {
        buttonUp.classList.add('button-up__active')
    } else {
        buttonUp.classList.remove('button-up__active')
        buttonUp.classList.remove('go-to__up')
    }
}

function scrollUp() {
    buttonUp.classList.add('go-to__up')
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function animationProgressLine() {
    let length = path.getTotalLength()
    path.style.strokeDasharray = length
    path.style.strokeDashoffset = length

    const scrollPosition = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    const dataStore = length * scrollPosition
    path.style.strokeDashoffset = length - dataStore
}

lightGallery(document.getElementById('portfolio'), {
    swipeThreshold: 50
})

//buttonUp JS//

