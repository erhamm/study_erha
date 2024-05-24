import { createContext, useContext, useState, useRef } from "react";
import "./Conte.css";

const ThemeContext = createContext(null);

export default function Conte() {
  const [theme, setTheme] = useState("light");
  const pRef = useRef(null);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleToggleTheme}
        />
        Use dark mode
      </label>
      <CopyOnLongPress targetRef={pRef} />
      <p ref={pRef}>Text to be1 copied</p>
    </ThemeContext.Provider>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}

const CopyOnLongPress = ({ targetRef }) => {
  const handleLongPress = async () => {
    if (!targetRef.current) return;
    const textToCopy = targetRef.current.textContent;
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied to clipboard successfully");
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div onContextMenu={handleLongPress}>
      <p>11111t</p>
    </div>
  );
};
