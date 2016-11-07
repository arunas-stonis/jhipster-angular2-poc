package com.jhipster.service;

import com.jhipster.service.dto.OrderDTO;

import java.util.LinkedList;
import java.util.List;

/**
 * Service Interface for managing Order.
 */
public interface OrderService {

    /**
     * Save a order.
     *
     * @param orderDTO the entity to save
     * @return the persisted entity
     */
    OrderDTO save(OrderDTO orderDTO);

    /**
     *  Get all the orders.
     *  
     *  @return the list of entities
     */
    List<OrderDTO> findAll();

    /**
     *  Get the "id" order.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    OrderDTO findOne(String id);

    /**
     *  Delete the "id" order.
     *
     *  @param id the id of the entity
     */
    void delete(String id);
}
