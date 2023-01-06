import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function MyAlert(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={props.variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{props.message}</Alert.Heading>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
