import { FormEvent, useState } from 'react';

import { Container, LoginButton, LoginTilt } from '../styles/pages/Login';
import Warning from '../components/utils/Warning';

import Select from 'react-select';

import GlobalStyle from '../styles/GlobalStyles';

import Tilt from 'react-tilt';
import Image from 'next/image';
import Head from 'next/head';


const Login: React.FC = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [warning, setWarning] = useState(false);

    const options = [
        { label: 'React', value: 'react' }
    ]

    const tiltOptions = {
        reverse: true,
        max: 35,
        glare: true,
        maxGlare: 1,
        perspective: 1000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1,
        speed: 300,
        transition: true,
        axis: null,
        reset: true
    }

    const submitForm = (event: FormEvent) => {
        event.preventDefault();

        if (!login || !password) {
            setWarning(true);

            setTimeout(() => {
                setWarning(false);
            }, 3000)
        }

        setLogin('')
        setPassword('')
    }

    return (
        <Container>


            <Head>
                <title>Q-Acadêmico - Login</title>
            </Head>

            <Tilt options={tiltOptions}>
                <LoginTilt>
                    <Image src="/assets/password.svg" width="200px" height="auto" />
                </LoginTilt>
            </Tilt>
          
            <div>

                {warning && <Warning isRed={true}/>}

                <form onSubmit={submitForm}>
                    <h2>Login</h2>
                
                    <label htmlFor="role-select">Selecione seu cargo <span>(ex: Estudante)</span> : </label>
                    <div id="role-select">
                        <Select options={options} className="react-select-container" classNamePrefix="react-select" />
                    </div>

                    <label htmlFor="login">Login</label>
                    <input type="text" id="login" value={login} onChange={e => setLogin(e.target.value)} />
 
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <LoginButton>
                        Entrar
                    </LoginButton>
                </form>
            </div>

            <GlobalStyle />
        </Container>
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