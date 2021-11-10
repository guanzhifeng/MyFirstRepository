package com.gzf.mytest.service.impl;

import com.gzf.mytest.mapper.UserMapper;
import com.gzf.mytest.model.User;
import com.gzf.mytest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> findUser() {
        List<User> users = userMapper.selectAll();
        return users;
    }

    @Override
    public int addUser(User user) {
        int count = userMapper.insertSelective(user);
        return count;
    }
}
