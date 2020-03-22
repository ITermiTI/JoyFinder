package org.ownoko.joyfinder.Models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

public class UserDetailsImplementation implements UserDetails {

    private String login;
    private String password;
    private SimpleGrantedAuthority authority;
    private AccountEntity accountEntity;

    public UserDetailsImplementation(AccountEntity accountEntity, String role) {

       this.login = accountEntity.getLogin();
       this.password = accountEntity.getPassword();
       this.authority = new SimpleGrantedAuthority(role);
       this.accountEntity = accountEntity;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.asList(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public AccountEntity getUserAccountsEntity() {
        return accountEntity;
    }

    public void setUserAccountsEntity(AccountEntity accountEntity) {
        this.accountEntity = accountEntity;
    }
}
