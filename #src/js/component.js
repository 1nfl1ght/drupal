const Modal = ({
  active,
  setActive,
  children
}) => {
  return React.createElement("div", {
    className: active ? "modal active" : "modal",
    onClick: () => setActive(false)
  }, React.createElement("div", {
    className: "body__form",
    onClick: e => e.stopPropagation()
  }, children));
};

const App = () => {
  const [modalActive, setModalActive] = React.useState(false);
  return React.createElement("div", null, React.createElement("div", {
    className: "plans__items"
  }, React.createElement(PlansItem, {
    type: "item__start",
    textFrom: item__start,
    n: 4
  }, React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!",
    onClick: () => setModalActive(true)
  })), React.createElement(PlansItem, {
    type: "item__business",
    textFrom: item__business,
    n: 5
  }, React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!",
    onClick: () => setModalActive(true)
  })), React.createElement(PlansItem, {
    type: "item__vip",
    textFrom: item__vip,
    n: 5
  }, React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!",
    onClick: () => setModalActive(true)
  }))), React.createElement(Modal, {
    active: modalActive,
    setActive: setModalActive
  }, React.createElement("form", {
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
    id: "modal__form__checkbox"
  }, React.createElement("input", {
    className: "checkbox__input",
    type: "checkbox",
    id: "modal__userAgreement"
  }), React.createElement("label", {
    className: "checkbox__label",
    htmlFor: "userAgreement",
    htmlFor: "modal__userAgreement"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0437\u0430\u044F\u0432\u043A\u0443 \u044F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 ", React.createElement("a", null, "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"), ".", React.createElement("span", null, "*"))), React.createElement("div", null, React.createElement("input", {
    className: "form__button",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!"
  })))));
};

const Option = ({
  text
}) => {
  return React.createElement("div", {
    className: "item__option"
  }, React.createElement("p", null, text));
};

const item__start = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Неиспользованные оплаченные часы переносятся на следующий месяц', 'Предоплата от 6 000 реблей в месяц'];
const item__business = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Высокое время реакции - до 2 рабочих дней', 'Неиспользованные оплаченные часы не переносятся', 'Предоплата от 30 000 реблей в месяц'];
const item__vip = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Высокое время реакции - в день обращения', 'Неиспользованные оплаченные часы не переносятся', 'Предоплата от 270 000 реблей в месяц'];

const PlansItem = ({
  type,
  textFrom,
  n,
  children
}) => {
  return React.createElement("div", {
    className: `${type} plans-item`
  }, React.createElement("div", {
    className: "plan-wrapper"
  }, React.createElement("h3", null, "\u0411\u0438\u0437\u043D\u0435\u0441"), React.createElement("div", {
    className: "line"
  }), React.createElement("div", null, [...Array(n)].map((item, index) => React.createElement(Option, {
    text: textFrom[index],
    key: index
  }))), React.createElement("div", {
    id: "plans__button"
  }, children)));
};

{
  /* <div className="item__option">
                     <p>Разработка и поддержка Drupal</p>
                 </div>
                 <div className="item__option">
                     <p>Консультации и работы по SEO</p>
                 </div>
                 <div className="item__option">
                     <p>Услуги дизайнера</p>
                 </div>
                 <div className="item__option">
                     <p>Высокое время реакции –
                         до 2 рабочих дней</p>
                 </div>
                 <div className="item__option">
                     <p>Неиспользованные часы не переносятся</p>
                 </div>
                 <div className="item__option">
                     <p>Предоплата от 30 000 рублей в месяц</p>
  </div> */
}
ReactDOM.render(React.createElement(App, null), document.querySelector(".plans__place"));