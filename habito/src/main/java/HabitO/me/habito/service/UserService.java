package HabitO.me.habito.service;

import HabitO.me.habito.model.User;
import HabitO.me.habito.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ✅ Register user with encoded password
    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("USER"); // default role
        return userRepository.save(user);
    }

    // ✅ Check if username already exists
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    // ✅ Check login credentials
    public boolean authenticate(String username, String rawPassword) {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        if (optionalUser.isEmpty()) {
            return false;
        }

        User user = optionalUser.get();
        return passwordEncoder.matches(rawPassword, user.getPassword());
    }

    // ✅ Return user by username
    public User findByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User loginUser(String username, String rawPassword) {
    Optional<User> optionalUser = userRepository.findByUsername(username);
    if (optionalUser.isEmpty()) {
        throw new RuntimeException("User not found");
    }

    User user = optionalUser.get();
    if (passwordEncoder.matches(rawPassword, user.getPassword())) {
        return user;
    } else {
        throw new RuntimeException("Invalid credentials");
    }
}
}