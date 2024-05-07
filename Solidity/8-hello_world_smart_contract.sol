// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract HelloWorld {
  string greeting = "Hello World!";
  
  function setGreeting(string memory newGreeting) public {
    greeting = newGreeting;
  }
  
  function greet() public view returns (string memory) {
    return greeting;
  }
}