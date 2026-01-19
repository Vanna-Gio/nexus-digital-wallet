export const formatCurrency = (amount: number, currency: "USD" | "KHR"): string => {
    const absAmount = Math.abs(amount);

    if (currency === "USD") {
        return `$ ${absAmount.toFixed(2)}`;
    }else {
        // KHR doesn't use decimals usually
        return `${absAmount.toLocaleString("en-US")} ៛`;
    }
}