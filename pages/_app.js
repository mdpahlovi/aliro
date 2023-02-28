import { ThemeProvider as MaterialTailwindTheme, useTheme } from "@material-tailwind/react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
    const theme = {
        button: {
            styles: {
                base: { initial: { textTransform: "", fontWeight: "" } },
                sizes: {
                    sm: { px: "px-5", fontSize: "text-base", borderRadius: "rounded-full" },
                    md: { fontSize: "text-base", borderRadius: "rounded-full" },
                    lg: { fontSize: "text-base", borderRadius: "rounded-full" },
                },
                variants: {
                    filled: {
                        blue: {
                            active: "active:opacity-[0.85]",
                            backgroud: "bg-gradient-to-tr from-primary via-secondary to-accent",
                            color: "text-white",
                            hover: "",
                            shadow: "",
                        },
                    },
                    outlined: {
                        blue: {
                            active: "active:opacity-[0.85]",
                            border: "border border-primary",
                            color: "text-primary",
                            focus: "focus:bg-gradient-to-tr from-primary via-secondary to-accent focus:text-background focus:border-background",
                            hover: "hover:bg-gradient-to-tr from-primary via-secondary to-accent hover:text-background hover:border-background",
                        },
                    },
                },
            },
        },
        switch: {
            styles: {
                colors: {
                    blue: {
                        before: "peer-checked:before:bg-gradient-to-tr from-primary via-secondary to-accent",
                        circle: "",
                        input: "checked:bg-gradient-to-tr from-primary via-secondary to-accent",
                    },
                },
            },
        },
    };
    console.log(useTheme());

    return (
        <Provider store={store}>
            <ThemeProvider>
                <MaterialTailwindTheme value={theme}>
                    <Component {...pageProps} />
                </MaterialTailwindTheme>
            </ThemeProvider>
        </Provider>
    );
}
