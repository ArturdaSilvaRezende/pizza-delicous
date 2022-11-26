import { OurChefs } from "../../shared/types/typeOurChefs";
import Person01 from "./images/person_1.jpg";
import Person02 from "./images/person_2.jpg";
import Person03 from "./images/person_3.jpg";
import Person04 from "./images/person_4.jpg";

export const OurChefsList: OurChefs[] = [
    {
        id: 1,
        img: `${Person01}`,
        name: "Tom Smith",
        office: "Hair Specialist",
    },
    {
        id: 2,
        img: `${Person02}`,
        name: "Mark Wilson",
        office: "Beard Specialist",
    },
    {
        id: 3,
        img: `${Person03}`,
        name: "Patrick Jacobson",
        office: "Hair Stylist",
    },
    {
        id: 4,
        img: `${Person04}`,
        name: "Ivan Dorchsner",
        office: "Beard Specialist",
    },
];
