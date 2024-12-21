package com.consultationplatform.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.consultationplatform.entities.User;
import com.consultationplatform.services.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * Endpoint pour enregistrer un nouvel utilisateur.
     * @param user Données utilisateur envoyées dans la requête.
     * @return L'utilisateur sauvegardé ou un message d'erreur.
     */
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User savedUser = userService.saveUser(user);
            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Erreur lors de l'enregistrement de l'utilisateur : " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Endpoint pour récupérer tous les utilisateurs.
     * @return Liste des utilisateurs.
     */
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    /**
     * Endpoint pour récupérer un utilisateur spécifique par son ID.
     * @param id ID de l'utilisateur.
     * @return L'utilisateur correspondant ou un message d'erreur.
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>("Utilisateur introuvable avec l'ID : " + id, HttpStatus.NOT_FOUND);
    }

    /**
     * Endpoint pour supprimer un utilisateur par son ID.
     * @param id ID de l'utilisateur à supprimer.
     * @return Message de succès ou d'erreur.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        try {
            userService.deleteUserById(id);
            return new ResponseEntity<>("Utilisateur supprimé avec succès.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erreur lors de la suppression de l'utilisateur : " + e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Endpoint pour mettre à jour un utilisateur existant.
     * @param id ID de l'utilisateur à mettre à jour.
     * @param user Données utilisateur mises à jour.
     * @return L'utilisateur mis à jour ou un message d'erreur.
     */
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User user) {
        try {
            User updatedUser = userService.updateUser(id, user);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erreur lors de la mise à jour de l'utilisateur : " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
