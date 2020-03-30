package org.ownoko.joyfinder.Repositories.API;


import org.ownoko.joyfinder.Models.EventsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;

@Repository
@Transactional
public interface IEventsDao extends CrudRepository<EventsEntity, Integer> {

    EventsEntity findEventsEntityByDate(Date date);
    ArrayList<EventsEntity> findAllByCity(String city);
}
