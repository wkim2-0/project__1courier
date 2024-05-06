function animateBand(){
	document.querySelectorAll('.band').forEach(function(elem){
		let posTop = elem.getBoundingClientRect().top;
		if(posTop + elem.clientHeight <= window.innerHeight && posTop >= 0){
			elem.classList.add('show_visible');
		}
	});
}

function animateTitle(){
	document.querySelectorAll('.animate__animated').forEach(function(elem){
		let posTop = elem.getBoundingClientRect().top;
		if(posTop + elem.clientHeight <= window.innerHeight && posTop >= 0){
			elem.classList.add('animate__fadeInDown');
		}
	});
}

document.addEventListener('scroll',function(){animateTitle()})
document.addEventListener('scroll',function(){animateBand()})

//попап
function showForm(){
	document.querySelector('.modal-form').classList.remove('toggled');

	document.querySelector('.modal-form').addEventListener('click', function(el){
		 var clickedElement = el.target;
		  if (clickedElement.classList.contains('modal-form')) {
			document.querySelector('.modal-form').classList.add('toggled');
		  }
	});

	document.querySelector('.modal-form .close').addEventListener('click', () => {
		document.querySelector('.modal-form').classList.add('toggled');
	})
	
}

// function popup(modalSelector, btnsSelectors, closeSelector) {
//     const modal = document.querySelector(modalSelector);
//     const btns = document.querySelectorAll(btnsSelectors);
//     const close = document.querySelectorAll(closeSelector);

//     btns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             modal.classList.add('popup-active')
//             document.body.classList.add('overflow-hidden')
//         })
//     })

//     close.forEach(el => {
//         el.addEventListener('click', () => {
//             modal.classList.remove('popup-active')
//             document.body.classList.remove('overflow-hidden')
//         })
//     })
// }

// popup('.hidden_courier', '.btn-popup', '.overlay');

// function sliderRange(sliderSelector, valueSelector) {
//     const slider = document.querySelector(sliderSelector);
//     const output = document.querySelector(valueSelector);
//     output.innerHTML = slider.value;

//     slider.oninput = function() {
//         output.innerHTML = this.value;
//         // output.style.left = (this.value/2) + "%";
//     }
// }

// sliderRange('#calculate-1', '#demo-1');
// sliderRange('#calculate-2', '#demo-2');

function menuMobile() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu-mobile');
    const close = document.querySelector('.menu-mobile_close');
    const menuItem = document.querySelectorAll('.nav');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu-mobile_show');
        document.body.classList.add('overflow-hidden')
    });

    close.addEventListener('click', () => {
        menu.classList.toggle('menu-mobile_show')
        document.body.classList.remove('overflow-hidden')
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('menu-mobile_show')
            document.body.classList.remove('overflow-hidden')
        })
    })
}

menuMobile();