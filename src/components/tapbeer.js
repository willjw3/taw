import React from "react";
import Img from "gatsby-image";
import "../styles/tapbeer.scss";

const TapBeer = ({image, name, jname, brewery, location, style, ibu, abv, half, pint, stem}) => {
    let price = []
    console.log(half)
    if (stem) {
        price.push(<p>Stem: ¥{pint}</p>)
    } else {
        price.push(<p>Half: ¥{half}, Pint: ¥{pint}</p>)
    }
    return (
        <>
            <div className="tapbeer">
                <div className="tapbeer-top">
                    <Img fluid={image.childImageSharp.fluid} style={{width: "280px"}} />
                    <div className="tapbeer-top-name">
                        <p>{name}</p>
                        <p>{jname}</p>
                    </div>
                </div>
                <div className="tapbeer-center">
                    <div className="tapbeer-center-origin">
                        <p>{brewery}</p>
                        <p>{location}</p>
                    </div>
                    <div className="tapbeer-center-details">
                        <p>Style: {style}</p>
                        <p>ABV: {abv}%</p>
                        {price}
                    </div>   
                </div>
                
            </div>
        </>
    );
}

export default TapBeer;