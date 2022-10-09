
 const programsSwiper = new Swiper('.programs__swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.programs__button-next',
    prevEl: '.programs__button-prev',
  },
  pagination: {
    el: '.programs__pagination',
    clickable: true,
  },
  slidesPerView: 2.5,
  spaceBetween: 32,
  breakpoints: {
	320: {
	  slidesPerView: 2.5,
	  spaceBetween: 16
	},
	
	480: {
	  slidesPerView: 2.5,
	  spaceBetween: 16,
	  centeredSlides: true
	},
	
	1025: {
	  slidesPerView: 4.5,
	  spaceBetween: 32
	}
 }
});


const communitySwiper = new Swiper('.community__swiper', {
  direction: 'horizontal',
  slidesPerView: 2.5,
  navigation: {
    nextEl: '.community__button-next',
    prevEl: '.community__button-prev',
  },
  breakpoints: {
	320: {
	  slidesPerView: 1.8,
	  spaceBetween: 16
	},
	
	480: {
	  slidesPerView: 2.5,
	  spaceBetween: 16,
	  freeMode: true,
	},
	
	1025: {
	  slidesPerView: 2.5,
	  spaceBetween: 32,
	}
}
});


class RZAccordion {
	constructor(selector, options) {
		let defaultOptions = {
			isOpen: () => {},
			isClose: () => {},
			speed: 300
		};

		this.options = Object.assign(defaultOptions, options);
		this.accordion = document.querySelector(selector);
		this.control = this.accordion.querySelector('.accordion__control');
		this.content = this.accordion.querySelector('.accordion__content');
		this.event();
	}

	event() {
		
		if (this.accordion) {
			this.accordion.addEventListener('click', (e) => {
				this.accordion.classList.toggle('open');

				if (this.accordion.classList.contains('open')) {
					this.open();
				} else {
					this.close();
				}
			});
		}
	}

	open() {
		this.accordion.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);
		this.accordion.classList.add('is-open');
		this.control.setAttribute('aria-expanded', true);
		this.content.setAttribute('aria-hidden', false);
		this.content.style.maxHeight = this.content.scrollHeight + 'px';
		this.options.isOpen(this);
	}

	close() {
		this.accordion.classList.remove('is-open');
		this.control.setAttribute('aria-expanded', false);
		this.content.setAttribute('aria-hidden', true);
		this.content.style.maxHeight = null;
		this.options.isClose(this);
	}
}



const accordion1 = new RZAccordion('.faq__accordion-1', {
	speed: 500,
	isOpen: (acc) => {
		console.log(acc);
	},
	isClose: (acc) => {
		console.log(acc);
	}
});

const accordion2 = new RZAccordion('.faq__accordion-2', {
	speed: 500,
	isOpen: (acc) => {
		console.log(acc);
	},
	isClose: (acc) => {
		console.log(acc);
	}
});

const accordion3 = new RZAccordion('.faq__accordion-3', {
	speed: 500,
	isOpen: (acc) => {
		console.log(acc);
	},
	isClose: (acc) => {
		console.log(acc);
	}
});

const accordion4 = new RZAccordion('.faq__accordion-4', {
	speed: 500,
	isOpen: (acc) => {
		console.log(acc);
	},
	isClose: (acc) => {
		console.log(acc);
	}
});

const accordion5 = new RZAccordion('.faq__accordion-5', {
	speed: 500,
	isOpen: (acc) => {
		console.log(acc);
	},
	isClose: (acc) => {
		console.log(acc);
	}
});

const accordion6 = new RZAccordion('.faq__accordion-6', {
	speed: 500,
	isOpen: (acc) => {
		console.log(acc);
	},
	isClose: (acc) => {
		console.log(acc);
	}
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function(event){
		event.preventDefault();

		const blockID = 	anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block:'start',
		})
	})
}


const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('.header__item');
const body = document.body;
const header = document?.querySelector('.header');

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll'); 
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('header__nav--visible');  
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
   body.classList.remove('stop-scroll');
  	burger?.classList.remove('burger--active');
  	nav?.classList.remove('header__nav--visible');	  
  });
});


const closeModal = document.querySelector('.modal__btn-close')
const modal = document.querySelector('.modal')
const btns = document.querySelectorAll('.btn')

closeModal.addEventListener('click', () => {
		modal.classList.remove('modal_visible')
})

btns.forEach((el) => {
	el.addEventListener('click', () => {
		modal.classList.add('modal_visible')
	})
})


 // inputmask
 const form = document.querySelectorAll('.form');
 const telSelector = document.querySelector('.modal__input-tel') 
 const inputMask = new Inputmask('+7 (999) 999-99-99');
 inputMask.mask(telSelector);


 const validation = new JustValidate('.form');

 validation
	.addField('.modal__input-name', [
	  {
		 rule: 'minLength',
		 value: 3,
		 errorMessage: 'Имя должно состоять минимум из 3 символов'
	  },
	  {
		 rule: 'maxLength',
		 value: 30,
	  },
	  {
		 rule: 'required',
		 value: true,
		 errorMessage: 'Введите имя!'
	  }
	])
	.addField('.modal__input-email', [
	  {
		 rule: 'required',
		 value: true,
		 errorMessage: 'Email обязателен',
	  },
	  {
		 rule: 'email',
		 value: true,
		 errorMessage: 'Введите корректный Email',
	  },
	])
	.addField('.modal__input-tel', [
	  {
		 rule: 'required',
		 value: true,
		 errorMessage: 'Телефон обязателен',
	  },
	  {
		 rule: 'function',
		 validator: function() {
			const phone = telSelector.inputmask.unmaskedvalue();
			return phone.length === 10;
		 },
		 errorMessage: 'Введите корректный телефон',
	  },
	]).onSuccess((event) => {
	  console.log('Validation passes and form submitted', event);

	  let formData = new FormData(event.target);

	  console.log(...formData);

	  let xhr = new XMLHttpRequest();

	  xhr.onreadystatechange = function () {
		 if (xhr.readyState === 4) {
			if (xhr.status === 200) {
			  console.log('Отправлено');
			}
		 }
	  }

	  xhr.open('POST', 'mail.php', true);
	  xhr.send(formData);

	  event.target.reset();
	});    