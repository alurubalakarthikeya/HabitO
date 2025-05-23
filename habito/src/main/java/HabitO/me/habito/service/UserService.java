package HabitO.me.habito.service;

import HabitO.me.habito.model.User;
import HabitO.me.habito.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> findByHabiticaUserId(String habiticaUserId) {
        return userRepository.findByHabiticaUserId(habiticaUserId);
    }
}
