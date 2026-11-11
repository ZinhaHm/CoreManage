package dtumanager.backend.controllers;

import java.util.List;

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

import dtumanager.backend.entities.Garage;
import dtumanager.backend.services.GarageService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/garages")
public class GarageController {

    @Autowired
    private GarageService garageService;

    
    @GetMapping
    public ResponseEntity<List<Garage>> getAllGarages() {
        List<Garage> garages = garageService.getAllGarages();
        return ResponseEntity.ok(garages);  // 200 OK with a list of cartes
    }

    @GetMapping("/{id}")
    public ResponseEntity<Garage> getGarageById(@PathVariable Long id) {
        Garage garage = garageService.getGaragekById(id);
        if (garage != null) {
            return ResponseEntity.ok(garage);  // 200 OK if found
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // 404 Not Found if not found
        }
    }

    @PostMapping
    public ResponseEntity<Garage> addGarage(@Valid @RequestBody Garage garage) {
        Garage savedGarage = garageService.addGarage(garage);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedGarage);  // 201 Created when successful
    }

    @PutMapping("/{id}")
    public ResponseEntity<Garage> updateTaxi(@PathVariable Long id, @Valid @RequestBody Garage updatedGarage) {
        Garage updated = garageService.updateGarage(id, updatedGarage);
        if (updated != null) {
            return ResponseEntity.ok(updated);  // 200 OK if updated
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // 404 Not Found if the entity to update was not found
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGarage(@PathVariable Long id) {
        garageService.deleteGarage(id);
        return ResponseEntity.noContent().build();  // 204 No Content when deleted successfully
    }


}
