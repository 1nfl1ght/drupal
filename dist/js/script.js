$(document).ready(function() {
    $('.item__start').mouseover(function () {
    $(this).addClass('scaled');
    $('.item__business').addClass('business-scale');
    });
    $('.item__start').mouseout(function () {
        $(this).removeClass('scaled');
        $('.item__business').removeClass('business-scale');
    });
    $('.item__vip').mouseover(function () {
        $(this).addClass('scaled');
        $('.item__business').addClass('business-scale');
    });
    $('.item__vip').mouseout(function () {
        $(this).removeClass('scaled');
        $('.item__business').removeClass('business-scale');
    });
});

$(document).ready(function() { 
    $('.slider').on(`init reInit`, function(event, slick) {
    $('.slick-slide-num-current').text('0' + 1 + ' '); // ' / ' + '0' + slick.slideCount
    })
    $('.slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
        $('.slick-slide-num-current').text('0' + (currentSlide + 1) + ' '); // + ' / 0' + slick.slideCount
    })
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: true,
        cssEase: 'linear',
        appendArrows: '.slick__arrows',
        prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous"></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next"></button>',
    });
});

$(document).ready(function() { 
    $('.partners-slider-1').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    responsive:[
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: true,
        }
    }
    ],
    });
    $('.partners-slider-2').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        responsive:[
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                variableWidth: true,
            }
        }
        ],
    });
});


$(document).ready(function() {
    $('.faq__title').click(function(event) {
    if($('.faq-field').hasClass('one')){
        $('.faq__title').not($(this)).parent().removeClass('active');
        $('.text').not($(this).next()).slideUp(300);
    }
    $(this).next().slideToggle(300); //.toggleClass('active')
    $(this).parent().toggleClass('active');
    });
});

$(document).ready(function() {
$("a.to__tarrifs").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});
});
$(document).ready(function () {
    $('.header__burger').click(function (event) { 
        $('.menu__body').toggleClass('active');
    });
})
const Modal = ({
  children
}) => {
  const hideModal = () => {
    let modal = document.querySelector(".modal");
    modal.style.transform = "scale(0)";
  };

  return React.createElement("div", {
    className: "modal",
    onClick: () => hideModal()
  }, React.createElement("div", {
    className: "body__form",
    onClick: e => e.stopPropagation()
  }, children));
};

const Option = ({
  text
}) => {
  return React.createElement("div", {
    className: "item__option"
  }, React.createElement("p", null, text));
};

const itemStart = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Неиспользованные оплаченные часы переносятся на следующий месяц', 'Предоплата от 6 000 реблей в месяц'];
const itemBusiness = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Высокое время реакции - до 2 рабочих дней', 'Неиспользованные оплаченные часы не переносятся', 'Предоплата от 30 000 реблей в месяц'];
const itemVip = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Высокое время реакции - в день обращения', 'Неиспользованные оплаченные часы не переносятся', 'Предоплата от 270 000 реблей в месяц'];
const startTitle = ['Стартовый'];
const businessTitle = ['Бизнес'];
const vipTitle = ['VIP'];

const PlansItem = ({
  type,
  textFrom,
  titleFrom,
  n,
  children
}) => {
  return React.createElement("div", {
    className: `${type} plans-item`
  }, React.createElement("div", {
    className: "plan-wrapper"
  }, React.createElement("h3", null, titleFrom), React.createElement("div", {
    className: "line"
  }), React.createElement("div", null, [...Array(n)].map((item, index) => React.createElement(Option, {
    text: textFrom[index],
    key: index
  }))), children));
};

const Form = ({
  checkBlockId,
  checkBoxId
}) => {
  return React.createElement("form", {
    action: ""
  }, React.createElement("div", null, React.createElement("input", {
    className: "form__elem",
    id: "name",
    type: "text",
    name: "name",
    required: true,
    placeholder: "Ваше имя"
  })), React.createElement("div", null, React.createElement("input", {
    className: "form__elem",
    id: "phone",
    type: "tel",
    name: "phone",
    required: true,
    placeholder: "Телефон"
  })), React.createElement("div", null, React.createElement("input", {
    className: "form__elem",
    id: "email",
    type: "email",
    name: "email",
    required: true,
    placeholder: "E-mail"
  })), React.createElement("div", null, React.createElement("input", {
    className: "comment form__elem",
    type: "text",
    placeholder: "Ваш комментарий"
  })), React.createElement("div", {
    id: checkBlockId
  }, React.createElement("input", {
    className: "checkbox__input",
    type: "checkbox",
    id: checkBoxId
  }), React.createElement("label", {
    className: "checkbox__label",
    htmlFor: checkBoxId
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0437\u0430\u044F\u0432\u043A\u0443 \u044F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 ", React.createElement("a", null, "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"), ".", React.createElement("span", null, "*"))), React.createElement("div", {
    className: "g-recaptcha",
    "data-sitekey": "6LfvTFQdAAAAAMi9xDDFtM63vjBlBemc9O00S52m"
  }), React.createElement("div", null, React.createElement("input", {
    className: "form__button",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!"
  })));
};

const App = () => {
  const showModal = () => {
    let start = Date.now();
    let modal = document.querySelector(".modal");
    let timer = requestAnimationFrame(function animateBall(timestamp) {
      let interval = Date.now() - start;
      modal.style.transform = "scale(" + interval / 200 + ")";
      if (interval < 200) requestAnimationFrame(animateBall);
    });
  };

  return React.createElement("div", null, React.createElement("div", {
    className: "plans__items"
  }, React.createElement(PlansItem, {
    type: "item__start",
    textFrom: itemStart,
    titleFrom: startTitle,
    n: 4
  }, React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!",
    onClick: () => showModal()
  })), React.createElement(PlansItem, {
    type: "item__business",
    textFrom: itemBusiness,
    titleFrom: businessTitle,
    n: 5
  }, React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!",
    onClick: () => showModal()
  })), React.createElement(PlansItem, {
    type: "item__vip",
    textFrom: itemVip,
    titleFrom: vipTitle,
    n: 5
  }, React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!",
    onClick: () => showModal()
  }))), React.createElement(Modal, null, React.createElement(Form, {
    checkBlockId: "modal__form__checkbox",
    checkBoxId: "modal__userAgreement"
  })));
};

ReactDOM.render(React.createElement(Form, {
  checkBlockId: "form__checkbox",
  checkBoxId: "userAgreement"
}), document.querySelector("#main-form"));
ReactDOM.render(React.createElement(App, null), document.querySelector(".plans__place"));