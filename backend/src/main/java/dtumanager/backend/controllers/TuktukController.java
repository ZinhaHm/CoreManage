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

import dtumanager.backend.entities.Tuktuk;
import dtumanager.backend.services.TuktukService;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/tuktuks")
public class TuktukController {
    
     @Autowired
    private TuktukService tuktukService;

    @GetMapping
    public ResponseEntity<List<Tuktuk>> getAllTuktuks() {
        List<Tuktuk> tuktuks = tuktukService.getAllTuktukes();
        return ResponseEntity.ok(tuktuks);  // 200 OK with a list of cartes
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tuktuk> getTuktukById(@PathVariable Long id) {
        Tuktuk tuktuk = tuktukService.getTuktukById(id);
        if (tuktuk != null) {
            return ResponseEntity.ok(tuktuk);  // 200 OK if found
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // 404 Not Found if not found
        }
    }

    @PostMapping
    public ResponseEntity<Tuktuk> addTuktuk(@Valid @RequestBody Tuktuk tuktuk) {
        Tuktuk savedTuktuk = tuktukService.addTuktuk(tuktuk);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTuktuk);  // 201 Created when successful
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tuktuk> updateTuktuk(@PathVariable Long id, @Valid @RequestBody Tuktuk updatedTuktuk) {
        Tuktuk updated = tuktukService.updateTuktuk(id, updatedTuktuk);
        if (updated != null) {
            return ResponseEntity.ok(updated);  // 200 OK if updated
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // 404 Not Found if the entity to update was not found
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTuktuk(@PathVariable Long id) {
        tuktukService.deleteTuktuk(id);
        return ResponseEntity.noContent().build();  // 204 No Content when deleted successfully
    }
}
