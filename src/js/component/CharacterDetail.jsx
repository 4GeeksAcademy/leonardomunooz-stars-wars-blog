import React from  "react"



const CharacterDetail = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src="https://placehold.co/800x600"/>
                </div>

                <div className="col-12 col-md-6">
                    <h1 className="text-center fw-semibold" >Luke Skywalker</h1>
                    <p className="text-center" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>

            <div className="row">
            <div className="container d-flex" >
            <div > <span>Name</span> <p>Luke Skywalker</p> </div>
                <div> <span>Name</span> <p>Luke Skywalker</p> </div>
                <div> <span>Name</span> <p>Luke Skywalker</p> </div>
                <div> <span>Name</span> <p>Luke Skywalker</p> </div>
                <div> <span>Name</span> <p>Luke Skywalker</p> </div>
                <div> <span>Name</span> <p>Luke Skywalker</p> </div>
            </div>

            </div>
            <div className="row"></div>
        </div>
    )
}



export default CharacterDetail;