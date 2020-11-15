//UC1 Ability to create a Address Book Contact
//Contact class 
class Contact{
    //constructor
    constructor(...params){
        this.contactId = params[0];
        this.addressBookId = params[1];
        this.firstName = params[2];
        this.lastName = params[3];
        this.address = params[4];
        this.city = params[5];
        this.state = params[6];
        this.zip = params[7];
        this.phoneNumber = params[8];
        this.email = params[9];
    }

    // getters and setters
    //UC2 Ability to ensure Valid Contacts are Added
    get firstName(){return this._firstName;}
    set firstName(firstName){
        let firstNameRegex = RegExp("^([A-Z]{1})([a-z]{2,})$");
        if(firstNameRegex.test(firstName)){
            this._firstName = firstName;
            }
            else throw "First Name Incorrect";
        }

    get lastName(){return this._lastName;}
    set lastName(lastName){ 
        let lastNameRegex = RegExp("^([A-Z]{1})([a-z]{2,})$");
        if(lastNameRegex.test(lastName)){
            this._lastName = lastName;
        }
        else throw "Last Name Incorrect";
    }

    get address(){return this._address;}
    set address(address){
        let addressRegex = RegExp("^([A-Za-z]{4,})$");
        if(addressRegex.test(address)){
            this._address = address;
        }
        else throw "Address Incorrect";
    }

    get city(){return this._city;}
    set city(city){
        let cityRegex = RegExp("^([A-Za-z]{4,})$");
        if(cityRegex.test(city)){
            this._city = city;
        }
        else throw "City Name Incorrect";
    }

    get state(){return this._state;}
    set state(state){
        let stateRegex = RegExp("^([A-Za-z]{4,})$");
        if(stateRegex.test(state)){
            this._state = state;
        }
        else throw "State Name Incorrect";
    }

    get zip(){return this._zip;}
    set zip(zip){
        let zipRegex = RegExp("^([1-9]{1})([0-9]{2})(\\s)([0-9]{3})$");
        if(zipRegex.test(zip)){
            this._zip = zip;
        }
        else throw "Zip-Code Incorrect";
    }

    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber){
        let phoneNumberRegex = RegExp("^([0-9]{2})(\\s)([0-9]{10})$");
        if(phoneNumberRegex.test(phoneNumber)){
            this._phoneNumber = phoneNumber;
        }
        else throw "Phone Number Incorrect";
    }

    get email(){return this._email;}
    set email(email){
        let emailRegex = RegExp("^(?!.*\\.{2})([a-zA-Z0-9]+)([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]?)([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)@([a-z A-Z]{2,20}).([a-z A-Z]{2,4})(.[a-z]{2,8})?$");
        if(emailRegex.test(email)){
            this._email = email;
        }
        else throw "Email Incorrect";
    }

    //toString method
    toString(){
        return "id = "+this.contactId+", "+"firstName = "+this.firstName+", "+"lastName = "+this.lastName+", "+"address = "+this.address+", "+"city = "+this.city+", "+"state = "+this.state+", "+"zip = "+this.zip+", "+"phoneNumber = "+this.phoneNumber+", "+"email = "+this.email;
    }
}
// creating new Contact Object
try {
    new Contact(1,"add1","Pop","Qpr","eqrt","Sqer","Tury","132 103","12 0123456789","abc@xyz.com");
} catch (error) {
    console.error(error);
}
//AddressBook Class
class AddressBook{
    constructor(...params){
        this.addressBookId = params[0];
        this.contactList = params[1];
    }
    //addContact Method
    addContact(newContact){
            this.contactList.push(newContact);
        }
}

//Creating New AddressBook
let add1 = new AddressBook("add1",new Array());
//Adding Contacts
//UC3 Ability To Add to Address Book Array
try {
    add1.addContact(new Contact(1,"add1","Pop","Qpr","India","Chaiwasa","Jharkhand","132 103","12 0123456789","abc@xyz.com"));
    add1.addContact(new Contact(2,"add1","Preetam","Qpr","India","Bhagalpur","Bihar","132 103","12 0123456789","abc@xyz.com"));
    add1.addContact(new Contact(3,"add1","Parasit","Qpr","India","kolkata","WestBengal","132 103","12 0123456789","abc@xyz.com"));

} catch (error) {
    console.error(error);
}
//Displaying Contact Array
console.log(add1.contactList);
console.log("=================================");

//UC4 Ability to find existing contact person using their name and edit it
//function to find and edit using name
function findAndEditUsingName(addressBook,name,newName){
    addressBook.contactList.filter(contact=>contact.firstName==name).forEach(contact => {
        contact.firstName = newName;
    });
}

//calling the function
try {
    findAndEditUsingName(add1,"Pop","Me");
} catch (error) {
    console.error(error);
}
//Displaying List
console.log(add1.contactList);

