import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


const CharacterDetail = () => {
    const [detail, setDetail] = useState(null)
    const { store } = useContext(Context)
    const { nature, id } = useParams()
    // console.log(useParams());


    const findItem = () => {

        let result = store[nature].find((item) => item._id == id)
        // console.log(result)
        setDetail(result)
    }

    useEffect(() => {
        findItem()
    }, [store.people])


    return (
        <div className="container">

            {
                nature === "people" ?
                    <div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img className="my-detailPhoto" src={`https://starwars-visualguide.com/assets/img/characters/${detail?.uid}.jpg`} />
                            </div>

                            <div className="col-12 col-md-6">
                                <h1 className="text-center fw-semibold" >{detail?.properties?.name}</h1>
                                <p className="text-center" >{detail?.description}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="container d-flex justify-content-between p-5" >
                                <div > <span className='fw-bold'>Name</span> <p>{detail?.properties?.name}</p> </div>
                                <div> <span className='fw-bold'>Birth Year</span> <p>{detail?.properties?.birth_year}</p> </div>
                                <div> <span className='fw-bold'>Gender</span> <p>{detail?.properties?.gender}</p> </div>
                                <div> <span className='fw-bold'>Height</span> <p>{detail?.properties?.height}</p> </div>
                                <div> <span className='fw-bold'>Skin</span> <p>{detail?.properties?.skin_color}</p> </div>
                                <div> <span className='fw-bold'>Eye</span> <p>{detail?.properties?.eye_color}</p> </div>
                            </div>
                        </div>
                    </div> :
                    nature === "planets" ?
                        <div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <img className="my-detailPhoto" src={`https://starwars-visualguide.com/assets/img/planets/${detail?.uid}.jpg`} />
                                </div>

                                <div className="col-12 col-md-6">
                                    <h1 className="text-center fw-semibold" >{detail?.properties?.name}</h1>
                                    <p className="text-center" >{detail?.description}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="container d-flex justify-content-between p-5" >
                                    <div > <span className='fw-bold'>Name</span> <p>{detail?.properties?.name}</p> </div>
                                    <div> <span className='fw-bold'>Population</span> <p>{detail?.properties?.population}</p> </div>
                                    <div> <span className='fw-bold'>climate</span> <p>{detail?.properties?.climate}</p> </div>

                                </div>
                            </div>
                        </div> :
                        <p>error</p>
            }
        </div>
    )
}



export default CharacterDetail;




{/* <div>
    <div className="row">
        <div className="col-12 col-md-6">
            <img src="https://placehold.co/800x600" />
        </div>

        <div className="col-12 col-md-6">
            <h1 className="text-center fw-semibold" >{detail?.properties?.name}</h1>
            <p className="text-center" >{detail?.description}</p>
        </div>
    </div>

    <div className="row">
        <div className="container d-flex justify-content-between p-5" >
            <div > <span className='fw-bold'>Name</span> <p>{detail?.properties?.name}</p> </div>
            <div> <span className='fw-bold'>Birth Year</span> <p>{detail?.properties?.birth_year}</p> </div>
            <div> <span className='fw-bold'>Gender</span> <p>{detail?.properties?.gender}</p> </div>
            <div> <span className='fw-bold'>Height</span> <p>{detail?.properties?.height}</p> </div>
            <div> <span className='fw-bold'>Skin</span> <p>{detail?.properties?.skin_color}</p> </div>
            <div> <span className='fw-bold'>Eye</span> <p>{detail?.properties?.eye_color}</p> </div>
        </div>
    </div>
</div> */}







{/* <div>
    <div className="row">
        <div className="col-12 col-md-6">
            <img src="https://placehold.co/800x600" />
        </div>

        <div className="col-12 col-md-6">
            <h1 className="text-center fw-semibold" >{detail?.properties?.name}</h1>
            <p className="text-center" >{detail?.description}</p>
        </div>
    </div>

    <div className="row">
        <div className="container d-flex justify-content-between p-5" >
            <div > <span className='fw-bold'>Name</span> <p>{detail?.properties?.name}</p> </div>
            <div> <span className='fw-bold'>Population</span> <p>{detail?.properties?.population}</p> </div>
            <div> <span className='fw-bold'>climate</span> <p>{detail?.properties?.climate}</p> </div>

        </div>
    </div>
</div>  */}