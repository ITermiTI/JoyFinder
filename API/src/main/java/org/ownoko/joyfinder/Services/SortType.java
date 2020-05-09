package org.ownoko.joyfinder.Services;

public enum SortType {
    Today("Today"),
    ThisWeek("ThisWeek"),
    ThisMonth("ThisMonth"),
    Past("Past"),
    ThisYear("ThisYear");

    private String sortType;

    SortType(String sortType){
        this.sortType=sortType;
    }

    public String getSortType() {
        return sortType;
    }


    @Override
    public String toString() {
        return sortType;
    }
}
