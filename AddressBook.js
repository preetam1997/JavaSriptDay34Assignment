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
        //UC7 Ensuring No two contacts of the same name exists in the same addressBook
        if(this.contactList.filter(contact=>contact.firstName==newContact.firstName).reduce((count)=>count+=1,0)==0){
            this.contactList.push(newContact);
        }
        else{
            console.log("Already Exists");
        }
        }
}

//Creating New AddressBook
let add1 = new AddressBook("add1",new Array());
//Adding Contacts
//UC3 Ability To Add to Address Book Array
try {
    add1.addContact(new Contact(1,"add1","Pop","Qpr","India","Chaiwasa","Jharkhand","132 103","12 0123456789","abc@xyz.com"));
    add1.addContact(new Contact(2,"add1","Preetam","Qpr","India","Bhagalpur","Bihar","232 103","12 0123456789","abc@xyz.com"));
    add1.addContact(new Contact(3,"add1","Parasit","Qpr","India","kolkata","WestBengal","332 103","12 0123456789","abc@xyz.com"));
    add1.addContact(new Contact(4,"add1","Shivom","Qpr","India","Bhagalpur","Bihar","432 403","12 0123456789","abc@xyz.com"));

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
console.log("=================================");

//UC5 Delete By Name
//function to delete using name
function DeleteUsingName(addressBook,name){
    index = addressBook.contactList.findIndex(contact=>contact.firstName==name);
    addressBook.contactList.splice(index,1);
}
// function call
DeleteUsingName(add1,"Pop");
//displaying List
console.log(add1.contactList);
console.log("=================================");

//UC6 Ability To Find The Number Of Contacts in an AddressBook
//function to count the number of contacts in an addressBook
function getCount(addressBook){
    return addressBook.contactList.reduce((count)=>count+=1,0);
}
//displaying Count
console.log(getCount(add1));
console.log("=================================");

//UC8 Ability to search Person in a particular City or State
function searchPersonsByCityOrState(addressBook,...params){
    switch(params[0]){
        case "state":
            return addressBook.contactList.filter(contact=>contact.state==params[1]);
        case "city":
            return addressBook.contactList.filter(contact=>contact.city==params[1]);
    }
}
//function Call
let filteredArray = searchPersonsByCityOrState(add1,"state","Bihar");
//displaying filtered Array 
console.log(filteredArray);
console.log("=================================");

//UC9 Ability to view Persons by City or State
function viewPersonsByCityOrState(addressBook,...params){
    let nameToCityOrStateMap = new Map();
    switch(params[0]){
        case "state":
            for(let i = 0;i<addressBook.contactList.length;i++){
                temp = addressBook.contactList[i];
                if(nameToCityOrStateMap.has(temp.state)){
                    nameToCityOrStateMap.get(temp.state).push(temp.firstName);
                }
                else{
                    nameToCityOrStateMap.set(temp.state,[temp.firstName]);
                }
            }
            return nameToCityOrStateMap;

        case "city":
            for(let i = 0;i<addressBook.contactList.length;i++){
                temp = addressBook.contactList[i];
                if(nameToCityOrStateMap.has(temp.city)){
                    nameToCityOrStateMap.get(temp.city).push(temp.firstName);
                }
                else{
                    nameToCityOrStateMap.set(temp.city,[temp.firstName]);
                }
            }
            return nameToCityOrStateMap;
    }
}

//displaying Map
console.log(viewPersonsByCityOrState(add1,"state"));
console.log("=================================");

//UC10 Ability to get number of contact persons i.e. count by City or State
//function
function countByStateOrCity(...params){
    switch(params[1]){
        case "state":
            let trackingArr = new Array();
            return params[0].contactList.filter((contact)=>{
            if(!trackingArr.includes(contact.state)){
                trackingArr.push(contact.state);
                return true;
            }    
            else{
                return false;
            }
            }).map((contact)=>{
                return {key:contact.state,value:add1.contactList.filter(contact1=>contact1.state==contact.state).reduce((count)=>count+=1,0)};
            });

        case "city":
            let trackingArr1 = new Array();
            return params[0].contactList.filter((contact)=>{
            if(!trackingArr1.includes(contact.city)){
                trackingArr1.push(contact.city);
                return true;
            }    
            else{
                return false;
            }
            }).map((contact)=>{
                return {key:contact.city,value:add1.contactList.filter(contact1=>contact1.city==contact.city).reduce((count)=>count+=1,0)};
            });
            
    }
}

//displaying result
console.log(countByStateOrCity(add1,"city"));
console.log("=================================");

//UC11 Ability to sort the entries in the address book alphabetically by Person’s name
//function
function sortByName(addressBook){
    addressBook.contactList.sort((a,b)=>(a.firstName>b.firstName)?1:-1);
}
//function call
sortByName(add1);
//displaying result
add1.contactList.forEach(contact => {
    console.log(contact.toString());
});
console.log("=================================");

//UC12 Ability to sort the entries in the address book by City, State, or Zip
//function
function sortByParameter(addressBook,parameter){
    switch(parameter){
        case "city":
            addressBook.contactList.sort((a,b)=>(a.city>b.city)?1:-1);
            break;
        case "state":
            addressBook.contactList.sort((a,b)=>(a.state>b.state)?1:-1);
            break;
        case "zip":
            addressBook.contactList.sort((a,b)=>(a.zip>b.zip)?1:-1);
            break;
    }
}
//function call
sortByParameter(add1,"zip");
//displaying result
add1.contactList.forEach(contact => {
    console.log(contact.toString());
});
    
