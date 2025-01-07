import { BsArrowRightShort } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

const paymentHover = [
    {
        id: 1,
        default:(<LuDot />),
        hover:(<BsArrowRightShort />),
        title:'Payment links',
        desc:'No-code payments',
    },
    {
        id:2,
        default:(<LuDot />),
        hover:(<BsArrowRightShort />),
        title:'Checkout',
        desc:'Pre-built payment form',
    },
    {
        id:3,
        default:(<LuDot />),
        hover:(<BsArrowRightShort />),
        title:'Elements',
        desc:'Flexible UI componets',
    }
]


export {
    paymentHover,
}