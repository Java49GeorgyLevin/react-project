import React, { useEffect, useRef, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {Box, Typography, AppBar, Drawer, IconButton, Toolbar, Tab, Tabs } from "@mui/material";
import { NavigatorProps } from "../../model/NavigatorProps";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const NavigatorMobile: React.FC<NavigatorProps> = ({ routes }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const drawerWidth = useRef<number>(240);
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigate = useNavigate();
    useEffect(() => {
        if (routes.length != 0) {
            navigate(routes[0].path)
        }
    }, [routes]);

    function getNavItems(routes: { path: string; label: string }[]): React.ReactNode {
        return routes.map((r, index) => <Tab component={Link} to={r.path}
            label={r.label} key={index} onClick={() => setMobileOpen(false)} />)
    }

    function getTitle(): string {
        let title = '';
        const curRoute = routes.find(route => route.path === location.pathname)
        if (curRoute && curRoute.label) {
            title = curRoute.label;
        }
        return title;
    }

    return <Box sx={{ display: 'flex' }}>
        <AppBar>
            <Tabs  >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {getTitle()}
                    </Typography>
                </Toolbar>
            </Tabs>
        </AppBar>
        <Box>
            <Drawer open={mobileOpen} onClose={(handleDrawerToggle)} >
                {getNavItems(routes)}
            </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth.current}px)` } }>
            <Toolbar />
            <Outlet></Outlet>
        </Box>
    </Box>
}