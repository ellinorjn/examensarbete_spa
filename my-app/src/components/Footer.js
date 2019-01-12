import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="flex-footer">
          <div>
            Stockholm Spa <br /> Mäster Samuelsgatan 1 <br />
            123 45 Stockholm{" "}
          </div>
          <div>
            08 - 123 45 67 <br />
            spa@stockholm.se
          </div>
          <div id="instagram">
            <img
              src={require("../images/instagram.png")}
              alt="instagram logo"
            />
          </div>
          <div id="facebook">
            <img src={require("../images/facebook.png")} alt="facebook logo" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
