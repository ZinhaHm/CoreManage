package dtumanager.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dtumanager.backend.entities.Garage;
import dtumanager.backend.repositories.GarageRepository;

@Service
public class GarageService {

    @Autowired
    private GarageRepository garageRepository;

        
    @Transactional
    public List<Garage> getAllGarages() {
        return garageRepository.findAll();
    }

    @Transactional
    public Garage getGaragekById(Long id) {
        return garageRepository.findById(id).orElse(null);
    }

    @Transactional
    public Garage updateGarage(Long id, Garage updatedGarage) {
        // Check if the carte exists
        return garageRepository.findById(id).map(garage-> {
            garage.setNomg(updatedGarage.getNomg());
            garage.setLigne(updatedGarage.getLigne());
            garage.setCode(updatedGarage.getCode());
            garage.setNvoitures(updatedGarage.getNvoitures());
            garage.setFederation(updatedGarage.getFederation());
            garage.setWilaya(updatedGarage.getWilaya());
            garage.setMoughata(updatedGarage.getMoughata());
            garage.setCommune(updatedGarage.getCommune());
            garage.setNomr(updatedGarage.getNomr());
            garage.setNnir(updatedGarage.getNnir());
            garage.setTelephoner(updatedGarage.getTelephoner());
            return garageRepository.save(garage); // Save the updated carte
        }).orElse(null); // Return null if not found
    }
    @Transactional
    public Garage addGarage(Garage garage) {
        return garageRepository.save(garage);
    }

    @Transactional
    public void deleteGarage(Long id) {
        garageRepository.deleteById(id);
    }
}
