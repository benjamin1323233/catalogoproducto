import { Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = ({setUsuarioadmin}) => {

  //esto es de react hook form
const{
  register,
  handleSubmit,
  formState:{ errors },
}=useForm()

const navegacion = useNavigate()

const iniciarSesion=(usuario)=>{
    console.log(import.meta.env.VITE_API_EMAIL)
    if(usuario.email=== import.meta.env.VITE_API_EMAIL &&
      usuario.password=== import.meta.env.VITE_API_PASSWORD){
      console.log("soy el administrador")
      setUsuarioadmin(true)
      sessionStorage.setItem("userkey", true)
      //redirige a otra pdina
      navegacion("/admin")
      }else{
        console.log("email o contraseña no son correctas")
      }
}

    return (
        <section className="container my-3">
              <h1 className="text-center">Login</h1>  
            <Row xs={1} md={2}>
                <Col>
      <Form onSubmit={handleSubmit(iniciarSesion)}>
         <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="ingresa un email" {...register("email",{
          required:"el email es un dato obligatorio",
          pattern:{
value:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
message:"EL EMAIL  DEBE TENER UN FORMATO VALIDO"

          }

        })} />
        <Form.Text className="text-danger">
          {errors.email?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>contraseña</Form.Label>
        <Form.Control type="password" placeholder="ingresa tu contraseña"{...register("password",{
          required:"la contraseña es un dato obligatorio",
          pattern:{
            value:/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
            message:"La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
          }
        })} />
        <Form.Text className="text-danger">
{errors.password?.message}
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