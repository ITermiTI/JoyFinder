package org.ownoko.joyfinder.Services.Implementation;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Models.MembersDto;
import org.ownoko.joyfinder.Models.MembersEntity;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.ownoko.joyfinder.Repositories.API.IEventsDao;
import org.ownoko.joyfinder.Repositories.API.IMembersDao;
import org.ownoko.joyfinder.Repositories.API.IUsersDao;

import java.lang.reflect.Member;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class MembersServiceTest {

    @Mock
    private IMembersDao membersDao;

    @Mock
    private IUsersDao usersDao;

    @Mock
    private IEventsDao eventsDao;

    @InjectMocks
    private MembersService membersService;

    UsersEntity user;
    EventsEntity event;
    MembersEntity member;

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

        member = new MembersEntity();
        member.setId(1);
        member.setUsersByUserid(user);
        member.setEventsByEventid(event);

    }

    @Test
    public void getMembersById() {
        when(membersDao.getOne(any())).thenReturn(member);

        MembersEntity testMember = membersService.getMembersById(1);

        assertEquals(member, testMember);
    }

    @Test
    public void getMembersByEventId() {
        when(eventsDao.getOne(any())).thenReturn(event);

        ArrayList<MembersEntity> list = new ArrayList<>();
        list.add(member);

        when(membersDao.findAllByEventsByEventid(any())).thenReturn(list);

        ArrayList<MembersEntity> testMember = membersService.getMembersByEventId(1);

        assertEquals(list, testMember);

    }

    @Test
    public void getMembersByUserId() {
        when(usersDao.getOne(any())).thenReturn(user);

        ArrayList<MembersEntity> list = new ArrayList<>();
        list.add(member);

        when(membersDao.findAllByUsersByUserid(any())).thenReturn(list);

        ArrayList<MembersEntity> testMember = membersService.getMembersByUserId(1);

        assertEquals(list, testMember);

    }

    @Test
    public void getAllMembers() {
        ArrayList<MembersEntity> list = new ArrayList<>();
        list.add(member);

        when(membersDao.findAll()).thenReturn(list);

        ArrayList<MembersEntity> testMember = membersService.getAllMembers();

        assertEquals(list, testMember);

    }

    @Test
    public void addMember() {
        when(usersDao.getOne(any())).thenReturn(user);
        when(eventsDao.getOne(any())).thenReturn(event);
        when(membersDao.save(any())).thenReturn(member);

        MembersDto newMember = new MembersDto();

        newMember.setEventId(1);
        newMember.setUserId(1);

        int result = membersService.addMember(newMember);

        assertEquals(1, result);

    }

//    @Test
////    void deleteMember() {
////    }
}