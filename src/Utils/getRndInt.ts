// this function returns a random integer between min and max
export default function getRndInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
