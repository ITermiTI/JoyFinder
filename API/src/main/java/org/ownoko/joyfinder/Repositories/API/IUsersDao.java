package org.ownoko.joyfinder.Repositories.API;

import org.ownoko.joyfinder.Models.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface IUsersDao extends JpaRepository<UsersEntity, Integer> {
    UsersEntity findByEmail(String email);
}
