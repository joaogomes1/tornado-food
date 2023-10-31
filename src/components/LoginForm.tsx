'use client';

// import { link } from 'react-router-dom';
import { useState } from 'react';
import tornadofood from '../../assets/TornadoFood.svg';
import { LayoutComponents } from './LayoutComponents';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('error message');

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Bem Vindo</span>
        <span className="login-form-title relative">
          {/* <img src={tornadofood} alt="" /> */}
          <Image src="TornadoFood.svg" alt="" fill className="object-cover" />
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

        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md my-2">
            {error}
          </div>
        )}

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">
            Não possui uma conta?
            {/* <Link href="/register" className="txt2"> */}
            <Link href="/register" className="txt2 hover:underline">
              Criar conta.
            </Link>
          </span>
        </div>
      </form>
    </LayoutComponents>
  );
};

export default Login;
