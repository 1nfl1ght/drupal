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
    type: "item__start"
  }, React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!",
    onClick: () => setModalActive(true)
  })), React.createElement(PlansItem, {
    type: "item__business"
  }, React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!",
    onClick: () => setModalActive(true)
  })), React.createElement(PlansItem, {
    type: "item__vip"
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

const PlansItem = ({
  type,
  children
}) => {
  return React.createElement("div", {
    className: `${type} plans-item`
  }, React.createElement("div", {
    className: "plan-wrapper"
  }, React.createElement("h3", null, "\u0411\u0438\u0437\u043D\u0435\u0441"), React.createElement("div", {
    className: "line"
  }), React.createElement("div", {
    className: "item__option"
  }, React.createElement("div", {
    className: "checkmark"
  }), React.createElement("p", null, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 Drupal")), React.createElement("div", {
    className: "item__option"
  }, React.createElement("div", {
    className: "checkmark"
  }), React.createElement("p", null, "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E SEO")), React.createElement("div", {
    className: "item__option"
  }, React.createElement("div", {
    className: "checkmark"
  }), React.createElement("p", null, "\u0423\u0441\u043B\u0443\u0433\u0438 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430")), React.createElement("div", {
    className: "item__option"
  }, React.createElement("div", {
    className: "checkmark"
  }), React.createElement("p", null, "\u0412\u044B\u0441\u043E\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u2013 \u0434\u043E 2 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439")), React.createElement("div", {
    className: "item__option"
  }, React.createElement("div", {
    className: "checkmark"
  }), React.createElement("p", null, "\u041D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0447\u0430\u0441\u044B \u043D\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u044F\u0442\u0441\u044F")), React.createElement("div", {
    className: "item__option"
  }, React.createElement("div", {
    className: "checkmark"
  }), React.createElement("p", null, "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430 \u043E\u0442 30 000 \u0440\u0443\u0431\u043B\u0435\u0439 \u0432 \u043C\u0435\u0441\u044F\u0446")), React.createElement("div", {
    id: "plans__button"
  }, children)));
};

ReactDOM.render(React.createElement(App, null), document.querySelector(".plans__place"));