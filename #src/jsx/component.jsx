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
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [checkboxActive, setCheckboxActive] = React.useState(false);
    const [emailDirty, setEmailDirty] = React.useState(false);
    const [nameDirty, setNameDirty] = React.useState(false);
    const [phoneDirty, setPhoneDirty] = React.useState(false);
    const [emailError, setEmailError] = React.useState('Email не может быть пустым');
    const [nameError, setNameError] = React.useState('Имя не может быть пустым');
    const [phoneError, setPhoneError] = React.useState('Телефон не может быть пустым');
    const [formValid, setFormValid] = React.useState(false);

    React.useEffect(() => {
        if (emailError || nameError || phoneError || !checkboxActive) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, nameError, phoneError, checkboxActive])

    function checkboxHandler() {
		setCheckboxActive(!checkboxActive);
	}

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'phone':
                setPhoneDirty(true)
                break
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('');
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError('Некорректный номер телефона')
        } else {
            setPhoneError('');
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError('Некорректное имя')
        } else {
            setNameError('');
        }
    }

    return (
        <form action="">
            {(nameDirty && nameError) && <div style={{color: 'red', fontSize: '14px', marginBottom: '5px'}}>{nameError}</div>}
            <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} className="form__elem" id="name" type="text" name="name" required placeholder="Ваше имя"/>
            {(phoneDirty && phoneError) && <div style={{color: 'red', fontSize: '14px', marginBottom: '5px'}}>{phoneError}</div>}
            <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} className="form__elem" id="phone" type="tel" name="phone" required placeholder="Телефон"/>
            {(emailDirty && emailError) && <div style={{color: 'red', fontSize: '14px', marginBottom: '5px'}}>{emailError}</div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="form__elem" id="email" type="email" name="email" required placeholder="E-mail"/>
            <textarea name="" className="comment form__elem" cols="30" rows="10" type="text" placeholder="Ваш комментарий">
            </textarea>
            <div id={checkBlockId}>
                <input onChange={e => checkboxHandler()}  className="checkbox__input" type="checkbox" id={checkBoxId} checked={checkboxActive}/>
                <label className="checkbox__label" htmlFor={checkBoxId}>Отправляя заявку я даю согласие на <a>обработку своих персональных данных</a>.<span>*</span></label>
            </div>
            <div className="g-recaptcha" data-sitekey="6LfvTFQdAAAAAMi9xDDFtM63vjBlBemc9O00S52m"></div>
            <input disabled={!formValid} className="form__button" type="button" value="ОСТАВИТЬ ЗАЯВКУ!"/>
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
