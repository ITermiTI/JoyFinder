package org.ownoko.joyfinder.Repositories.API;


import org.ownoko.joyfinder.Models.EventsEntity;
import org.ownoko.joyfinder.Models.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
@Transactional
public interface IEventsDao extends JpaRepository<EventsEntity, Integer> {

    EventsEntity findEventsEntityByDate(Date date);
    ArrayList<EventsEntity> findAllByCity(String city);
    ArrayList<EventsEntity> findAllByUsersByCreatorid(UsersEntity user);
    ArrayList<EventsEntity> findAll();
    List<EventsEntity> findAllByType(String type);
    List<EventsEntity> findAllByName(String name);

}
