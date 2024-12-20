import React, { useState, useEffect } from "react";
import styles from "./Load.module.css";
import { RxCross2 } from "react-icons/rx";

const Load = () => {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Check local storage to see if the user opted out of the popup
    const isPopupDisabled = localStorage.getItem("disablePopup");
    if (isPopupDisabled) {
      setShowPopup(false);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  const handleClosePopup = () => {
    setLoading(false);
    setShowPopup(false);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      localStorage.setItem("disablePopup", "true"); // Save user preference in local storage
      setLoading(false);
      setShowPopup(false);
    }
  };

  if (loading && showPopup) {
    return (
      <div className={`${styles.LoadParent} ${loading ? "loading" : ""}`}>
        <form className={`${styles.LoadChild}`} onSubmit={handleSubmit}>
          <h2>Newsletter</h2>
          <p>
            Seamlessly disseminate interoperable collaboration and idea-sharing
            via magnetic catalysts for change. Interactively enable competitive
            customer service.
          </p>
          <div>
            <span
              className={`${styles.cross}`}
              role="button"
              tabIndex={0}
              onClick={handleClosePopup}
              onKeyPress={handleClosePopup}
            >
              <RxCross2 aria-label="Close popup" />
            </span>
            <input type="text" placeholder="Enter Keyword" required />
            <button type="submit">Subscribe</button>
          </div>
          <span id="checkbox">
            <input
              type="checkbox"
              name="popup"
              id="popup"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="popup" id="pupUpBox">
              Don't Show this PopUp Again
            </label>
          </span>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default Load;
