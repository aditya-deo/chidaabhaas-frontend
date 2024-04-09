import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Write", "About", "Profile"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonText, setButtonText] = React.useState("Write");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleButtonClick = () => {
    if (buttonText === "Read") {
      navigate("/read/1");
    } else {
      navigate("/write");
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        चिदाभास
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) =>
          item === "Profile" || item === "About" ? (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link to={`/${item.toLowerCase()}`}>
                  <ListItemText primary={item} />
                </Link>
              </ListItemButton>
            </ListItem>
          ) : (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={handleButtonClick}
              >
                <Link to={item === "Write" ? "/write" : "/read/1"} key={item}>
                  <ListItemText
                    primary={item === "Write" ? buttonText : item}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  React.useEffect(() => {
    if (location.pathname === "/write") {
      setButtonText("Read");
    } else {
      setButtonText("Write");
    }
  }, [location.pathname]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="inherit" sx={{ position: "fixed" }}>
        <Toolbar>
          <IconButton
            color="#000000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            चिदाभास
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) =>
              item === "Profile" ? (
                <IconButton key={item} sx={{ color: "#000000" }}>
                  <AccountCircleIcon />
                </IconButton>
              ) : item === "About" ? (
                <Button
                  sx={{ color: "#000000" }}
                  component={Link}
                  to={"/about"}
                >
                  {item}
                </Button>
              ) : (
                <Button sx={{ color: "#000000" }} onClick={handleButtonClick}>
                  {buttonText}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
