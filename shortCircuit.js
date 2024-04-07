function ticketKiosk(customerAge) {
  return customerAge <= 12
    ? 'Here is your free ticket'
    : customerAge <= 17
      ? 'Here is your discounted teen ticket'
      : customerAge <= 64
        ? 'Here is your adult ticket'
        : 'Here is your discounted senior ticket';
}

console.log(ticketKiosk(56));
