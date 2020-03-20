package org.ownoko.joyfinder;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.ownoko.joyfinder.Models.AccountEntity;
import org.ownoko.joyfinder.Repositories.API.IAccountsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@SpringBootTest
public class DatabaseTests {

    @Autowired
    IAccountsDao accountsDao;

    @Test
    public void testGetAccount()
    {
        AccountEntity account = accountsDao.getOne(1);

        assertNotNull(account);
    }
}
