export default function validateName(name) {
  const re = /^[a-z\s]{1,}$/i;
  return re.test(name);
}
