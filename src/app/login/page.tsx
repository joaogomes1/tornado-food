'use client';

// import { link } from 'react-router-dom';
import { useState } from 'react';
import tornadofood from '../../assets/TornadoFood.svg';
import { LayoutComponents } from '../../components/LayoutComponents';
import Image from 'next/image';
import React from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Bem Vindo</span>
        <span className="login-form-title relative">
          {/* <img src={tornadofood} alt="" /> */}
          <Image src={'tornadofood.svg'} alt="" fill className="object-cover" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== '' ? 'has-val input' : 'input'}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== '' ? 'has-val input' : 'input'}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta?</span>

          <a className="txt2" href="/register">
            Criar conta.
          </a>
        </div>
      </form>
    </LayoutComponents>
  );
};

export default Login;
