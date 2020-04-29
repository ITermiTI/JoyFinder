package org.ownoko.joyfinder.Controllers;

import org.ownoko.joyfinder.Models.EventsDto;
import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Services.Implementation.EventsService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public EventsEntity getById(@PathVariable int id){
        return eventsService.getEventById(id);
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

}
