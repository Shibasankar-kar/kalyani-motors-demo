import SliderData from './SliderData'
const ImageSlider = () => {
    return(
        <>
            {
                SliderData.map((data)=>{
                    // console.log(data)
                    return (
                        <div key={data.id}>
                            <img src={data.image} alt="image" />
                        </div>
                    );
                })
            }
        </>
    )
};

export default ImageSlider;
