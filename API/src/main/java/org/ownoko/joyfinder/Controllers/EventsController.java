package org.ownoko.joyfinder.Controllers;

import org.ownoko.joyfinder.Models.EventsDto;
import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Services.Const;
import org.ownoko.joyfinder.Services.Exceptions.EventNotFoundException;
import org.ownoko.joyfinder.Services.Exceptions.UserNotFoundException;
import org.ownoko.joyfinder.Services.Implementation.EventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventsController {

    @Autowired
    EventsService eventsService;

    @GetMapping("/byCity/{city}")
    public ArrayList<EventsEntity> getByCity(@PathVariable String city){
        return eventsService.getEventsByCity(city);
    }

    @GetMapping("/byType/{type}")
    public List<EventsEntity> getByType(@PathVariable String type){
        return eventsService.getEventsByType(type);
    }
    @GetMapping("/byId/{id}")
    public EventsEntity getById(@PathVariable int id) throws EventNotFoundException {
        EventsEntity event = eventsService.getEventById(id);
        if(event == null) throw new EventNotFoundException("There is no such event");
        return event;
    }


    @GetMapping("/byUserId/{id}")
    public ArrayList<EventsEntity> getByUserId(@PathVariable int id){
        return eventsService.getEventsByUserId(id);
    }

    @GetMapping("/attended/{id}")
    public List<EventsEntity> getAllAttendedEvents(@PathVariable int id){
        return eventsService.getUsersAttendance(id);
    }

    @GetMapping
    public ArrayList<EventsEntity> getAllEvents(){
        return eventsService.getAllEvents();
    }

    @PostMapping
    public int addEvent(@RequestBody EventsDto event){
        return eventsService.addEvent(event);
    }

    @PutMapping("/updateEvent")
    @ResponseStatus(HttpStatus.OK)
    public void updateEvent(@RequestBody EventsDto event) throws EventNotFoundException {
        int result = eventsService.updateEvent(event);
        if(result == Const.eventDoesNotExist)
            throw new EventNotFoundException("There is no such event");
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEvent(@PathVariable int id) throws EventNotFoundException {
        int result = eventsService.deleteEvent(id);
        if(result == Const.eventDoesNotExist)
            throw new EventNotFoundException("There is no such event");
    }

    @GetMapping("/sorted/attended/{sortType}/{id}")
    public List<EventsEntity> getSortedByUserAttendance(@PathVariable("id") int userID, @PathVariable String sortType) throws UserNotFoundException, EventNotFoundException {
        List<EventsEntity> events = eventsService.getSortedByUserAttendance(userID,sortType);
        if(events == null) throw new UserNotFoundException("There is no such user");
        if(events.size() == 0) throw new EventNotFoundException("No events found");
        return events;
    }

    @GetMapping("/sorted/byCity/{city}/{sortType}")
    public List<EventsEntity> getSortedByCity(@PathVariable("city") String city, @PathVariable("sortType") String sortType) throws EventNotFoundException {
        List<EventsEntity> events = eventsService.getSortedByCity(city,sortType);
        if(events.size() == 0) throw new EventNotFoundException("No events found");
        return events;
    }

    @GetMapping("/sorted/byType/{type}/{sortType}")
    public List<EventsEntity> getSortedByEventType(@PathVariable("type") String type, @PathVariable("sortType") String sortType) throws EventNotFoundException {
        List<EventsEntity> events = eventsService.getSortedByEventType(type,sortType);
        if(events.size() == 0) throw new EventNotFoundException("No events found");
        return events;
    }

    @GetMapping("/sorted/created/{sortType}/{id}")
    public List<EventsEntity> getSortedByCreated(@PathVariable("id") int id, @PathVariable("sortType") String sortType) throws EventNotFoundException, UserNotFoundException {
        List<EventsEntity> events = eventsService.getSortedByCreated(id,sortType);
        if(events == null) throw new UserNotFoundException("There is no such user");
        if(events.size() == 0) throw new EventNotFoundException("No events found");
        return events;
    }

}
