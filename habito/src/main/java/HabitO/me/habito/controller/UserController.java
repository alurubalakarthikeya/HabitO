package HabitO.me.habito.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
import HabitO.me.habito.model.User;
import HabitO.me.habito.service.UserService;
@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

     @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userService.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username already taken");
        }
        userService.registerUser(user);
        return ResponseEntity.ok("User registered");
    }

@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
    String username = loginData.get("username");
    String password = loginData.get("password");

    try {
        User user = userService.loginUser(username, password);
        Map<String, Object> body = Map.of(
                "id", user.getUserId(),
                "username", user.getUsername());
        return ResponseEntity.ok(body);
    } catch (RuntimeException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("message", e.getMessage()));
    }
}

    
}
