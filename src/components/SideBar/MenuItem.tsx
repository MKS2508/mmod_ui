'use client';
import React from "react";
 interface ICategory {
    icon:  React.JSX.Element | any;
    link: string;
    name: string;
}
interface IProps {
    item: ICategory;

}
const MenuItem = ({item}: IProps) => {


    return (
        <a href={item.link}>
            <div
                className="relative flex justify-center items-center w-full h-full transition-all duration-300 ease-in-out">
                <span
                    className={`flex justify-center items-center transition-transform duration-300 ease-in-out transform text-black hover:text-green-400 p-2 hover:bg-white hover:bg-opacity-20 hover:border hover:border-gray-100 rounded-xl hover:scale-105 backdrop-filter hover:backdrop-blur-md'}`}
                >
                    {React.cloneElement(item.icon, {})}
                </span>
            </div>
        </a>
    );
};

export  {MenuItem, ICategory};
