package org.ownoko.joyfinder.Repositories.API;

import org.ownoko.joyfinder.Models.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface IAccountsDao extends JpaRepository<AccountEntity, Integer> {
}
