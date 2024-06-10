const Lesson21 = (props) => {

    // let counter = 1;
    // let copiedCounter = counter;
    // copiedCounter = 2;

    // console.log(" counter = ", counter, " and copiedCounter = ", copiedCounter)


    let person = {
        firstName: 'HO HOAI',
        lastName: 'KIET'
    };

    //
    // let copiedPerson = person;


    // copiedPerson.firstName = 'Ho Hoai';
    // console.log("🚀CHECK  file: Lesson21.jsx:16  copiedPerson =", copiedPerson)
    // console.log(">>> check person: ", person);


    let personCopy = { ...person }
    personCopy.firstName = "David Ho"
    personCopy.lastName = "Hoai Kiet"

    console.log("🚀CHECK  file: Lesson21.jsx:14  person =", person)
    console.log("🚀CHECK  file: Lesson21.jsx:24  personCopy =", personCopy)




    return (
        <div>
            Lesson 21:  Shallow copy và Deep copy
        </div>
    )
}

export default Lesson21;