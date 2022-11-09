import { gql } from "@apollo/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import client from "../../pages/api/client";

const Navbar = () => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    const getMenus = async () => {
      const REST_QUERY = {
        query: gql`
          query navbarMenu {
            pages {
              nodes {
                id
                slug
                title
                uri
              }
            }
          }
        `,
      };
      const res = await client.query(REST_QUERY);
      let menuQuery = res.data.pages.nodes;
      setMenu(menuQuery);
    };
    // call back function
    getMenus();
  }, []);
  console.log(menu);

  return (
    <ul className="bg-gray-100 flex shadow-md sticky top-0 w-full">
      {menu != undefined ? (
        menu.map((item) => {
          return (
            <li className="text-xl mx-2 p-3 idtext-blue-500 hover:text-black font-bold">
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
