package dtumanager.backend.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dtumanager.backend.entities.Carte;
import dtumanager.backend.repositories.CarteRepository;
import java.util.List;

@Service
public class CarteService {
    @Autowired
    private CarteRepository carteRepository;

   
    @Transactional
    public List<Carte> getAllCartes() {
        return carteRepository.findAll();
    }

    @Transactional
    public Carte getCarteById(Long id) {
        return carteRepository.findById(id).orElse(null);
    }

    @Transactional
    public Carte updateCarte(Long id, Carte updatedCarte) {
        // Check if the carte exists
        return carteRepository.findById(id).map(carte -> {
            carte.setNom(updatedCarte.getNom());
            carte.setTelephone(updatedCarte.getTelephone());
            carte.setMatricule(updatedCarte.getMatricule());
            return carteRepository.save(carte); // Save the updated carte
        }).orElse(null); // Return null if not found
    }
    @Transactional
    public Carte addCarte(Carte carte) {
        return carteRepository.save(carte);
    }

    @Transactional
    public void deleteCarte(Long id) {
        carteRepository.deleteById(id);
    }

}
