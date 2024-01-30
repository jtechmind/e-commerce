import React, { useEffect, useState } from "react";

function Header() {
  const [headerOptions, setHeaderOptions] = useState([]);

  useEffect(() => {
    const getOptions = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );

        if (!response.ok) {
          throw new Error("");
        }
        const data = await response.json();
        setHeaderOptions(data);
      } catch (error) {
        console.log("Error in fatching data: ", error);
      }
    };
    getOptions();
  }, []);
  return (
    <header>
      <div>
        <nav>
          <ul>
            {headerOptions.map((option) => (
              <li key={option.id}>
                <a href={option}> {option}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
