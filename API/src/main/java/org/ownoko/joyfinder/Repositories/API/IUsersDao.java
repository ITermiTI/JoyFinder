package org.ownoko.joyfinder.Repositories.API;

import org.ownoko.joyfinder.Models.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsersDao extends JpaRepository<UsersEntity, Integer> {
    UsersEntity findByEmail(String email);
}
