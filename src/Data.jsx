import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import { RiFlightLandFill } from "react-icons/ri";
import { MdOutlineFlight } from "react-icons/md";
import { RiFlightTakeoffFill } from "react-icons/ri";


import recipe1 from "./assets/recipe1.jpg";
import recipe2 from "./assets/recipe2.jpg";
import recipe3 from "./assets/recipe3.jpg";
import recipe4 from "./assets/recipe4.jpg";
import recipe5 from "./assets/recipe5.jpg";
import recipe6 from "./assets/recipe6.jpg";

import ticket1 from "./assets/ticket1.jpg";

import payment1 from "./assets/payment1.png";
import payment2 from "./assets/payment2.png";
import payment3 from "./assets/payment3.png";
import payment4 from "./assets/payment4.png";

export const heroIcons = [
  <CiBurger />,
  <GiBowlOfRice />,
  <RiFlightTakeoffFill />,
  <RiFlightLandFill />,
 
  
];

export const recipes = [
  {
    id: 1,
    image: ticket1,
    name: "Ticket Name",
    price: "$2000",
  },
  {
    id: 2,
    image: ticket1,
    name: "Ticket Name",
    price: "$1300",
  },
  {
    id: 3,
    image: ticket1,
    name: "Ticket Name",
    price: "$1800",
  },
  {
    id: 4,
    image: ticket1,
    name: "Ticket Name",
    price: "$2200",
  },
  {
    id: 5,
    image: ticket1,
    name: "Ticket Name",
    price: "$1400",
  },
  {
    id: 6,
    image: ticket1,
    name: "Ticket Name",
    price: "$2000",
  },
];

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: "+1 917-969-9903",
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    text: "yw4554@nyu.edu",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "Champaign, Urbana",
  },
];

export const mainMenu = [
  {
    id: 1,
    href: "home",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "about",
    text: "About",
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: "ticket",
    text: "Ticket",
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: "contact",
    text: "Contact",
    icon: <MdContactPage />,
  },
];

export const explores = ["Tickets", "Service", "Price", "Aftersales"];

export const payements = [payment1, payment2, payment3, payment4];
