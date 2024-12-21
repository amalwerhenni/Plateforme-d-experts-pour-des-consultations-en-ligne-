package com.consultationplatform.services;

import com.consultationplatform.entities.ConsultationSlot;
import com.consultationplatform.repos.ConsultationSlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultationSlotService {

    @Autowired
    private ConsultationSlotRepository consultationSlotRepository;

    public ConsultationSlot saveSlot(ConsultationSlot slot) {
        return consultationSlotRepository.save(slot);
    }

    public List<ConsultationSlot> getAvailableSlots(Long expertId) {
        return consultationSlotRepository.findByExpertIdAndIsBookedFalse(expertId);
    }

    public void markSlotAsBooked(Long slotId) {
        ConsultationSlot slot = consultationSlotRepository.findById(slotId).orElseThrow(() -> 
            new RuntimeException("Slot not found"));
        slot.setBooked(true);
        consultationSlotRepository.save(slot);
    }
}
