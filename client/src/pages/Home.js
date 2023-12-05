import Navbar from '../components/Navbar';
import About from '../components/About';
import Ourvalues from '../components/Ourvalues';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url('https://www.cbit.ac.in/wp-content/uploads/2019/01/ABOUT_TAB-1-1-scaled.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', // Set position to relative
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(64, 64, 64, 0.45)', // Set the overlay color with the desired opacity
    borderRadius: '2rem', // Match the border radius of the parent div
    color: 'white',
  };

  const buttonStyle = {
    border: '2px solid black',
    color: '#FAF6F0',
  };

  const textStyle = {
    fontFamily: 'Montserrat, sans-serif', // Set Montserrat as the font family
    color: 'white',
    opacity: '0.8',
  };

  return (
    <>
      <div className='px-4 md:px-28 lg:px-16 xl:px-32 2xl:px-48 space-y-8 bg-[#E9EBE7]'>
        <div
          className="relative bg-[#385529] min-h-[80vh] border border-black rounded-[2rem] p-6 md:p-14 text-white"
          style={backgroundImageStyle}
        >
          <div style={overlayStyle}></div>
          <div className='w-full md:w-1/2 space-y-6 relative z-10'>
            <h1 className='text-3xl md:text-5xl font-bold' style={textStyle}>
              Welcome to the Alumni network of CBIT
            </h1>
            {/* <p className='font-bold' style={textStyle}>
              Whether you graduated yesterday or decades ago, you are always part of the CBIT family
            </p> */}
          </div>

          <div className='flex flex-col md:flex-row md:space-x-6 relative z-10'>
            {/* <button className='border py-2 px-4 md:py-[0.5em] md:px-6 rounded-lg text-white font-thin mb-4 md:mb-0' style={buttonStyle}>
              Get started!
            </button> */}
           
          </div>
        </div>
      </div>

      <About />
      <Ourvalues />
     
    </>
  );
}

export default Home;
