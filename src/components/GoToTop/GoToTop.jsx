import { useState, useEffect } from "react";
import "./gototop.css";

function GoToTop() {
  const [btnVisibility, setButtonVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    let scrolled = window.pageYOffset;
    scrolled > 500 ? setButtonVisibility(true) : setButtonVisibility(false);
  };

  return (
    <span
      className={`gotop ${btnVisibility ? "goto-visible" : "goto-hidden"}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <i className="fas fa-chevron-up"></i>
    </span>
  );
}

export default GoToTop;
