package org.ownoko.joyfinder.Services.Exceptions;


public class LoginAlreadyUsedException extends Exception {
    public LoginAlreadyUsedException(String message){
        super(message);
    }
}
