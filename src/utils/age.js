function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  const age = today.getFullYear() - birthDate.getFullYear();

  return age;
}

export default getAge;
