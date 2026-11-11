package dtumanager.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;


@Entity
public class Taxi {

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
    private String federation;

    
    @NotNull
    @Size(min = 2, max = 100)
    private String garage;

    @NotNull
    @Size(min = 2, max = 100)
    private String nserie;

    @NotNull
    @Size(min = 2, max = 100)
    private String wilaya;

    
    
    public Taxi( String nom, String telephone, String matricule, String federation,
             String garage, String nserie, String wilaya) {
        this.nom = nom;
        this.telephone = telephone;
        this.matricule = matricule;
        this.federation = federation;
        this.garage = garage;
        this.nserie = nserie;
        this.wilaya = wilaya;
    }

    public Taxi() {
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

    public String getFederation() {
        return federation;
    }

    public void setFederation(String federation) {
        this.federation = federation;
    }

    public String getGarage() {
        return garage;
    }

    public void setGarage(String garage) {
        this.garage = garage;
    }

    public String getNserie() {
        return nserie;
    }

    public void setNserie(String nserie) {
        this.nserie = nserie;
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
