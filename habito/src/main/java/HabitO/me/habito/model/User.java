package HabitO.me.habito.model;

import jakarta.persistence.*;

@Entity
@Table(name = "USER_CREDS")
public class User {

    @Id
    @Column(name = "USER_ID", nullable = false, unique = true, length = 40)
    private String habiticaUserId;

    @Column(name = "USER_API_KEY", nullable = false, unique = true, length = 40)
    private String habiticaApiToken;

    // Constructors
    public User() {}

    public User(String habiticaUserId, String habiticaApiToken) {
        this.habiticaUserId = habiticaUserId;
        this.habiticaApiToken = habiticaApiToken;
    }

    // Getters and Setters
    public String getHabiticaUserId() {
        return habiticaUserId;
    }

    public void setHabiticaUserId(String habiticaUserId) {
        this.habiticaUserId = habiticaUserId;
    }

    public String getHabiticaApiToken() {
        return habiticaApiToken;
    }

    public void setHabiticaApiToken(String habiticaApiToken) {
        this.habiticaApiToken = habiticaApiToken;
    }
}
