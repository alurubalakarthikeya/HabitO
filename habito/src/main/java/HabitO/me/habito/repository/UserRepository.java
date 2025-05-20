package HabitO.me.habito.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import HabitO.me.habito.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    boolean existsByUsername(String username);
}
