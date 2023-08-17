export default function createAddress(address) {
  return (
    address.addressLine1 +
    ', ' +
    address.addressLine2 +
    ', ' +
    address.pincode +
    ', ' +
    address.city +
    ', ' +
    address.state +
    ', ' +
    address.country
  );
}
