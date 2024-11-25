function maxOfThree(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  }

  if (y >= x && y >= z) {
    return y;
  } 

  if (z >= x && z >= y) {
    return z;
  }
  
}

export default maxOfThree;
