package dtumanager.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dtumanager.backend.entities.Taxi;
import dtumanager.backend.repositories.TaxiRepository;

@Service
public class TaxiService {

     @Autowired
    private TaxiRepository taxiRepository;

       
    @Transactional
    public List<Taxi> getAllTaxis() {
        return taxiRepository.findAll();
    }

    @Transactional
    public Taxi getTaxikById(Long id) {
        return taxiRepository.findById(id).orElse(null);
    }

    @Transactional
    public Taxi updateTaxi(Long id, Taxi updatedTaxi) {
        // Check if the carte exists
        return taxiRepository.findById(id).map(taxi -> {
            taxi.setNom(updatedTaxi.getNom());
            taxi.setTelephone(updatedTaxi.getTelephone());
            taxi.setMatricule(updatedTaxi.getMatricule());
            taxi.setFederation(updatedTaxi.getFederation());
            taxi.setGarage(updatedTaxi.getGarage());
            taxi.setNserie(updatedTaxi.getNserie());
            taxi.setWilaya(updatedTaxi.getWilaya());
            return taxiRepository.save(taxi); // Save the updated carte
        }).orElse(null); // Return null if not found
    }
    @Transactional
    public Taxi addTaxi(Taxi taxi) {
        return taxiRepository.save(taxi);
    }

    @Transactional
    public void deleteTaxi(Long id) {
        taxiRepository.deleteById(id);
    }
}
