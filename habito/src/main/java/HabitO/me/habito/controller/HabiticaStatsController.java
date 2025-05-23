package HabitO.me.habito.controller;

import HabitO.me.habito.model.User;
import HabitO.me.habito.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@RestController
@RequestMapping("/api/stats")
public class HabiticaStatsController {

    @Autowired
    private UserRepository userRepository;

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/user")
    public ResponseEntity<?> getUserStats(HttpSession session) {
        String userId = (String) session.getAttribute("userId");
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Not logged in");
        }

        // Now using Habitica ID instead of local DB ID
        Optional<User> userOptional = userRepository.findByHabiticaUserId(userId);
        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        User user = userOptional.get();

        String url = "https://habitica.com/api/v3/members/" + user.getHabiticaUserId();

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-api-user", user.getHabiticaUserId());
        headers.set("x-api-key", user.getHabiticaApiToken());
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                entity,
                String.class
            );
            return ResponseEntity.ok(response.getBody());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Error fetching data from Habitica: " + e.getMessage());
        }
    }
}

