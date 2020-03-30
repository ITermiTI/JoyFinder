package org.ownoko.joyfinder.Controllers;


import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Repositories.API.IEventsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/events")
public class EventsController {

    @Autowired
    IEventsDao EventsDao;

    @GetMapping
    public ArrayList<EventsEntity> getByCity(@RequestParam String city){
        return EventsDao.findAllByCity(city);
    }

    @PostMapping
    public void addEvent(@RequestBody EventsEntity event){
        EventsDao.save(event);
    }

}
