package org.ownoko.joyfinder.Models;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "members", schema = "public", catalog = "joyfinder")
@EntityListeners(AuditingEntityListener.class)
public class MembersEntity {
    private int id;
    private EventsEntity eventsByEventid;
    private UsersEntity usersByUserid;

    @Id
    @SequenceGenerator(name="members_id_seq", sequenceName="members_id_seq", allocationSize=1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="members_id_seq")
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MembersEntity that = (MembersEntity) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @ManyToOne
    @JoinColumn(name = "eventid", referencedColumnName = "id", nullable = false)
    public EventsEntity getEventsByEventid() {
        return eventsByEventid;
    }

    public void setEventsByEventid(EventsEntity eventsByEventid) {
        this.eventsByEventid = eventsByEventid;
    }

    @ManyToOne
    @JoinColumn(name = "userid", referencedColumnName = "id", nullable = false)
    public UsersEntity getUsersByUserid() {
        return usersByUserid;
    }

    public void setUsersByUserid(UsersEntity usersByUserid) {
        this.usersByUserid = usersByUserid;
    }
}
