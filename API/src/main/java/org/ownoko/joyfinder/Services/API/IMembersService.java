package org.ownoko.joyfinder.Services.API;

import org.ownoko.joyfinder.Models.MembersDto;
import org.ownoko.joyfinder.Models.MembersEntity;

import java.util.ArrayList;

public interface IMembersService {
    MembersEntity getMembersById(int id);
    ArrayList<MembersEntity> getMembersByUserId(int id);
    ArrayList<MembersEntity> getMembersByEventId(int id);
    ArrayList<MembersEntity> getAllMembers();
    int addMember(MembersDto member);
    void deleteMember(int id);
}