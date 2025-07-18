// src/app/payment-form/utils.ts
export function formatCardNumber(value: string): string {
    if (!value) {
        return '#### #### #### ####';
    }
  // Agrupa los números en bloques de 4
    return (value.match(/.{1,4}/g) || []).join(' ') || '#### #### #### ####';
}

export function formatExpiryDate(value: string): string {
    return value || '##';
}