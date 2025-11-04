import Image from "next/image";
import logoLarge from '../../../public/assets/images/logo-large.svg'

export function HeaderLogin() {
    return(
        <header className="bg-grey-900 py-6 rounded-b-lg flex items-center justify-center xl:hidden " >
            <Image
                src={logoLarge}
                alt="Logo Finance"
            />
        </header>
    )
}