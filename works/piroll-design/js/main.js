"use strict";

//Function (Browser and Mobile)
function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
	Android: function Android() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function BlackBerry() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function iOS() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function Opera() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function Windows() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function any() {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	}
};
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('touch');
}
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('loaded');
}

//Body Lock
function body_lock(delay) {
	var body = document.querySelector("body");

	if (body.classList.contains('lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	var body = document.querySelector("body");
	if (!body.classList.contains('wait')) {
		var lock_padding = document.querySelectorAll(".lp");
		setTimeout(function () {
			for (var index = 0; index < lock_padding.length; index++) {
				var el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("lock");
		}, delay);
		body.classList.add("wait");
		setTimeout(function () {
			body.classList.remove("wait");
		}, delay);
	}
}
function body_lock_add(delay) {
	var body = document.querySelector("body");
	if (!body.classList.contains('wait')) {
		var lock_padding = document.querySelectorAll(".lp");
		for (var index = 0; index < lock_padding.length; index++) {
			var el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("lock");
		body.classList.add("wait");
		setTimeout(function () {
			body.classList.remove("wait");
		}, delay);
	}
}

//Funcition determines WEBP format for browsers
function testWebP(callback) {
let webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});

//IMG to Background
function ibg() {
	if (isIE()) {
		var ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

//Menu Burger without click no area
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
};
function menu_close() {
	var iconMenu = document.querySelector(".icon-menu");
	var menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("active");
	menuBody.classList.remove("active");
}

//Add the additional css .class to another by scroll px
document.addEventListener("scroll", function() {{
	let scrollTop = window.scrollY;
	const headerWrapper = document.querySelector(".header");
	if (scrollTop > 15) {
	headerWrapper.classList.add("header-scroll");
	} else {
		headerWrapper.classList.remove("header-scroll");
	}
}});


var btn = document.querySelector('.contentblock-works__btn');
btn.onclick = function(e) {
	var element = document.querySelector(".bottom-contentblock-works__row_h");
  if(element.classList.contains("bottom-contentblock-works__row_v")) {
  	element.classList.remove("bottom-contentblock-works__row_v");
  } else {
  	element.classList.add("bottom-contentblock-works__row_v");
  }
}



// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// write in HTML <data-da="where,which,when">, example <data-da="section2,1,772">.

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());

//Highlight Active Menu Based On The Scroll Position – active-menu-link
//id="section"
new ActiveMenuLink(".menu__body",{
	// selector of menu item
	itemTag: "li",
	// active class
	activeClass: "active",
	// in pixels
	scrollOffset: 0,
	// duration in ms
	scrollDuration: 500,
	// easing function
	ease: "out-circ",
	// specifies the header height
	headerHeight: 40,
	// string
	default: null,
	// shows hash tag
	showHash: true
});

var mySwiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	loop: true,
	autoHeight: true,
	initialSlide: 1,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
})
//Forms input
var btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');

if (btn) {
	for (var _index12 = 0; _index12 < btn.length; _index12++) {
		var _el8 = btn[_index12];

		_el8.addEventListener('click', form_submit);
	}
}

function form_submit() {
	var error = 0;
	var btn = event.target;
	var form = btn.closest('form');
	var form_req = form.querySelectorAll('.req');

	if (form_req) {
		for (var _index13 = 0; _index13 < form_req.length; _index13++) {
			var _el9 = form_req[_index13];
			error += form_validate(_el9);
		}
	}

	if (error == 0) {
		//SendForm
		form_clean(form);
		popup_close(); //popup_open('message');
		//event.preventDefault();
	} else {
		var form_error = form.querySelectorAll('.error');

		if (form_error && form.classList.contains('goto-error')) {
			goto(form_error[0], 1000, 50);
		}

		event.preventDefault();
	}
}

function form_validate(input) {
	var error = 0;
	var input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("email")) {
		if (input.value != input_g_value) {
			var em = input.value.replace(" ", "");
			input.value = em;
		}

		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}

	return error;
}

function form_add_error(input) {
	input.classList.add('error');
	input.parentElement.classList.add('error');
	var input_error = input.parentElement.querySelector('.form__error');

	if (input_error) {
		input.parentElement.removeChild(input_error);
	}

	var input_error_text = input.getAttribute('data-error');

	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}

function form_remove_error(input) {
	input.classList.remove('error');
	input.parentElement.classList.remove('error');
	var input_error = input.parentElement.querySelector('.form__error');

	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}

