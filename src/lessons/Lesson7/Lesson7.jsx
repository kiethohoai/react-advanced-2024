const Lesson7 = (props) => {
    // #1
    function myFunc() {
        console.log("#1 This is a Traditional Function");
    }
    myFunc();

    // #2
    let a = (function () {
        console.log("#2 This is An Anonymous Function!");
    })
    a();

    // #3
    (function () {
        console.log("#3 This is An Anonymous Function!");
    })();

    // #4
    setTimeout((function () {
        console.log("#4 This is An Anonymous Function!");
    }), 1000);

    // #5
    (() => {
        console.log("#5 Arrow Function");
    })();

    let c = () => {
        console.log("#6 Final Function with Arrow Func & Anonymous Func");
    }
    c();

    return (
        <div style={{ padding: "50px" }}>
            <h3>Lesson 7 Anonymous Function:</h3>
        </div>
    )
}

export default Lesson7;