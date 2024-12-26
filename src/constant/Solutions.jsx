import { BiSolidLayer } from "react-icons/bi";
import { BsFillBasket3Fill } from "react-icons/bs";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { ImPieChart } from "react-icons/im";
import { TbGlobeFilled } from "react-icons/tb";
import { IoMdRadio } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
const businessModel = [
    {
        label:'E-Commerce',
        icon:<BsFillBasket3Fill />,
    },
    {
        label:'SaaS',
        icon:<PiArrowsClockwiseBold />,
    },
    {
        label:'Plateforms',
        icon:<BiSolidLayer />,
    },
    {
        label:'Marketplaces',
        icon:<BsShop />,
    },
]

const useCase = [
    {
        label:'Finance automation',
        icon:<LuChartNoAxesColumn />,
    },
    {
        label:'Embedde finance',
        icon:<ImPieChart />,
    },
    {
        label:'Global business',
        icon:<TbGlobeFilled />,
    },
    {
        label:'Crypto',
        icon:<IoMdRadio />,
    },
    {
        label:'Creator economy',
        icon:<FaLightbulb />,
    },
    {
        label:'Retail',
        icon:<CiShop />,
    },
];


export{
    businessModel,
    useCase,
}
