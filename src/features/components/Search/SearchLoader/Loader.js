import React, { useContext } from "react";
import { ThemeContext } from "../../../Theme/ThemeProvider";
import NominationButton from "../../Nominations/List/NominationButton";

const Loader = () => {
  const { bodyTheme } = useContext(ThemeContext);

  return (
    <div>
      {[1, 2, 3].map((i) => {
        return (
          <div className="loader-parent" key={i}>
            <div
              className="loader"
              style={{ background: bodyTheme.background, height: "200px" }}
            >
              <div className="mask circle">

              </div>
              {[1, 2, 3, 4].map((num) => {
                return <div className="mask" key={num}></div>;
              })}
            </div>

            <NominationButton loadingSearch={true} />
          </div>
        );
      })}
    </div>
  );
};

export default Loader;
