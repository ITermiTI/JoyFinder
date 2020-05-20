package org.ownoko.joyfinder.Controllers;

import org.ownoko.joyfinder.Models.MembersDto;
import org.ownoko.joyfinder.Models.MembersEntity;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.ownoko.joyfinder.Services.API.IEventsService;
import org.ownoko.joyfinder.Services.API.IMembersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/members")
public class MembersController {

    @Autowired
    IMembersService membersService;

    @GetMapping
    public ArrayList<MembersEntity> getAllMembers(){
        return membersService.getAllMembers();
    }

    @GetMapping("/byEventId/{id}")
    public ArrayList<MembersEntity> getMembersByEventId(@PathVariable int id){
        return membersService.getMembersByEventId(id);
    }

    @GetMapping("/byUserId/{id}")
    public ArrayList<MembersEntity> getMembersByUserId(@PathVariable int id){
       return membersService.getMembersByUserId(id);
    }

    @GetMapping("/checkIfUserParticipate/{userId}/{eventId}")
    public boolean checkIfUserParticipate(@PathVariable("userId") int userId, @PathVariable("eventId") int eventId){
        boolean userParticipate = false;
        List<MembersEntity> eventMembers = membersService.getMembersByEventId(eventId);
        List<MembersEntity> userMemberships = membersService.getMembersByUserId(userId);
        for (MembersEntity member: eventMembers
             ) {
            for(MembersEntity membership : userMemberships){
                if(member.getId() == membership.getId()) userParticipate=true;
            }
        }
        return userParticipate;
    }

    @GetMapping("/byId/{id}")
    public MembersEntity getMembersById(@PathVariable int id){
        return membersService.getMembersById(id);
    }

    @PostMapping
    public int addMember(@RequestBody MembersDto member){
        return membersService.addMember(member);
    }

    @DeleteMapping("/{id}")
    public void deleteMember(@PathVariable int id){
        membersService.deleteMember(id);
    }

}
