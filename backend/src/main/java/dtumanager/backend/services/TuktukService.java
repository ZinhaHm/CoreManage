package dtumanager.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import dtumanager.backend.entities.Tuktuk;
import dtumanager.backend.repositories.TuktukRepository;

@Service
public class TuktukService {

    @Autowired
    private TuktukRepository tuktukRepository;

    
    @Transactional
    public List<Tuktuk> getAllTuktukes() {
        return tuktukRepository.findAll();
    }

    @Transactional
    public Tuktuk getTuktukById(Long id) {
        return tuktukRepository.findById(id).orElse(null);
    }

    @Transactional
    public Tuktuk updateTuktuk(Long id, Tuktuk updatedTuktuk) {
        // Check if the carte exists
        return tuktukRepository.findById(id).map(tuktuk -> {
            tuktuk.setNom(updatedTuktuk.getNom());
            tuktuk.setTelephone(updatedTuktuk.getTelephone());
            tuktuk.setMatricule(updatedTuktuk.getMatricule());
            tuktuk.setNserie(updatedTuktuk.getNserie());
            tuktuk.setWilaya(updatedTuktuk.getWilaya());
            tuktuk.setLogo(updatedTuktuk.isLogo());
            return tuktukRepository.save(tuktuk); // Save the updated carte
        }).orElse(null); // Return null if not found
    }
    @Transactional
    public Tuktuk addTuktuk(Tuktuk tuktuk) {
        return tuktukRepository.save(tuktuk);
    }

    @Transactional
    public void deleteTuktuk(Long id) {
        tuktukRepository.deleteById(id);
    }

}
