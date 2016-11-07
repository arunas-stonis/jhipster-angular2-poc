package com.jhipster.repository;

import com.jhipster.domain.Order;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Order entity.
 */
@SuppressWarnings("unused")
public interface OrderRepository extends MongoRepository<Order,String> {

}
