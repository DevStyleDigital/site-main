import Image from "next/image"
import FormLogin from "./form"
import LoginImage from "@/assets/img/dash/login.jpeg"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'Login | DevStyle',
}

const LoginPage = () => {

    const cookieStore = cookies();
    const token = cookieStore.get('__AUTH')?.value;
    if (token && token !== 'null' && token.length) return redirect('/admin');
  

    return (
        <section className="w-full min-h-[100vh] flex justify-center p-10 max-xl:px-2 max-md:px-6 max-sm:px-3"> 
            <div className="w-full flex justify-between gap-5 max-md:flex-col-reverse">
                <FormLogin />
                <div className="w-full h-full rounded-3xl overflow-hidden">
                    <Image src={LoginImage} alt="ImageLogin" width={2800} height={1200} className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    )
}

export default LoginPage