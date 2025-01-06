import React from "react";
import {Button, Container, CssBaseline, Paper, Typography} from "@mui/material";
import {ErrorOutline} from "@mui/icons-material";
import {useNavigate} from "react-router-dom"; // Иконка ошибки

const LoginFail = () => {

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
                    bgcolor: "background.paper", // Сделали фон прозрачным
                    textAlign: "center",
                    animation: "fadeIn 0.5s ease-out", // Анимация плавного появления
                }}
            >
                <ErrorOutline sx={{fontSize: 80, color: "#f44336", mb: 2}}/>
                <Typography variant="h5" sx={{fontWeight: "bold", color: "#f44336"}}>
                    Упс! Что-то пошло не так.
                </Typography>
                <Typography variant="body1" sx={{mt: 2, color: "white"}}>
                    Мы не смогли выполнить операцию. Пожалуйста, проверьте введенные данные и попробуйте снова.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mt: 3, backgroundColor: "#f44336", color: "white", "&:hover": {
                            backgroundColor: "#d32f2f",
                        }, padding: "10px 20px", fontWeight: "bold", borderRadius: 2,
                    }}
                    onClick={() => handleNavigateToLogin()} // Перезагрузить страницу для попытки снова
                >
                    Попробовать снова
                </Button>
            </Paper>
        </Container>
    </>)
};

export default LoginFail;
