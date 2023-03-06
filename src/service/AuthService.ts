import { AlertProps } from "@mui/material";
import { LoginData } from "../model/LoginData";
import { ActionAlerts } from "../components/closeableAlert";
import React from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../redux/authSlice"

export class AuthService {
    private users: LoginData[] = [
        {username: "user@gmail.com", password: "user1234"},
        {username: "admin@gmail.com", password: "admin1234"},
        {username: "1", password: "1"}
    ];
    login(loginData: LoginData, orDispatch: ()=>void, orAlert: ()=>void) {
        let knownUser: number = -1;
        this.users.forEach((user, index) => { if(user.username == loginData.username && 
            user.password == loginData.password) {
                knownUser = index}})
    if(knownUser == -1) {
        orAlert();
    } else orDispatch(); 
}}
