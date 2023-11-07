import React, { FC, ReactElement } from 'react';

// Definición de la interfaz para los props de TopBar
interface TopBarProps {
    logoSrc: string;
    IconoUsuario: ReactElement;
    IconoCarrito: ReactElement;
    BarraBusqueda: ReactElement;
}

 const TopBar: FC<TopBarProps> = ({ logoSrc, IconoUsuario, IconoCarrito, BarraBusqueda }) => {
    const iconStyle = "cursor-pointer flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gray-0 bg-opacity-0 z-22";

    return (
        <header style={{ zIndex: 99 }}>
            <div className="fixed w-full bg-green-600 text-center z-99 h-8">
                <h3 className="text-white text-base m-0 py-2 whitespace-nowrap overflow-hidden animate-marquee" style={{ animation: 'marquee 20s linear infinite' }}>
                    <a href={"https://medicinamodernagrow.shop"} className="text-inherit">
                        Puedes encontrarnos en Avenida de Mendavia, Nº16 Pabellón 2, 26009 Logroño, La Rioja
                    </a>
                </h3>
            </div>

            <nav id={"TOPBAR"} className="fixed top-8 h-16 glassmorphism rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-md z-25 flex items-center justify-between px-2 sm:px-8 md:px-16 lg:px-24 w-full">
                <a href={"/"} className={`${iconStyle} animate-logoAnimation fixed md:left-10 sm:left-2`} style={{ animation: "logoAnimation 2s linear infinite" }}>
                    <img alt="logo" src={logoSrc} className="w-full" />
                </a>
                <div className="fixed left-[16vw] flex justify-end">
                    {BarraBusqueda}
                </div>
                <div className="flex justify-end items-center gap-2 sm:gap-4 lg:gap-8 h-full w-full">
                    <div className={iconStyle}>
                        {IconoUsuario}
                    </div>
                    <div className={iconStyle}>
                        {IconoCarrito}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default TopBar;
