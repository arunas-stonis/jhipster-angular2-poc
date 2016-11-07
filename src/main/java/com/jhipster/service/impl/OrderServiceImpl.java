package com.jhipster.service.impl;

import com.jhipster.service.OrderService;
import com.jhipster.domain.Order;
import com.jhipster.repository.OrderRepository;
import com.jhipster.service.dto.OrderDTO;
import com.jhipster.service.mapper.OrderMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing Order.
 */
@Service
public class OrderServiceImpl implements OrderService{

    private final Logger log = LoggerFactory.getLogger(OrderServiceImpl.class);
    
    @Inject
    private OrderRepository orderRepository;

    @Inject
    private OrderMapper orderMapper;

    /**
     * Save a order.
     *
     * @param orderDTO the entity to save
     * @return the persisted entity
     */
    public OrderDTO save(OrderDTO orderDTO) {
        log.debug("Request to save Order : {}", orderDTO);
        Order order = orderMapper.orderDTOToOrder(orderDTO);
        order = orderRepository.save(order);
        OrderDTO result = orderMapper.orderToOrderDTO(order);
        return result;
    }

    /**
     *  Get all the orders.
     *  
     *  @return the list of entities
     */
    public List<OrderDTO> findAll() {
        log.debug("Request to get all Orders");
        List<OrderDTO> result = orderRepository.findAll().stream()
            .map(orderMapper::orderToOrderDTO)
            .collect(Collectors.toCollection(LinkedList::new));

        return result;
    }

    /**
     *  Get one order by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    public OrderDTO findOne(String id) {
        log.debug("Request to get Order : {}", id);
        Order order = orderRepository.findOne(id);
        OrderDTO orderDTO = orderMapper.orderToOrderDTO(order);
        return orderDTO;
    }

    /**
     *  Delete the  order by id.
     *
     *  @param id the id of the entity
     */
    public void delete(String id) {
        log.debug("Request to delete Order : {}", id);
        orderRepository.delete(id);
    }
}
