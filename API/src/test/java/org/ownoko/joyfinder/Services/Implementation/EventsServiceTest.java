package org.ownoko.joyfinder.Services.Implementation;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.ownoko.joyfinder.Models.*;
import org.ownoko.joyfinder.Repositories.API.IEventsDao;
import org.ownoko.joyfinder.Repositories.API.IMembersDao;
import org.ownoko.joyfinder.Repositories.API.IUsersDao;

import java.lang.reflect.Member;
import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class EventsServiceTest {

    @Mock
    private IUsersDao usersDao;

    @Mock
    private IEventsDao eventsDao;

    @InjectMocks
    private EventsService eventsService;

    UsersEntity user;
    EventsEntity event;

    @Before
    public void setUp()
    {
        MockitoAnnotations.initMocks(this);
        user = new UsersEntity();
        user.setName("Damian");
        user.setSurname("Damian");
        user.setPhonenumber("123123123");
        user.setEmail("widly@lublopata.ro");
        user.setId(1);

        event = new EventsEntity();
        event.setId(1);
        event.setUsersByCreatorid(user);
        event.setType("Spotkanko");
        event.setName("Herbatka u Tadka");
        event.setCity("Wrocław");
        event.setDate(Date.valueOf(LocalDate.now().minusDays(1)));

    }

    @Test
    public void getEventsByCity() {
        ArrayList<EventsEntity> list = new ArrayList<>();
        list.add(event);

        when(eventsDao.findAllByCity(any(String.class))).thenReturn(list);

        ArrayList<EventsEntity> testEvents = eventsService.getEventsByCity("Jakiesmiasto");

        assertEquals(list, testEvents);

    }

    @Test
    public void getEventById() {
        when(eventsDao.getOne(any())).thenReturn(event);

        EventsEntity testEvent = eventsService.getEventById(1);

        assertEquals(event, testEvent);
    }

    @Test
    public void getEventsByUserId() {
        ArrayList<EventsEntity> list = new ArrayList<>();
        list.add(event);

        when(usersDao.getOne(any())).thenReturn(user);
        when(eventsDao.findAllByUsersByCreatorid(any())).thenReturn(list);

        ArrayList<EventsEntity> testEvents = eventsService.getEventsByUserId(1);

        assertEquals(list, testEvents);
    }

    @Test
    public void getAllEvents() {
        ArrayList<EventsEntity> list = new ArrayList<>();
        list.add(event);

        when(eventsDao.findAll()).thenReturn(list);

        ArrayList<EventsEntity> testEvents = eventsService.getAllEvents();

        assertEquals(list, testEvents);
    }

    @Test
    public void addEvent() {
        when(usersDao.getOne(any())).thenReturn(user);
        when(eventsDao.save(any())).thenReturn(event);

        EventsDto newEvent = new EventsDto();

        newEvent.setCity("Wozniki");
        newEvent.setCreatorid(1);
        newEvent.setName("Piwerko na altanie");
        newEvent.setType("Alkoholizacja");

        int result = eventsService.addEvent(newEvent);

        assertEquals(1, result);
    }

    @Test
    public void testSortToday() {
        EventsEntity eventOne = event;

        EventsEntity eventTwo = new EventsEntity();
        eventTwo.setDate(Date.valueOf(LocalDate.now().minusDays(0)));

        List<EventsEntity> events = new ArrayList<>();
        events.add(eventOne);
        events.add(eventTwo);

        List<EventsEntity> sorted = eventsService.sortByToday(events);
        assertEquals(sorted.size(),1);
    }
}