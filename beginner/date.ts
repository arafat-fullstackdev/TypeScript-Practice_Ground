//?  date //
function getFormateDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2); // Manual padding
  const day = ("0" + now.getDate()).slice(-2); // Manual padding

  return `${year}-${month}-${day}`;
}

console.log(getFormateDate());
