import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
    {
        id: 1,
        name: "My Profile",
        path: "/dashboard/my-profile",
        icon: "VscAccount",
    },
    {
        id: 2,
        name: "Dashboard",
        path: "/dashboard/artist",
        type: ACCOUNT_TYPE.ARTIST,
        icon: "VscDashboard",
    },
    {
        id: 3,
        name: "My ArtImages",
        path: "/dashboard/my-images",
        type: ACCOUNT_TYPE.ARTIST,
        icon: "VscVm",
    },
    {
        id: 4,
        name: "Add ArtImages",
        path: "/dashboard/add-images",
        type: ACCOUNT_TYPE.ARTIST,
        icon: "VscAdd",
    },
    {
        id: 5,
        name: "Enrolled ArtImages",
        path: "/dashboard/enrolled-artImages",
        type: ACCOUNT_TYPE.BUYER,
        icon: "VscMortarBoard",
    },
    {
        id: 6,
        name: "Your Cart",
        path: "/dashboard/cart",
        type: ACCOUNT_TYPE.STUDENT,
        icon: "VscHistory",
    },
]