import LoginButton from '@/components/LoginButton'
export default function Login() {
  return (
    <main className='h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <form action="" className='flex flex-col gap-4 p-4 rounded-2xl shadow-slate-600 shadow-md'>
        <h1 className='flex self-center text-white text-lg font-bold'>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' />
        <label htmlFor="password">Senha</label>
        <input type="password" id='password' />
        <button type='submit' className='flex justify-center items-center self-center gap-12 text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105'>Entrar</button>
        <LoginButton />
      </form>
    </main>
  )
}