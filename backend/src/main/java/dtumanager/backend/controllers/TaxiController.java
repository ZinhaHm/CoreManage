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

import dtumanager.backend.entities.Taxi;
import dtumanager.backend.services.TaxiService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/taxis")
public class TaxiController {
    @Autowired
    private TaxiService taxiService;

    
    @GetMapping
    public ResponseEntity<List<Taxi>> getAllTaxis() {
        List<Taxi> taxis = taxiService.getAllTaxis();
        return ResponseEntity.ok(taxis);  // 200 OK with a list of cartes
    }

    @GetMapping("/{id}")
    public ResponseEntity<Taxi> getTaxiById(@PathVariable Long id) {
        Taxi taxi = taxiService.getTaxikById(id);
        if (taxi != null) {
            return ResponseEntity.ok(taxi);  // 200 OK if found
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // 404 Not Found if not found
        }
    }

    @PostMapping
    public ResponseEntity<Taxi> addCarte(@Valid @RequestBody Taxi taxi) {
        Taxi savedTaxi = taxiService.addTaxi(taxi);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTaxi);  // 201 Created when successful
    }

    @PutMapping("/{id}")
    public ResponseEntity<Taxi> updateTaxi(@PathVariable Long id, @Valid @RequestBody Taxi updatedTaxi) {
        Taxi updated = taxiService.updateTaxi(id, updatedTaxi);
        if (updated != null) {
            return ResponseEntity.ok(updated);  // 200 OK if updated
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // 404 Not Found if the entity to update was not found
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTaxi(@PathVariable Long id) {
        taxiService.deleteTaxi(id);
        return ResponseEntity.noContent().build();  // 204 No Content when deleted successfully
    }

}
