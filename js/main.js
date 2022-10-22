"use strict";
"use strict";
"use strict";

var _document, _document2, _document3;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var programsSwiper = new Swiper('.programs__swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.programs__button-next',
    prevEl: '.programs__button-prev'
  },
  pagination: {
    el: '.programs__pagination',
    clickable: true
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
var communitySwiper = new Swiper('.community__swiper', {
  direction: 'horizontal',
  slidesPerView: 3.2,
  spaceBetween: 32,
  loop: true,
  navigation: {
    nextEl: '.community__button-next',
    prevEl: '.community__button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
});

var RZAccordion = /*#__PURE__*/function () {
  function RZAccordion(selector, options) {
    _classCallCheck(this, RZAccordion);

    var defaultOptions = {
      isOpen: function isOpen() {},
      isClose: function isClose() {},
      speed: 300
    };
    this.options = Object.assign(defaultOptions, options);
    this.accordion = document.querySelector(selector);
    this.control = this.accordion.querySelector('.accordion__control');
    this.content = this.accordion.querySelector('.accordion__content');
    this.event();
  }

  _createClass(RZAccordion, [{
    key: "event",
    value: function event() {
      var _this = this;

      if (this.accordion) {
        this.accordion.addEventListener('click', function (e) {
          _this.accordion.classList.toggle('open');

          if (_this.accordion.classList.contains('open')) {
            _this.open();
          } else {
            _this.close();
          }
        });
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.accordion.style.setProperty('--accordion-time', "".concat(this.options.speed / 1000, "s"));
      this.accordion.classList.add('is-open');
      this.control.setAttribute('aria-expanded', true);
      this.content.setAttribute('aria-hidden', false);
      this.content.style.maxHeight = this.content.scrollHeight + 'px';
      this.options.isOpen(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.accordion.classList.remove('is-open');
      this.control.setAttribute('aria-expanded', false);
      this.content.setAttribute('aria-hidden', true);
      this.content.style.maxHeight = null;
      this.options.isClose(this);
    }
  }]);

  return RZAccordion;
}();

var accordion1 = new RZAccordion('.faq__accordion-1', {
  speed: 500,
  isOpen: function isOpen(acc) {
    console.log(acc);
  },
  isClose: function isClose(acc) {
    console.log(acc);
  }
});
var accordion2 = new RZAccordion('.faq__accordion-2', {
  speed: 500,
  isOpen: function isOpen(acc) {
    console.log(acc);
  },
  isClose: function isClose(acc) {
    console.log(acc);
  }
});
var accordion3 = new RZAccordion('.faq__accordion-3', {
  speed: 500,
  isOpen: function isOpen(acc) {
    console.log(acc);
  },
  isClose: function isClose(acc) {
    console.log(acc);
  }
});
var accordion4 = new RZAccordion('.faq__accordion-4', {
  speed: 500,
  isOpen: function isOpen(acc) {
    console.log(acc);
  },
  isClose: function isClose(acc) {
    console.log(acc);
  }
});
var accordion5 = new RZAccordion('.faq__accordion-5', {
  speed: 500,
  isOpen: function isOpen(acc) {
    console.log(acc);
  },
  isClose: function isClose(acc) {
    console.log(acc);
  }
});
var accordion6 = new RZAccordion('.faq__accordion-6', {
  speed: 500,
  isOpen: function isOpen(acc) {
    console.log(acc);
  },
  isClose: function isClose(acc) {
    console.log(acc);
  }
});
var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      var blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
var nav = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-nav]');
var navItems = nav === null || nav === void 0 ? void 0 : nav.querySelectorAll('.header__item');
var body = document.body;
var header = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelector('.header');
burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function () {
  body.classList.toggle('stop-scroll');
  burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
  nav === null || nav === void 0 ? void 0 : nav.classList.toggle('header__nav--visible');
});
navItems.forEach(function (el) {
  el.addEventListener('click', function () {
    body.classList.remove('stop-scroll');
    burger === null || burger === void 0 ? void 0 : burger.classList.remove('burger--active');
    nav === null || nav === void 0 ? void 0 : nav.classList.remove('header__nav--visible');
  });
});
var closeModal = document.querySelector('.modal__btn-close');
var modal = document.querySelector('.modal');
var btns = document.querySelectorAll('.btn');
closeModal.addEventListener('click', function () {
  modal.classList.remove('modal_visible');
});
btns.forEach(function (el) {
  el.addEventListener('click', function () {
    modal.classList.add('modal_visible');
  });
}); // inputmask

var form = document.querySelectorAll('.form');
var telSelector = document.querySelector('.modal__input-tel');
var inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);
var validation = new JustValidate('.form');
validation.addField('.modal__input-name', [{
  rule: 'minLength',
  value: 3,
  errorMessage: 'Name must be at least 3 characters long'
}, {
  rule: 'maxLength',
  value: 30
}, {
  rule: 'required',
  value: true,
  errorMessage: 'Enter your name!'
}]).addField('.modal__input-email', [{
  rule: 'required',
  value: true,
  errorMessage: 'Email is required'
}, {
  rule: 'email',
  value: true,
  errorMessage: 'Please enter a valid Email'
}]).addField('.modal__input-tel', [{
  rule: 'required',
  value: true,
  errorMessage: 'Phone required'
}, {
  rule: 'function',
  validator: function validator() {
    var phone = telSelector.inputmask.unmaskedvalue();
    return phone.length === 10;
  },
  errorMessage: 'Please enter a valid phone number'
}]).onSuccess(function (event) {
  var _console;

  console.log('Validation passes and form submitted', event);
  var formData = new FormData(event.target);

  (_console = console).log.apply(_console, _toConsumableArray(formData));

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('Submitted');
      }
    }
  };

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);
  event.target.reset();
});
//# sourceMappingURL=main.js.map
