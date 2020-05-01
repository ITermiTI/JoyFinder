package org.ownoko.joyfinder.Services.Implementation;

import org.ownoko.joyfinder.Models.AccountDto;
import org.ownoko.joyfinder.Models.AccountEntity;
import org.ownoko.joyfinder.Models.UserDto;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.ownoko.joyfinder.Repositories.API.IAccountsDao;
import org.ownoko.joyfinder.Repositories.API.IUsersDao;
import org.ownoko.joyfinder.Services.API.IUserService;
import org.ownoko.joyfinder.Services.Const;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UsersService implements IUserService {
    @Autowired
    IAccountsDao accountsDao;
    @Autowired
    IUsersDao usersDao;


    @Override
    public int registerNewUser(UserDto userDto) {
        if(accountsDao.findAccountEntityByLogin(userDto.getLogin()) != null) return Const.loginAlreadyUsed;
        if(usersDao.findByEmail(userDto.getEmail()) != null) return Const.emailAlreadyUsed;
        UsersEntity user = new UsersEntity();
        user.setEmail(userDto.getEmail());
        user.setPhonenumber(userDto.getPhoneNumber());
        user.setName(userDto.getName());
        user.setSurname(userDto.getSurname());
        usersDao.save(user);
        this.registerAccountWithLogin(userDto.getLogin(), userDto.getPassword(),user);
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

        if(!login.equals(account.getLogin())) account.setLogin(login);

        if(!password.equals(account.getPassword())) account.setPassword(password);

        accountsDao.save(account);

        return Const.userDetailsUpdateSuccess;
    }

    @Override
    public int updateUserDetails(UserDto userDto) {

        Optional<UsersEntity> user = usersDao.findById(userDto.getUserId());
        if(user.isEmpty()) return Const.userDoesNotExit;

        if(userDto.getEmail() != null && !userDto.getEmail().equals(user.get().getEmail()))
        {
            if(usersDao.findByEmail(userDto.getEmail()) != null) return Const.emailAlreadyUsed;
            user.get().setEmail(userDto.getEmail());
        }

        if(userDto.getLogin() != null || userDto.getPassword() != null)
        {
            AccountEntity account = accountsDao.findAccountEntityByUsersByUserid(user.get());
            if(this.updateAccountDetails(userDto.getLogin(), userDto.getPassword(), account) == Const.userDoesNotExit)
                return Const.loginAlreadyUsed;
        }

        if(!userDto.getPhoneNumber().equals(user.get().getPhonenumber()))
            user.get().setPhonenumber(userDto.getPhoneNumber());
        if(!userDto.getName().equals(user.get().getName()))
            user.get().setName(userDto.getName());
        if(!userDto.getSurname().equals(user.get().getSurname()))
            user.get().setSurname(userDto.getSurname());
        usersDao.save(user.get());

        return Const.userDetailsUpdateSuccess;
    }

    @Override
    public UserDto getUserById(int id) {

        UserDto userDto = new UserDto();
        Optional<UsersEntity> user = usersDao.findById(id);
        if(user.isEmpty()) return null;
        userDto.setUserId(user.get().getId());
        userDto.setName(user.get().getName());
        userDto.setSurname(user.get().getSurname());
        userDto.setPhoneNumber(user.get().getPhonenumber());
        userDto.setEmail(user.get().getEmail());
        return userDto;
    }

    @Override
    public UserDto getUserByEmail(String email) {

        UserDto userDto = new UserDto();
        Optional<UsersEntity> user = Optional.ofNullable(usersDao.findByEmail(email));
        if(user.isEmpty()) return null;
        userDto.setUserId(user.get().getId());
        userDto.setName(user.get().getName());
        userDto.setSurname(user.get().getSurname());
        userDto.setPhoneNumber(user.get().getPhonenumber());
        userDto.setEmail(user.get().getEmail());
        return userDto;
    }

    @Override
    public List<UserDto> getUsersByIds(List<Integer> ids) {
        List<UsersEntity> users = usersDao.findAllById(ids);
        List<UserDto> usersDto = new ArrayList<UserDto>();
        UserDto user;
        if(users.isEmpty()) return null;
        for (UsersEntity userEntity: users
             ) {
            user = new UserDto();
            user.setUserId(userEntity.getId());
            user.setName(userEntity.getName());
            user.setSurname(userEntity.getSurname());
            user.setPhoneNumber(userEntity.getPhonenumber());
            user.setEmail(userEntity.getEmail());
            usersDto.add(user);
        }

        return usersDto;
    }

    @Override
    public AccountDto getAccountDto(int id) {
        Optional<AccountEntity> accountEntity = accountsDao.findById(id);
        if(accountEntity.isEmpty()) return null;
        AccountDto account = new AccountDto();
        account.setId(accountEntity.get().getId());
        account.setLogin(accountEntity.get().getLogin());
        account.setUserId(accountEntity.get().getUsersByUserid().getId());
        return account;
    }
}
