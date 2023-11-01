'use client';

import { useState } from 'react';
import { LayoutComponents } from './LayoutComponents';
import Image from 'next/image';
import React from 'react';

// import tornadofood from 'TornadoFood.svg'
import Link from 'next/link';

const Register = () => {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Função para formatar o CPF
  const formatCPF = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, '');

    // Divide os dígitos em grupos de 3, separados por pontos

    //   const groups= numericValue.match(/\d{1,3}/g);
    const groups: RegExpMatchArray | null = numericValue.match(/\d{1,3}/g);

    if (groups && groups.length > 1) {
      // Substitui o último ponto por um hífen
      const lastIndex = groups.length - 1;
      groups[lastIndex] = groups[lastIndex].replace(/\./, '-');
    }

    // Formata o CPF (exemplo: 123.456.789-01)
    function formatCPF(numericValue: string): string {
      // Verifica se o valor é um CPF válido
      if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(numericValue)) {
        return 'CPF inválido';
      }

      // Formata o CPF (exemplo: 123.456.789-01)
      return numericValue;
    }
  };

  // Função para formatar o Celular
  const formatPhoneNumber = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, '');

    // Adiciona os parênteses e o hífen de acordo com o formato (XX) XXXXX-XXXX
    let formattedValue = '';
    if (numericValue.length > 0) {
      formattedValue += `(${numericValue.slice(0, 2)}`;
    }
    if (numericValue.length > 2) {
      formattedValue += `) ${numericValue.slice(2, 7)}`;
    }
    if (numericValue.length > 7) {
      formattedValue += `-${numericValue.slice(7, 11)}`;
    }

    return formattedValue;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !cpf || !celular || !email || !password || !confirmPassword) {
      setError('Ops! Preencha todos os campos.');
    }

    try {
      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          cpf,
          celular,
          email,
          password,
          confirmPassword,
        }),
      });

      if (res.ok) {
        const form = event.currentTarget;
        form.reset();
      } else {
        console.log('user registration failed');
      }
    } catch (error) {
      console.log('error during registration', error);
    }
  };

  return (
    <LayoutComponents>
      <form onSubmit={handleSubmit} className="login-form" id="registerForm">
        <span className="login-form-title"> Criar Conta </span>
        {/* era uma tag span, estava dando erro */}
        <div className="login-form-title relative">
          <Image
            src="/tornadofood.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="wrap-input">
          <input
            className={name !== '' ? 'has-val input' : 'input'}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100} // Limite de caracteres para o nome
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>
        <div className="wrap-input">
          <input
            className={cpf !== '' ? 'has-val input' : 'input'}
            type="text"
            // value={formatCPF(cpf)}
            onChange={(e) => setCPF(e.target.value)}
            maxLength={14} // Limite de caracteres para o nome
          />
          <span className="focus-input" data-placeholder="CPF"></span>
        </div>
        <div className="wrap-input">
          <input
            className={celular !== '' ? 'has-val input' : 'input'}
            type="tel"
            value={formatPhoneNumber(celular)}
            onChange={(e) => setCelular(e.target.value)}
            maxLength={15} // Limite de caracteres para o nome
          />
          <span className="focus-input" data-placeholder="Celular"></span>
        </div>
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
        <div className="wrap-input">
          <input
            className={confirmPassword !== '' ? 'has-val input' : 'input'}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            className="focus-input"
            data-placeholder="Confirme a Senha"
          ></span>
        </div>
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md my-2">
            {error}
          </div>
        )}
        <div className="container-login-form-btn">
          <button className="login-form-btn">Criar Conta</button>
        </div>
        <div className="text-center">
          <span className="txt1">Já possui conta?</span>

          <Link className="txt2 hover:underline" href="/login">
            Acessar com Email e Senha
            {/* 'acessar'? */}
            {/* 'fazer login'? */}
            {/* 'acessar conta'? */}
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};

export default Register;
