import { ReactNode } from "react";
import { HeaderLogin } from "../header_login";

export function ContainerLogin({children}: {children: ReactNode}) {
    return(
        <div>
            <HeaderLogin/>
            <div className=" px-4 bg-beige-100 flex items-center justify-center w-full h-[calc(100vh-70px)] " >
                {children}
            </div>
        </div>
    )
}