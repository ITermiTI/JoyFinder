package org.ownoko.joyfinder.Services.API;

import org.ownoko.joyfinder.Models.EventsDto;
import org.ownoko.joyfinder.Models.EventsEntity;

import java.util.ArrayList;
import java.util.List;

public interface IEventsService {
    ArrayList<EventsEntity> getEventsByCity(String city);
    EventsEntity getEventById(int id);
    ArrayList<EventsEntity> getEventsByUserId(int id);
    ArrayList<EventsEntity> getAllEvents();
    List<EventsEntity> getEventsByType(String type);
    List<EventsEntity> getEventsByName(String name);
    List<EventsEntity> getUsersAttendance(int id);
    int addEvent(EventsDto event);
    int updateEvent(EventsDto event);
    int deleteEvent(int id);


    List<EventsEntity> getSortedByUserAttendance(int id, String sortType);
    List<EventsEntity> getSortedByCity(String city, String sortType);
    List<EventsEntity> getSortedByEventType(String type, String sortType);
    List<EventsEntity> getSortedByCreated(int id, String sortType);


    List<EventsEntity> sortByToday(List<EventsEntity> events);
    List<EventsEntity> sortByThisWeek(List<EventsEntity> events);
    List<EventsEntity> sortByThisMonth(List<EventsEntity> events);
    List<EventsEntity> sortByPast(List<EventsEntity> events);
    List<EventsEntity> sortByThisYear(List<EventsEntity> events);
}
