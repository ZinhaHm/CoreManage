package dtumanager.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
//import javax.validation.Valid;
import dtumanager.backend.entities.Carte;
import dtumanager.backend.services.CarteService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/cartes")
public class CarteController {

     @Autowired
    private CarteService carteService;

    @GetMapping
    public ResponseEntity<List<Carte>> getAllCartes() {
        List<Carte> cartes = carteService.getAllCartes();
        return ResponseEntity.ok(cartes);  // 200 OK with a list of cartes
    }

    @GetMapping("/{id}")
    public ResponseEntity<Carte> getCarteById(@PathVariable Long id) {
        Carte carte = carteService.getCarteById(id);
        if (carte != null) {
            return ResponseEntity.ok(carte);  // 200 OK if found
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // 404 Not Found if not found
        }
    }

    @PostMapping
    public ResponseEntity<Carte> addCarte(@Valid @RequestBody Carte carte) {
        Carte savedCarte = carteService.addCarte(carte);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCarte);  // 201 Created when successful
    }

    @PutMapping("/{id}")
    public ResponseEntity<Carte> updateCarte(@PathVariable Long id, @Valid @RequestBody Carte updatedCarte) {
        Carte updated = carteService.updateCarte(id, updatedCarte);
        if (updated != null) {
            return ResponseEntity.ok(updated);  // 200 OK if updated
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // 404 Not Found if the entity to update was not found
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCarte(@PathVariable Long id) {
        carteService.deleteCarte(id);
        return ResponseEntity.noContent().build();  // 204 No Content when deleted successfully
    }
}