function validateNumber(input) {
    // حذف أي حرف غير رقمي
    input.value = input.value.replace(/[^0-9]/g, '');  
  }
  