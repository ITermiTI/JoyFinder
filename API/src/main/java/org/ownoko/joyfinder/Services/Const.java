package org.ownoko.joyfinder.Services;

public final class Const {
    private Const() {}

    //Positive result
    public static final int registrationSuccess = 0;
    public static final int userDetailsUpdateSuccess = 0;
    public static final int userDeletionSuccess = 0;
    public static final int eventDeletionSuccess = 0;
    public static final int eventUpdateSuccess = 0;

    //Error codes
    public static final int emailAlreadyUsed = 1;
    public static final int loginAlreadyUsed = 2;
    public static final int userDoesNotExit = 3;
    public static final int eventDoesNotExist = 3;
}
