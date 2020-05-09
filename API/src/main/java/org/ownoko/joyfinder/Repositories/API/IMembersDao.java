package org.ownoko.joyfinder.Repositories.API;


import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Models.MembersEntity;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public interface IMembersDao extends JpaRepository<MembersEntity, Integer> {
    ArrayList<MembersEntity> findAllByUsersByUserid(UsersEntity user);

    ArrayList<MembersEntity> findAllByEventsByEventid(EventsEntity event);

    ArrayList<MembersEntity> findAll();
}
