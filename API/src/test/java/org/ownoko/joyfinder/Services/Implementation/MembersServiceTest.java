package org.ownoko.joyfinder.Services.Implementation;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.ownoko.joyfinder.Models.AccountEntity;
import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Models.MembersEntity;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.ownoko.joyfinder.Repositories.API.IEventsDao;
import org.ownoko.joyfinder.Repositories.API.IMembersDao;
import org.ownoko.joyfinder.Repositories.API.IUsersDao;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
class MembersServiceTest {

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
    void testGetMembersById() {
        when(membersDao.getOne(any())).thenReturn(member);

        MembersEntity testMember = membersService.getMembersById(1);

        assertEquals(member, testMember);
    }

    @Test
    void getMembersByEventId() {
    }

    @Test
    void getMembersByUserId() {
    }

    @Test
    void getAllMembers() {
    }

    @Test
    void addMember() {
    }

    @Test
    void deleteMember() {
    }
}