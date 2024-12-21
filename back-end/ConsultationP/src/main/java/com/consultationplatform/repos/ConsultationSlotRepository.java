package com.consultationplatform.repos;
import com.consultationplatform.entities.ConsultationSlot;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface ConsultationSlotRepository extends JpaRepository<ConsultationSlot, Long> {
    List<ConsultationSlot> findByExpertIdAndIsBookedFalse(Long expertId);
}