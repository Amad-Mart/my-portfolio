import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Banner = () => {
  return(
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome To My Portfolio</span>
            <h1>{`Hi I'm Amadeus`}<span className="wrap">web developer</span></h1>
            <p>I am a web developer</p>
            <button>Let's Connect <ArrowRightCircle/> </button>
          </Col>
          <Col xs={12} md={6} xl={5} >
            <img src={""} alt="Header Img" />

          </Col>
        </Row>
      </Container>
    </section>
  )
}