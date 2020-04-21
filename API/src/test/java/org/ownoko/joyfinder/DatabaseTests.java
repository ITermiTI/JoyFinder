package org.ownoko.joyfinder;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.ownoko.joyfinder.Models.AccountEntity;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.ownoko.joyfinder.Repositories.API.IAccountsDao;
import org.ownoko.joyfinder.Repositories.API.IUsersDao;
import org.ownoko.joyfinder.Services.API.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@SpringBootTest
public class DatabaseTests {

    @Autowired
    IAccountsDao accountsDao;

    @Autowired
    IUsersDao usersDao;

    @Test
    public void testGetAccount()
    {
        AccountEntity account = accountsDao.getOne(1);

        assertNotNull(account);
    }

    @Test
    public void testFindEntityByLogin()
    {
        AccountEntity account = accountsDao.findAccountEntityByLogin("Mirekpenia9");

        assertNotNull(account);
    }

    @Test
    public void testGetUserEntity()
    {
        UsersEntity user = usersDao.getOne(1);

        assertNotNull(user);
    }
    @Test
    public void testFindAccountByUserEntity()
    {
        UsersEntity user = usersDao.getOne(1);
        AccountEntity account = accountsDao.findAccountEntityByUsersByUserid(user);

        assertNotNull(account);
    }

    @Test
    public void testFindUserByEmail()
    {
        UsersEntity user = usersDao.findByEmail("stalerzyk12341@gmail.com");

        assertNotNull(user);
    }
}
