// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function past(int h, int m, int s) public pure returns (int) {
    return (((h * 60 + m) * 60 + s)) * 1000;
  }
}