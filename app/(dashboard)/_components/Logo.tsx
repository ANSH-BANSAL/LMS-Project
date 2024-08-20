import Image from "next/image";

const Logo = () => {
    return ( <Image 
        height={140}
        width={130}
        alt="Logo"
        src="/logo.svg"/> );
}
 
export default Logo;