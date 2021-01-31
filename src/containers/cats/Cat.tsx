import React from "react";
import CatModel from "./CatModel";
import Image, {Shimmer} from "react-shimmer";

const Cat = ({cat}: { cat: CatModel }) => {
    return (
        <Image
            src={cat.url} fallback={<Shimmer width={250} height={250}/>}
            NativeImgProps={{
                style: {
                    width: "250px",
                    height: "250px",
                    margin: "0rem 0.5rem 1rem",
                    transition: "transform 1s",
                    boxShadow: "0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4)"
                },
                className: "gallery-image"
            }}
        />
    );
}

export default Cat;
