'use client'
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/auth"
import clsx from "clsx"
import { EyeIcon, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify';

const FormLogin = () => {
    const [visiblePass, setVisiblePass] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const { loading, signIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        setIsLoading(false)
    }, [])

    function handlePassWord() {
        setVisiblePass(prev => !prev)
    }

    const handleSignIn = () => router.push('/admin');

    async function onSubmit(ev: React.SyntheticEvent) {
        ev.preventDefault();
        setIsLoading(true);

        const {
            email: { value: email },
            password: { value: password },
          } = ev.currentTarget as EventTarget &
            Element & { [key in 'email' | 'password']: { value: string } };
        
          console.log(email, password);

          signIn(email, password)
            .then(handleSignIn)
            .catch((err: string) => {
              // if (err.includes('auth/invalid-login-credentials'))
              //   return setError('E-mail ou senha inválidos, verifique-os e tente novamente.');
              toast.error(
                'E-mail ou senha inválidos.',
              );
              return err;
            })
            .finally(() => setIsLoading(false));

    }

    return (
        <form onSubmit={onSubmit} className="w-full h-full flex justify-center items-center text-left ml-10 max-md:ml-0">
            <div className="w-[70%] max-2xl:w-[90%] flex flex-col h-full justify-center relative max-md:w-full">
                <h1 className="font-extrabold text-[1.5rem] absolute top-0 left-0 max-sm:text-[1rem]">{`</> DevStyle`}</h1>
                <div className="w-full flex flex-col gap-3 max-md:mt-10">
                    <h1 className="font-extrabold text-[#141624] text-[2.5rem] max-lg:text-[2rem] max-[850px]:text-[1.5rem] max-md:text-[1.8rem] max-[360px]:text-[1.5rem]">Bem vindo de volta 👋</h1>
                    <span className="w-[80%] max-xl:w-full  text-[#141624]/60 text-base max-lg:text-sm font-medium">
                        Hoje é um novo dia. É o teu dia. Você molda isso.
                        Faça login para começar a gerenciar seus projetos.
                    </span>
                    <div className="w-[80%] max-xl:w-full mt-6 flex flex-col gap-3">
                        <div className="flex flex-col w-full gap-2">
                            <Label htmlFor="email" className="font-bold text-base max-sm:text-sm">Email</Label>
                            <input type="email" required name="email" disabled={loading || isLoading} id="email" placeholder="Email" className="w-full rounded-lg  py-3 px-3 border border-input bg-background" />
                        </div>

                        <div className="flex flex-col w-full gap-2">
                            <Label htmlFor="senha" className="font-bold text-base max-sm:text-sm">Senha</Label>
                            <div className="w-full rounded-lg border flex items-center border-input bg-background relative">
                                <input type={visiblePass ? 'text' : 'password'} required name="password" disabled={loading || isLoading} id="senha" placeholder="Senha" className="w-full px-3 pr-12 rounded-lg h-full py-3" />
                                {visiblePass ? (
                                    <EyeIcon className="cursor-pointer absolute right-4 color_svg" onClick={handlePassWord}/>
                                ): (
                                    <EyeOff className="cursor-pointer absolute right-4 color_svg" onClick={handlePassWord}/>
                                )}
                            </div>
                        </div>
                        <button disabled={loading || isLoading}  className={clsx("w-full bg-yellow-400 py-3 mt-5 text-[#141624]/80 text-lg max-sm:text-base font-bold rounded-lg hover:bg-yellow-400/70" , {'bg-yellow-400/70 animate-pulse': isLoading || loading})}>
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormLogin