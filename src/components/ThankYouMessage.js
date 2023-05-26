import { Col, Row } from "react-bootstrap";
import Luffy from "../assets/img/luffy.svg";

export const ThankYouMessage = () => {
  return (
//       <Col lg={12}>
//         <div className="newsletter-bx wow slideInUp" style={{display: "flex", alignItems: "center"}}>
//           <Row style={{flex: 1}}>
//             <Col lg={12} md={6} xl={5}>
//               <h3 style={{textAlign: 'center', fontSize: '1.5rem'}}>Thank you for visiting!<br></br>Have a nice day:)</h3>
//             </Col>
//           </Row>
        //   <img src={Luffy} alt="luffy"
        //    style={{
        //     backgroundColor: '#ffffff',
        //     width: '14rem',
        //     height: '14rem',
        //     objectFit: 'cover',
        //     marginRight: '5rem'
        // }}
        //   />
//         </div>
//       </Col>
//   )
<Col lg={12}>
       <div className="newsletter-bx wow slideInUp" style={{ paddingTop: '3rem', paddingBottom: '3rem'}}>
           <Row>
             <Col lg={12} md={6} xl={5} style={{ textAlign: 'center', paddingTop: '2.5rem'}}>
               <h3>Thanks for visiting!<br></br>Have a nice day:)</h3>
               {/* {status === 'sending' && <Alert>Sending...</Alert>}
               {status === 'error' && <Alert variant="danger">{message}</Alert>}
               {status === 'success' && <Alert variant="success">{message}</Alert>} */}
             </Col>
             <Col md={6} xl={7}>
               {/* <form onSubmit={handleSubmit}> */}
                 <div className="new-email-bx" style={{ textAlign: 'center'}}>
                   {/* <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                   <button type="submit">Submit</button> */}
                  <img src={Luffy} alt="luffy"
           style={{
            backgroundColor: '#ffffff',
            width: '10rem',
            height: '10rem',
            objectFit: 'cover',
            // marginLeft: '3rem'
        }}
          />
                 </div>
               {/* </form> */}
             </Col>
           </Row>
         </div>
       </Col>
     )
}
