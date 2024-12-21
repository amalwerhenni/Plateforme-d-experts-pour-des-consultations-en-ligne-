package com.consultationplatform.controllers;

import com.consultationplatform.entities.ConsultationSlot;
import com.consultationplatform.services.ConsultationSlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/slots")
public class ConsultationSlotController {

    @Autowired
    private ConsultationSlotService consultationSlotService;

    @PostMapping("/save")
    public ConsultationSlot saveSlot(@RequestBody ConsultationSlot slot) {
        return consultationSlotService.saveSlot(slot);
    }

    @GetMapping("/available/{expertId}")
    public List<ConsultationSlot> getAvailableSlots(@PathVariable Long expertId) {
        return consultationSlotService.getAvailableSlots(expertId);
    }

    @PutMapping("/book/{slotId}")
    public String markSlotAsBooked(@PathVariable Long slotId) {
        consultationSlotService.markSlotAsBooked(slotId);
        return "Slot marked as booked successfully.";
    }
}
