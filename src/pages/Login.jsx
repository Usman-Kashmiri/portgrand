import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Container,
    Button,
} from '@mantine/core';
import AuthUser from '../Config/UserAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
    const { http, setToken,alertMessage } = AuthUser();
    const [alert, setAlert] = useState('')
    
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        let data = {
            email: form.get('email'),
            password: form.get('password')
        }
        http.post('/login',data).then((res)=>{
            setAlert(alertMessage(res.data.status, res.data.msg));
            if(res.data.status === 'success'){
                setToken(res.data.user,res.data.token);
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            }
        })
    }

    return (
        <Container size={420} my={40}>
            {alert}
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Welcome back!
            </Title>


            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={handleSubmit}>
                    <TextInput name='email' label="Email" placeholder="you@mantine.dev" required />
                    <PasswordInput name='password' label="Password" placeholder="Your password" required mt="md" />
                    <Button fullWidth mt="xl" type='submit'>
                        Sign in
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}


export default Login;