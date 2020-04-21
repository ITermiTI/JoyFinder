package org.ownoko.joyfinder.Services.API;

import org.ownoko.joyfinder.Models.AccountDto;
import org.ownoko.joyfinder.Models.AccountEntity;
import org.ownoko.joyfinder.Models.UsersEntity;

import java.io.StringReader;
import java.util.List;

public interface IUserService {
    int registerNewUser(String login, String password, String email,
                         String phoneNumber, String name, String surname);
    void registerAccountWithLogin(String login, String password, UsersEntity user);
    int deleteUser(int id);
    void deleteAccount(AccountEntity account);
    int updateAccountDetails(String login, String password, AccountEntity user);
    int updateUserDetails(String login, String password, String email,
                          String phoneNumber, String name, String surname, int userId);
    UsersEntity getUserById(int id);
    UsersEntity getUserByEmail(String email);
    List<UsersEntity> getUsersByIds(List<Integer> ids);
    AccountDto getAccountDto(int id);
}
