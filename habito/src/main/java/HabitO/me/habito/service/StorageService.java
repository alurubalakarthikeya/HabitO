package HabitO.me.habito.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import HabitO.me.habito.dto.HabiticaStatsDTO;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

@Service
public class StorageService {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final String STORAGE_DIR = "storage";

    public void saveStats(HabiticaStatsDTO stats) {
        try {
            File dir = new File(STORAGE_DIR);
            if (!dir.exists()) dir.mkdirs();

            File file = new File(dir, stats.getId() + ".json");
            objectMapper.writeValue(file, stats);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public HabiticaStatsDTO getStats(String id) {
        try {
            File file = new File(STORAGE_DIR + "/" + id + ".json");
            if (file.exists()) {
                return objectMapper.readValue(file, HabiticaStatsDTO.class);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}