function form_clean(form) {
	var inputs = form.querySelectorAll('input,textarea');

	for (var _index14 = 0; _index14 < inputs.length; _index14++) {
		var _el10 = inputs[_index14];

		_el10.parentElement.classList.remove('focus');

		_el10.classList.remove('focus');

		_el10.value = _el10.getAttribute('data-value');
	}

	var selects = form.querySelectorAll('select');

	if (inputs.length > 0) {
		for (var _index15 = 0; _index15 < selects.length; _index15++) {
			var select = selects[_index15];
			var select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

var selects = document.querySelectorAll('select');

if (selects.length > 0) {
	selects_init();
} //Select


function selects_init() {
	for (var _index16 = 0; _index16 < selects.length; _index16++) {
		var select = selects[_index16];
		select_init(select);
	} //select_callback();


	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}

function selects_close(e) {
	var selects = document.querySelectorAll('.select');

	if (!e.target.closest('.select')) {
		for (var _index17 = 0; _index17 < selects.length; _index17++) {
			var select = selects[_index17];
			select.classList.remove('active');
		}
	}
}

function select_init(select) {
	var select_parent = select.parentElement;
	var select_modifikator = select.getAttribute('class');
	var select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';
	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');
	var new_select = select.parentElement.querySelector('.select');
	new_select.append(select);
	select_item(select);
}

function select_item(select) {
	var select_parent = select.parentElement;
	var select_items = select_parent.querySelector('.select__item');
	var select_options = select.querySelectorAll('option');
	var select_selected_option = select.querySelector('option:checked');
	var select_selected_text = select_selected_option.text;
	var select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	var select_type_content = '';

	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow">' + select_selected_text + '</div>';
	}

	select_parent.insertAdjacentHTML('beforeend', '<div class="select__item">' + '<div class="select__title">' + select_type_content + '</div>' + '<div class="select__options">' + select_get_options(select_options) + '</div>' + '</div></div>');
	select_actions(select, select_parent);
}

function select_actions(original, select) {
	var select_item = select.querySelector('.select__item');
	var select_body_options = select.querySelector('.select__options');
	var select_options = select.querySelectorAll('.select__option');
	var select_type = original.getAttribute('data-type');
	var select_input = select.querySelector('.select__input');
	select_item.addEventListener('click', function () {
		var selects = document.querySelectorAll('.select');

		for (var _index18 = 0; _index18 < selects.length; _index18++) {
			var _select = selects[_index18];

			if (_select != select_item.closest('.select')) {
				_select.classList.remove('active');
			}
		}

		slideToggle(select_body_options, 100);
		select.classList.toggle('active');
	});

	var _loop5 = function _loop5(_index19) {
		var select_option = select_options[_index19];
		var select_option_value = select_option.getAttribute('data-value');
		var select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}

		select_option.addEventListener('click', function () {
			for (var _index20 = 0; _index20 < select_options.length; _index20++) {
				var _el11 = select_options[_index20];
				_el11.style.display = 'block';
			}

			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = select_option_text;
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	};

	for (var _index19 = 0; _index19 < select_options.length; _index19++) {
		_loop5(_index19);
	}
}

function select_get_options(select_options) {
	if (select_options) {
		var select_options_content = '';

		for (var _index21 = 0; _index21 < select_options.length; _index21++) {
			var select_option = select_options[_index21];
			var select_option_value = select_option.value;

			if (select_option_value != '') {
				var select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}

		return select_options_content;
	}
}

function select_search(e) {
	var select_block = e.target.closest('.select ').querySelector('.select__options');
	var select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	var select_search_text = e.target.value.toUpperCase();

	for (var _i4 = 0; _i4 < select_options.length; _i4++) {
		var select_option = select_options[_i4];
		var select_txt_value = select_option.textContent || select_option.innerText;

		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}

function selects_update_all() {
	var selects = document.querySelectorAll('select');

	if (selects) {
		for (var _index22 = 0; _index22 < selects.length; _index22++) {
			var select = selects[_index22];
			select_item(select);
		}
	}
} //Placeholers


var inputs = document.querySelectorAll('input[data-value],textarea[data-value]');

if (inputs.length > 0) {
	var _loop6 = function _loop6(_index23) {
		var input = inputs[_index23];
		var input_g_value = input.getAttribute('data-value');

		if (input.value == '' && input_g_value != '') {
			input.value = input_g_value;
		}

		if (input.value != '' && input.value != input_g_value) {
			input_focus_add(input);
		}

		input.addEventListener('focus', function (e) {
			if (input.value == input_g_value) {
				input_focus_add(input);
				input.value = '';
			}

			if (input.classList.contains('date')) {
				input.classList.add('mask');
				Inputmask("99-99-9999", {
					//"placeholder": '',
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function onincomplete() {
						input_clear_mask(input, input_g_value);
					}
				}).mask(input);
			}

			if (input.classList.contains('phone')) {
				//'+7(999) 999 9999'
				//'+38(999) 999 9999'
				//'+375(99)999-99-99'
				input.classList.add('mask');
				Inputmask("+375 (99) 9999999", {
					//"placeholder": '',
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function onincomplete() {
						input_clear_mask(input, input_g_value);
					}
				}).mask(input);
			}

			if (input.classList.contains('digital')) {
				input.classList.add('mask');
				Inputmask("9{1,}", {
					"placeholder": '',
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function onincomplete() {
						input_clear_mask(input, input_g_value);
					}
				}).mask(input);
			}

			form_remove_error(input);
		});
		input.addEventListener('blur', function (e) {
			if (input.value == '') {
				input.value = input_g_value;
				input_focus_remove(input);

				if (input.classList.contains('mask')) {
					input_clear_mask(input, input_g_value);
				}
			}
		});

		if (input.classList.contains('date')) {
			datepicker(input, {
				customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
				customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
				formatter: function formatter(input, date, instance) {
					var value = date.toLocaleDateString();
					input.value = value;
				}
			});
		}
	};

	for (var _index23 = 0; _index23 < inputs.length; _index23++) {
		_loop6(_index23);
	}
}

function input_focus_add(input) {
	input.classList.add('focus');
	input.parentElement.classList.add('focus');
}

function input_focus_remove(input) {
	input.classList.remove('focus');
	input.parentElement.classList.remove('focus');
}

function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}