package org.ownoko.joyfinder.Services.Implementation;


import org.ownoko.joyfinder.Models.EventsDto;
import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Models.MembersEntity;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.ownoko.joyfinder.Repositories.API.IEventsDao;
import org.ownoko.joyfinder.Repositories.API.IMembersDao;
import org.ownoko.joyfinder.Repositories.API.IUsersDao;
import org.ownoko.joyfinder.Services.API.IEventsService;
import org.ownoko.joyfinder.Services.Const;
import org.ownoko.joyfinder.Services.SortType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EventsService implements IEventsService {

    @Autowired
    IEventsDao eventsDao;

    @Autowired
    IUsersDao usersDao;

    @Autowired
    IMembersDao membersDao;


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
        Optional<UsersEntity> temp = usersDao.findById(id);
        if(temp.isEmpty()) return null;
        return eventsDao.findAllByUsersByCreatorid(temp.get());
    }

    @Override
    public ArrayList<EventsEntity> getAllEvents(){
        return eventsDao.findAll();
    }

    @Override
    public List<EventsEntity> getEventsByType(String type) {
        return eventsDao.findAllByType(type);
    }

    @Override
    public List<EventsEntity> getEventsByName(String name) {
        return eventsDao.findAllByName(name);
    }

    @Override
    public List<EventsEntity> getUsersAttendance(int id) {
        List<Integer> ids = new ArrayList<>();
        Optional<UsersEntity> user = usersDao.findById(id);
        if(user.isEmpty()) return null;
        List<MembersEntity> userMembership = membersDao.findAllByUsersByUserid(user.get());
        for (MembersEntity membership: userMembership
        ) {
            ids.add(membership.getId());
        }
        return eventsDao.findAllById(ids);
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
        membersDao.deleteAllByEventsByEventid(event);
        eventsDao.deleteById(id);
        return Const.eventDeletionSuccess;
    }

    @Override
    public List<EventsEntity> getSortedByUserAttendance(int id, String sortType) {
        List<EventsEntity> sortedEvents;

        List<EventsEntity> usersEvents = getUsersAttendance(id);
        if(usersEvents == null) return null;
        sortedEvents = chooseSort(sortType, usersEvents);

        return sortedEvents;
    }



    @Override
    public List<EventsEntity> getSortedByCity(String city, String sortType) {
        List<EventsEntity> sortedEvents;

        String checkedCity = city.replace("%20"," ");

        List<EventsEntity> eventsInCity = getEventsByCity(checkedCity);
        sortedEvents = chooseSort(sortType, eventsInCity);

        return sortedEvents;
    }

    @Override
    public List<EventsEntity> getSortedByEventType(String type, String sortType) {
        List<EventsEntity> sortedEvents;

        String checkedType = type.replace("%20"," ");
        List<EventsEntity> eventsInType = getEventsByType(checkedType);
        sortedEvents = chooseSort(sortType, eventsInType);

        return sortedEvents;
    }

    @Override
    public List<EventsEntity> getSortedByCreated(int id, String sortType) {
        List<EventsEntity> sortedEvents;

        List<EventsEntity> createdEvents = getEventsByUserId(id);
        if(createdEvents == null) return null;
        sortedEvents = chooseSort(sortType, createdEvents);

        return sortedEvents;
    }





    @Override
    public List<EventsEntity> sortByToday(List<EventsEntity> events) {
        List<EventsEntity> sorted = new ArrayList<>();
        for (EventsEntity event: events
             ) {
            if(event.getDate().toLocalDate().equals(LocalDate.now()))
                sorted.add(event);
        }
        return sorted;
    }

    @Override
    public List<EventsEntity> sortByThisWeek(List<EventsEntity> events) {
        List<EventsEntity> sorted = new ArrayList<>();
        for (EventsEntity event: events
        ) {
            if(event.getDate().toLocalDate().isBefore(LocalDate.now().plusDays(7)) &&
            event.getDate().toLocalDate().isAfter(LocalDate.now().minusDays(1)))
                sorted.add(event);
        }
        return sorted;
    }

    @Override
    public List<EventsEntity> sortByThisMonth(List<EventsEntity> events) {
        List<EventsEntity> sorted = new ArrayList<>();
        for (EventsEntity event: events
        ) {
            if(event.getDate().toLocalDate().isBefore(LocalDate.now().plusDays(30)) &&
                    event.getDate().toLocalDate().isAfter(LocalDate.now().minusDays(1)))
            sorted.add(event);
        }
        return sorted;
    }

    @Override
    public List<EventsEntity> sortByPast(List<EventsEntity> events) {
        List<EventsEntity> sorted = new ArrayList<>();
        for (EventsEntity event: events
        ) {
            if(event.getDate().toLocalDate().isBefore(LocalDate.now()))
            sorted.add(event);
        }
        return sorted;
    }

    @Override
    public List<EventsEntity> sortByThisYear(List<EventsEntity> events) {
        List<EventsEntity> sorted = new ArrayList<>();
        for (EventsEntity event: events
        ) {
            if(event.getDate().toLocalDate().isBefore(LocalDate.now().plusDays(365)) &&
                    event.getDate().toLocalDate().isAfter(LocalDate.now().minusDays(1)))
            sorted.add(event);
        }
        return sorted;
    }

    private List<EventsEntity> chooseSort(String sortType,  List<EventsEntity> events) {
        List<EventsEntity> sortedEvents = null;
        if(sortType.equals(SortType.Today.toString())) sortedEvents = sortByToday(events);
        if(sortType.equals(SortType.ThisWeek.toString())) sortedEvents = sortByThisWeek(events);
        if(sortType.equals(SortType.ThisMonth.toString())) sortedEvents = sortByThisMonth(events);
        if(sortType.equals(SortType.Past.toString())) sortedEvents = sortByPast(events);
        if(sortType.equals(SortType.ThisYear.toString())) sortedEvents = sortByThisYear(events);
        return sortedEvents;
    }

}
