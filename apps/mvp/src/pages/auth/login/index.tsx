import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'use-context-selector';
import { FiMail, FiLock } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { AuthContext } from '@context/auth';
import { Input } from '@components/Input';
import { Link } from '@components/Link';
import { Button } from '@components/Button';
import { styled } from '@src/styles/stitches.config';

import UndrawAbstract from '../../../images/pages/login-register/undraw_abstract.svg';
import ArrowCircleDown from '../../../images/pages/login-register/arrow-circle-down.svg';
import NeoDPad from '../../../images/general/logos/neo-dpad-logo.svg';

type FormProps = {
  login: string;
  password: string;
};

export const Container = styled('div');

export const Margin = styled('section', {
  margin: '12px 0',
});

export const ForgotPassLink = styled('span', {
  backgroundImage: 'linear-gradient($accent100, $accent200);',
  backgroundSize: '0% 2px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left bottom',
  transition: 'all 200ms',
  width: 'max-content',

  '&:hover': {
    backgroundSize: '100% 2px',
  },
});

export default function Login() {
  const { login: loginRequest } = useContext(AuthContext);
  const navigate = useNavigate();

  const formRef = useRef<FormHandles>(null);

  const handleUserLogin: SubmitHandler<FormProps> = useCallback(
    async ({ login, password }) => {
      console.log(!login);
      if (!login) {
        console.log('error first');
        formRef.current?.setFieldError('login', 'Please fill the input.');
        return;
      }

      if (!password) {
        formRef.current?.setFieldError('password', 'Please fill the input.');
        return;
      }

      if (!login && !password) {
        console.log('error both');
        return;
      }

      const { errors } = await loginRequest({
        login,
        password,
      });

      if (errors) {
        errors.forEach(({ field, message }) => formRef.current?.setFieldError(field, message));
        return;
      }

      navigate('/');
    },
    [loginRequest, navigate]
  );

  return (
    <Container className="login--body">
      <div className="login--banner">
        <img src={UndrawAbstract} alt="Abstract logistics" className="login--banner--image" />
        <h3 className="login--banner--h3">Bem-Vindo(a) Neo Expensive</h3>
        <h2 className="login--banner--h2">Desejamos-te uma boa experiência</h2>

        <a href="#neo--explore">
          <img src={ArrowCircleDown} alt="Arrow Down" className="down--arrow" />
        </a>
      </div>

      <div className="login--form--wrapper">
        <Form className="login--form" ref={formRef} onSubmit={handleUserLogin}>
          <div className="login--form--logo-wrapper">
            <img src={NeoDPad} alt="" className="login--form--logo" />
          </div>

          <h1 id="neo--explore" className="login--form--h1">
            Explore a Neo Expensive
          </h1>

          <Margin>
            <Input name="login" type="email" label="Enter your e-mail" placeholder="support@neo-expensive.com" icon={<FiMail />} />
          </Margin>

          <Margin>
            <Input name="password" type="password" label="Enter your password" placeholder="********" icon={<FiLock />} />
          </Margin>

          <Margin>
            <ForgotPassLink>
              <Link href="/password/forgot">Forgot my password</Link>
            </ForgotPassLink>
          </Margin>
          <Margin>
            <ForgotPassLink>
              <Link href="/register">{"Don't"} have an account? Create one</Link>
            </ForgotPassLink>
          </Margin>

          <Margin>
            <Button variant="primary" type="submit">
              Login into my account
            </Button>
          </Margin>

          <hr />

          <Margin>
            <Button color="#4267B2" disabled variant="primary" type="submit">
              <FaFacebook size={20} />
              Login with Facebook
            </Button>
          </Margin>
          <Margin>
            <Button color="#333" disabled variant="primary" type="submit">
              <AiFillGithub size={20} />
              Login with Github
            </Button>
          </Margin>
          <Margin>
            <Button color="#9540BF" disabled variant="primary" type="submit">
              <svg width="20" height="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M415.014 220.643L503.493 132.201C514.836 120.861 514.836 102.307 503.493 90.9677L420.995 8.50452C409.651 -2.83484 391.089 -2.83484 379.747 8.50452L291.267 96.9467C288.587 99.6262 286.937 103.338 287.143 107.255V210.335C287.143 218.582 293.537 224.972 301.786 224.972H404.908C408.621 224.972 412.127 223.53 415.014 220.643ZM220.732 96.9467L132.253 8.50452C120.911 -2.83484 102.349 -2.83484 91.0049 8.50452L8.50689 90.9677C-2.83563 102.307 -2.83563 120.861 8.50689 132.201L96.9862 220.643C99.6668 223.324 103.379 224.972 107.299 224.766H210.42C218.669 224.766 225.063 218.376 225.063 210.128V107.049C225.063 103.338 223.619 99.8324 220.732 96.9467ZM96.9862 291.149L8.50689 379.593C-2.83563 390.932 -2.83563 409.487 8.50689 420.825L91.0049 503.289C102.349 514.629 120.911 514.629 132.253 503.289L220.732 414.847C223.413 412.166 225.063 408.456 224.857 404.539V301.458C224.857 293.212 218.463 286.82 210.214 286.82H107.092C103.379 286.82 99.8731 288.264 96.9862 291.149ZM404.495 286.82H301.374C293.124 286.82 286.73 293.212 286.73 301.458V404.539C286.73 408.249 288.174 412.166 290.855 414.847L379.541 503.495C390.883 514.835 409.445 514.835 420.789 503.495L503.287 421.031C514.629 409.693 514.629 391.137 503.287 379.799L414.807 291.356C412.127 288.264 408.621 286.82 404.495 286.82Z"
                  fill="#F2F1F4"
                />
              </svg>
              Login with{' '}
              <span>
                <strong>Neo</strong>Expensive
              </span>
            </Button>
          </Margin>
        </Form>
      </div>
    </Container>
  );
}
