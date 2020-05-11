package org.ownoko.joyfinder.Services.Implementation;

import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Models.MembersDto;
import org.ownoko.joyfinder.Models.MembersEntity;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.ownoko.joyfinder.Repositories.API.IEventsDao;
import org.ownoko.joyfinder.Repositories.API.IMembersDao;
import org.ownoko.joyfinder.Repositories.API.IUsersDao;
import org.ownoko.joyfinder.Services.API.IMembersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MembersService implements IMembersService {

    @Autowired
    IMembersDao membersDao;

    @Autowired
    IEventsDao eventsDao;

    @Autowired
    IUsersDao usersDao;

    @Override
    public MembersEntity getMembersById(int id){
        return membersDao.getOne(id);
    }

    @Override
    public ArrayList<MembersEntity> getMembersByEventId(int id){
        EventsEntity temp = eventsDao.getOne(id);
        return membersDao.findAllByEventsByEventid(temp);
    }

    @Override
    public ArrayList<MembersEntity> getMembersByUserId(int id){
        UsersEntity temp = usersDao.getOne(id);
        return membersDao.findAllByUsersByUserid(temp);
    }

    @Override
    public ArrayList<MembersEntity> getAllMembers(){
        return membersDao.findAll();
    }


    @Override
    public int addMember(MembersDto member){
        MembersEntity newMember = new MembersEntity();

        EventsEntity event = eventsDao.getOne(member.getEventId());
        UsersEntity user = usersDao.getOne(member.getUserId());

        newMember.setEventsByEventid(event);
        newMember.setUsersByUserid(user);

        MembersEntity temp = membersDao.save(newMember);
        return temp.getId();
    }

    @Override
    public void deleteMember(int id){
        membersDao.deleteById(id);
    }

}
