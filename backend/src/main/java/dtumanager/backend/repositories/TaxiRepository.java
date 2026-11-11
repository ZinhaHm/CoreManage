package dtumanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dtumanager.backend.entities.Taxi;


public interface TaxiRepository extends JpaRepository<Taxi, Long>{

}
