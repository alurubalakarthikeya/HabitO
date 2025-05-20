package HabitO.me.habito.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF for now (important for POST requests from your static HTML)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/", "/index.html", "/styles.css", "/app.js", "/logowithoutbg.png", 
                    "/api/users/register", "/api/users/login"
                ).permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults()); // Optional: basic auth setup

        return http.build();
    }
}
