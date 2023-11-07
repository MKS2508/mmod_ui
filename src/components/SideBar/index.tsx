import React, { useEffect, useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';
import {MenuItem} from "./MenuItem";

const SideBarComponent = styled(motion.aside).attrs({
    className: "fixed bottom-0 left-0 top-24 z-20 flex flex-col items-center h-full rounded-md bg-clip-padding glassmorphism pb-10 pt-10"
})`
    width: 15vw;
    @media screen and (max-width: 640px) {
        width: 10vw;
    }
    @media screen and (max-width: 1280px) {
        width: 5vw;
    }
    background-color: hsla(0, 9%, 91%, 0.13);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SideBarNavigation = styled.nav.attrs({
    className: "flex flex-col justify-center w-full h-full pb-10"
})``;

const MenuItemList = styled(motion.ul).attrs({
    className: "flex flex-col space-y-2 flex-grow w-full overflow-y-auto"
})`
    margin-top: 3vh;
    margin-bottom: 3vh;
`;

interface ISideBarProps {
    sideBarMenuItems: any[];
}

const SideBar: React.FC<ISideBarProps> = ({ sideBarMenuItems }) => {
    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        // Lógica de visibilidad basada en scroll y ruta
        /* ... */
    }, [location]);

    const sidebarVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    };

    return (
        <AnimatePresence>
            {!isVisible ? (
                <SideBarComponent
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={sidebarVariants}
                    transition={{ duration: 1 }}
                >
                    <SideBarNavigation>
                        <MenuItemList>
                            {sideBarMenuItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    item={item}
                                />
                            ))}
                        </MenuItemList>
                    </SideBarNavigation>
                </SideBarComponent>
            ) : null}
        </AnimatePresence>
    );
};

export default SideBar;
