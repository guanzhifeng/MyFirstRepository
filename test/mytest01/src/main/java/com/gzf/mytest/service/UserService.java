package com.gzf.mytest.service;

import com.gzf.mytest.model.User;

import java.util.List;

public interface UserService {

    List<User> findUser();

    int addUser(User user);

}
