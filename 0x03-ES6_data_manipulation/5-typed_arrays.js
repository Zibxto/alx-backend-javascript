export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const z = new Int8Array(buffer);
  if (position in z) {
    z[position] = value;
  } else {
    throw new Error('Position outside range');
  }

  return buffer;
}
