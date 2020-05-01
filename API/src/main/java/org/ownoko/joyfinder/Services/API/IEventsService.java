package org.ownoko.joyfinder.Services.API;

import org.ownoko.joyfinder.Models.EventsDto;
import org.ownoko.joyfinder.Models.EventsEntity;

import java.util.ArrayList;

public interface IEventsService {
    ArrayList<EventsEntity> getEventsByCity(String city);
    EventsEntity getEventById(int id);
    ArrayList<EventsEntity> getEventsByUserId(int id);
    ArrayList<EventsEntity> getAllEvents();
    int addEvent(EventsDto event);
    int updateEvent(EventsDto event);
    int deleteEvent(int id);
}
