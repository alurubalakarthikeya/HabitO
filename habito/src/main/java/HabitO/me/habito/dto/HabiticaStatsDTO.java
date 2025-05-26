package HabitO.me.habito.dto;

public class HabiticaStatsDTO {
    private String name;
    private int level;
    private double hp;
    private double mp;
    private double exp;
    private double gp;
    private double maxHealth;
    private double maxMP;

    public HabiticaStatsDTO(String name, int level, double hp, double mp, double exp, double gp, double maxHealth, double maxMP) {
        this.name = name;
        this.level = level;
        this.hp = hp;
        this.mp = mp;
        this.exp = exp;
        this.gp = gp;
        this.maxHealth = maxHealth;
        this.maxMP = maxMP;
    }

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getLevel() { return level; }
    public void setLevel(int level) { this.level = level; }

    public double getHp() { return hp; }
    public void setHp(double hp) { this.hp = hp; }

    public double getMp() { return mp; }
    public void setMp(double mp) { this.mp = mp; }

    public double getExp() { return exp; }
    public void setExp(double exp) { this.exp = exp; }

    public double getGp() { return gp; }
    public void setGp(double gp) { this.gp = gp; }

    public double getMaxHealth() { return maxHealth; }
    public void setMaxHealth(double maxHealth) { this.maxHealth = maxHealth; }

    public double getMaxMP() { return maxMP; }
    public void setMaxMP(double maxMP) { this.maxMP = maxMP; }
}
