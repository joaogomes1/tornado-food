// import React from 'react'

import { NextResponse } from 'next/server';

// const route = () => {
//   return (
//     <div>route</div>
//   )
// }
export const POST = async (req: any) => {
  // return new NextResponse('hello', { status: 200 });
  try {
    const { name, cpf, celular, email, password, confirmPassword } =
      await req.json();
    console.log(name);
    console.log(cpf);
    console.log(celular);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    return NextResponse.json(
      { message: 'Usuário registrado com sucesso.' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'Um erro ocorreu.' }, { status: 500 });
  }
};

// export default route
