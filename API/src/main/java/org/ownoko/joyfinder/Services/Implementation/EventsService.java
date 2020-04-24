package org.ownoko.joyfinder.Services.Implementation;


import org.ownoko.joyfinder.Models.EventsDto;
import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.ownoko.joyfinder.Repositories.API.IEventsDao;
import org.ownoko.joyfinder.Repositories.API.IUsersDao;
import org.ownoko.joyfinder.Services.API.IEventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class EventsService implements IEventsService {

    @Autowired
    IEventsDao eventsDao;

    @Autowired
    IUsersDao usersDao;


    @Override
    public ArrayList<EventsEntity> getEventsByCity(String city){
        return eventsDao.findAllByCity(city);
    }

    @Override
    public Optional<EventsEntity> getEventById(int id){
        return eventsDao.findById(id);
    }

    @Override
    public ArrayList<EventsEntity> getEventsByUserId(int id){
        UsersEntity temp = usersDao.getOne(id);
        return eventsDao.findAllByUsersByCreatorid(temp);
    }

    @Override
    public ArrayList<EventsEntity> getAllEvents(){
        return eventsDao.findAll();
    }

    @Override
    public int addEvent(EventsDto event){
        EventsEntity newEvent = new EventsEntity();
        UsersEntity tempUser = usersDao.getOne(event.getCreatorid());

        newEvent.setCity(event.getCity());
        newEvent.setDate(event.getDate());
        newEvent.setLocation(event.getLocation());
        newEvent.setName(event.getName());
        newEvent.setStnumber(event.getStnumber());
        newEvent.setStreet(event.getStreet());
        newEvent.setTime(event.getTime());
        newEvent.setType(event.getType());
        newEvent.setUsersByCreatorid(tempUser);

        EventsEntity temp = eventsDao.save(newEvent);

        return temp.getId();
    }

}
