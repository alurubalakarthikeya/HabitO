package HabitO.me.habito.dto;

public class HabiticaTaskDTO {
    private String id;
    private String text;
    private String type;
    private boolean completed;

    public HabiticaTaskDTO() {
    }

    public HabiticaTaskDTO(String id, String text, String type, boolean completed) {
        this.id = id;
        this.text = text;
        this.type = type;
        this.completed = completed;
    }

    // Getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
