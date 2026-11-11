package dtumanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dtumanager.backend.entities.Garage;

public interface GarageRepository extends JpaRepository<Garage, Long>{

}
