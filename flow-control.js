function basicTeenager(age) {
    print(age);

    if (age >= 13 && age <= 19)
    {
      return "You are a teenager!"
    }
}

function teenager(age) {
  var isTeen = basicTeenager(age);

  if (isTeen === undefined)
    {
      return "You are not a teenager"
    }
    else {
      return isTeen;
    }

}

function ageChecker(age) {

    if (age < 13)
      {
        return "You are a kid";
      }
    else if (age > 19) {
      return "You are a grownup";
    }
    else {
      return "You are a teenager!";
    }

}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" :
  "You are not a teenager"
}

function switchAge(age) {
    switch (age) {
      case 13:
          return "You are a teenager";

      case 14:
          return "You are a teenager";

      case 15:
          return "You are a teenager";

      case 16:
          return "You are a teenager";

      case 17:
          return "You are a teenager";

      case 18:
          return "You are a teenager";

      case 19:
          return "You are a teenager";

      default:
        return "You have an age";

    }
}
