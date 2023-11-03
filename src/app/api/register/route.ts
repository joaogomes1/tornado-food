// import React from 'react'

import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import Usuario from '@/models/usuario';
import bcrypt from 'bcryptjs';

// const route = () => {
//   return (
//     <div>route</div>
//   )
// }
export const POST = async (req: any) => {
  // return new NextResponse('hello', { status: 200 });
  try {
    const { nome, cpf, celular, email, senha } = await req.json();
    const senhaCriptografada = await bcrypt.hash(senha, 10);
    await connectMongoDB();
    await Usuario.create({
      nome,
      cpf,
      celular,
      email,
      senha: senhaCriptografada,
    });

    return NextResponse.json(
      { message: 'Usuário registrado com sucesso.' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'Um erro ocorreu.' }, { status: 500 });
  }
};

// export default route
