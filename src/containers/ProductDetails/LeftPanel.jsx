import { Tab, Nav } from "react-bootstrap";
import "./LeftPanel.css";

function LeftPanel() {
  return (
    <Tab.Container id="tabs-container" defaultActiveKey="tab1">
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="tab1">DETAILS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">DELIVERY</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">FIT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab4">SHARE</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="tab1">
          <p>
            The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
            lunar lavishness by night and by day: a blazer in a linen blend shot
            with lurex for a shimmering surface that shines like a star in the
            sky. it has a straight fit with well defined shoulders and a shawl
            collar culminating in a button and has been flawlessly finished with
            three jet pockets with a sartorial feel.
          </p>
          <p>See the EDITOR’S NOTE</p>
          <p>Learn about the DESIGNER</p>
        </Tab.Pane>
        <Tab.Pane eventKey="tab2">
          <p>This is the content of Tab Delivery.</p>
        </Tab.Pane>
        <Tab.Pane eventKey="tab3">
          <p>This is the content of Tab Fit.</p>
        </Tab.Pane>
        <Tab.Pane eventKey="tab4">
          <p>This is the content of Tab Share.</p>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default LeftPanel;
