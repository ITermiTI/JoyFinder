package org.ownoko.joyfinder.Controllers;

import org.ownoko.joyfinder.Models.MembersDto;
import org.ownoko.joyfinder.Models.MembersEntity;
import org.ownoko.joyfinder.Services.API.IMembersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

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

    @GetMapping("/byId/{id}")
    public Optional<MembersEntity> getMembersById(@PathVariable int id){
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
