import React from "react";
import ReactDOM from "react-dom/client";

import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import AppRoutes from "./app/routes/router.jsx";
import "./index.css"

const darkTheme = createTheme({
    palette: {
        mode: "dark", primary: {
            main: "#90caf9",
        }, background: {
            default: "#121212",  // Темный фон для всей страницы
            paper: "#1e1e1e",    // Цвет бумаги (фон для компонентов)
        }, text: {
            primary: "#ffffff", secondary: "#bbbbbb",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode>
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <AppRoutes/>
    </ThemeProvider>
</React.StrictMode>);
