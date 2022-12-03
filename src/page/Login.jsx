import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../App.scss';
import { useNavigate } from 'react-router-dom'; //로긴후 돌아가게

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    console.log('loginUser 함수실행');
    e.preventDefault();
    setAuthenticate(true);
    navigate('/'); //첫 페이지로 간다
  };

  return (
    <div className="container login-area">
      <Form className="login-form" onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default Login;
//컨테이너 컴포넌트 대신 기존에 쓰던 방식(클라스로)으로도 가능
//button에  type="submit"이 있는 상황에선 onClick X -> form 에 기본적으로 있는 onSubmit으로
//
