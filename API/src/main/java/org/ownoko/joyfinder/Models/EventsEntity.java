package org.ownoko.joyfinder.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "events", schema = "public", catalog = "joyfinder")
@EntityListeners(AuditingEntityListener.class)
public class EventsEntity {
    private int id;
    private String name;
    private String type;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;
    @JsonFormat(pattern="HH:mm")
    private LocalTime time;
    private String city;
    private String location;
    private String street;
    private Integer stnumber;
    private UsersEntity usersByCreatorid;

    @Id
    @SequenceGenerator(name="events_id_seq", sequenceName="events_id_seq", allocationSize=1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="events_id_seq")
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name", nullable = false, length = 80)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "type", nullable = false, length = 40)
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Basic
    @Column(name = "date", nullable = false)
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Basic
    @Column(name = "time", nullable = false)
    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    @Basic
    @Column(name = "city", nullable = false, length = 40)
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Basic
    @Column(name = "location", nullable = false, length = 40)
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Basic
    @Column(name = "street", nullable = true, length = 40)
    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    @Basic
    @Column(name = "stnumber", nullable = true)
    public Integer getStnumber() {
        return stnumber;
    }

    public void setStnumber(Integer stnumber) {
        this.stnumber = stnumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EventsEntity that = (EventsEntity) o;
        return id == that.id &&
                Objects.equals(name, that.name) &&
                Objects.equals(type, that.type) &&
                Objects.equals(date, that.date) &&
                Objects.equals(time, that.time) &&
                Objects.equals(city, that.city) &&
                Objects.equals(location, that.location) &&
                Objects.equals(street, that.street) &&
                Objects.equals(stnumber, that.stnumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, type, date, time, city, location, street, stnumber);
    }

    @OneToOne
    @JoinColumn(name = "creatorid", referencedColumnName = "id", nullable = false)
    public UsersEntity getUsersByCreatorid() {
        return usersByCreatorid;
    }

    public void setUsersByCreatorid(UsersEntity usersByCreatorid) {
        this.usersByCreatorid = usersByCreatorid;
    }


}
