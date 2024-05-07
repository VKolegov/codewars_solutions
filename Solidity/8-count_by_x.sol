// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract CountByX {

  function countBy(int x, int n) public pure returns (int[] memory) {
    int[] memory z = new int[](uint(n));
    
    int i = 0;
    
    for (i = 0; i < n; i++) {
      z[uint(i)] = x * (i+1);
    }
    
    return z;
  }
}