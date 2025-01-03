import React from "react";
import Image from "next/image";
import Logo from "@/img/logo.svg"


function Newsletter(){
    return(
            <div className="flex h-screen justify-center items-center flex-col bg-neutral-950">
                <Image
                src={Logo}
                width={150}
                height={150}
                alt="ola"
                />
            <h1 className="text-2xl text-zinc-50 font-medium mt-5 max-sm:text-md text-center ">Receba histórias de arrepiar toda ultima sexta-feira </h1>
            <p className="italic text-zinc-50 sm:text-sm ">Só não se traumatize!! </p>
            <form className="w-1/4 max-sm:w-3/4  max-md:w-3/4 max-lg:w-2/4">
                <input type="email" className="rounded-lg mt-5 p-2 w-full focus:outline-none  " placeholder="Coloque seu e-mail..."/>
                <button className="bg-red-950 w-full mt-7 p-3 rounded-lg font-medium hover:bg-red-700 duration-300" type="submit">Enviar</button>
            </form>
            
            </div>
    )
}

export default Newsletter