import gallerylogo1 from '../../assets/images/gallerylogo1.svg';
import gallerylogo2 from '../../assets/images/gallerylogo2.svg';
import gallerylogo3 from '../../assets/images/gallerylogo3.svg';
import gallerylogo4 from '../../assets/images/gallerylogo4.svg';
import gallerylogo5 from '../../assets/images/gallerylogo5.svg';

function Gallery() {
    return (
        <section className='logo-gallery'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h2 className='main-title'>TRUSTED BY startups and large enterprises</h2>
                <div className='gallery'>
                    <img src={gallerylogo1} alt='gallerylogo1' />
                    <img src={gallerylogo2} alt='gallerylogo2' />
                    <img src={gallerylogo3} alt='gallerylogo3' />
                    <img src={gallerylogo4} alt='gallerylogo4' />
                    <img src={gallerylogo5} alt='gallerylogo5' />
                </div>
                </div>
            </div>
            </div>
        </section>

    );
}

export default Gallery;