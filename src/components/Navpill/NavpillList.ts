import { Navpill } from "../../shared/types/typeNavpill";
// ======== images - burgers ========
import Burger01 from "./images/burger-1.jpg";
import Burger02 from "./images/burger-2.jpg";
import Burger03 from "./images/burger-3.jpg";
// ======== images - drinks ========
import Drink01 from "./images/drink-1.jpg";
import Drink02 from "./images/drink-2.jpg";
import Drink03 from "./images/drink-3.jpg";
// ======== images - pastas ========
import Pasta01 from "./images/pasta-1.jpg";
import Pasta02 from "./images/pasta-2.jpg";
import Pasta03 from "./images/pasta-3.jpg";
// ======== images - pizzas ========
import Pizza01 from "./images/pizza-1.jpg";
import Pizza02 from "./images/pizza-2.jpg";
import Pizza03 from "./images/pizza-3.jpg";

export const NavpillPizza: Navpill[] = [
    {
        id: 1,
        img: `${Pizza01}`,
        title: "Itallian Pizza",
        price: "R$29,90",
    },
    {
        id: 2,
        img: `${Pizza02}`,
        title: "Marguerita Pizza",
        price: "R$29,90",
    },
    {
        id: 3,
        img: `${Pizza03}`,
        title: "Vegetarian Pizza",
        price: "R$29,90",
    },
];

export const NavpillDrink: Navpill[] = [
    {
        id: 1,
        img: `${Drink01}`,
        title: "Lemonade Juice",
        price: "R$19,90",
    },
    {
        id: 2,
        img: `${Drink02}`,
        title: "Pineapple Juice",
        price: "R$19,90",
    },
    {
        id: 3,
        img: `${Drink03}`,
        title: "Soda Drinks",
        price: "R$19,90",
    },
];

export const NavpillBurger: Navpill[] = [
    {
        id: 1,
        img: `${Burger01}`,
        title: "Artesanal",
        price: "R$12,99",
    },
    {
        id: 2,
        img: `${Burger02}`,
        title: "Gourmet",
        price: "R$12,99",
    },
    {
        id: 3,
        img: `${Burger03}`,
        title: "Americano",
        price: "R$12,99",
    },
];

export const NavpillPasta: Navpill[] = [
    {
        id: 1,
        img: `${Pasta01}`,
        title: "Cacio e Pepe",
        price: "R$12,99",
    },
    {
        id: 2,
        img: `${Pasta02}`,
        title: "Pomodoro",
        price: "R$12,99",
    },
    {
        id: 3,
        img: `${Pasta03}`,
        title: "Manicotti",
        price: "R$12,99",
    },
];
