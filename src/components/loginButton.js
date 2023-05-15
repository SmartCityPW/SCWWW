import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();
  function loginHandler() {
    navigate("/logowanie");
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Zaloguj się">
        <IconButton
          sx={{
            p: "5px",
            color: "black",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.07)",
            },
          }}
          size="large"
          aria-label="Zaloguj się"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={loginHandler}
        >
          <LoginIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default LoginButton;
