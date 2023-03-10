// Copyright (c) 2022 Ben Thomson All rights reserved
//
// Created by: Ben Thomson
// Created on: 03/09/2023
// This file contains the JS functions for index.html

function enterClicked () {
  // This function gets user's street name and street number and displays it back to user.

  // get street number from text field
  let streetNumber = parseInt(document.getElementById("street-number").value)
  // get street name from text field
  let streetName = document.getElementById("street-name").value

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "Your street number is " + streetNumber + " and your street name is " + streetName + "."
}
