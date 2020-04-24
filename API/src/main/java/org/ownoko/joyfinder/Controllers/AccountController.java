package org.ownoko.joyfinder.Controllers;


import org.ownoko.joyfinder.Models.AccountDto;
import org.ownoko.joyfinder.Models.UserDto;
import org.ownoko.joyfinder.Services.API.IUserService;
import org.ownoko.joyfinder.Services.Const;
import org.ownoko.joyfinder.Services.Exceptions.EmailAlreadyUsedException;
import org.ownoko.joyfinder.Services.Exceptions.LoginAlreadyUsedException;
import org.ownoko.joyfinder.Services.Exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AccountController {

    @Autowired
    IUserService userService;

    @GetMapping("/user/{id}")
    public UserDto getUser(@PathVariable int id) throws UserNotFoundException {
        UserDto user = userService.getUserById(id);
        if(user == null) throw new UserNotFoundException("There is no such user");
        return user;
    }

    @GetMapping("/account/{id}")
    public AccountDto getAccount(@PathVariable int id) throws UserNotFoundException {
        AccountDto account = userService.getAccountDto(id);
        if(account == null) throw new UserNotFoundException("There is no such user");
        return account;
    }

    @GetMapping("/user/getList")
    public List<UserDto> getListOfUsers(@RequestBody List<Integer> ids) throws UserNotFoundException {
        List<UserDto> users = userService.getUsersByIds(ids);
        if(users == null) throw new UserNotFoundException("There is no such user");
        return users;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void registerUser(@RequestBody UserDto user) throws EmailAlreadyUsedException, LoginAlreadyUsedException {
        int result = userService.registerNewUser(user);
        if(result == Const.emailAlreadyUsed)
            throw new EmailAlreadyUsedException("E-mail is already used!");
        if(result == Const.loginAlreadyUsed)
            throw new LoginAlreadyUsedException("Login is already used");
    }

    @PutMapping("/user/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateUserDetails(@PathVariable int id, @RequestBody UserDto user)
            throws EmailAlreadyUsedException, LoginAlreadyUsedException
    {
        user.setUserId(id);
        int result = userService.updateUserDetails(user);
        if(result == Const.emailAlreadyUsed)
            throw new EmailAlreadyUsedException("E-mail is already used!");
        if(result == Const.loginAlreadyUsed)
            throw new LoginAlreadyUsedException("Login is already used");
    }

    @DeleteMapping("/user/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable int id) throws UserNotFoundException {
        int result = userService.deleteUser(id);
        if(result == Const.userDoesNotExit)
            throw new UserNotFoundException("There is no such user");
    }


}
