import { Col, Row } from "react-bootstrap";
import Luffy from "../assets/img/luffy.svg";

export const ThankYouMessage = () => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp" style={{display: "flex", alignItems: "center"}}>
          <Row style={{flex: 1}}>
            <Col lg={12} md={6} xl={5}>
              <h3 style={{textAlign: 'center', fontSize: '1.5rem'}}>Thank you for visiting!<br></br>Have a nice day:)</h3>
            </Col>
          </Row>
          <img src={Luffy} alt="luffy"
           style={{
            backgroundColor: '#ffffff',
            width: '14rem',
            height: '14rem',
            objectFit: 'cover',
            marginRight: '5rem'
        }}
          />
        </div>
      </Col>
  )
}
