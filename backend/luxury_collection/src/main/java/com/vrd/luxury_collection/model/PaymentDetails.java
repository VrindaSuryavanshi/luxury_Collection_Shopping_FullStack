package com.vrd.luxury_collection.model;

public class PaymentDetails {

    private String paymentMethod;
    private String status;
    private String paymentId;
    private String razorpayPaymentLinkId;
    private String razorpayPaymentLinkReferenceId;
    private String razorpayPaymentLinkStatus;
    private String razorpayPaymentId;

    public PaymentDetails() {
    }

    public PaymentDetails(String paymentId, String paymentMethod, String razorpayPaymentId, String razorpayPaymentLinkId, String razorpayPaymentLinkReferenceId, String razorpayPaymentLinkStatus, String status) {
        this.paymentId = paymentId;
        this.paymentMethod = paymentMethod;
        this.razorpayPaymentId = razorpayPaymentId;
        this.razorpayPaymentLinkId = razorpayPaymentLinkId;
        this.razorpayPaymentLinkReferenceId = razorpayPaymentLinkReferenceId;
        this.razorpayPaymentLinkStatus = razorpayPaymentLinkStatus;
        this.status = status;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getRazorpayPaymentId() {
        return razorpayPaymentId;
    }

    public void setRazorpayPaymentId(String razorpayPaymentId) {
        this.razorpayPaymentId = razorpayPaymentId;
    }

    public String getRazorpayPaymentLinkId() {
        return razorpayPaymentLinkId;
    }

    public void setRazorpayPaymentLinkId(String razorpayPaymentLinkId) {
        this.razorpayPaymentLinkId = razorpayPaymentLinkId;
    }

    public String getRazorpayPaymentLinkReferenceId() {
        return razorpayPaymentLinkReferenceId;
    }

    public void setRazorpayPaymentLinkReferenceId(String razorpayPaymentLinkReferenceId) {
        this.razorpayPaymentLinkReferenceId = razorpayPaymentLinkReferenceId;
    }

    public String getRazorpayPaymentLinkStatus() {
        return razorpayPaymentLinkStatus;
    }

    public void setRazorpayPaymentLinkStatus(String razorpayPaymentLinkStatus) {
        this.razorpayPaymentLinkStatus = razorpayPaymentLinkStatus;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
