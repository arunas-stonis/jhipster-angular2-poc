package com.jhipster.repository;

import com.jhipster.domain.Payment;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Payment entity.
 */
@SuppressWarnings("unused")
public interface PaymentRepository extends MongoRepository<Payment,String> {

}
