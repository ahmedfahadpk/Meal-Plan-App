import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

import "./About.css";

const About = () => {
  return (
    <div id="about">
      <Container id="aboutContainer">
        <h2> How it works</h2>
        <CardGroup>
          <Card className="aboutCard">
            <Card.Body>
              <Card.Title>Choose Filters</Card.Title>
              <Card.Text>
                Search recipes by selecting ingredient, calories, diet and
                health labels.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="aboutCard">
            <Card.Body>
              <Card.Title>Pick Recipe</Card.Title>
              <Card.Text> Choose one recipe that you like.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="aboutCard">
            <Card.Body>
              <Card.Title>Cook</Card.Title>
              <Card.Text>Cook your meal following the recipe.</Card.Text>
            </Card.Body>
          </Card>

          <Card className="aboutCard">
            <Card.Body>
              <Card.Title>Eat and Repeat</Card.Title>
              <Card.Text> Enjoy your meal and welcome back!</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <Button variant="success">Get started</Button>
      </Container>
    </div>
  );
};

export default About;
