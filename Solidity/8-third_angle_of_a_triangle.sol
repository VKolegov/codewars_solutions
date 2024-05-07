// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract ThirdAngle {
  function otherAngle(int angle1, int angle2) public pure returns (int) {
    return 180 - angle1 - angle2;
  }
}