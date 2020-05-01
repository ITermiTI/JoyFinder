package org.ownoko.joyfinder.Controllers;

import org.ownoko.joyfinder.Models.EventsDto;
import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Services.Const;
import org.ownoko.joyfinder.Services.Exceptions.EventNotFoundException;
import org.ownoko.joyfinder.Services.Implementation.EventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/events")
public class EventsController {

    @Autowired
    EventsService eventsService;

    @GetMapping("/byCity/{city}")
    public ArrayList<EventsEntity> getByCity(@PathVariable String city){
        return eventsService.getEventsByCity(city);
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

}
