package com.jhipster.service.impl;

import com.jhipster.service.PaymentService;
import com.jhipster.domain.Payment;
import com.jhipster.repository.PaymentRepository;
import com.jhipster.service.dto.PaymentDTO;
import com.jhipster.service.mapper.PaymentMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.actuate.audit.AuditEvent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import com.stripe.net.RequestOptions;
import com.stripe.model.Charge;
import com.stripe.exception.StripeException;

import com.jhipster.security.AuditEventPublisher;

/**
 * Service Implementation for managing Payment.
 */
@Service
public class PaymentServiceImpl implements PaymentService{
 	
    private final Logger log = LoggerFactory.getLogger(PaymentServiceImpl.class);

    @Inject
    private AuditEventPublisher auditPublisher;   
    
    @Inject
    private PaymentRepository paymentRepository;

    @Inject
    private PaymentMapper paymentMapper;

    /**
     * Save a payment.
     *
     * @param paymentDTO the entity to save
     * @return the persisted entity
     */
    public PaymentDTO save(PaymentDTO paymentDTO) {
	
    	RequestOptions requestOptions = RequestOptions.builder().setApiKey("sk_test_Mxfnl3XntyJuddbT5t9DrkBq").build();
        try {
            Charge charge = Charge.retrieve("ch_19Bka6KnHgK6bLInmGlxPgH5", requestOptions);
            log.info("Found a payment from Stripe: {}", charge.getAmount()/100);    
//        	String principal = tokenProvider.getUserNameFromToken(authToken);
        	AuditEvent event = new AuditEvent("SYSTEM", "STRIPE CALL"+charge.getAmount(), new HashMap<String, Object>());
        	auditPublisher.publish(event);
        } catch (StripeException e) {
            e.printStackTrace();
        	AuditEvent event = new AuditEvent("SYSTEM", "STRIPE CALL"+e.getMessage(), new HashMap<String, Object>());
        	auditPublisher.publish(event);
        }
    	
        log.debug("Request to save Payment : {}", paymentDTO);
        Payment payment = paymentMapper.paymentDTOToPayment(paymentDTO);
        payment = paymentRepository.save(payment);
        PaymentDTO result = paymentMapper.paymentToPaymentDTO(payment);
        return result;
    }

    /**
     *  Get all the payments.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    public Page<PaymentDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Payments");
        Page<Payment> result = paymentRepository.findAll(pageable);
        return result.map(payment -> paymentMapper.paymentToPaymentDTO(payment));
    }

    /**
     *  Get one payment by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    public PaymentDTO findOne(String id) {
        log.debug("Request to get Payment : {}", id);
        Payment payment = paymentRepository.findOne(id);
        PaymentDTO paymentDTO = paymentMapper.paymentToPaymentDTO(payment);
        return paymentDTO;
    }

    /**
     *  Delete the  payment by id.
     *
     *  @param id the id of the entity
     */
    public void delete(String id) {
        log.debug("Request to delete Payment : {}", id);
        paymentRepository.delete(id);
    }
}
