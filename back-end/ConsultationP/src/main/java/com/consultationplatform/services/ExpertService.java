package com.consultationplatform.services;

import com.consultationplatform.entities.Expert;
import com.consultationplatform.repos.ExpertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpertService {

    @Autowired
    private ExpertRepository expertRepository;

    // Méthode pour sauvegarder un expert
    public Expert saveExpert(Expert expert) {
        return expertRepository.save(expert);
    }

    // Méthode pour obtenir tous les experts
    public List<Expert> getAllExperts() {
        return expertRepository.findAll();
    }

    // Méthode pour trouver un expert par son ID
    public Expert getExpertById(Long id) {
        return expertRepository.findById(id).orElse(null);
    }

    // Méthode pour supprimer un expert
    public void deleteExpert(Long id) {
        expertRepository.deleteById(id);
    }
}
