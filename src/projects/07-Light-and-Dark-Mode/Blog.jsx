import React, { useContext } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { ThemeContext } from "./context/theme-context";

const Blog = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="container p-1">
      <Title text={`My Blog with ${theme} Theme`} />
      <span style={{ position: "absolute", top: 10, right: 10 }}>
        <Button
          text={theme === "dark" ? "Light" : "Dark"}
          btnClass={`${theme === "dark" && "btn-light"} btn-sm`}
          onClick={changeTheme}
        />
      </span>
      <p>
        Velit reprehenderit anim esse cillum laborum dolore ex minim ullamco.
        Ipsum velit occaecat veniam velit ex laboris ex. Commodo ad aute anim
        consequat ad nisi dolor. Eiusmod consequat eu eu voluptate. Dolore
        adipisicing sint laboris consequat tempor aute aute.
      </p>
    </div>
  );
};

export default Blog;
