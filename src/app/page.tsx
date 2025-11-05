import { ContainerLogin } from "@/components/container_login";
import { LoginForm } from "@/components/loginForm";
import Link from "next/link";
import imgAuthentication from '../../public/assets/images/illustration-authentication.svg'
import imgLogo from '../../public/assets/images/logo-large.svg' 
import Image from "next/image";

export default function Home() {
  return (
    <ContainerLogin>
      <div className="order-2 w-full bg-blue flex-1 flex items-center justify-center " >
        <div className="bg-white py-6 px-5 rounded-xl w-[90%] max-w-[560px] " >
          <div>
            <h1 className="textPresent-1 mb-8" >Login</h1>
          </div>
          <LoginForm/>
          <div className=" mt-8 text-center " >
            <p className="textPresent-4 text-grey-500" >
              Need to create an account? { '  ' }
              <Link href={'/signup'} className=" textPresent-4-bold text-grey-900 underline " >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex items-center justify-center order-1 flex-1 rounded-xl overflow-hidden" >
        <Image
          src={imgAuthentication}
          alt=""
          className=" w-full h-screen relative left-0 bg-cover "
        />

        <Image
          src={imgLogo}
          alt=""
          className="absolute top-10 left-10"
        />
      </div>
    </ContainerLogin>
  );
}
