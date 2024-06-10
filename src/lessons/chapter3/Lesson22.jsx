const Lesson22 = (props) => {
    // const obj = {
    //     name: 'Hồ Hoài Kiệt',
    //     address: 'Đà Nẵng',

    //     //Overwrite
    //     name: 'Kiệt Hồ Hoài',
    //     phone: "0934.979.641"
    // }
    // console.log("🚀CHECK  obj =>", obj)

    // #2
    // let object = {
    //     name: "ho hoai kiet",
    //     address: "thua thien hue",
    // }
    // console.log("🚀CHECK  object =>", object)


    // let objectCopy = { ...object, name: "David Ho", phone: "0935664313" }
    // console.log("🚀CHECK  objectCopy =>", objectCopy)

    // #3
    const person = {
        name: 'abc',
        address: {
            city: 'hn',
            country: 'vn'
        },
        job: {
            title: 'dev',
            detail: {
                position: 'boss',
                salary: '5k'
            }
        }
    }
    console.log("🚀CHECK  person =>", person)

    const personClone = {
        ...person, address: {
            ...person.address,
            city: "hcm",
        }
    }
    console.log("🚀CHECK  personClone =>", personClone)

    // modify directly
    // const clone = { ...person };
    // clone.name = 'update name' // ok
    // clone.address.city = 'hcm'; //2 level deep => not ok

    // spread syntax
    // const clone = {
    //     ...person,
    //     address: {
    //         ...person.address,
    //         city: 'hcm'
    //     }
    // }

    //   console.log(">>> check person: ", person, ' clone= ', clone)

    return (
        <div>
            Lesson 22!
        </div>
    )
}

export default Lesson22;