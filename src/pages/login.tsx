import { FormEvent, useState, useEffect } from 'react';

import { LoginButton } from '../styles/pages/Login';

import FormLayout from '../components/FormLayout';

import Select from 'react-select';

import Image from 'next/image';
import { useRouter } from 'next/router';


const OptionImage = ({ src }) => <Image src={src} width="30px" height="auto" />;

const Login: React.FC = () => {

    const router = useRouter();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isInputDisabled, setIsInputDisabled] = useState(false);

    const [warning, setWarning] = useState(false);

    const [selectedValue, setSelectedValue] = useState('');

    const options = [
        { label: 'Estudante', value: 'student', icon: <OptionImage src="https://www.flaticon.com/svg/static/icons/svg/948/948256.svg"/> },
        { label: 'Professor', value: 'teacher', icon: <OptionImage src="https://www.flaticon.com/svg/static/icons/svg/860/860620.svg"/> },
        { label: 'Classificado', value: 'classified', icon: <OptionImage src="https://www.flaticon.com/svg/static/icons/svg/2922/2922518.svg"/> },
        { label: 'Pais de Aluno', value: 'parents', icon: <OptionImage src="https://www.flaticon.com/svg/static/icons/svg/2829/2829916.svg"/> },
        { label: 'Empresa', value: 'company', icon: <OptionImage src="https://www.flaticon.com/svg/static/icons/svg/993/993891.svg"/> },
        { label: 'Téc. Administrativo', value: 'administrative_technician', icon: <OptionImage src="https://www.flaticon.com/svg/static/icons/svg/1995/1995414.svg"/> },
        { label: 'Validar Documento', value: 'validate_document', icon: <OptionImage src="https://www.flaticon.com/svg/static/icons/svg/2912/2912760.svg"/> }
    ]

    const submitForm = (event: FormEvent) => {
        event.preventDefault();

        if (selectedValue === 'validate_document') {
            return;
        }

        if (!login || !password || !selectedValue) {
            setWarning(true);

            setTimeout(() => {
                setWarning(false);
            }, 3000)

            return;
        }

        setLogin('');
        setPassword('');

        router.push('/qacademico/home');
    }

    useEffect(() => {
        if (selectedValue === 'validate_document') {
            return setIsInputDisabled(true);
        }

        setIsInputDisabled(false);
    }, [selectedValue])


    // React-Select way to add icons to options
    const customSingleValue = ({ data }) => (
        <div className="input-select">
            <div className="input-select__single-value">
                { data.icon && <span className="input-select__icon">{ data.icon }</span> }
                <span>{ data.label }</span>
            </div>
        </div>
    );


    return (
        <FormLayout pageTitle="Login" heroSrc="/assets/password.svg" warning={warning}>
            <form onSubmit={submitForm}>
                <h2>Login</h2>
        
                <label htmlFor="role-select">Selecione seu cargo <span>(ex: Estudante)</span> : </label>
                <div id="role-select">
                    <Select
                        options={options}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        components={ {SingleValue: customSingleValue} }
                        onChange={e => setSelectedValue(e.value)}
                    />
                </div>

                <label htmlFor="login">Login</label>
                <input
                    type="text"
                    id="login"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    disabled={isInputDisabled}
                />

                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={isInputDisabled}
                />

                <LoginButton>
                    Entrar
                </LoginButton>
            </form>
        </FormLayout>
    )
}

    // const customStyles = {
    //     // option: (provided, state) => ({
    //     //   ...provided,
    //     //   borderBottom: '1px dotted pink',
    //     //   color: state.isSelected ? 'red' : 'blue',
    //     //   padding: 20,
    //     // }),
    //     control: () => ({
    //         textAlign: 'center'
        
        
    //     }),
    //     singleValue: (provided, state) => {
    //       const opacity = state.isDisabled ? 0.5 : 1;
    //       const transition = 'opacity 300ms';

    //       return { ...provided, opacity, transition };
    //     }
    //   }


export default Login;