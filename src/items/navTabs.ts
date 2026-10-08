import { v4 as uuidv4 } from 'uuid';

export const navTabs = [
    {
        id: uuidv4(),
        title: "خانه",
        href: "/",
    },
    {
        id: uuidv4(),
        title: "دوره ها",
        href: "/courses",
    },
    {
        id: uuidv4(),
        title: "مدرسان",
        href: "#instructors",
    },
    {
        id: uuidv4(),
        title: "تجربه",
        href: "#experience",
    },
]
