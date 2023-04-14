import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAeFBMVEX////1Vk71VEz0RDr1UEf/+vr1SkH4lpP7x8X2ZV70Rz781NP94N/+7u783Nv1TEP1Xlf0Qjf6ubf3fXj5paL+8vL2YVr5nJj7ysj2b2n95+b3gXz6rqv3h4L7wL76t7X4ko73dnD819b5o6D6sq/4jIj2a2T0NSh2dqlsAAAGQklEQVR4nO2di1rqOhBGaRIChksooEWEclPP+7/hAYS967YV2vyTKd836wEsyyST+6TTEQRBEARBEARBEARBEARBEARBEARBiMxoPMinq/mJ1aa/GI+4fxCO7niazVSqnbX+irXOpX7X2+y73D8vkOd+70k7b5RKfqKU8U5PtvnDFuf+8KKtKXP75mmsTrIF94+tz77n3U27gqX7eCjJ0Vzdr3fBWJ8tuX/4nQxm2tfUu5Skfu1z//g7yF+caaB3kbRqwy1wgzyxTYqv6GjfuSV+YTEJ9Ds7ejPlFqlg+OrC/c6OdjLgliljm2L8zo767Znb518Wvnl8KcO4doWc7lrjCvAL5V5bVIx7gy3AL4xrTe94ALbAIkqvudXOdHeWxO+En7Rg3rFUFDX0inLs/caCqIb+UUyZY+qUWPCIzjgF55ra74hljDeZiyB4VHzjEuzFETyG1BmPYKQSPCuylOI8niBPW5zGCDIFxegRdZBGFTx2GpH7xSV8LnGTNOropptEFzwO4GKOUWeUY9FKxUk8wRXdbOI3fLSAOo4dZa7oPJJh6U5SDJSO0xQ/OBrhRfE1huAgblf/nSgL4mx19IymX4DLPKdgYsinGSOuOHpFUw9tWPr6ItT9PmuY+cLS7kw9sYaZM8pTCi5+znqVgXND0a8IDV9+FKFKsh6aG4rK0gkOSoqQoOHfauuertt//dkKCQy7twyVgn/zwrDk0xyGiaXadisbcrMYqk/4R6u/zGKY6CH8qyemZSNSHkNDs7ZY2tvzGNL0+svSD/MYJpbiJOOqdNrEZGg+4J8tG88wGioH/2xnVPXdJwiTv9XuHsOEYH9/UzW3VxAKZ2fuMiSIpsRTX1vTUCVwQ+Kpb13DBL50OibeD61taNHr3+/ES2y1Dc0WbLgmXoGqbQjvpupeLiA3TFLshaJn6jW2+oZuDzXcU+8Y1jf02FXFyv6ezxDc52fUS90NDLE7GG+Vhso1plgv6huCg2n5xOL8neWwKXlBsb5hgp1eVF7VCvlPFsNXA0PoVmL1R0MMB2GGDnmZb1Q5KmU0tMgp4rCVhsi1mn0rDZGzi0HlkIbREDqoWbTSELkFJYbNeBTD4bgef6d1bTKsjjS1x6X/jUr/Knekqe4taqNhhtDeorrH5zRE9vjVozZOQ+So7d6PRjV00I3gRokuiA2xq96TFhpiZ8C4fRmYIXhvBrcShTPcQQ1x2xYwQ9ODGv4yqOEy9NirXpV73HyGFruqj+suYIboU/uwYIoyhG9zl5+mYTSEn6iBhRqUIXjrqYM7qYAy1PDkbjtQqAEZKoMWhDVEkCH8oELV0UQ2Q4rDiaDLzSBDTZD49IDpETGGhiKNxBhTTTGGNKf1MbNgjKEjyc6LiaYQQ4JIeuIZcrkSYujGJIa/HMiIbEh2yxKy8o0wpLtkWXnmJK4hxTH2CzlgggEw9HMyQ8RdfIAhxXjmCqAQww09aUKl8MFpsKGi6e2v9IPDabAhZSs88RlaiKGGBFPf7wRn3wk1dORZeEKz0wQaUl2QLdANTNodaJhGeF0gDws2YYb+QC/Y6eyC6mmQYaSEZs9B9TTIMKW5w/2DRch6Roihpcz58Y1twGw/wNBEyfT1RUCamuaGykR8OimgKTY3TImWLsrZNx7aNDaMllLwQuMUtE0N4yehPTTs+BsacuRK/mg2Gy7M7saFv+Dz5ytlxwRjhtG/rJv1GS698u1f5PWVMkH68XYps1gJBs0Tj2Cn8xYnFy2fYOO2WA/P0gavZPRZBvneDfhiQ/3ABe/zFicGpLnLVdqCF8pGE7pb0MZHHYtWsqbKCmJb86jVlKSmqpR47bcOoyd8t+GTdtTQK6sU2xpVyh5D/2W0A71+ePazL5HWnGqxUIAXLM944lzBzXl3iLG40Vl737LuHpo9lFv0S7dt6SLK6c5tQF1VXvda8FreLaaThi8CG6tW7a2f39ivde2CPBbf7JGe5u7mu/T2u+oFvfTzvd3Nr4Ru/madv30+RXnrdpsHaH2ljFc766ypKEx1ejXevc7Zn6kMZNk/zJR2znr/J6+899Y67XdZ3sahSzOW+/5mlW0/1uv1xzabv/cHywcJm4IgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCG3ify2ighHb027SAAAAAElFTkSuQmCC"
            width={45}
            alt=""
          />
          <span className="text-xl whitespace-pre">Taiyō.AI</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to={"/settings"} className="link">
                <HiOutlineDatabase size={23} className="min-w-max" />
                Cards and Line Chart
              </NavLink>
            </li>
            <li>
              <NavLink to={"/authentication"} className="link">
                <BsPerson size={23} className="min-w-max" />
                Maps
              </NavLink>
            </li>
          </ul>
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
