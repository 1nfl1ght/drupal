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
    const [modalActive, setModalActive] = React.useState(false);
    return (
        <div>
            <div className="plans__items">
                <PlansItem type="item__start" ><input className="plans__btn" type="button" value="ОСТАВИТЬ ЗАЯВКУ!" onClick={() => setModalActive(true)}/></PlansItem>
                <PlansItem type="item__business" ><input className="plans__btn" type="button" value="ОСТАВИТЬ ЗАЯВКУ!" onClick={() => setModalActive(true)}/></PlansItem>
                <PlansItem type="item__vip" ><input className="plans__btn" type="button" value="ОСТАВИТЬ ЗАЯВКУ!" onClick={() => setModalActive(true)}/></PlansItem>
            </div>
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
        </div>
        
    );
};

const PlansItem = ({type, children}) => {
    return (
        <div className={`${type} plans-item`}>
            <div className="plan-wrapper">
                <h3>
                    Бизнес
                </h3>
                <div className="line"></div>
                <div className="item__option">
                    <div className="checkmark">
                        {/* @@include('../img/svg/Vector.svg') */}
                    </div>
                    <p>Разработка и поддержка Drupal</p>
                </div>
                <div className="item__option">
                    <div className="checkmark">
                        {/* @@include('../img/svg/Vector.svg') */}
                    </div>
                    <p>Консультации и работы по SEO</p>                    
                </div>
                <div className="item__option">
                    <div className="checkmark">
                        {/* @@include('../img/svg/Vector.svg') */}
                    </div>
                    <p>Услуги дизайнера</p>
                </div>
                <div className="item__option">
                    <div className="checkmark">
                        {/* @@include('../img/svg/Vector.svg') */}
                    </div>
                    <p>Высокое время реакции –
                        до 2 рабочих дней</p>
                </div>
                <div className="item__option">
                    <div className="checkmark">
                        {/* @@include('../img/svg/Vector.svg') */}
                    </div>
                    <p>Неиспользованные часы не переносятся</p>
                </div>
                <div className="item__option">
                    <div className="checkmark">
                        {/* @@include('../img/svg/Vector.svg') */}
                    </div>
                    <p>Предоплата от 30 000 рублей в месяц</p>
                </div>
                <div id="plans__button">
                {children}
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".plans__place"));
