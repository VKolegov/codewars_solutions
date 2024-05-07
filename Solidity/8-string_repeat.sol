// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Repeater {
  function multiply(uint8 repeat, string memory pattern) public pure returns (string memory) {
    if (repeat == 1) {
      return pattern;
    }
    
    if (repeat == 0) {
      return "";
    }
  
    bytes memory bPattern = bytes(pattern);
    
    if (bPattern.length == 0) {
      return "";
    }
    
    bytes memory bResult = new bytes(bPattern.length * repeat);
    
    uint offset = 0;
    
    for(uint i = 0; i < bResult.length; i++) {
      if (i == offset + bPattern.length) {
        offset += bPattern.length;
      }
      
      bResult[i] = bPattern[i - offset];
    }
    
    return string(bResult);
  }
}