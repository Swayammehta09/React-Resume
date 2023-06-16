import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Education from "./Education";
import Chart from "./Chart";

function Navigation() {
  return (
    <>
      <div>
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Swayam Mehta</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/Introduction"}>
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to={"/Education"}>
                  Education
                </Nav.Link>
                <Nav.Link as={Link} to={"/Experience"}>
                  Experience
                </Nav.Link>
                <Nav.Link as={Link} to={"/Chart"}>
                  My Skills
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/swayam-mehta-848b70220/">
                  LinkedIn
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Router>
        <Router>
          <Switch>
            <Route excat path="/Introduction">
             {Introduction}
            </Route>
            <Route excat path="/Education">
              {Education}
            </Route>
            <Route excat path="/Experience">
              {Experience}
            </Route>
            <Route excat path="/Chart">
              {Chart}
            </Route>
          </Switch>
        </Router>
       
      </div>
    </>
  );
}

export default Navigation;

{
  /* DUPLICATES THE COMPONENTS BUT WORKS
  import Introduction from "./Introduction";
import Experience from "./Experience";
import Education from "./Education";
import Chart from "./Chart";


<Route excat path="/Introduction"> <Introduction /></Route>
            <Route excat path="/Education"> <Education /></Route>
            <Route excat path="/Experience"> <Experience /></Route>
            <Route excat path="/Chart"> <Chart /></Route>



             <Router>
          <Switch>
            <Route excat path="/Introduction">
              {" "}
            </Route>
            <Route excat path="/Education">
              {" "}
            </Route>
            <Route excat path="/Experience">
              {" "}
            </Route>
            <Route excat path="/Chart">
              {" "}
            </Route>
          </Switch>
        </Router>
*/
}
