package org.ownoko.joyfinder.Services.Exceptions;

public class EmailAlreadyUsedException extends Exception {
    public EmailAlreadyUsedException(String message){
        super(message);
    }
}
