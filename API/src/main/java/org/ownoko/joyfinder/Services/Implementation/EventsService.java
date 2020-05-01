package org.ownoko.joyfinder.Services.Implementation;


import org.ownoko.joyfinder.Models.EventsDto;
import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.ownoko.joyfinder.Repositories.API.IEventsDao;
import org.ownoko.joyfinder.Repositories.API.IUsersDao;
import org.ownoko.joyfinder.Services.API.IEventsService;
import org.ownoko.joyfinder.Services.Const;
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
    public EventsEntity getEventById(int id){
        return eventsDao.getOne(id);
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

    @Override
    public int updateEvent(EventsDto event) {
        Optional<EventsEntity> eventsEntity = eventsDao.findById(event.getId());
        if(eventsEntity.isEmpty()) return Const.eventDoesNotExist;
        if(!event.getCity().equals(eventsEntity.get().getCity()))
            eventsEntity.get().setCity(event.getCity());
        if(event.getDate() != eventsEntity.get().getDate())
            eventsEntity.get().setDate(event.getDate());
        if(!event.getLocation().equals(eventsEntity.get().getLocation()))
            eventsEntity.get().setLocation(event.getLocation());
        if(!event.getName().equals(eventsEntity.get().getName()))
            eventsEntity.get().setName(event.getName());
        if(!event.getStnumber().equals(eventsEntity.get().getStnumber()))
            eventsEntity.get().setStnumber(event.getStnumber());
        if(!event.getStreet().equals(eventsEntity.get().getStreet()))
            eventsEntity.get().setStreet(event.getStreet());
        if(event.getTime() != eventsEntity.get().getTime())
            eventsEntity.get().setTime(event.getTime());
        if(!event.getType().equals(eventsEntity.get().getType()))
            eventsEntity.get().setType(event.getType());
        if(event.getCreatorid() != eventsEntity.get().getUsersByCreatorid().getId())
        {
            UsersEntity tempUser = usersDao.getOne(event.getCreatorid());
            eventsEntity.get().setUsersByCreatorid(tempUser);
        }
        eventsDao.save(eventsEntity.get());
        return Const.eventUpdateSuccess;
    }

    @Override
    public int deleteEvent(int id) {
        Optional<EventsEntity> event = eventsDao.findById(id);
        if(event.isEmpty()) return Const.eventDoesNotExist;
        eventsDao.deleteById(id);
        return Const.eventDeletionSuccess;
    }

}
