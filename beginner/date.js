//?  date //
function getFormateDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = ("0" + (now.getMonth() + 1)).slice(-2); // Manual padding
    var day = ("0" + now.getDate()).slice(-2); // Manual padding
    return "".concat(year, "-").concat(month, "-").concat(day);
}
console.log(getFormateDate());
