import { ContainerLogin } from "@/components/container_login";
import { LoginForm } from "@/components/loginForm";

export default function Home() {
  return (
    <ContainerLogin>
      <div className="bg-white py-6 px-5 rounded-xl " >
        <div>
          <h1 className="textPresent-1 mb-8" >Login</h1>
        </div>
        <LoginForm/>
      </div>
    </ContainerLogin>
  );
}
