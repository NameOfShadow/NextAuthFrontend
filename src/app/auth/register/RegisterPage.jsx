import React, {useEffect, useState} from "react";
import {Alert, Box, Container, CssBaseline, Link, Snackbar, TextField, Typography} from "@mui/material";
import Register_Button from "./components/RegisterButton.jsx";
import logo from "/logo.png";
import {useNavigate} from "react-router-dom";

const tg = window.Telegram.WebApp; // Telegram Web App API

const RegisterPage = () => {
    useEffect(() => {
        tg.ready(); // Инициализация Telegram Web App
    }, []);

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", middleName: "", email: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbar, setSnackbar] = useState({open: false, message: "", severity: "success"});

    const navigate = useNavigate(); // Для перехода на другую страницу

    const handleNavigateToLogin = () => {
        navigate("/login/"); // Переход на страницу входа
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Получаем user_id из Telegram Web App
        const userId = tg.initDataUnsafe.user?.id;

        if (!userId) {
            setSnackbar({
                open: true,
                message: "Не удалось получить данные пользователя. Пожалуйста, попробуйте снова.",
                severity: "error",
            });
            return;
        }

        const registrationData = {
            user_id: userId, // Добавляем user_id, полученный с Telegram
            first_name: formData.firstName,
            last_name: formData.lastName,
            middle_name: formData.middleName,
            email: formData.email,
        };

        try {
            const response = await fetch("http://noplayground.ru/nextauth/api/register/", {
                method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(registrationData), // Отправляем объект с данными
            });

            if (response.ok) {
                setSnackbar({
                    open: true, message: "Письмо отправлено на вашу почту!", severity: "success",
                });
                setTimeout(() => {
                    tg.close(); // Закрываем Web App после успешной регистрации
                }, 3000);
            } else {
                setSnackbar({
                    open: true, message: "Ошибка регистрации. Попробуйте еще раз.", severity: "error",
                });
            }
        } catch (error) {
            setSnackbar({
                open: true, message: "Ошибка подключения к серверу.", severity: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseSnackbar = () => setSnackbar({...snackbar, open: false});

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
                        width: {xs: "260px", sm: "300px", md: "350px"},
                        height: "auto",
                        marginBottom: {xs: -2, sm: -1},
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                />
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        p: {xs: 1, sm: 2},
                        borderRadius: 2,
                        boxShadow: 3,
                        bgcolor: "background.paper",
                        width: "100%",
                        maxWidth: {xs: "100%", sm: "500px"},
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        flexGrow: 1,
                        minHeight: "auto",
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Регистрация
                    </Typography>
                    <TextField
                        fullWidth
                        label="Имя"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        margin="dense"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Фамилия"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        margin="dense"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Отчество"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        type="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="dense"
                        required
                    />
                    <Box sx={{mt: 2, display: "flex", justifyContent: "center"}}>
                        <Register_Button/>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center", mt: 2}}>
                        <Typography variant="body1" sx={{color: "#646cff"}}>
                            Есть аккаунт?{" "}
                            <Link
                                href="#"
                                onClick={handleNavigateToLogin}
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
                                Войти
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{width: "100%"}}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>);
};

export default RegisterPage;
