package com.consultationplatform.controllers;

import com.consultationplatform.entities.Expert;
import com.consultationplatform.services.ExpertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/experts")
public class ExpertController {

    @Autowired
    private ExpertService expertService;

    // Endpoint pour enregistrer un nouvel expert
    @PostMapping("/register")
    public Expert registerExpert(@RequestBody Expert expert) {
        return  expertService.saveExpert(expert);
        
    }

    // Endpoint pour obtenir tous les experts
    @GetMapping
    public List<Expert> getAllExperts() {
        return expertService.getAllExperts();
    }

    // Endpoint pour obtenir un expert par son ID
    @GetMapping("/{id}")
    public Expert getExpertById(@PathVariable Long id) {
        return expertService.getExpertById(id);
    }

    // Endpoint pour supprimer un expert par son ID
    @DeleteMapping("/{id}")
    public void deleteExpert(@PathVariable Long id) {
        expertService.deleteExpert(id);
    }
}
