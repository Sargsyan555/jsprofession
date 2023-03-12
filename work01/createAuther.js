// const john = new CreateAuthor("John", "Doe", "Perfect book");
//
// {
//     name: "John";
//     surname: "Doe";
//     book: "Perfect book";
// }
function CreateAuthor(name, surname, book){
    this.name = name;
    this.surname = surname;
    this.book = book

}
const john = new CreateAuthor("John", "Doe", "Perfect book")
console.log(john)