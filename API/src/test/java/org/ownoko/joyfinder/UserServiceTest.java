package org.ownoko.joyfinder;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.ownoko.joyfinder.Models.AccountDto;
import org.ownoko.joyfinder.Models.AccountEntity;
import org.ownoko.joyfinder.Models.UserDto;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.ownoko.joyfinder.Repositories.API.IAccountsDao;
import org.ownoko.joyfinder.Repositories.API.IUsersDao;
import org.ownoko.joyfinder.Services.Const;
import org.ownoko.joyfinder.Services.Implementation.UsersService;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {


    @Mock
    private IUsersDao usersDao;
    @Mock
    private IAccountsDao accountsDao;
    @InjectMocks
    private UsersService userService;

    UsersEntity user;
    AccountEntity account;
    UserDto userDto;

    @Before
    public void setUp()
    {
        MockitoAnnotations.initMocks(this);
        user = new UsersEntity();
        user.setName("Damian");
        user.setSurname("Damian");
        user.setPhonenumber("123123123");
        user.setEmail("widly@lublopata.ro");

        account = new AccountEntity();
        account.setLogin("logindamian");
        account.setPassword("123");
        account.setUsersByUserid(user);

        userDto = new UserDto();
        userDto.setEmail("widly@lublopata.ro");
        userDto.setLogin("logindamian");
        userDto.setPassword("123");
        userDto.setName("Damian");
        userDto.setSurname("Damian");
        userDto.setPhoneNumber("123123123");
        userDto.setAccountId(1);
        userDto.setUserId(1);


    }

    @Test
    public void testRegisterNewUser()
    {
        when(accountsDao.findAccountEntityByLogin(any(String.class))).thenReturn(null);
        when(usersDao.findByEmail(any())).thenReturn(null);
        when(usersDao.save(any())).thenReturn(user);
        when(accountsDao.save(any(AccountEntity.class))).thenReturn(account);

        int result = userService.registerNewUser(userDto);

        assertEquals(result, Const.registrationSuccess);
    }

    @Test
    public void testRegisterWithExistingEmail()
    {
        when(accountsDao.findAccountEntityByLogin(any(String.class))).thenReturn(null);
        when(usersDao.findByEmail(any())).thenReturn(user);

        int result = userService.registerNewUser(userDto);

        assertEquals(result, Const.emailAlreadyUsed);
    }

    @Test
    public void testRegisterWithExistingLogin()
    {
        when(accountsDao.findAccountEntityByLogin(any())).thenReturn(account);

        int result = userService.registerNewUser(userDto);

        assertEquals(result, Const.loginAlreadyUsed);
    }

    @Test
    public void testUpdateUserDetails()
    {
        when(accountsDao.findAccountEntityByLogin(any())).thenReturn(account);
        when(accountsDao.findAccountEntityByUsersByUserid(any())).thenReturn(account);
        when(usersDao.getOne(any())).thenReturn(user);
        when(usersDao.save(any())).thenReturn(user);

        int result = userService.updateUserDetails(userDto);

        assertEquals(result, Const.userDetailsUpdateSuccess);
    }

    @Test
    public void testUpdateUserDetailsWithExistingEmail()
    {
        when(usersDao.findByEmail(any())).thenReturn(user);
        when(usersDao.getOne(any())).thenReturn(user);

        int result = userService.updateUserDetails(userDto);

        assertEquals(result, Const.emailAlreadyUsed);
    }

    @Test
    public void testUpdateUserDetailsNonExistingUser()
    {
        when(usersDao.getOne(any())).thenReturn(null);

        int result = userService.updateUserDetails(userDto);

        assertEquals(result, Const.userDoesNotExit);
    }

    @Test
    public void testUpdateUserDetailsWithExistingLogin()
    {
        when(usersDao.findByEmail(any())).thenReturn(user);
        when(usersDao.getOne(any())).thenReturn(user);

        int result = userService.updateUserDetails(userDto);

        assertEquals(result, Const.emailAlreadyUsed);
    }


    @Test
    public void testDeleteUser()
    {
        when(accountsDao.findAccountEntityByUsersByUserid(any())).thenReturn(account);
        when(usersDao.getOne(any())).thenReturn(user);

        int result = userService.deleteUser(1);

        assertEquals(Const.userDeletionSuccess,result);
    }

    @Test
    public void testDeleteNonExistingUser()
    {
        when(usersDao.getOne(any())).thenReturn(null);

        int result = userService.deleteUser(1);

        assertEquals(Const.userDoesNotExit,result);
    }

    @Test
    public void testGetUserById()
    {
        when(usersDao.getOne(any())).thenReturn(user);

        UserDto testUser = userService.getUserById(1);

        assertEquals(user, testUser);
    }

    @Test
    public void testGetUserByEmail()
    {
        when(usersDao.findByEmail(any())).thenReturn(user);

        UserDto testUser = userService.getUserByEmail("jakis");

        assertEquals(user, testUser);
    }

    @Test
    public void testGetUsersByIds()
    {
        when(usersDao.findAllById(any())).thenReturn(Arrays.asList(user));

        List<UserDto> testUser = userService.getUsersByIds(Arrays.asList(1));

        assertEquals(Arrays.asList(user), testUser);
    }

    @Test
    public void testGetAccountDto()
    {
        when(accountsDao.getOne(any())).thenReturn(account);

        AccountDto testAccount = userService.getAccountDto(1);

        assertNotNull(testAccount);
    }



}
