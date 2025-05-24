package HabitO.me.habito.controller;

import HabitO.me.habito.model.User;
import HabitO.me.habito.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class HabiticaAuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest, HttpSession session) {
        String habiticaUserId = loginRequest.getHabiticaUserId();
        String habiticaApiToken = loginRequest.getHabiticaApiToken();

        if (habiticaUserId == null || habiticaApiToken == null) {
            return ResponseEntity.badRequest().body("Missing credentials");
        }

        Optional<User> existingUser = userRepository.findByHabiticaUserId(habiticaUserId);
        User user;
        if (existingUser.isPresent()) {
            user = existingUser.get();
            user.setHabiticaApiToken(habiticaApiToken); 
        } else {
            user = new User();
            user.setHabiticaUserId(habiticaUserId);
            user.setHabiticaApiToken(habiticaApiToken);
        }

        userRepository.save(user);
        session.setAttribute("userId", user.getHabiticaUserId()); 

       
        Map<String, String> response = new HashMap<>();
        response.put("message", "Login successful");
        response.put("userId", user.getHabiticaUserId());

        return ResponseEntity.ok(response);
    }
}
