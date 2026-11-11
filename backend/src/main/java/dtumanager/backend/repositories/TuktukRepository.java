package dtumanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dtumanager.backend.entities.Tuktuk;

public interface TuktukRepository extends JpaRepository<Tuktuk, Long> {
}
