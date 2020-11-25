import React from 'react';
import { Container, Card, CardText, CardGroup, CardBody, } from 'reactstrap';
import Schedule from '../components/Calendar'



export const Members = (props) => {
  return (
    <Container>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Enrolled Athletes</CardTitle>
            <CardText>
              <p>Kid A</p>
              <p>Kid B</p>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Schedule</CardTitle>
            <Schedule />
          </CardBody>
        </Card>
      </CardGroup>
     

    </Container>
  );
}

export default Members;