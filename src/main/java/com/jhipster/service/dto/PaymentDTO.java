package com.jhipster.service.dto;

import java.time.ZonedDateTime;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;


/**
 * A DTO for the Payment entity.
 */
public class PaymentDTO implements Serializable {

    private String id;

    @NotNull
    private Long amount;

    @NotNull
    private ZonedDateTime date;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }
    public ZonedDateTime getDate() {
        return date;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        PaymentDTO paymentDTO = (PaymentDTO) o;

        if ( ! Objects.equals(id, paymentDTO.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "PaymentDTO{" +
            "id=" + id +
            ", amount='" + amount + "'" +
            ", date='" + date + "'" +
            '}';
    }
}
