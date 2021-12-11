const Modal = ({children}) => {
    const hideModal = () => {
        let modal = document.querySelector(".modal");
        modal.style.transform = "scale(0)";
    }

    return (
        <div className="modal" onClick={() => hideModal()}>
            <div className="body__form" onClick={e => e.stopPropagation()}>
                {children}
            </div>
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

const itemStart = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Неиспользованные оплаченные часы переносятся на следующий месяц', 'Предоплата от 6 000 реблей в месяц'];
const itemBusiness = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Высокое время реакции - до 2 рабочих дней', 'Неиспользованные оплаченные часы не переносятся', 'Предоплата от 30 000 реблей в месяц'];
const itemVip = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Высокое время реакции - в день обращения', 'Неиспользованные оплаченные часы не переносятся', 'Предоплата от 270 000 реблей в месяц'];
const startTitle = ['Стартовый'];
const businessTitle = ['Бизнес'];
const vipTitle = ['VIP'];

const PlansItem = ({type, textFrom, titleFrom, n, children}) => {
    return (
        <div className={`${type} plans-item`}>
            <div className="plan-wrapper">
                <h3>
                {titleFrom}
                </h3>
                <div className="line"></div>
                <div>
                { [...Array(n)].map((item, index) => <Option text={textFrom[index]} key={index} /> ) }
                </div>
                {children}
            </div>
        </div>
    );
};

const Form = ({ checkBlockId,  checkBoxId }) => {
    return (
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
            <div id={checkBlockId}>
                <input className="checkbox__input" type="checkbox" id={checkBoxId}/>
                <label className="checkbox__label" htmlFor={checkBoxId}>Отправляя заявку я даю согласие на <a>обработку своих персональных данных</a>.<span>*</span></label>
            </div>
            <div className="g-recaptcha" data-sitekey="6LfvTFQdAAAAAMi9xDDFtM63vjBlBemc9O00S52m"></div>
            <div>
                <input className="form__button" type="button" value="ОСТАВИТЬ ЗАЯВКУ!"/>
            </div>
        </form>
    );
};

const App = () => {
    const showModal = () => {
        let start = Date.now();
        let modal = document.querySelector(".modal");
        let timer = requestAnimationFrame(function animateBall(timestamp) {
            let interval = Date.now() - start;
    
            modal.style.transform = "scale(" + (interval/200) + ")";
    
            if (interval < 200) requestAnimationFrame(animateBall);
    
        });
    }

    return (
        <div>
            <div className="plans__items">
                <PlansItem type="item__start" textFrom={itemStart} titleFrom={startTitle} n={4}><input className="plans__btn" type="button" value="ОСТАВИТЬ ЗАЯВКУ!" onClick={() => showModal()}/></PlansItem>
                <PlansItem type="item__business" textFrom={itemBusiness} titleFrom={businessTitle} n={5}><input className="plans__btn" type="button" value="ОСТАВИТЬ ЗАЯВКУ!" onClick={() => showModal()}/></PlansItem>
                <PlansItem type="item__vip" textFrom={itemVip} titleFrom={vipTitle} n={5}><input className="plans__btn" type="button" value="ОСТАВИТЬ ЗАЯВКУ!" onClick={() => showModal()}/></PlansItem>
            </div>
            <Modal>
                <Form checkBlockId={"modal__form__checkbox"} checkBoxId={"modal__userAgreement"}/>
            </Modal>
        </div>
        
    );
};

ReactDOM.render(<Form checkBlockId={"form__checkbox"} checkBoxId={"userAgreement"}/>, document.querySelector("#main-form"));

ReactDOM.render(<App />, document.querySelector(".plans__place"));
