import React from "react";
import {Container, CssBaseline, Paper, Typography} from "@mui/material";
import {CheckCircleOutline} from "@mui/icons-material";
import {useNavigate} from "react-router-dom"; // Иконка успеха

const LoginSuccess = () => {
    const navigate = useNavigate(); // Используем для перехода на другую страницу

    const handleNavigateToLogin = () => {
        navigate("/login"); // Переход на страницу регистрации
    };
    return (<>
            <CssBaseline/>
            <Container
                maxWidth="sm"
                sx={{
                    display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",
                }}
            >
                <Paper
                    sx={{
                        p: 4,
                        borderRadius: 3,
                        boxShadow: 3,
                        width: "100%",
                        maxWidth: 500,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "background.paper",
                        textAlign: "center",
                        animation: "fadeIn 0.5s ease-out", // Анимация плавного появления
                    }}
                >
                    <CheckCircleOutline sx={{fontSize: 80, color: "#388e3c", mb: 2}}/>
                    <Typography variant="h5" sx={{fontWeight: "bold", color: "#388e3c"}}>
                        Успех!
                    </Typography>
                    <Typography variant="body1" sx={{mt: 2, color: "white"}}>
                        Вы успешно зарегистрировались! Добро пожаловать в нашу систему.
                    </Typography>
                </Paper>
            </Container>
        </>)
}

export default LoginSuccess;
