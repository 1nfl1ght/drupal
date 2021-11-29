const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="body__form" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

const App = () => {
    const [modalActive, setModalActive] = React.useState(true);
    return (
        <Modal active={modalActive} setActive={setModalActive}>
            <form action="">
                <div>
                    <input className="form__elem" id="name" type="text" name="name" required placeholder="Ваше имя"/>
                </div>
                <div>
                    <input className="form__elem" id="phone" type="tel" name="phone" required placeholder="Телефон"/>
                </div> 
                <div> 
                    <input className="form__elem" id="email" type="email" name="email" required placeholder="E-mail"/>
                </div>
                <div>
                    <input className="comment form__elem" type="text" placeholder="Ваш комментарий"/>
                </div>
                <div id="modal__form__checkbox">
                    <input className="checkbox__input" type="checkbox" id="modal__userAgreement"/>
                    <label className="checkbox__label" htmlFor="userAgreement" htmlFor="modal__userAgreement">Отправляя заявку я даю согласие на <a>обработку своих персональных данных</a>.<span>*</span></label>
                </div>

                <div>
                    <input className="form__button" type="button" value="ОСТАВИТЬ ЗАЯВКУ!"/>
                </div>
            </form>
        </Modal>
    );
};

const PlansBtn = () => {
    return (
        <input className="plans__btn" type="button" value="ОСТАВИТЬ ЗАЯВКУ!"/>
    );
}

ReactDOM.render(<PlansBtn />, document.getElementById("plans__button"));
ReactDOM.render(<App />, document.getElementById("root"));
