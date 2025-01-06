import React, {useEffect, useState} from "react";
import {Alert, Box, Container, CssBaseline, Link, Snackbar, TextField, Typography,} from "@mui/material";
import {useNavigate} from "react-router-dom"; // Импортируем useNavigate для переключения страниц
import logo from "/logo.png";
import Login_Button from "./components/LoginButton.jsx";

const tg = window.Telegram.WebApp;

const LoginPage = () => {
    useEffect(() => {
        tg.ready()
    }, []);

    const [email, setEmail] = useState("");
    const [snackbar, setSnackbar] = useState({
        open: false, message: "", severity: "success",
    });

    const navigate = useNavigate(); // Используем для перехода на другую страницу

    const handleChange = (e) => setEmail(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8001/api/login/", {
                method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({email}),
            });

            if (response.ok) {
                setSnackbar({
                    open: true, message: "Вход выполнен успешно!", severity: "success",
                });
                setTimeout(() => {
                    tg.close()
                }, 3000);

            } else {
                setSnackbar({
                    open: true, message: "Ошибка входа. Проверьте email и попробуйте снова.", severity: "error",
                });
            }
        } catch {
            setSnackbar({
                open: true, message: "Ошибка подключения к серверу.", severity: "error",
            });
        }
    };

    const handleCloseSnackbar = () => setSnackbar({...snackbar, open: false});

    const handleNavigateToRegister = () => {
        navigate("/register/"); // Переход на страницу регистрации
    };

    return (<>
        <CssBaseline/>
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
                padding: {xs: 2, sm: 3},
            }}
        >
            <Box
                component="img"
                src={logo}
                alt="Логотип"
                sx={{
                    width: {xs: "260px", sm: "300px", md: "350px"}, // Адаптивный размер логотипа
                    height: "auto", marginBottom: {xs: 1, sm: 2}, // Адаптивный отступ снизу для разных экранов
                    display: "block", marginLeft: "auto", marginRight: "auto",
                }}
            />
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: "100%",
                    maxWidth: "500px",
                    p: {xs: 2, sm: 3},
                    borderRadius: 2,
                    textAlign: "center",
                    boxShadow: 3,
                    bgcolor: "background.paper",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Вход
                </Typography>
                <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    margin="dense"
                    required
                />
                <Box sx={{display: "flex", justifyContent: "center", mt: 2}}>
                    <Login_Button/>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", mt: 2}}>
                    <Typography variant="body1" sx={{color: "#646cff"}}>
                        Нет аккаунта?{" "}
                        <Link
                            href="#"
                            onClick={handleNavigateToRegister}
                            sx={{
                                fontWeight: "bold",
                                color: "#646cff",
                                textDecoration: "underline",
                                cursor: "pointer",
                                "&:hover": {
                                    color: "#535bf2",
                                },
                            }}
                        >
                            Зарегистрируйтесь
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{width: "100%"}}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    </>);
};

export default LoginPage;
