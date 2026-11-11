package dtumanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dtumanager.backend.entities.Carte;

public interface CarteRepository  extends JpaRepository<Carte, Long>{

}
