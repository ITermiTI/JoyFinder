package org.ownoko.joyfinder.Services.Implementation;

import org.ownoko.joyfinder.Models.AccountEntity;
import org.ownoko.joyfinder.Models.UserDetailsImplementation;
import org.ownoko.joyfinder.Repositories.API.IAccountsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImplementation implements UserDetailsService {

    @Autowired
    IAccountsDao userAccountsDao;
    @Override
    public UserDetails loadUserByUsername(String userLogin) throws UsernameNotFoundException {
        AccountEntity user = userAccountsDao.findAccountEntityByLogin(userLogin);
        if (user == null) {
            throw new UsernameNotFoundException("There is no user with login: " + userLogin);
        }
        return new UserDetailsImplementation(user,"USER");
    }
}
