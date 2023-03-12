/*
1) գրեք Book constructor, որի էկզեմպլյառները կունենան author և title property-ներ, ու getTitle ու getAuthor մեթոդները,
// որոնք կվերադարձնեն author և title property-ները այս տեսքով ՝ 'Title: ....', 'Author: ...': Օրինակ՝
//
// Harry Potter գիրքը ստեղծենք HP անունով
//
    HP.title => "Harry Potter"
HP.author => "J.K. Rowling"
HP.getTitle() => "Title: Harry Potter"
HP.getAuthor() => "Author: J.K. Rowling"
*//*
1 ստեղծել ֆունկցիա
2 ֆունկցիայի իմաստն է վերադարձնել գրքի մասին անհրաժեշտ տեղեկատվությունը, տալ proprtine
3 ֆունկցիան պետք է ունենա գրողի ու վերնագիրի մասին տեղեկատվություն

*/
function Book(author, titel){
    this.author = author,
    this.titel = titel,
    this.getTitel = function (){
        return `Titel: ${this.titel}`
    }
    this.getAuthor = function (){
        return `Author: ${this.author}`
    }

}
const HP = new Book('J. K. Rowling','Harry Potter')
console.log(HP.getAuthor())