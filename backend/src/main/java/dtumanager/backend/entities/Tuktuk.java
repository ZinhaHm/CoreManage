package dtumanager.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Tuktuk {

 @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2, max = 100)
    private String nom;

    @NotNull
    @Size(min = 2, max = 100)
    private String telephone;

    @NotNull
    @Size(min = 2, max = 100)
    private String matricule;

    @NotNull
    @Size(min = 2, max = 100)
    private String nserie;

    @NotNull
    @Size(min = 2, max = 100)
    private String wilaya;

    private boolean logo;

    public String getNserie() {
        return nserie;
    }

    public void setNserie(String nserie) {
        this.nserie = nserie;
    }

    public boolean isLogo() {
        return logo;
    }

    public void setLogo(boolean logo) {
        this.logo = logo;
    }

    public Tuktuk() {
    }

    public Tuktuk( String nom, String telephone,String matricule,String nserie, String wilaya, boolean logo) {
        this.nom = nom;
        this.telephone = telephone;
        this.matricule = matricule;
        this.nserie=nserie;
        this.wilaya = wilaya;
        this.logo=logo;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public String getWilaya() {
        return wilaya;
    }

    public void setWilaya(String wilaya) {
        this.wilaya = wilaya;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
   


}
