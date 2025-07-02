import { Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <section className="container my-3">
              <h1 className="text-center">Login</h1>  
            <Row xs={1} md={2}>
                <Col>
      <Form>
         <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="ingresa un email" />
        <Form.Text className="text-danger">
este es un mensaje de error
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>contraseña</Form.Label>
        <Form.Control type="password" placeholder="ingresa tu contraseña" />
        <Form.Text className="text-danger">
este es un mensaje de error
        </Form.Text>
      </Form.Group>
      <Button variant="success" type="submit">
        enviar
      </Button>
      </Form>
                </Col>
                <Col>
                <img src="https://images.pexels.com/photos/2575835/pexels-photo-2575835.jpeg" alt="imagen de cafe" className="w-100" />
                </Col>

            </Row> 
        </section>
    );
};

export default Login;