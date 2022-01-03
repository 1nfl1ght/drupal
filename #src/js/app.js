const Modal = ({
  children
}) => {
  const hideModal = () => {
    let modal = document.querySelector(".modal");
    modal.style.transform = "scale(" + 0 + ")";
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

const App = () => {
  const showModal = () => {
    let start = Date.now();
    let modal = document.querySelector(".modal");
    let timer = requestAnimationFrame(function animateModal(timestamp) {
      let interval = Date.now() - start;
      modal.style.transform = "scale(" + (interval / 300 - 0.1) + ")";
      if (interval < 300) requestAnimationFrame(animateModal);
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