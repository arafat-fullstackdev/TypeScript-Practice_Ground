//?  date //
const getFormateDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padEnd(2, '0');
    const day = String(now.getDate()).padEnd(2, '0');

    return `${year}-${month}-${day}`;
}

console.log(getFormateDate());