package com.gzf.mytest.controller;


import com.gzf.mytest.model.User;
import com.gzf.mytest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@RequestMapping("/user")
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/find")
    @ResponseBody
    public Object findUser(){

       return userService.findUser();
    }

    @RequestMapping("/hello")
    @ResponseBody
    public String test(){
        return "Hello";
    }

}
