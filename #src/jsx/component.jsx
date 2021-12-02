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
                <PlansItem type="item__start" textFrom={item__start} n={4}><input className="plans__btn" type="button" value="ОСТАВИТЬ ЗАЯВКУ!" onClick={() => setModalActive(true)}/></PlansItem>
                <PlansItem type="item__business" textFrom={item__business} n={5}><input className="plans__btn" type="button" value="ОСТАВИТЬ ЗАЯВКУ!" onClick={() => setModalActive(true)}/></PlansItem>
                <PlansItem type="item__vip" textFrom={item__vip} n={5}><input className="plans__btn" type="button" value="ОСТАВИТЬ ЗАЯВКУ!" onClick={() => setModalActive(true)}/></PlansItem>
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

const Option = ({text}) => {
    return (
        <div className="item__option">
            <p>{text}</p>
        </div>
    );
};

const item__start = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Неиспользованные оплаченные часы переносятся на следующий месяц', 'Предоплата от 6 000 реблей в месяц'];
const item__business = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Высокое время реакции - до 2 рабочих дней', 'Неиспользованные оплаченные часы не переносятся', 'Предоплата от 30 000 реблей в месяц'];
const item__vip = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Высокое время реакции - в день обращения', 'Неиспользованные оплаченные часы не переносятся', 'Предоплата от 270 000 реблей в месяц'];

const PlansItem = ({type, textFrom, n, children}) => {
    return (
        <div className={`${type} plans-item`}>
            <div className="plan-wrapper">
                <h3>
                    Бизнес
                </h3>
                <div className="line"></div>
                <div>
                { [...Array(n)].map((item, index) => <Option text={textFrom[index]} key={index} /> ) }
                </div>
                <div id="plans__button">
                {children}
                </div>
            </div>
        </div>
    );
};

{/* <div className="item__option">
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
</div> */}


ReactDOM.render(<App />, document.querySelector(".plans__place"));
