package com.consultationplatform.repos;

import com.consultationplatform.entities.Expert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpertRepository extends JpaRepository<Expert, Long> {
    // Vous pouvez définir des méthodes personnalisées ici, par exemple :
    Expert findByUsername(String username);
}
