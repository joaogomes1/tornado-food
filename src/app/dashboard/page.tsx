'use client';

import { LayoutComponents } from '@/components/LayoutComponents';
import Image from 'next/image';
import React, { useState } from 'react';

const Dashboard = () => {
  const [name, setName] = useState('');

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Pesquisar Estabelecimento</span>

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
          <span
            className="focus-input"
            data-placeholder="Digite o nome de um estabelecimento"
          ></span>
        </div>

        {/* CARDS */}
        <div className="border-black border-2">cards</div>
      </form>
    </LayoutComponents>
  );
};

export default Dashboard;
