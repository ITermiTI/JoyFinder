package org.ownoko.joyfinder.Controllers;

import org.ownoko.joyfinder.Services.Exceptions.EmailAlreadyUsedException;
import org.ownoko.joyfinder.Services.Exceptions.LoginAlreadyUsedException;
import org.ownoko.joyfinder.Services.Exceptions.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class CustomErrorHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({LoginAlreadyUsedException.class, EmailAlreadyUsedException.class})
    public ResponseEntity<ErrorResponse> alreadyUsedHandle(Exception ex, WebRequest request)
    {
        ErrorResponse response = new ErrorResponse(LocalDateTime.now(),
                HttpStatus.NOT_ACCEPTABLE.value(),ex.getMessage());
        return new ResponseEntity<>(response,HttpStatus.NOT_ACCEPTABLE);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> notFoundHandle(Exception ex, WebRequest request)
    {
        ErrorResponse response = new ErrorResponse(LocalDateTime.now(),
                HttpStatus.NOT_FOUND.value(),ex.getMessage());
        return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
    }

}
