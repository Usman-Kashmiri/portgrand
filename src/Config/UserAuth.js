import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { IconCheck, IconX } from '@tabler/icons-react';
import { Notification } from '@mantine/core';
export default function AuthUser() {

    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.clear();
        navigate('/');
    };

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate('/')
    }
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }
    const getUser = () => {
        const UserString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(UserString);
        return user_detail;
    }
    const alertMessage = (status, message) => {
        let icon = '';
        if (status == 'success') {
            status = 'teal';
            icon = (<IconCheck size="1.1rem" />);
        } else if (status == 'wrong') {
            status = 'red';
            icon = (<IconX size="1.1rem" />);
        } else if (status == 'warning') {
            status = 'yellow';
            icon = (<IconX size="1.1rem" />);
        }

        return (
            <Notification icon={icon} color={status} title={message} className='mt-2' withCloseButton={false} c closeButtonProps={{ iconSize: 20 }} >
            </Notification>
        )
    };


    const [token, setToken] = useState(getToken);
    const [user, setUser] = useState(getUser);

    const http = axios.create({
        baseURL: 'https://portgrand.xiomstudio.com/api/',
        headers: {
            "Content-Type": "multipart/form-data",

        },


    });


    return {
        alertMessage,
        setToken: saveToken,
        user,
        setUser,
        token,
        getToken,
        // logout,
        // ticket,
        http,
        logout,
    }
}