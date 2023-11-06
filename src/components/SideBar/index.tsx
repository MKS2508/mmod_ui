
import React from 'react';
import {MenuItem,ICategory} from "./MenuItem";

import "./styles.css"
import styled from 'styled-components';

const SideBarComponent = styled.aside.attrs({
    className: "fixed bottom-0 left-0 top-24 z-20 flex flex-col items-center h-full rounded-md bg-clip-padding glassmorphism pb-10 pt-10"
})`
  width: 15vw;
  @media screen and (max-width: 640px) {
    width: 10vw;
  }
  @media screen and (max-width: 1280px) {
    width: 5vw;
  }
`;

const SideBarNavigation = styled.nav.attrs({
    className: "flex flex-col justify-center w-full h-full pb-10"
})``;

const MenuItemList = styled.ul.attrs({
    className: "flex flex-col space-y-2 flex-grow w-full overflow-y-auto"
})``;

interface IProps {
    categories: ICategory[];
}

const SideBar = ({ categories }: IProps) => {

    return (
        <SideBarComponent>
            <SideBarNavigation>
                <MenuItemList>
                    {categories.map((item, index) => (
                        <li key={index} className="flex-grow flex justify-center">
                            <MenuItem item={item}/>
                        </li>
                    ))}
                </MenuItemList>
            </SideBarNavigation>
        </SideBarComponent>
    );
};


export default SideBar;