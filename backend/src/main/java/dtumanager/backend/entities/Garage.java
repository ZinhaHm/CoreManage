package dtumanager.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Garage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2, max = 100)
    private String nomg;

    @NotNull
    @Size(min = 2, max = 100)
    private String ligne;

    @NotNull
    @Size(min = 2, max = 100)
    private String code;

    @NotNull
    @Size(min = 2, max = 100)
    private String nvoitures;

    @NotNull
    @Size(min = 2, max = 100)
    private String federation;

    @NotNull
    @Size(min = 2, max = 100)
    private String wilaya;

    @NotNull
    @Size(min = 2, max = 100)
    private String moughata;

    @NotNull
    @Size(min = 2, max = 100)
    private String commune;

    @NotNull
    @Size(min = 2, max = 100)
    private String nomr;

    @NotNull
    @Size(min = 2, max = 100)
    private String nnir;

    @NotNull
    @Size(min = 2, max = 100)
    private String telephoner;


    
    public Garage() {
    }
    
    public Garage(String nomg, String ligne,String code, String nvoitures,String federation,
      String wilaya,String moughata, String commune,String nomr,String nnir,String telephoner) {
        this.nomg = nomg;
        this.ligne = ligne;
        this.code = code;
        this.nvoitures = nvoitures;
        this.federation = federation;
        this.wilaya = wilaya;
        this.moughata = moughata;
        this.commune = commune;
        this.nomr = nomr;
        this.nnir = nnir;
        this.telephoner = telephoner;
    }

    public String getNomg() {
        return nomg;
    }
    public void setNomg(String nomg) {
        this.nomg = nomg;
    }
    public String getLigne() {
        return ligne;
    }
    public void setLigne(String ligne) {
        this.ligne = ligne;
    }
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
    public String getNvoitures() {
        return nvoitures;
    }
    public void setNvoitures(String nvoitures) {
        this.nvoitures = nvoitures;
    }
    public String getFederation() {
        return federation;
    }
    public void setFederation(String federation) {
        this.federation = federation;
    }
    public String getWilaya() {
        return wilaya;
    }
    public void setWilaya(String wilaya) {
        this.wilaya = wilaya;
    }
    public String getMoughata() {
        return moughata;
    }
    public void setMoughata(String moughata) {
        this.moughata = moughata;
    }
    public String getCommune() {
        return commune;
    }
    public void setCommune(String commune) {
        this.commune = commune;
    }
    public String getNomr() {
        return nomr;
    }
    public void setNomr(String nomr) {
        this.nomr = nomr;
    }
    public String getNnir() {
        return nnir;
    }
    public void setNnir(String nnir) {
        this.nnir = nnir;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTelephoner() {
        return telephoner;
    }
    public void setTelephoner(String telephoner) {
        this.telephoner = telephoner;
    }

    


}
