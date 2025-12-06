import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Horarios",
    path: "/horarios",
    newTab: false,
  },
  {
    id: 33,
    title: "Actividades",
    path: "/actividades",
    newTab: false,
  },
  {
    id: 3,
    title: "Contacto",
    path: "/contacto",
    newTab: false,
  },
  {
    id: 4,
    title: "Institución",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Identidad",
        path: "/identidad",
        newTab: false,
      },
      {
        id: 42,
        title: "Historia",
        path: "/historia",
        newTab: false,
      },
    ],
  },
];
export default menuData;
