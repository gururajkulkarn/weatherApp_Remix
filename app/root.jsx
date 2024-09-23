import { Links, Meta, Outlet, Scripts, useNavigate } from "@remix-run/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";

const theme = createTheme();

export default function App() {
  const [clientRendered, setClientRendered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setClientRendered(true);
    // Check for authentication status here
    const isAuthenticated = false; // Replace this with actual authentication check
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login page if not authenticated
    }
  }, [navigate]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {clientRendered && <Outlet />}
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
