package org.ownoko.joyfinder.Services.Implementation;

import org.ownoko.joyfinder.Models.AccountDto;
import org.ownoko.joyfinder.Models.AccountEntity;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.ownoko.joyfinder.Repositories.API.IAccountsDao;
import org.ownoko.joyfinder.Repositories.API.IUsersDao;
import org.ownoko.joyfinder.Services.API.IUserService;
import org.ownoko.joyfinder.Services.Const;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService implements IUserService {
    @Autowired
    IAccountsDao accountsDao;
    @Autowired
    IUsersDao usersDao;


    @Override
    public int registerNewUser(String login, String password, String email,
                                String phoneNumber, String name, String surname) {
        if(accountsDao.findAccountEntityByLogin(login) != null) return Const.loginAlreadyUsed;
        if(usersDao.findByEmail(email) != null) return Const.emailAlreadyUsed;
        UsersEntity user = new UsersEntity();
        user.setEmail(email);
        user.setPhonenumber(phoneNumber);
        user.setName(name);
        user.setSurname(surname);
        usersDao.save(user);
        this.registerAccountWithLogin(login, password,user);
        return Const.registrationSuccess;
    }

    @Override
    public void registerAccountWithLogin(String login, String password, UsersEntity user) {

        AccountEntity account = new AccountEntity();
        account.setLogin(login);
        account.setPassword(password);
        account.setUsersByUserid(user);
        accountsDao.save(account);
        return;
    }

    @Override
    public int deleteUser(int id) {

        UsersEntity user = usersDao.getOne(id);
        if(user != null)
        {
            this.deleteAccount(accountsDao.findAccountEntityByUsersByUserid(user));
            usersDao.delete(user);
            return Const.userDeletionSuccess;
        }
        return Const.userDoesNotExit;
    }

    @Override
    public void deleteAccount(AccountEntity account) {

        accountsDao.delete(account);
        return;

    }

    @Override
    public int updateAccountDetails(String login, String password, AccountEntity account) {

        if(accountsDao.findAccountEntityByLogin(login) != null) return Const.loginAlreadyUsed;

        if(login != null) account.setLogin(login);

        if(password != null) account.setPassword(password);

        accountsDao.save(account);

        return Const.userDetailsUpdateSuccess;
    }

    @Override
    public int updateUserDetails(String login, String password, String email,
                                 String phoneNumber, String name, String surname, int userId) {

        UsersEntity user = usersDao.getOne(userId);
        if(user == null) return Const.userDoesNotExit;

        if(email != null)
        {
            if(usersDao.findByEmail(email) != null) return Const.emailAlreadyUsed;
            user.setEmail(email);
        }

        if(login != null || password != null)
        {
            AccountEntity account = accountsDao.findAccountEntityByUsersByUserid(user);
            if(this.updateAccountDetails(login, password, account) == Const.userDoesNotExit)
                return Const.loginAlreadyUsed;
        }

        if(phoneNumber != null) user.setPhonenumber(phoneNumber);
        if(name != null) user.setName(name);
        if(surname != null) user.setSurname(surname);
        usersDao.save(user);

        return Const.userDetailsUpdateSuccess;
    }

    @Override
    public UsersEntity getUserById(int id) {
        return usersDao.getOne(id);
    }

    @Override
    public UsersEntity getUserByEmail(String email) {
        return usersDao.findByEmail(email);
    }

    @Override
    public List<UsersEntity> getUsersByIds(List<Integer> ids) {
        return usersDao.findAllById(ids);
    }

    @Override
    public AccountDto getAccountDto(int id) {
        AccountEntity accountEntity = accountsDao.getOne(id);
        AccountDto account = new AccountDto();
        account.setId(accountEntity.getId());
        account.setLogin(accountEntity.getLogin());
        account.setUserId(accountEntity.getUsersByUserid().getId());
        return account;
    }
}
