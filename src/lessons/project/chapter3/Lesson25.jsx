import _ from "lodash"

const Lesson25 = (props) => {
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
    const personClone = _.cloneDeep(person)
    personClone.job.title = "Software Engineer"
    personClone.job.detail.salary = "10K"
    console.log("🚀CHECK  personClone =>", personClone)

    return (
        <div>
            Lesson 25;
        </div>
    )
}

export default Lesson25;