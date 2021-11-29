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
  const [modalActive, setModalActive] = React.useState(true);
  return React.createElement(Modal, {
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
  }))));
};

const PlansBtn = () => {
  return React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!"
  });
};

ReactDOM.render(React.createElement(PlansBtn, null), document.getElementById("plans__button"));
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));