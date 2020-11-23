import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
       
        {props.children}
        <i className="fas fa-code" /> <i className="fas fa-ve" /> By{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href=""
          aria-label="My GitHub"
        >
          GK
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
         
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
