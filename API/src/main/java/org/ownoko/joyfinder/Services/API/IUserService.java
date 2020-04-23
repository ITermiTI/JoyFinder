package org.ownoko.joyfinder.Services.API;

import org.ownoko.joyfinder.Models.AccountDto;
import org.ownoko.joyfinder.Models.AccountEntity;
import org.ownoko.joyfinder.Models.UserDto;
import org.ownoko.joyfinder.Models.UsersEntity;

import java.io.StringReader;
import java.util.List;

public interface IUserService {
    int registerNewUser(UserDto userDto);
    void registerAccountWithLogin(String login, String password, UsersEntity user);
    int deleteUser(int id);
    void deleteAccount(AccountEntity account);
    int updateAccountDetails(String login, String password, AccountEntity user);
    int updateUserDetails(UserDto userDto);
    UserDto getUserById(int id);
    UserDto getUserByEmail(String email);
    List<UserDto> getUsersByIds(List<Integer> ids);
    AccountDto getAccountDto(int id);
}
