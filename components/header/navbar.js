import { gql } from "@apollo/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import client from "../../pages/api/client";
import { GET_NAVBAR_MENU } from "../../queries/navbar/get-nabar";

const Navbar = () => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    const getMenus = async () => {
    
      const res = await client.query({query:GET_NAVBAR_MENU});
      let menuQuery = res.data.pages.nodes;
      setMenu(menuQuery);
    };
    // call back function
    getMenus();
  }, []);
  console.log(menu);

  return (
    <ul className="flex shadow-md sticky top-0 w-full -z-1">
      <li className="text-md font-thin mx-2 p-3 hover:text-black"><Link href={'/'}>Home</Link></li>
      {menu != undefined ? (
        menu.map((item) => {
          return (
            <li className="text-md font-thin mx-2 p-3 idtext-blue-500 hover:text-black">
              <Link href={item.uri}>{item.title}</Link>
            </li>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </ul>
  );
};

export default Navbar;
