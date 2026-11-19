function calculate_delivery_cost(city, weightKg) {
    const baseRate = city === "Ivano-Frankivsk" ? 50.0 : 110.0;
    return baseRate + (weightKg * 15.0);
}

function process_standard_invoice(amount, city, weightKg, taxRate = 0.20) {
    const delivery = calculate_delivery_cost(city, weightKg);
    const total = (amount * (1 + taxRate)) + delivery;
    return { status: "PROCESSED", total: Number(total.toFixed(2)) };
}

function process_tax_exempt_invoice(amount, city, weightKg) {
    const total = amount + calculate_delivery_cost(city, weightKg);
    return { status: "TAX_EXEMPT", total: Number(total.toFixed(2)) };
}

module.exports = {
    calculate_delivery_cost,
    process_standard_invoice,
    process_tax_exempt_invoice
};
