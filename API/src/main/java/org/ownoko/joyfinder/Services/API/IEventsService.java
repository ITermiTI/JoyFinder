package org.ownoko.joyfinder.Services.API;

import org.ownoko.joyfinder.Models.EventsDto;
import org.ownoko.joyfinder.Models.EventsEntity;

import java.util.ArrayList;
import java.util.Optional;

public interface IEventsService {
    ArrayList<EventsEntity> getEventsByCity(String city);
    Optional<EventsEntity> getEventById(int id);
    ArrayList<EventsEntity> getEventsByUserId(int id);
    ArrayList<EventsEntity> getAllEvents();
    int addEvent(EventsDto event);
}
