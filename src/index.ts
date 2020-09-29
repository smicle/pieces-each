/**
 * Recreate the array into n chunks
 * @param array Original array
 * @param n Number to put together as a lump
 * @return Remade array
 */
const PiecesEach = <T>(array: T[], n: number): T[][] => {
  const l = Array(Math.ceil(array.length / n))
  return Array.from(l, (_, i) => i).map((_, i) => array.slice(i * n, (i + 1) * n))
}

export default PiecesEach
