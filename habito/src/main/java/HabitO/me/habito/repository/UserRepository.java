package HabitO.me.habito.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import HabitO.me.habito.model.User;

public interface UserRepository extends CrudRepository<User, String> {
     Optional<User> findByHabiticaUserId(String habiticaUserId);
     
}
