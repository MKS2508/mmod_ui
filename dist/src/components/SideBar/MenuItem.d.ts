import React from "react";
interface ICategory {
    icon: React.JSX.Element | any;
    link: string;
    name: string;
}
interface IProps {
    item: ICategory;
}
declare const MenuItem: ({ item }: IProps) => React.JSX.Element;
export { MenuItem, ICategory };
//# sourceMappingURL=MenuItem.d.ts.map